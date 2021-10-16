const config = {
  reactStrictMode: true,
  pageExtensions: ['js', 'ts', 'jsx', 'tsx', 'md', 'mdx'],
  images: {
    domains: [process.env.SUPABASE_DOMAIN, 'i.imgur.com'],
  },
};

module.exports = config;
