import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
  /* config options here */
  webpack(config, { isServer }) {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ['@svgr/webpack'],
    });

    if (isServer) {
      config.resolve.fallback = { ...config.resolve.fallback, fs: false, path: false };
    }

    return config;
  },
};

export default nextConfig;
