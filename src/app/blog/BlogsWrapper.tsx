'use client';
import React, {useState} from 'react';
import {IBlogMetadata} from '../../models/mdxFiles';
import BlogsFilter from '../../modules/blog/BlogsFilter';
import BlogCard from '../../modules/common/ContentCard';

const BlogsWrapper = ({blogs}: {blogs: IBlogMetadata[]}) => {
  const [filtered, setFiltered] = useState<IBlogMetadata[]>(blogs);
  return (
    <>
      <BlogsFilter
        blogs={blogs}
        onChange={slugs => {
          const filteredBlogs = blogs.filter(blog => slugs.includes(blog.slug));

          setFiltered(filteredBlogs);
        }}
      />
      {filtered.length > 0 ? (
        filtered.map(blog => {
          return <BlogCard key={blog.slug} blog={blog} />;
        })
      ) : (
        <section className="flex flex-col items-center">
          <h2>Empty result👎</h2>
          <h3>Try a different combination</h3>
        </section>
      )}
    </>
  );
};

export default BlogsWrapper;
