import path from "node:path";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const { chromium } = require("C:/Users/ramos/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright");

const chromePath = "C:/Program Files/Google/Chrome/Application/chrome.exe";

function fileUrl(relativePath) {
  return `file:///${path.resolve(relativePath).replaceAll("\\", "/")}`;
}

const samples = [
  "index.html",
  "services/seo-services/western-cape/index.html",
  "services/web-development/gauteng/city-of-johannesburg/index.html",
  "services/custom-web-applications/kwazulu-natal/ethekwini/durban/index.html",
  "industries/index.html",
  "industries/salon-beauty-websites/index.html",
  "industries/mining-supplier-websites/index.html",
];

const browser = await chromium.launch({ headless: true, executablePath: chromePath });
const results = [];

for (const sample of samples) {
  const page = await browser.newPage({ viewport: { width: 1366, height: 900 } });
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto(fileUrl(sample));
  await page.waitForLoadState("load");
  const data = await page.evaluate(() => ({
    title: document.title,
    h1: document.querySelector("h1")?.textContent?.trim() || null,
    logoComplete: document.querySelector(".brand-logo")?.complete || false,
    overflowX: document.documentElement.scrollWidth > window.innerWidth + 2,
    hasJsonLd: !!document.querySelector('script[type="application/ld+json"]'),
    canonical: document.querySelector('link[rel="canonical"]')?.href || null,
  }));
  results.push({ sample, errors, ...data });
  await page.close();
}

const mobile = await browser.newPage({ viewport: { width: 390, height: 900 } });
await mobile.goto(fileUrl("services/custom-web-applications/kwazulu-natal/ethekwini/durban/index.html"));
await mobile.waitForLoadState("load");
results.push({
  sample: "mobile: services/custom-web-applications/kwazulu-natal/ethekwini/durban/index.html",
  ...(await mobile.evaluate(() => ({
    overflowX: document.documentElement.scrollWidth > window.innerWidth + 2,
    headerHeight: document.querySelector(".site-header")?.getBoundingClientRect().height || null,
  }))),
});
await mobile.close();

await browser.close();
console.log(JSON.stringify(results, null, 2));
