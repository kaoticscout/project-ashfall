import fs from "node:fs";
import path from "node:path";

const outDir = path.join(process.cwd(), "out");

// Next.js static export outputs to `out/`.
if (!fs.existsSync(outDir)) {
  console.warn(`[postbuild] No out/ directory found at: ${outDir}`);
  process.exit(0);
}

// GitHub Pages runs Jekyll by default; `.nojekyll` ensures `_next/` is served.
const noJekyllPath = path.join(outDir, ".nojekyll");
fs.writeFileSync(noJekyllPath, "");
console.log(`[postbuild] Wrote ${noJekyllPath}`);

