import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const deployDir = path.join(root, "deploy");
const nginxPath = path.join(deployDir, "redirects-softkore-nginx.conf");
const jsonPath = path.join(deployDir, "redirects-softkore.json");

const services = [
  "web-development",
  "seo-services",
  "custom-web-applications",
];

const serviceFallbacks = {
  "web-development": "/services/web-development/",
  "seo-services": "/services/seo-services/",
  "custom-web-applications": "/services/custom-web-applications/",
};

const priorityLocationTargets = {
  "web-development/gauteng": "/services/web-development/gauteng/",
  "web-development/gauteng/city-of-johannesburg": "/services/web-development/gauteng/johannesburg/",
  "web-development/gauteng/city-of-johannesburg/johannesburg": "/services/web-development/gauteng/johannesburg/",
  "web-development/gauteng/city-of-tshwane": "/services/web-development/gauteng/pretoria/",
  "web-development/gauteng/city-of-tshwane/pretoria": "/services/web-development/gauteng/pretoria/",
  "web-development/gauteng/city-of-tshwane/pretoria-east": "/services/web-development/gauteng/pretoria/pretoria-east/",
  "seo-services/gauteng/city-of-johannesburg/sandton": "/services/seo-services/gauteng/sandton/",
  "seo-services/gauteng/city-of-johannesburg": "/services/seo-services/gauteng/johannesburg/",
  "seo-services/western-cape/city-of-cape-town": "/services/seo-services/western-cape/cape-town/",
  "seo-services/western-cape/city-of-cape-town/cape-town-cbd": "/services/seo-services/western-cape/cape-town/cape-town-cbd/",
  "custom-web-applications/kwazulu-natal/ethekwini": "/services/custom-web-applications/kwazulu-natal/durban/",
  "custom-web-applications/kwazulu-natal/ethekwini/durban": "/services/custom-web-applications/kwazulu-natal/durban/",
};

const priorityIndustryTargets = {
  "salon-beauty-websites": "/industries/beauty-salon-websites/",
  "ecommerce-development": "/industries/ecommerce-development/",
  "medical-practice-websites": "/industries/medical-practice-websites/",
  "real-estate-website-design": "/industries/real-estate-websites/",
  "law-firm-websites-seo": "/industries/law-firm-websites/",
  "dental-practice-websites": "/industries/dental-practice-websites/",
  "accounting-firm-websites": "/industries/accounting-firm-websites/",
  "construction-company-websites": "/industries/construction-company-websites/",
  "plumber-websites": "/industries/plumber-websites/",
  "logistics-company-websites": "/industries/logistics-company-websites/",
};

const legacyLocationSlugTargets = {
  "city-of-johannesburg": "johannesburg",
  "city-of-tshwane": "pretoria",
  "city-of-cape-town": "cape-town",
};

const legacyIndustrySlugTargets = {
  "salon-beauty-websites": "beauty-salon-websites",
  "law-firm-websites-seo": "law-firm-websites",
  "real-estate-website-design": "real-estate-websites",
};

const legacyRedirects = [
  ["/home/", "/"],
  ["/index.html", "/"],
  ["/contact-us/", "/contact/"],
  ["/guides/", "/guides/"],
  ["/guides/index.html", "/guides/"],
  ["/web-design/", "/services/web-development/"],
  ["/website-design/", "/services/web-development/"],
  ["/web-development/", "/services/web-development/"],
  ["/seo/", "/services/seo-services/"],
  ["/seo-services/", "/services/seo-services/"],
  ["/app-development/", "/services/custom-web-applications/"],
  ["/web-applications/", "/services/custom-web-applications/"],
  ["/custom-web-applications/", "/services/custom-web-applications/"],
  ["/maintenance/", "/services/website-maintenance/"],
  ["/website-maintenance/", "/services/website-maintenance/"],
];

function addRedirect(redirects, from, to) {
  if (!from.startsWith("/") || !to.startsWith("/")) {
    throw new Error(`Redirect paths must start with /. Received ${from} -> ${to}`);
  }
  if (from === to) return;
  redirects.set(from, to);
}

function addWithIndex(redirects, from, to) {
  const cleanFrom = from.endsWith("/") ? from : `${from}/`;
  addRedirect(redirects, cleanFrom, to);
  addRedirect(redirects, `${cleanFrom}index.html`, to);
}

function addIndexOnly(redirects, route) {
  const cleanRoute = route.endsWith("/") ? route : `${route}/`;
  addRedirect(redirects, `${cleanRoute}index.html`, cleanRoute);
}

function listIndexRoutes(baseDir) {
  const routes = [];
  const fullBase = path.join(root, baseDir);
  if (!fs.existsSync(fullBase)) return routes;

  function walk(directory) {
    for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
      const fullPath = path.join(directory, entry.name);
      if (entry.isDirectory()) {
        walk(fullPath);
      } else if (entry.name === "index.html") {
        const relative = path.relative(root, fullPath).replaceAll(path.sep, "/");
        routes.push(`/${relative.replace(/index\.html$/, "")}`);
      }
    }
  }

  walk(fullBase);
  return routes.sort();
}

