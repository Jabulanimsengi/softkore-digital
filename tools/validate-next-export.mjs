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
  for (const url of requiredUrls) {
    if (!sitemap.includes(`<loc>${url}</loc>`)) {
      fail(`Missing required sitemap URL: ${url}`);
    }
  }

  const forbidden = ["city-of-", "law-firm-websites-seo", "salon-beauty-websites"];
  for (const token of forbidden) {
    if (sitemap.includes(token)) {
      fail(`Sitemap contains old URL token: ${token}`);
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
  const oldStaticRoots = ["services/web-development/gauteng/city-of-johannesburg", "industries/law-firm-websites-seo"];
  for (const oldPath of oldStaticRoots) {
    if (fs.existsSync(path.join("out", oldPath))) {
      fail(`Export contains old static route: out/${oldPath}`);
    }
  }
}

if (process.exitCode) {
  process.exit(process.exitCode);
}

console.log("Next static export validation passed.");
