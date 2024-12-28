import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.imgur.com",
        port: "",
        pathname: "/**", // Matches all paths under the domain
      },
    ],
  },
  /* other config options here */
};

export default nextConfig;
