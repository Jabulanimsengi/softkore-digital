import { rm } from "node:fs/promises";
import path from "node:path";

const buildDirs = [".next", ".next-dev"].map((directory) =>
  path.join(process.cwd(), directory),
);

await Promise.all(
  buildDirs.map((directory) => rm(directory, { force: true, recursive: true })),
);
console.log("Removed stale Next build caches.");
