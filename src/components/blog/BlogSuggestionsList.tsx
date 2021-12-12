import React from 'react';
import type {IBlogMetadata} from '../../models/blog';
import NextLink from '../basic/NextLink';
import {BlogCardPreview} from './BlogCardPreview';

type Props = {
  blogs: IBlogMetadata[];
};

const BlogSuggestionsList = ({blogs}: Props) => {
  return (
    <section
      id="blogs-list"
      className="flex flex-col justify-center items-center min-h-screen overflow-hidden
        py-16 bg-light"
    >
      <h2 className="mb-16 text-6xl relative">
        Recent&nbsp;
        <NextLink
          href="/blog"
          aria-label="Blogs List"
          className="text-6xl text-primary-dark"
        >
          Blogs
        </NextLink>
      </h2>
      <div className="grid-cols-1 w-screen px-6 mb-0 grid md:grid-cols-2 md:max-w-7xl gap-8 ">
        {blogs.map(blog => (
          <BlogCardPreview blog={blog} key={blog.slug} />
        ))}
      </div>
    </section>
  );
};

export default BlogSuggestionsList;
