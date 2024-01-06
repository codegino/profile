'use client';
import {parseAsArrayOf, parseAsString, useQueryState} from 'next-usequerystate';
import {useMemo} from 'react';
import {IBlogMetadata} from '../../models/mdxFiles';
import BlogsFilter from '../../modules/blog/BlogsFilter';
import BlogCard from '../../modules/common/ContentCard';

const BlogsWrapper = ({blogs}: {blogs: IBlogMetadata[]}) => {
  const [selectedTags, setSelectedTags] = useQueryState(
    'tags',
    parseAsArrayOf(parseAsString)
      .withOptions({
        shallow: false,
        scroll: false,
        history: 'replace',
      })
      .withDefault([]),
  );

  const filtered = selectedTags.length
    ? blogs.filter(blog => selectedTags.every(tag => blog.tags.includes(tag)))
    : blogs;

  const tags = useMemo(() => {
    const generatedTags = blogs.reduce((acc: Set<string>, blog) => {
      blog.tags.forEach(tag => {
        if (!acc.has(tag)) {
          acc.add(tag);
        }
      });

      return acc;
    }, new Set<string>());

    return Array.from(generatedTags);
  }, [blogs]);

  return (
    <>
      <BlogsFilter
        tags={tags}
        selectedTags={selectedTags}
        handleTagClick={tag => {
          setSelectedTags(prev => {
            // If the tag is already selected, remove it from the selected tags

            if (prev.includes(tag)) {
              return prev.length === 1 ? null : prev.filter(t => t !== tag);
            }

            // Otherwise, add it to the selected tags
            return [...prev, tag];
          });
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
