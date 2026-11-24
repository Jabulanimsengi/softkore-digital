import sharp from "sharp";
import { existsSync } from "node:fs";
import { mkdir } from "node:fs/promises";
import path from "node:path";

// Full-size originals live in design/hero-originals/ (git-ignored, never deployed).
// Each original is resized to a web-ready WebP in public/images/site/.
const sourceDir = path.resolve("design/hero-originals");
const outputDir = path.resolve("public/images/site");

const images = {
  "hero-home": { source: "hero-home.jpg", width: 1920 },
  "hero-services": { source: "hero-services.jpg", width: 1920 },
  "hero-web-development": { source: "hero-web-development.jpg", width: 1920 },
  "hero-seo-services": { source: "hero-seo-services.jpg", width: 1920 },
  "hero-website-security": { source: "hero-website-security.jpg", width: 1920 },
  "hero-work": { source: "hero-work.jpg", width: 1920 },
  "hero-about": { source: "hero-about.jpg", width: 1920 },
  "hero-contact": { source: "hero-contact.jpg", width: 1920 },
  "hero-guides": { source: "hero-guides.jpg", width: 1920 },
};

const only = process.argv.find((arg) => arg.startsWith("--only="))?.slice("--only=".length);

await mkdir(outputDir, { recursive: true });

for (const [name, { source, width }] of Object.entries(images)) {
  if (only && only !== name) continue;
  const input = path.join(sourceDir, source);
  if (!existsSync(input)) {
    console.warn(`Skipped ${name}: ${input} not found`);
    continue;
  }
  const destination = path.join(outputDir, `${name}.webp`);
  const info = await sharp(input)
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: 74, effort: 6 })
    .toFile(destination);
  console.log(`${destination} ${info.width}x${info.height} ${Math.round(info.size / 1024)} KB`);
}
