import type { NextConfig } from "next";

// When deploying to GitHub Pages without a custom domain, the site is hosted under /<repo-name>
// actions/configure-pages exposes this via steps.pages.outputs.base_path
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
