import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || (isProd ? "/MorphDoc-Suite" : "");

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  images: {
    loader: "custom",
    loaderFile: "./image-loader.ts",
  },
};

export default nextConfig;
