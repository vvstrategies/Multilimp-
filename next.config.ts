import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    // Next 16 requires an explicit allowlist; 92 is used by the hero photo so
    // the subject stays sharp on high-DPI screens.
    qualities: [75, 92],
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
