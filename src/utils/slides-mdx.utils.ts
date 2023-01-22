import fs from 'fs';
import {globby} from 'globby';
import matter from 'gray-matter';
import path from 'path';
import type {ISlideMetadata} from '../models/slide';

// SLIDES_PATH is useful when you want to get the path to a specific file
export const SLIDES_PATH = path.join(process.cwd(), 'src/slides');

export const getAllBlogsPaths = async () => {
  const pages = await globby(['src/slides/*.mdx']);

  return pages.map(page => page.replace('src/slides/', ''));
};

export const getSlidessMetadata = async () => {
  const slides = (await getAllBlogsPaths()).map((directory): ISlideMetadata => {
    const postFilePath = path.join(SLIDES_PATH, `${directory}`);

    const source = fs.readFileSync(postFilePath);

    const {data} = matter(source);

    return {
      ...(data as ISlideMetadata),
      slug: data.published ? directory.replace('.mdx', '') : '',
    };
  });

  if (process.env.NODE_ENV === 'production') {
    return slides.filter(meta => meta.published);
  }

  return slides;
};
