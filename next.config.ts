import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Set turbopack config at the top level
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
