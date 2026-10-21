import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async redirects() {
    // "Why Us" became the About page.
    return [{ source: "/why-us", destination: "/about", permanent: true }];
  },
};

export default nextConfig;
