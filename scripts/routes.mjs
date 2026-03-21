import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Extract app IDs from src/data/apps.ts
const appsFile = fs.readFileSync(
  path.resolve(__dirname, "../src/data/apps.ts"),
  "utf-8",
);
export const appIds = [...appsFile.matchAll(/id:\s*"([^"]+)"/g)].map(
  (m) => m[1],
);

const staticRoutes = ["/", "/apps", "/about"];

const appRoutes = appIds.flatMap((id) => [
  `/${id}`,
  `/${id}/privacy-policy`,
  `/${id}/terms-of-use`,
  `/${id}/terms-of-sale`,
]);

export const allRoutes = [...staticRoutes, ...appRoutes];
