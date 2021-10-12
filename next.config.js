const withMDX = require('@next/mdx')({
  extension: /\.mdx$/,
});

const config = {
  reactStrictMode: true,
  pageExtensions: ['js', 'ts', 'jsx', 'tsx', 'md', 'mdx'],
  images: {
    domains: [process.env.SUPABASE_DOMAIN],
  },
};

module.exports = withMDX(config);
