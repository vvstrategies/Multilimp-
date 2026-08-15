import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    // Next 16 requires an explicit allowlist; 92 is used by the hero photo so
    // the subject stays sharp on high-DPI screens.
    qualities: [75, 92],
  },
};

export default nextConfig;
