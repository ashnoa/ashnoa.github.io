import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { appIds } from "./routes.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, "../dist");

const SITE_URL = "https://ashnoa.com";

const routes = [
  { path: "/", priority: "1.0", changefreq: "monthly" },
  { path: "/apps", priority: "0.8", changefreq: "monthly" },
  { path: "/about", priority: "0.6", changefreq: "monthly" },
  // App detail pages
  ...appIds.map((id) => ({
    path: `/${id}`,
    priority: "0.7",
    changefreq: "monthly",
  })),
  // Legal pages
  ...appIds.flatMap((id) => [
    { path: `/${id}/privacy-policy`, priority: "0.3", changefreq: "yearly" },
    { path: `/${id}/terms-of-use`, priority: "0.3", changefreq: "yearly" },
    { path: `/${id}/terms-of-sale`, priority: "0.3", changefreq: "yearly" },
  ]),
];

const today = new Date().toISOString().split("T")[0];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${SITE_URL}${route.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>`;

fs.writeFileSync(path.join(distDir, "sitemap.xml"), sitemap);
console.log(`Generated sitemap.xml with ${routes.length} URLs`);
