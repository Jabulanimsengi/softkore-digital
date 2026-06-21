import { rm } from "node:fs/promises";
import path from "node:path";

const nextDir = path.join(process.cwd(), ".next");

await rm(nextDir, { force: true, recursive: true });
console.log("Removed stale Next build cache.");
