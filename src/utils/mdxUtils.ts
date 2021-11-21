import fs from 'fs';
import globby from 'globby';
import matter from 'gray-matter';
import path from 'path';
import type {IBlogMetadata} from '../models/blog';

// BLOGS_PATH is useful when you want to get the path to a specific file
export const BLOGS_PATH = path.join(process.cwd(), 'src/blog');

export const getAllBlogsPaths = async () => {
  const pages = await globby(['src/blog/*.mdx']);

  return pages.map(page => page.replace('src/blog/', ''));
};

export const getBlogsMetadata = async () => {
  const blogs = (await getAllBlogsPaths()).map((directory): IBlogMetadata => {
    const postFilePath = path.join(BLOGS_PATH, `${directory}`);

    const source = fs.readFileSync(postFilePath);

    const {data} = matter(source);

    return {
      ...(data as IBlogMetadata),
      slug: data.published ? directory.replace('.mdx', '') : '',
    };
  });

  if (process.env.NODE_ENV === 'production') {
    return blogs.filter(meta => meta.published);
  }

  return blogs;
};
