const withMDX = require('@next/mdx')({
  extension: /\.mdx$/,
});

const config = {
  reactStrictMode: true,
  pageExtensions: ['js', 'ts', 'jsx', 'tsx', 'md', 'mdx'],
};

module.exports = withMDX(config);
