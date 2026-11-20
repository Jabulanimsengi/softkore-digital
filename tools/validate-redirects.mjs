import fs from "node:fs";

const redirectsPath = "deploy/redirects-softkore.json";
const planPath = "deploy/page-plan.json";

const requiredMappings = new Map([
  ["/services/web-development/gauteng/city-of-johannesburg/", "/services/web-development/"],
  ["/services/web-development/gauteng/johannesburg/", "/services/web-development/"],
  ["/services/web-development/gauteng/johannesburg/index.html", "/services/web-development/"],
  ["/services/seo-services/western-cape/cape-town/", "/services/seo-services/"],
  ["/services/custom-web-applications/kwazulu-natal/durban/", "/services/web-development/"],
  ["/services/website-maintenance/", "/services/website-security/"],
  ["/industries/cybersecurity-company-websites/", "/services/website-security/"],
  ["/industries/law-firm-websites-seo/", "/services/seo-services/"],
  ["/industries/salon-beauty-websites/", "/services/web-development/"],
  ["/ai-agents/", "/services/web-development/"],
  ["/guides/website-prices-south-africa/index.html", "/guides/website-prices-south-africa/"],
  ["/guides/website-maintenance-checklist/", "/guides/website-security-checklist/"],
  ["/guides/website-vs-web-application/index.html", "/services/web-development/"],
]);

function fail(message) {
  console.error(message);
  process.exitCode = 1;
}

if (!fs.existsSync(redirectsPath)) {
  console.error(`Missing ${redirectsPath}. Run npm run generate:redirects first.`);
  process.exit(1);
}

const data = JSON.parse(fs.readFileSync(redirectsPath, "utf8"));
const plan = JSON.parse(fs.readFileSync(planPath, "utf8"));
const keptRoutes = new Set(plan.keep);
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

  if (!keptRoutes.has(redirect.to)) {
    fail(`Redirect does not end on a kept page: ${redirect.from} -> ${redirect.to}`);
  }

  if (keptRoutes.has(redirect.from)) {
    fail(`Kept page must not redirect: ${redirect.from}`);
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
