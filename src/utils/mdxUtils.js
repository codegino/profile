import globby from 'globby';
import path from 'path';

// BLOGS_PATH is useful when you want to get the path to a specific file
export const BLOGS_PATH = path.join(process.cwd(), 'src/blog');

export const getAllBlogsPaths = async () => {
  const pages = await globby(['src/blog/*.mdx']);

  return pages.map(page => page.replace('src/blog/', ''));
};
