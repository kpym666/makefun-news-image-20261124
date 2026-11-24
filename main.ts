// Entry program for make.fun competition news-image-20261124.
//
// The entry image is pre-rendered and stored in this repository as
// entry.png. This program simply copies it to the output directory
// named by MAKEFUN_OUTPUT_DIR, so both grader runs produce identical
// bytes with no network access and no randomness.

import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = dirname(fileURLToPath(import.meta.url));

const outputDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outputDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

mkdirSync(outputDir, { recursive: true });
copyFileSync(join(repoRoot, "entry.png"), join(outputDir, "entry.png"));
