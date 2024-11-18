import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/trending/1",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
