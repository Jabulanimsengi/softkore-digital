import fs from "node:fs";

const redirectsPath = "deploy/redirects-softkore.json";

const requiredMappings = new Map([
  ["/services/web-development/gauteng/city-of-johannesburg/", "/services/web-development/gauteng/johannesburg/"],
  ["/services/web-development/gauteng/city-of-johannesburg/index.html", "/services/web-development/gauteng/johannesburg/"],
  ["/services/seo-services/western-cape/city-of-cape-town/", "/services/seo-services/western-cape/cape-town/"],
  ["/services/custom-web-applications/kwazulu-natal/ethekwini/durban/", "/services/custom-web-applications/kwazulu-natal/durban/"],
  ["/industries/law-firm-websites-seo/", "/industries/legal-firm-seo-services/"],
  ["/industries/salon-beauty-websites/", "/industries/salon-booking-software/"],
  ["/industries/plumber-websites/seo-services/", "/industries/plumber-websites/"],
  ["/guides/website-prices-south-africa/index.html", "/guides/website-prices-south-africa/"],
  ["/guides/website-vs-web-application/index.html", "/guides/website-vs-web-application/"],
]);

const forbiddenDestinationPatterns = [
  /city-of-/,
  /law-firm-websites-seo/,
  /salon-beauty-websites/,
  /real-estate-website-design/,
];

function fail(message) {
  console.error(message);
  process.exitCode = 1;
}

if (!fs.existsSync(redirectsPath)) {
  console.error(`Missing ${redirectsPath}. Run npm run generate:redirects first.`);
  process.exit(1);
}

const data = JSON.parse(fs.readFileSync(redirectsPath, "utf8"));
const redirects = data.redirects || [];
const seen = new Set();
const map = new Map();

for (const redirect of redirects) {
  if (!redirect.from || !redirect.to) {
    fail(`Invalid redirect entry: ${JSON.stringify(redirect)}`);
    continue;
  }

  if (!redirect.from.startsWith("/") || !redirect.to.startsWith("/")) {
    fail(`Redirect paths must be root-relative: ${redirect.from} -> ${redirect.to}`);
  }

  if (redirect.from === redirect.to) {
    fail(`Self redirect found: ${redirect.from}`);
  }

  if (seen.has(redirect.from)) {
    fail(`Duplicate redirect source found: ${redirect.from}`);
  }

  for (const pattern of forbiddenDestinationPatterns) {
    if (pattern.test(redirect.to)) {
      fail(`Forbidden old slug in redirect destination: ${redirect.from} -> ${redirect.to}`);
    }
  }

  seen.add(redirect.from);
  map.set(redirect.from, redirect.to);
}

if (data.count !== redirects.length) {
  fail(`Redirect count mismatch: json count ${data.count}, actual ${redirects.length}`);
}

for (const [from, expectedTo] of requiredMappings.entries()) {
  const actualTo = map.get(from);
  if (actualTo !== expectedTo) {
    fail(`Required redirect mismatch: ${from} expected ${expectedTo}, got ${actualTo || "missing"}`);
  }
}

if (process.exitCode) {
  process.exit(process.exitCode);
}

console.log(`Redirect validation passed for ${redirects.length} rules.`);
