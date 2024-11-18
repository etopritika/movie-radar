import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/trending",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
