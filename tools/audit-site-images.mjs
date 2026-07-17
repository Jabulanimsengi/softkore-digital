import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import path from "node:path";

function sourceFiles(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) return sourceFiles(fullPath);
    return /\.(ts|tsx)$/.test(entry.name) ? [fullPath] : [];
  });
}

const references = [];
const stockUrls = [];

for (const file of sourceFiles(path.resolve("src"))) {
  const source = readFileSync(file, "utf8");
  for (const match of source.matchAll(/["'](\/images\/[^"']+)["']/g)) {
    references.push({ file: path.relative(process.cwd(), file), src: match[1] });
  }
  if (source.includes("images.unsplash.com")) stockUrls.push(path.relative(process.cwd(), file));
}

const contentReferences = references.filter(({ src }) => !src.startsWith("/images/logo/"));
const counts = new Map();
for (const reference of contentReferences) {
  const list = counts.get(reference.src) ?? [];
  list.push(reference.file);
  counts.set(reference.src, list);
}

const duplicates = [...counts.entries()].filter(([, files]) => files.length > 1);
const missing = [...counts.keys()].filter((src) => !existsSync(path.join("public", src)));
const generatedDirectory = path.resolve("public/images/site");
const generated = existsSync(generatedDirectory)
  ? readdirSync(generatedDirectory).filter((file) => file.endsWith(".webp") && statSync(path.join(generatedDirectory, file)).size > 0)
  : [];

console.log(`Content image references: ${contentReferences.length}`);
console.log(`Unique content image paths: ${counts.size}`);
console.log(`Generated site images: ${generated.length}`);
console.log(`Duplicate content paths: ${duplicates.length}`);
console.log(`Missing image files: ${missing.length}`);
console.log(`Unsplash source files: ${stockUrls.length}`);

if (duplicates.length) console.error("Duplicates:", duplicates);
if (missing.length) console.error("Missing:", missing);
if (stockUrls.length) console.error("Stock URLs:", stockUrls);
if (generated.length < 21 || duplicates.length || missing.length || stockUrls.length) process.exit(1);
