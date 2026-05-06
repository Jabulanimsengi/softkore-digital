import { rm } from "node:fs/promises";
import path from "node:path";

const outDir = path.join(process.cwd(), "out");

await rm(outDir, { force: true, recursive: true });
console.log("Removed stale Next export directory.");
