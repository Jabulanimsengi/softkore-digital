import fs from "node:fs";

const host = "www.softkoredigital.co.za";
const keyConfigFile = "indexnow-key.txt";
const endpoints = [
  "https://api.indexnow.org/indexnow",
  "https://www.bing.com/indexnow"
];

const args = process.argv.slice(2);
const dryRun = args.includes("--dry-run");
const limitArg = args.find((arg) => arg.startsWith("--limit="));
const limit = limitArg ? Number(limitArg.split("=")[1]) : null;

if (limit !== null && (!Number.isInteger(limit) || limit < 1)) {
  console.error("Use --limit with a positive integer, for example --limit=25.");
  process.exit(1);
}

if (!fs.existsSync(keyConfigFile)) {
  console.error(`Missing ${keyConfigFile}. This file stores the SoftKore IndexNow key used by the submit command.`);
  process.exit(1);
}

const key = fs.readFileSync(keyConfigFile, "utf8").trim();
if (!/^[a-zA-Z0-9-]{8,128}$/.test(key)) {
  console.error(`${keyConfigFile} must contain an IndexNow key between 8 and 128 characters.`);
  process.exit(1);
}

const verificationFile = `${key}.txt`;
const keyLocation = `https://${host}/${verificationFile}`;

if (!fs.existsSync(verificationFile)) {
  console.error(`Missing ${verificationFile}. IndexNow expects the public verification file at ${keyLocation}.`);
  process.exit(1);
}

const verificationKey = fs.readFileSync(verificationFile, "utf8").trim();
if (verificationKey !== key) {
  console.error(`${verificationFile} must contain exactly the same key as ${keyConfigFile}.`);
  process.exit(1);
}

const sitemapFile = fs.existsSync("out/sitemap.xml") ? "out/sitemap.xml" : "sitemap.xml";
const sitemap = fs.readFileSync(sitemapFile, "utf8");
let urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);

urls = urls.filter((url) => {
  try {
    return new URL(url).host === host;
  } catch {
    return false;
  }
});

if (limit) urls = urls.slice(0, limit);

if (urls.length === 0) {
  console.error("No SoftKore URLs were found in sitemap.xml.");
  process.exit(1);
}

const payload = {
  host,
  key,
  keyLocation,
  urlList: urls
};

if (dryRun) {
  console.log(`IndexNow dry run for ${host}`);
  console.log(`Sitemap: ${sitemapFile}`);
  console.log(`URLs prepared: ${urls.length}`);
  console.log(`Key location: ${keyLocation}`);
  console.log("First URLs:");
  for (const url of urls.slice(0, 8)) console.log(`- ${url}`);
  process.exit(0);
}

let failures = 0;

for (const endpoint of endpoints) {
  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "content-type": "application/json; charset=utf-8" },
    body: JSON.stringify(payload)
  });

  const text = await response.text();
  console.log(`${endpoint}: ${response.status} ${response.statusText}`);
  if (text.trim()) console.log(text.trim());

  if (!response.ok) failures += 1;
}

if (failures) {
  console.error(`IndexNow submission finished with ${failures} failed endpoint(s).`);
  process.exit(1);
}

console.log(`Submitted ${urls.length} SoftKore URLs to IndexNow.`);
