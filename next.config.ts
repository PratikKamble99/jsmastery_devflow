import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  serverExternalPackages: ["pino", "pino-pretty"],
  images: {
    domains: ["static.vecteezy.com"],
  },
};

export default nextConfig;
