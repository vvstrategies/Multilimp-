import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    // Next 16 requires an explicit allowlist for generated image quality.
    qualities: [75],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.googleusercontent.com",
      },
    ],
  },
  async redirects() {
    return [
      "taboao-da-serra",
      "osasco",
      "santo-amaro",
      "embu-das-artes",
      "itapevi",
      "cotia",
    ].map((slug) => ({
      source: `/areas-atendidas/${slug}`,
      destination: "/areas-atendidas",
      permanent: true,
    }));
  },
};

export default nextConfig;
