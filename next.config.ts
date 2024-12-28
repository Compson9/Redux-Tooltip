import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.escuelajs.co",
      },
      {
        protocol: "https",
        hostname: "i.imgur.com", // Add this configuration for the imgur hostname
        pathname: "/**", // Allow all paths under this hostname
      },
      {
        protocol: "https",
        hostname: "cdn.dummyjson.com", // Add dummyjson hostname
        pathname: "/products/images/**", // Allow specific paths for product images
      },
    ],
  },
  /* other configuration options */
};

export default nextConfig;
