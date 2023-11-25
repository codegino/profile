const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  pageExtensions: ['js', 'ts', 'jsx', 'tsx', 'md', 'mdx'],
  compress: true,
  images: {
    remotePatterns: [
      {hostname: 'i.imgur.com'},
      {hostname: 'media2.giphy.com'},
      {hostname: 'images.ctfassets.net'},
      {hostname: 'dev-to-uploads.s3.amazonaws.com'},
      {hostname: 'lh3.googleusercontent.com'},
      {hostname: 'openseauserdata.com'},
    ],
    imageSizes: [16, 32, 48, 64],
    deviceSizes: [
      96, 128, 256, 384, 512, 640, 750, 828, 1080, 1200, 1920, 2048, 3840,
    ],
  },
};

module.exports = withBundleAnalyzer(config);
