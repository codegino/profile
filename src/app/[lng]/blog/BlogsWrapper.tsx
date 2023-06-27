'use client';
import React, {useState} from 'react';
import {IBlogMetadata} from '../../../models/blog';
import BlogsFilter from '../../../modules/blog/BlogsFilter';
import BlogCard from '../../../modules/common/ContentCard';
import {locales} from '../../i18n/locales.enum';

const BlogsWrapper = ({
  blogs,
  lang,
}: {
  blogs: IBlogMetadata[];
  lang: locales;
}) => {
  const [filtered, setFiltered] = useState<IBlogMetadata[]>(blogs);
  return (
    <>
      <BlogsFilter
        blogs={blogs}
        lang={lang}
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
