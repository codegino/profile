const config = {
  reactStrictMode: true,
  pageExtensions: ['js', 'ts', 'jsx', 'tsx', 'md', 'mdx'],
  images: {
    domains: [process.env.SUPABASE_DOMAIN],
  },
};

module.exports = config;
