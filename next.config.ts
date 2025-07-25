import type { NextConfig } from 'next'
// Import the i18n config

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["images.unsplash.com"]
  }
}

export default nextConfig
