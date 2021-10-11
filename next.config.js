const withMDX = require('@next/mdx')({
  extension: /\.mdx$/,
});

const config = {
  reactStrictMode: true,
  pageExtensions: ['js', 'ts', 'jsx', 'tsx', 'md', 'mdx'],
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap',
      },
    ];
  },
};

module.exports = withMDX(config);
