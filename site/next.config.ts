import type { NextConfig } from "next";

// GitHub Pages: `PAGES_BASE_PATH=/spadafy-service npm run build` writes a static
// site to out/ under that sub-path (see .github/workflows/pages.yml).
// Without it, dev and build behave as before.
const basePath = process.env.PAGES_BASE_PATH || "";

const nextConfig: NextConfig = {
  devIndicators: false,
  ...(basePath && {
    output: "export",
    basePath,
    trailingSlash: true,
    images: { unoptimized: true },
  }),
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
