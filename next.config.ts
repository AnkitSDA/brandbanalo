import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // basePath: '/brandbanalo',
  // assetPrefix: '/brandbanalo',
};

export default nextConfig;
