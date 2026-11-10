import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // output: 'export',
  // distDir: 'build',
  turbopack: {
    root: __dirname,
  },
  async redirects() {
    return [
      {
        source: '/indozen',
        destination: 'https://indozen.space',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
