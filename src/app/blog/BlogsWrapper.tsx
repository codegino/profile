'use client';
import {parseAsArrayOf, parseAsString, useQueryState} from 'next-usequerystate';
import {useMemo} from 'react';
import {IBlogMetadata} from '../../models/mdxFiles';
import BlogsFilter from '../../modules/blog/BlogsFilter';
import BlogCard from '../../modules/common/ContentCard';
import SearchField from './SearchField';

const BlogsWrapper = ({blogs}: {blogs: IBlogMetadata[]}) => {
  const [selectedTags, setSelectedTags] = useQueryState(
    'tags',
    parseAsArrayOf(parseAsString).withDefault([]),
  );

  const [search, setSearch] = useQueryState('search');

  let filtered = blogs;

  filtered = search
    ? blogs.filter(blog => {
        if (
          blog.title.toLowerCase().includes(search.toLowerCase()) ||
          blog.description.toLowerCase().includes(search.toLowerCase())
        ) {
          return true;
        }
      })
    : blogs;

  filtered = selectedTags.length
    ? blogs.filter(blog => selectedTags.every(tag => blog.tags.includes(tag)))
    : filtered;

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
      <SearchField />
      <br />
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
          <button
            className="mt-4 rounded-md bg-primary-600 px-4 py-2 text-white hover:bg-primary-700"
            onClick={() => {
              setSelectedTags(null);
              setSearch(null);
            }}
          >
            Reset
          </button>
        </section>
      )}
    </>
  );
};

export default BlogsWrapper;
