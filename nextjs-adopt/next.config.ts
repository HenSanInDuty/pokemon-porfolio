import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  i18n: {
    locales: ['en', 'vi'],
    defaultLocale: 'en',
    localeDetection: false
  }
};

export default nextConfig;
