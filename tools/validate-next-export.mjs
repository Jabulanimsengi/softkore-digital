import fs from "node:fs";
import path from "node:path";

const domain = "https://www.softkoredigital.co.za";

const requiredFiles = [
  "out/index.html",
  "out/sitemap.xml",
  "out/robots.txt",
  "out/logo.png",
  "out/b7f4c9a62e1d4a0f8c3b59d7126e4a90.txt",
  "out/indexnow-key.txt",
  "deploy/page-plan.json",
  "deploy/redirects-softkore-nginx.conf",
  "deploy/redirects-softkore.json",
];

const nginxFiles = [
  "deploy/nginx.conf",
  "deploy/nginx-live.conf",
  "deploy-softkore-nginx.conf",
];

function fail(message) {
  console.error(message);
  process.exitCode = 1;
}

for (const file of requiredFiles) {
  if (!fs.existsSync(file)) {
    fail(`Missing required export/deploy file: ${file}`);
  }
}

for (const file of nginxFiles) {
  if (!fs.existsSync(file)) {
    fail(`Missing nginx config: ${file}`);
    continue;
  }

  const config = fs.readFileSync(file, "utf8");
  if (!config.includes("root /var/www/softkoredigital/out;")) {
    fail(`${file} must serve the Next static export from /var/www/softkoredigital/out.`);
  }
  if (!config.includes("include /etc/nginx/snippets/softkore-redirects.conf;")) {
    fail(`${file} must include the SoftKore redirect snippet.`);
  }
}

const plan = JSON.parse(fs.readFileSync("deploy/page-plan.json", "utf8"));
const keptRoutes = new Set(plan.keep);

function indexFile(route) {
  return path.join("out", route, "index.html");
}

for (const route of keptRoutes) {
  if (!fs.existsSync(indexFile(route))) {
    fail(`Missing kept page in export: ${route}`);
  }
}

if (fs.existsSync("out/sitemap.xml")) {
  const sitemap = fs.readFileSync("out/sitemap.xml", "utf8");
  const sitemapRoutes = new Set(
    [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1].replace(domain, "")),
  );

  for (const route of keptRoutes) {
    if (!sitemapRoutes.has(route)) fail(`Kept page missing from sitemap: ${route}`);
  }
  for (const route of sitemapRoutes) {
    if (!keptRoutes.has(route)) fail(`Sitemap lists a page that is not in the plan: ${route}`);
  }
}

// Every internal link on a kept page must go directly to another kept page.
for (const route of keptRoutes) {
  const file = indexFile(route);
  if (!fs.existsSync(file)) continue;

  const html = fs.readFileSync(file, "utf8");
  for (const match of html.matchAll(/<a\b[^>]*\bhref="([^"#?]+)/g)) {
    const href = match[1].replace(domain, "");
    if (!href.startsWith("/")) continue;
    if (!keptRoutes.has(href)) fail(`${route} links to ${href}, which is not a kept page.`);
  }
}

if (fs.existsSync("out/b7f4c9a62e1d4a0f8c3b59d7126e4a90.txt")) {
  const value = fs.readFileSync("out/b7f4c9a62e1d4a0f8c3b59d7126e4a90.txt", "utf8").trim();
  if (value !== "b7f4c9a62e1d4a0f8c3b59d7126e4a90") {
    fail("IndexNow verification file contains the wrong key.");
  }
}

if (process.exitCode) {
  process.exit(process.exitCode);
}

console.log(`Next static export validation passed for ${keptRoutes.size} pages.`);
