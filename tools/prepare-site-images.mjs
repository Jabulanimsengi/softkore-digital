import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const sourceDir = "C:/Users/ramos/.codex/generated_images/019f6a55-cf85-7cf0-a5ef-cd5c432210b7";
const outputDir = path.resolve("public/images/site");

const images = {
  "overview-industries": "exec-afdccde8-cb6b-4511-b58e-65466a3775a0.png",
  "overview-ai": "exec-6785cf31-0411-4725-9f03-a423eb246563.png",
  "overview-guides": "exec-7defe627-48ad-4b1b-9f87-8dca5f31a67f.png",
  "overview-work": "exec-60654270-bec4-462f-9141-f07096cc9e8b.png",
  "about-studio": "exec-31595da4-374c-4f51-865a-a2202bbb0b68.png",
  "industry-salon": "exec-7e65ca0d-ce45-489d-8d79-f9ab3d4ed622.png",
  "industry-ecommerce": "exec-3a9ac430-ae51-46c8-bb38-c9f0d3603c7b.png",
  "industry-medical": "exec-77646682-f09c-469c-b91a-e9d39f925b6f.png",
  "industry-real-estate": "exec-2229cbbd-2f8e-48bc-b2bb-2620abac8f0a.png",
  "industry-legal": "exec-3565ae8f-88a2-442d-8530-8823453ac16c.png",
  "industry-dental": "exec-b2847213-a3a8-43d1-a34a-dc6f4aafbb24.png",
  "industry-accounting": "exec-0bcdb0ca-83b9-48a6-a18b-5f110fcfadbd.png",
  "industry-construction": "exec-42344e16-a66d-4a3f-861d-f6c10bc5ecca.png",
  "industry-plumber": "exec-b13f4ab2-b8f4-4933-b3ad-015104b8e1dd.png",
  "industry-logistics": "exec-671485f0-ebce-4bfe-b8a1-c8cc4437a426.png",
  "guide-pricing": "exec-529acf87-6bc6-4197-9e72-d0b56f8685eb.png",
  "guide-web-vs-app": "exec-b73798c3-f2ef-4814-bed4-56317bc55efe.png",
  "guide-technical-seo": "exec-cb2bbbaa-ff94-4445-88db-369a949bfdd2.png",
  "guide-maintenance": "exec-dc3001ea-bc7b-43b7-8f3b-acdcb6c8e15d.png",
  "guide-not-ranking": "exec-aeb63f25-78f3-40ad-a031-735de1270d19.png",
  "local-gauteng": "exec-644fc765-151f-445e-b7aa-b10ae86a952e.png",
};

await mkdir(outputDir, { recursive: true });

for (const [name, source] of Object.entries(images)) {
  const destination = path.join(outputDir, `${name}.webp`);
  await sharp(path.join(sourceDir, source))
    .resize({ width: 1600, withoutEnlargement: true })
    .webp({ quality: 84, effort: 5 })
    .toFile(destination);
  console.log(destination);
}
