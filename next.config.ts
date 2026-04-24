import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export', // Critical: Generates an 'out' folder
  images: {
    unoptimized: true, // Required for static exports
  },
};

export default nextConfig;
