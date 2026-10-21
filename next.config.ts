import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  // The site has two root layouts (English and Bangla), so unknown URLs need
  // their own complete 404 page: app/global-not-found.tsx.
  experimental: { globalNotFound: true },
  async redirects() {
    // "Why Us" became the About page.
    return [{ source: "/why-us", destination: "/about", permanent: true }];
  },
};

export default nextConfig;
