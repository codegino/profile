import fs from 'fs';
import path from 'path';

// BLOGS_PATH is useful when you want to get the path to a specific file
export const BLOGS_PATH = path.join(process.cwd(), 'src/blog');

export const getAllBlogsPaths = () => {
  const blogDirectories = path.join(BLOGS_PATH);

  const paths = fs.readdirSync(blogDirectories).map(dir => dir);

  return paths;
};
