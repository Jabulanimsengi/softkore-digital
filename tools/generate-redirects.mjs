import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const deployDir = path.join(root, "deploy");
const planPath = path.join(deployDir, "page-plan.json");
const nginxPath = path.join(deployDir, "redirects-softkore-nginx.conf");
const jsonPath = path.join(deployDir, "redirects-softkore.json");

const plan = JSON.parse(fs.readFileSync(planPath, "utf8"));

function assertPath(value) {
  if (!value.startsWith("/")) {
    throw new Error(`Redirect paths must start with /. Received ${value}`);
  }
}

const redirects = new Map();

for (const [from, to] of Object.entries(plan.redirects)) {
  assertPath(from);
  assertPath(to);
  redirects.set(from, to);

  if (from.endsWith("/")) {
    redirects.set(`${from}index.html`, to);
    if (from !== "/") redirects.set(from.slice(0, -1), to);
  }
}

for (const route of plan.keep) {
  assertPath(route);
  redirects.set(`${route}index.html`, route);
}

const sortedRedirects = [...redirects.entries()].sort(([a], [b]) => a.localeCompare(b));
const keptRoutes = new Set(plan.keep);

function escapeRegex(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

// Kept pages are served by their own index.html, so only a direct request for that file may redirect.
function nginxRule([from, to]) {
  if (!from.endsWith("/index.html") || !keptRoutes.has(to) || from !== `${to}index.html`) {
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

const nginx = `# SoftKore Digital redirect rules, generated from deploy/page-plan.json.
# Include this file inside the canonical www.softkoredigital.co.za HTTPS server block before the generic location / block.
# Example:
#   include /etc/nginx/snippets/softkore-redirects.conf;

error_page 404 /404.html;
location = /404.html { internal; }
location = /404/ { return 404; }
location = /404/index.html { return 404; }

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
