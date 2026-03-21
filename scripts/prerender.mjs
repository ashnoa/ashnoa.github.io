import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, "../dist");

const routes = [
  "/",
  "/apps",
  "/about",
  "/olel",
  "/olel/privacy-policy",
  "/olel/terms-of-use",
  "/olel/terms-of-sale",
  "/zosho",
  "/zosho/privacy-policy",
  "/zosho/terms-of-use",
  "/zosho/terms-of-sale",
  "/ontape",
  "/ontape/privacy-policy",
  "/ontape/terms-of-use",
  "/ontape/terms-of-sale",
  "/cashcrew",
  "/cashcrew/privacy-policy",
  "/cashcrew/terms-of-use",
  "/cashcrew/terms-of-sale",
  "/barnal",
  "/barnal/privacy-policy",
  "/barnal/terms-of-use",
  "/barnal/terms-of-sale",
];

const PORT = 4173;

const MIME_TYPES = {
  ".html": "text/html",
  ".js": "application/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".txt": "text/plain",
  ".xml": "text/xml",
};

function startServer() {
  return new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      const url = new URL(req.url, `http://localhost:${PORT}`);
      let filePath = path.join(distDir, url.pathname);

      // Try exact file, then index.html in directory, then fallback to root index.html (SPA)
      if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
        const indexPath = path.join(filePath, "index.html");
        if (fs.existsSync(indexPath)) {
          filePath = indexPath;
        } else {
          filePath = path.join(distDir, "index.html");
        }
      }

      const ext = path.extname(filePath);
      const contentType = MIME_TYPES[ext] || "application/octet-stream";

      try {
        const content = fs.readFileSync(filePath);
        res.writeHead(200, { "Content-Type": contentType });
        res.end(content);
      } catch {
        res.writeHead(404);
        res.end("Not Found");
      }
    });

    server.listen(PORT, () => {
      resolve(server);
    });
  });
}

async function prerender() {
  console.log("Starting local server...");
  const server = await startServer();

  console.log("Launching browser...");
  const browser = await puppeteer.launch({ headless: true });

  try {
    for (const route of routes) {
      console.log(`Prerendering: ${route}`);
      const page = await browser.newPage();
      // Block external requests (fonts, analytics) to speed up prerendering
      await page.setRequestInterception(true);
      page.on("request", (req) => {
        const url = req.url();
        if (
          url.startsWith(`http://localhost:${PORT}`) ||
          url.startsWith("data:")
        ) {
          req.continue();
        } else {
          req.abort();
        }
      });

      await page.goto(`http://localhost:${PORT}${route}`, {
        waitUntil: "networkidle0",
        timeout: 30000,
      });

      let html = await page.content();
      // page.content() already includes <!DOCTYPE html>, avoid duplication
      html = html.replace(/^<!DOCTYPE html>\s*/i, "");

      // Determine output path
      const outputPath =
        route === "/"
          ? path.join(distDir, "index.html")
          : path.join(distDir, route, "index.html");

      // Ensure directory exists
      fs.mkdirSync(path.dirname(outputPath), { recursive: true });
      fs.writeFileSync(outputPath, `<!DOCTYPE html>\n${html}`);

      await page.close();
    }

    // Copy index.html as 404.html fallback
    const indexHtml = fs.readFileSync(
      path.join(distDir, "index.html"),
      "utf-8",
    );
    fs.writeFileSync(path.join(distDir, "404.html"), indexHtml);

    console.log("Prerendering complete!");
  } finally {
    await browser.close();
    server.close();
  }
}

prerender().catch((err) => {
  console.error("Prerendering failed:", err);
  process.exit(1);
});
