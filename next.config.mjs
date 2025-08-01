/** @type {import('next').NextConfig} */

const webpackConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};
const nextConfig = {
  output: 'standalone',
  basePath: '/deployment',
  async headers() {
    return [
      {
        source: '/:path*(.svg|.png|.jpg)', // Match .svg, .jpg and .png files
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=604800, immutable', // Cache for 1 week, immutable
          },
        ],
      },
    ];
  },
  ...webpackConfig,
};

export default nextConfig;
