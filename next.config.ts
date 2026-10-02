import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Produces .next/standalone for the small Docker image (see Dockerfile).
  output: "standalone",
};

export default nextConfig;