function serviceDestination(route) {
  const parts = route.replace(/^\/services\//, "").replace(/\/$/, "").split("/");
  const service = parts[0];
  const rest = parts.slice(1).join("/");

  if (!services.includes(service)) {
    if (service === "website-maintenance") return "/services/website-maintenance/";
    return "/services/";
  }

  if (!rest) return serviceFallbacks[service];

  const exactKey = `${service}/${rest}`;
  if (priorityLocationTargets[exactKey]) {
    return priorityLocationTargets[exactKey];
  }

  if (service === "web-development" && rest.startsWith("gauteng/")) {
    return "/services/web-development/gauteng/";
  }

  return serviceFallbacks[service];
}

function industryDestination(route) {
  const parts = route.replace(/^\/industries\//, "").replace(/\/$/, "").split("/");
  const industrySlug = parts[0];

  if (!industrySlug) return "/industries/";
  return priorityIndustryTargets[industrySlug] || "/industries/";
}

function guideDestination(route) {
  const parts = route.replace(/^\/guides\//, "").replace(/\/$/, "").split("/");
  const guideSlug = parts[0];

  if (!guideSlug) return "/guides/";

  const guideTargets = {
    "website-vs-web-application": "/guides/website-vs-web-application/",
    "website-prices-south-africa": "/guides/website-prices-south-africa/",
    "website-maintenance-checklist": "/guides/website-maintenance-checklist/",
    "planning-service-pages": "/guides/technical-seo-checklist/",
    "improve-website-enquiries": "/guides/why-your-website-is-not-ranking/",
    "choosing-a-website-partner": "/guides/website-prices-south-africa/",
  };

  return guideTargets[guideSlug] || "/guides/";
}

function migratedServiceDestination(route) {
  const parts = route.replace(/^\/services\//, "").replace(/\/$/, "").split("/");
  if (parts.length < 2) return null;

  const migrated = parts.map((part) => legacyLocationSlugTargets[part] || part);
  if (migrated.join("/") === parts.join("/")) return null;
  return `/services/${migrated.join("/")}/`;
}

function migratedIndustryDestination(route) {
  const parts = route.replace(/^\/industries\//, "").replace(/\/$/, "").split("/");
  const migratedSlug = legacyIndustrySlugTargets[parts[0]];
  if (!migratedSlug) return null;

  return `/industries/${[migratedSlug, ...parts.slice(1)].join("/")}/`;
}

fs.mkdirSync(deployDir, { recursive: true });

const redirects = new Map();

for (const [from, to] of legacyRedirects) {
  addRedirect(redirects, from, to);
}

for (const route of listIndexRoutes("services")) {
  const migrated = migratedServiceDestination(route);
  if (migrated) addWithIndex(redirects, route, migrated);
  else addIndexOnly(redirects, route);
}

for (const route of listIndexRoutes("industries")) {
  const migrated = migratedIndustryDestination(route);
  if (migrated) addWithIndex(redirects, route, migrated);
  else addIndexOnly(redirects, route);
}

for (const route of listIndexRoutes("guides")) {
  addIndexOnly(redirects, route);
}

for (const [source, target] of Object.entries(priorityLocationTargets)) {
  addWithIndex(redirects, `/services/${source}/`, target);
}

for (const [source, target] of Object.entries(priorityIndustryTargets)) {
  addWithIndex(redirects, `/industries/${source}/`, target);
}

const sortedRedirects = [...redirects.entries()].sort(([a], [b]) => a.localeCompare(b));

function escapeRegex(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function nginxRule([from, to]) {
  if (!from.endsWith("/index.html") && from !== "/index.html") {
    return `location = ${from} { return 301 ${to}; }`;
  }

  const requestPattern = `^${escapeRegex(from)}(?:\\?.*)?$`;
  return [
    `location = ${from} {`,
    `    if ($request_uri ~ ${requestPattern}) { return 301 ${to}; }`,
    "    try_files $uri =404;",
    "}",
  ].join("\n");
}

const nginx = `# SoftKore Digital redirect rules.
# Include this file inside the canonical www.softkoredigital.co.za HTTPS server block before the generic location / block.
# Example:
#   include /etc/nginx/snippets/softkore-redirects.conf;

${sortedRedirects.map(nginxRule).join("\n")}
`;

fs.writeFileSync(nginxPath, nginx, "utf8");
fs.writeFileSync(
  jsonPath,
  `${JSON.stringify(
    {
      host: "www.softkoredigital.co.za",
      count: sortedRedirects.length,
      redirects: sortedRedirects.map(([from, to]) => ({ from, to })),
    },
    null,
    2,
  )}\n`,
  "utf8",
);

console.log(`Generated ${sortedRedirects.length} SoftKore redirect rules.`);
console.log(`Wrote ${path.relative(root, nginxPath).replaceAll(path.sep, "/")}`);
console.log(`Wrote ${path.relative(root, jsonPath).replaceAll(path.sep, "/")}`);
