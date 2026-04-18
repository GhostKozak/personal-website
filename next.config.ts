import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ["192.168.1.39","192.168.1.41"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.net",
        port: "",
        pathname: "/**"
      }
    ]
  }
};

export default nextConfig;
