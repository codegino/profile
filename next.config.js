const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const config = {
  reactStrictMode: true,
  pageExtensions: ['js', 'ts', 'jsx', 'tsx', 'md', 'mdx'],
  compress: true,
  images: {
    domains: [process.env.SUPABASE_DOMAIN, 'i.imgur.com', 'media2.giphy.com'],
  },
};

module.exports = withBundleAnalyzer(config);
