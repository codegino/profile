const config = {
  reactStrictMode: true,
  pageExtensions: ['js', 'ts', 'jsx', 'tsx', 'md', 'mdx'],
  images: {
    domains: [process.env.SUPABASE_DOMAIN, 'i.imgur.com', 'media2.giphy.com'],
  },
};

module.exports = config;
