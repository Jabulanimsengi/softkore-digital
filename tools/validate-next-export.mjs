import fs from "node:fs";
import path from "node:path";

const requiredFiles = [
  "out/index.html",
  "out/sitemap.xml",
  "out/robots.txt",
  "out/logo.png",
  "out/b7f4c9a62e1d4a0f8c3b59d7126e4a90.txt",
  "out/indexnow-key.txt",
  "deploy/redirects-softkore-nginx.conf",
  "deploy/redirects-softkore.json",
];

const nginxFiles = [
  "deploy/nginx.conf",
  "deploy/nginx-live.conf",
  "deploy-softkore-nginx.conf",
];

const requiredUrls = [
  "https://www.softkoredigital.co.za/",
  "https://www.softkoredigital.co.za/services/web-development/",
  "https://www.softkoredigital.co.za/services/web-development/gauteng/johannesburg/",
  "https://www.softkoredigital.co.za/services/seo-services/western-cape/cape-town/",
  "https://www.softkoredigital.co.za/industries/plumber-websites/",
  "https://www.softkoredigital.co.za/ai-agents/",
  "https://www.softkoredigital.co.za/ai-agents/plumber-websites/",
  "https://www.softkoredigital.co.za/guides/technical-seo-checklist/",
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

if (fs.existsSync("out/sitemap.xml")) {
  const sitemap = fs.readFileSync("out/sitemap.xml", "utf8");
  const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
  if (sitemapUrls.length < 700) {
    fail(`Expected deployed sitemap to contain at least 700 URLs, found ${sitemapUrls.length}.`);
  }

  for (const url of requiredUrls) {
    if (!sitemap.includes(`<loc>${url}</loc>`)) {
      fail(`Missing required sitemap URL: ${url}`);
    }
  }

  const forbiddenSitemapTokens = [
    "city-of-johannesburg",
    "city-of-tshwane",
    "city-of-cape-town",
    "law-firm-websites-seo",
    "salon-beauty-websites",
    "real-estate-website-design",
  ];
  for (const token of forbiddenSitemapTokens) {
    if (sitemap.includes(token)) {
      fail(`Sitemap contains legacy URL token: ${token}`);
    }
  }

  if (fs.existsSync("deploy/redirects-softkore.json")) {
    const redirects = JSON.parse(fs.readFileSync("deploy/redirects-softkore.json", "utf8")).redirects || [];
    const redirectSources = new Set(redirects.map((redirect) => redirect.from));
    for (const url of sitemapUrls) {
      const pathName = new URL(url).pathname;
      if (redirectSources.has(pathName)) {
        fail(`Sitemap contains a redirected URL: ${url}`);
      }
    }
  }
}

if (fs.existsSync("out/b7f4c9a62e1d4a0f8c3b59d7126e4a90.txt")) {
  const value = fs.readFileSync("out/b7f4c9a62e1d4a0f8c3b59d7126e4a90.txt", "utf8").trim();
  if (value !== "b7f4c9a62e1d4a0f8c3b59d7126e4a90") {
    fail("IndexNow verification file contains the wrong key.");
  }
}

if (fs.existsSync("out")) {
  const requiredGeneratedPages = [
    "out/services/web-development/gauteng/johannesburg/sandton/index.html",
    "out/services/seo-services/western-cape/cape-town/cape-town-cbd/index.html",
    "out/industries/plumber-websites/seo-services/index.html",
    "out/industries/beauty-salon-websites/website-design/index.html",
    "out/contact/index.html",
    "out/sitemap/index.html",
  ];

  for (const file of requiredGeneratedPages) {
    if (!fs.existsSync(file)) {
      fail(`Missing generated SEO page in export: ${file}`);
    }
  }

  function countHtmlPages(directory) {
    let count = 0;
    for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
      const fullPath = path.join(directory, entry.name);
      if (entry.isDirectory()) count += countHtmlPages(fullPath);
      else if (entry.name === "index.html" || (directory === "out" && entry.name.endsWith(".html"))) count += 1;
    }
    return count;
  }

  const htmlPages = countHtmlPages("out");
  if (htmlPages < 300) {
    fail(`Expected deployed export to contain at least 300 HTML pages, found ${htmlPages}.`);
  }
}

if (process.exitCode) {
  process.exit(process.exitCode);
}

console.log("Next static export validation passed.");
