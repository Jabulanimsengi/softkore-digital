import fs from "node:fs";
import postcss from "postcss";

const globalsPath = new URL("../src/app/globals.css", import.meta.url);
const writeChanges = process.argv.includes("--write");

const sharedRoots = [
  ".site-header",
  ".brand",
  ".brand-logo",
  ".site-nav",
  ".nav-cta",
  ".menu-toggle",
  ".site-footer",
  ".footer-brand",
  ".footer-logo",
  ".footer-links",
  ".footer-contact",
  ".footer-legal",
  ".contact-form-shell",
  ".contact-form",
  ".contact-form-row",
  ".form-note",
  ".form-success",
  ".field-error",
  ".button",
  ".button-primary",
  ".button-secondary",
  ".button-dark-secondary",
  ".simple-button",
  ".simple-button-dark",
  ".simple-button-light",
];

function isSharedRoot(selector) {
  const normalized = selector.trim();
  return sharedRoots.some((root) => {
    if (!normalized.startsWith(root)) return false;
    const next = normalized[root.length];
    return next === undefined || /[\s.:>+~[\]]/.test(next);
  });
}

const source = fs.readFileSync(globalsPath, "utf8");
const root = postcss.parse(source, { from: globalsPath.pathname });
const violations = [];

root.walkRules((rule) => {
  const selectors = rule.selectors;
  if (!selectors) return;

  const sharedSelectors = selectors.filter(isSharedRoot);
  if (sharedSelectors.length === 0) return;

  violations.push({ line: rule.source?.start?.line ?? 0, selectors: sharedSelectors });

  if (writeChanges) {
    const pageSelectors = selectors.filter((selector) => !isSharedRoot(selector));
    if (pageSelectors.length === 0) rule.remove();
    else rule.selectors = pageSelectors;
  }
});

if (writeChanges) {
  let removedContainer = true;
  while (removedContainer) {
    removedContainer = false;
    root.walkAtRules((atRule) => {
      if (atRule.nodes?.length === 0) {
        atRule.remove();
        removedContainer = true;
      }
    });
  }

  fs.writeFileSync(globalsPath, root.toString(), "utf8");
  console.log(`Removed ${violations.length} unscoped shared-style rules from globals.css.`);
  process.exit(0);
}

if (violations.length > 0) {
  console.error("globals.css contains shared styles owned by design-system.css:");
  for (const violation of violations) {
    console.error(`  line ${violation.line}: ${violation.selectors.join(", ")}`);
  }
  process.exit(1);
}

console.log("CSS ownership check passed.");
