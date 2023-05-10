const {i18n} = require('./next-i18next.config');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const config = {
  reactStrictMode: true,
  i18n,
  pageExtensions: ['js', 'ts', 'jsx', 'tsx', 'md', 'mdx'],
  compress: true,
  images: {
    domains: [
      'i.imgur.com',
      'media2.giphy.com',
      'images.ctfassets.net',
      'dev-to-uploads.s3.amazonaws.com',
      'lh3.googleusercontent.com',
      'openseauserdata.com',
    ],
    imageSizes: [16, 32, 48, 64],
    deviceSizes: [
      96, 128, 256, 384, 512, 640, 750, 828, 1080, 1200, 1920, 2048, 3840,
    ],
  },
};

module.exports = withBundleAnalyzer(config);
