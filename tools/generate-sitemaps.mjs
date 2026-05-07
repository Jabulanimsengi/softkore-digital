import fs from "node:fs";
import { spawnSync } from "node:child_process";

const scripts = [
  "tools/expand-industries.mjs",
  "tools/generate-location-pages.mjs",
  "tools/generate-industry-pages.mjs",
  "tools/generate-industry-service-pages.mjs",
  "tools/generate-support-pages.mjs",
  "tools/seo-maintenance.mjs"
];

for (const script of scripts) {
  console.log(`\n> node ${script}`);
  const result = spawnSync(process.execPath, [script], { stdio: "inherit" });
  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}

const sitemap = fs.readFileSync("sitemap.xml", "utf8");
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
const htmlPages = [];

function walk(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    if (entry.name === ".git" || entry.name === "node_modules") continue;
    const path = `${directory}/${entry.name}`;
    if (entry.isDirectory()) {
      walk(path);
    } else if (entry.name === "index.html" || (directory === "." && entry.name.endsWith(".html"))) {
      htmlPages.push(path.replace(/^\.\//, ""));
    }
  }
}

walk(".");

console.log(`\nGenerated fresh SoftKore sitemap with ${urls.length} URLs.`);
console.log(`Detected ${htmlPages.length} HTML pages in the static site.`);

if (!urls.includes("https://www.softkoredigital.co.za/")) {
  console.error("The root homepage is missing from sitemap.xml.");
  process.exit(1);
}

if (urls.length < 700) {
  console.error(`Expected at least 700 URLs after industry expansion, found ${urls.length}.`);
  process.exit(1);
}
