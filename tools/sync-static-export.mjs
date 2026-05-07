import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const outDir = path.join(root, "out");
const generatedRoots = ["services", "industries", "guides", "contact", "sitemap"];
const generatedFiles = [
  "robots.txt",
  "indexnow-key.txt",
  "b7f4c9a62e1d4a0f8c3b59d7126e4a90.txt",
  "logo.png",
  "script.js",
  "styles.css",
];

function copyFileIfNeeded(source, destination, { overwrite = false } = {}) {
  if (!fs.existsSync(source)) return false;
  if (fs.existsSync(destination) && !overwrite) return false;

  fs.mkdirSync(path.dirname(destination), { recursive: true });
  fs.copyFileSync(source, destination);
  return true;
}

function copyDirectory(sourceDir, destinationDir) {
  if (!fs.existsSync(sourceDir)) return { copied: 0, skipped: 0 };

  let copied = 0;
  let skipped = 0;

  for (const entry of fs.readdirSync(sourceDir, { withFileTypes: true })) {
    const source = path.join(sourceDir, entry.name);
    const destination = path.join(destinationDir, entry.name);

    if (entry.isDirectory()) {
      const result = copyDirectory(source, destination);
      copied += result.copied;
      skipped += result.skipped;
      continue;
    }

    if (fs.existsSync(destination)) {
      skipped += 1;
      continue;
    }

    fs.mkdirSync(path.dirname(destination), { recursive: true });
    fs.copyFileSync(source, destination);
    copied += 1;
  }

  return { copied, skipped };
}

function countSitemapUrls(file) {
  if (!fs.existsSync(file)) return 0;
  const xml = fs.readFileSync(file, "utf8");
  return [...xml.matchAll(/<loc>[^<]+<\/loc>/g)].length;
}

function redirectSources() {
  const redirectsPath = path.join(root, "deploy", "redirects-softkore.json");
  if (!fs.existsSync(redirectsPath)) return new Set();

  const data = JSON.parse(fs.readFileSync(redirectsPath, "utf8"));
  return new Set((data.redirects || []).map((redirect) => redirect.from));
}

function syncSitemap() {
  const source = path.join(root, "sitemap.xml");
  const destination = path.join(outDir, "sitemap.xml");
  if (!fs.existsSync(source)) return false;

  const redirects = redirectSources();
  const sitemaps = [
    fs.readFileSync(source, "utf8"),
    fs.existsSync(destination) ? fs.readFileSync(destination, "utf8") : "",
  ];
  const blocksByLoc = new Map();

  for (const sitemap of sitemaps) {
    for (const match of sitemap.matchAll(/<url>[\s\S]*?<\/url>/g)) {
      const block = match[0];
      const loc = block.match(/<loc>([^<]+)<\/loc>/)?.[1];
      if (!loc || blocksByLoc.has(loc)) continue;

      const pathName = new URL(loc).pathname;
      if (redirects.has(pathName)) continue;

      blocksByLoc.set(loc, block);
    }
  }

  const keptBlocks = [...blocksByLoc.entries()]
    .sort(([a], [b]) => {
      if (a === "https://www.softkoredigital.co.za/") return -1;
      if (b === "https://www.softkoredigital.co.za/") return 1;
      return a.localeCompare(b);
    })
    .map(([, block]) => block);

  for (const block of keptBlocks) {
    const loc = block.match(/<loc>([^<]+)<\/loc>/)?.[1];
    const pathName = new URL(loc).pathname;
    if (redirects.has(pathName)) {
      throw new Error(`Filtered sitemap still contains redirected URL: ${loc}`);
    }
  }

  const filtered = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${keptBlocks.join("\n")}\n</urlset>\n`;
  fs.writeFileSync(destination, filtered, "utf8");
  return true;
}

function countHtmlPages(directory) {
  if (!fs.existsSync(directory)) return 0;

  let count = 0;
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      count += countHtmlPages(fullPath);
    } else if (entry.name === "index.html" || (directory === outDir && entry.name.endsWith(".html"))) {
      count += 1;
    }
  }
  return count;
}

if (!fs.existsSync(outDir)) {
  throw new Error("Missing out directory. Run npm run build before syncing generated static pages.");
}

let copied = 0;
let skipped = 0;

for (const rootName of generatedRoots) {
  const result = copyDirectory(path.join(root, rootName), path.join(outDir, rootName));
  copied += result.copied;
  skipped += result.skipped;
}

if (syncSitemap()) {
  copied += 1;
}

for (const fileName of generatedFiles) {
  const overwrite = fileName === "robots.txt";
  if (copyFileIfNeeded(path.join(root, fileName), path.join(outDir, fileName), { overwrite })) {
    copied += 1;
  } else {
    skipped += 1;
  }
}

const sitemapUrls = countSitemapUrls(path.join(outDir, "sitemap.xml"));
const htmlPages = countHtmlPages(outDir);

console.log(`Synced generated static SEO pages into out (${copied} copied, ${skipped} preserved).`);
console.log(`Export now contains ${htmlPages} HTML pages and ${sitemapUrls} sitemap URLs.`);

if (sitemapUrls < 700) {
  throw new Error(`Expected the deployed sitemap to contain at least 700 URLs, found ${sitemapUrls}.`);
}

if (htmlPages < 300) {
  throw new Error(`Expected the deployed export to contain at least 300 HTML pages, found ${htmlPages}.`);
}
