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
  "web-development/gauteng/city-of-tshwane/pretoria-east": "/services/web-development/gauteng/pretoria/",
  "seo-services/gauteng/city-of-johannesburg/sandton": "/services/seo-services/gauteng/sandton/",
  "seo-services/gauteng/city-of-johannesburg": "/services/seo-services/gauteng/sandton/",
  "seo-services/western-cape/city-of-cape-town": "/services/seo-services/western-cape/cape-town/",
  "seo-services/western-cape/city-of-cape-town/cape-town-cbd": "/services/seo-services/western-cape/cape-town/",
  "custom-web-applications/kwazulu-natal/ethekwini": "/services/custom-web-applications/kwazulu-natal/durban/",
  "custom-web-applications/kwazulu-natal/ethekwini/durban": "/services/custom-web-applications/kwazulu-natal/durban/",
};

const priorityIndustryTargets = {
  "salon-beauty-websites": "/industries/salon-booking-software/",
  "ecommerce-development": "/industries/ecommerce-development/",
  "medical-practice-websites": "/industries/medical-practice-websites/",
  "real-estate-website-design": "/industries/real-estate-websites/",
  "law-firm-websites-seo": "/industries/legal-firm-seo-services/",
  "dental-practice-websites": "/industries/dental-practice-websites/",
  "accounting-firm-websites": "/industries/accounting-firm-websites/",
  "construction-company-websites": "/industries/construction-company-websites/",
  "plumber-websites": "/industries/plumber-websites/",
  "logistics-company-websites": "/industries/logistics-company-websites/",
};

const legacyRedirects = [
  ["/home/", "/"],
  ["/index.html", "/"],
  ["/contact/", "/#contact"],
  ["/contact/index.html", "/#contact"],
  ["/contact-us/", "/#contact"],
  ["/guides/", "/guides/"],
  ["/guides/index.html", "/guides/"],
  ["/sitemap/", "/sitemap.xml"],
  ["/sitemap/index.html", "/sitemap.xml"],
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

fs.mkdirSync(deployDir, { recursive: true });

const redirects = new Map();

for (const [from, to] of legacyRedirects) {
  addRedirect(redirects, from, to);
}

for (const route of listIndexRoutes("services")) {
  addWithIndex(redirects, route, serviceDestination(route));
}

for (const route of listIndexRoutes("industries")) {
  addWithIndex(redirects, route, industryDestination(route));
}

for (const route of listIndexRoutes("guides")) {
  addWithIndex(redirects, route, guideDestination(route));
}

const sortedRedirects = [...redirects.entries()].sort(([a], [b]) => a.localeCompare(b));

const nginx = `# SoftKore Digital redirect rules.
# Include this file inside the canonical www.softkoredigital.co.za HTTPS server block before the generic location / block.
# Example:
#   include /etc/nginx/snippets/softkore-redirects.conf;

${sortedRedirects.map(([from, to]) => `location = ${from} { return 301 ${to}; }`).join("\n")}
`;

fs.writeFileSync(nginxPath, nginx, "utf8");
fs.writeFileSync(
  jsonPath,
  `${JSON.stringify(
    {
      host: "www.softkoredigital.co.za",
      generatedAt: new Date().toISOString(),
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
