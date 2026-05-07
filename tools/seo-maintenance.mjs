import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const logoWidth = 922;
const logoHeight = 252;
const defaultImage = "https://www.softkoredigital.co.za/logo.png";

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath, files);
    } else if (entry.name === "index.html") {
      files.push(fullPath);
    }
  }
  return files;
}

function attr(html, pattern) {
  return html.match(pattern)?.[1]?.trim() || "";
}

function escapeAttr(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function socialTags({ title, description, canonical }) {
  const safeTitle = escapeAttr(title);
  const safeDescription = escapeAttr(description);
  const safeCanonical = escapeAttr(canonical);
  return `    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="SoftKore Digital" />
    <meta property="og:title" content="${safeTitle}" />
    <meta property="og:description" content="${safeDescription}" />
    <meta property="og:url" content="${safeCanonical}" />
    <meta property="og:image" content="${defaultImage}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${safeTitle}" />
    <meta name="twitter:description" content="${safeDescription}" />
    <meta name="twitter:image" content="${defaultImage}" />`;
}

function breadcrumbSchema(html, canonical) {
  const breadcrumb = html.match(/<nav class="breadcrumb" aria-label="Breadcrumb">([\s\S]*?)<\/nav>/i)?.[1];
  if (!breadcrumb) return null;

  const items = [];
  const tokenPattern = /<a\s+href="([^"]+)">([\s\S]*?)<\/a>|<span>([\s\S]*?)<\/span>/gi;
  for (const match of breadcrumb.matchAll(tokenPattern)) {
    const href = match[1];
    const rawLabel = match[2] || match[3] || "";
    const label = rawLabel.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
    if (!label || label === "/") continue;
    items.push({ href, label });
  }

  if (items.length < 2) return null;
  const currentUrl = new URL(canonical);
  const schemaItems = items.map((item, index) => {
    const resolved = item.href ? new URL(item.href, currentUrl).href : canonical;
    return {
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: index === items.length - 1 ? canonical : resolved,
    };
  });

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: schemaItems,
  };
}

function mergeBreadcrumbSchema(html, canonical) {
  if (!canonical) return html;
  if (/"@type"\s*:\s*"BreadcrumbList"/.test(html)) return html;
  const schema = breadcrumbSchema(html, canonical);
  if (!schema) return html;
  const script = `    <script type="application/ld+json">${JSON.stringify(schema)}</script>`;
  return html.replace(/(\s*<\/head>)/i, `\n${script}$1`);
}

function cleanHomeLinks(html) {
  return html
    .replace(/href="((?:\.\.\/)*)index\.html(#[^"]*)?"/g, (_match, prefix, hash = "") => `href="${prefix || "./"}${hash}"`)
    .replace(/href="index\.html(#[^"]*)?"/g, (_match, hash = "") => `href="./${hash}"`);
}

function addLogoDimensions(html) {
  return html.replace(/<img class="([^"]*\bbrand-logo\b[^"]*)" src="([^"]+)" alt="SoftKore Digital"(?![^>]*\bwidth=)([^>]*)\/>/g, (_match, classes, src, rest) => {
    return `<img class="${classes}" src="${src}" alt="SoftKore Digital" width="${logoWidth}" height="${logoHeight}"${rest} />`;
  });
}

let changed = 0;
for (const file of walk(root)) {
  let html = fs.readFileSync(file, "utf8");
  const original = html;
  const title = attr(html, /<title>([^<]*)<\/title>/i);
  const description = attr(html, /<meta\s+name=["']description["']\s+content=["']([^"']*)["']/i);
  const canonical = attr(html, /<link\s+rel=["']canonical["']\s+href=["']([^"']*)["']/i);

  html = cleanHomeLinks(html);
  html = addLogoDimensions(html);
  html = mergeBreadcrumbSchema(html, canonical);

  if (!/<meta\s+property=["']og:title["']/i.test(html) && title && description && canonical) {
    html = html.replace(/(\s*<title>[^<]*<\/title>)/i, `\n${socialTags({ title, description, canonical })}$1`);
  }

  if (html !== original) {
    fs.writeFileSync(file, html, "utf8");
    changed += 1;
  }
}

console.log(`Updated SEO/social/link markup in ${changed} HTML files.`);
