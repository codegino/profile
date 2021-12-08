import React from 'react';
import Link from 'next/link';
import type {IBlogMetadata} from '../../models/blog';
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
        <Link href="/blog">
          <a aria-label="Blogs List" className="text-6xl text-primary-dark">
            Blogs
          </a>
        </Link>
      </h2>
      <section className="grid-cols-1 w-screen px-6 mb-0 grid md:grid-cols-2 md:max-w-7xl gap-8 ">
        {blogs.map(blog => (
          <BlogCardPreview blog={blog} key={blog.slug} />
        ))}
      </section>
    </section>
  );
};

export default BlogSuggestionsList;
