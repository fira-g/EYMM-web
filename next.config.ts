import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "joshuaproject.net",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
