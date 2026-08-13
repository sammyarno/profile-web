import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // output: 'export',
  // distDir: 'build',
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
