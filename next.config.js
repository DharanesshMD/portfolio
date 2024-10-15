const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'media.dev.to',
        pathname: '**',
      },
    ],
    unoptimized: true, // Required for static export
  },
  output: 'export',
  // Exclude dynamic routes from static export
  exportPathMap: async function (defaultPathMap) {
    const pathMap = { ...defaultPathMap };
    delete pathMap['/blog/[slug]'];
    return pathMap;
  },
  // Ignore ESLint errors during build (optional, use with caution)
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Ignore TypeScript errors during build (optional, use with caution)
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;