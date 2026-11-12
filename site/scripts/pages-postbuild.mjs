// GitHub Pages post-build: Next leaves absolute url(/fonts/…) in CSS untouched, so
// prefix them with the base path, and add .nojekyll so Pages serves _next/.
// Usage: PAGES_BASE_PATH=/spadafy-service node scripts/pages-postbuild.mjs
import { readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const base = process.env.PAGES_BASE_PATH;
if (!base) throw new Error("PAGES_BASE_PATH is not set");

const walk = (dir) =>
  readdirSync(dir).flatMap((f) => (statSync(join(dir, f)).isDirectory() ? walk(join(dir, f)) : [join(dir, f)]));

let n = 0;
for (const file of walk("out/_next/static").filter((f) => f.endsWith(".css"))) {
  const css = readFileSync(file, "utf8");
  const next = css.replace(/url\((["']?)\/fonts\//g, `url($1${base}/fonts/`);
  if (next !== css) {
    writeFileSync(file, next);
    n++;
  }
}
writeFileSync("out/.nojekyll", "");
console.log(`pages-postbuild: prefixed font URLs in ${n} CSS file(s) with ${base}`);
