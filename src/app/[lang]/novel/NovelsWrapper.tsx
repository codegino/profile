'use client';
import React, {useState} from 'react';
import {INovelMetadata} from '@/models/mdxFiles';
import BlogsFilter from '@/modules/blog/BlogsFilter';
import BlogCard from '@/modules/common/ContentCard';
import {locales} from '../../i18n/locales.enum';

const BlogsWrapper = ({
  novels,
  lang,
}: {
  novels: INovelMetadata[];
  lang: locales;
}) => {
  const [filtered, setFiltered] = useState<INovelMetadata[]>(novels);
  return (
    <>
      <BlogsFilter
        blogs={novels}
        lang={lang}
        onChange={slugs => {
          const filteredNovels = novels.filter(novel =>
            slugs.includes(novel.slug),
          );

          setFiltered(filteredNovels);
        }}
      />
      {filtered.length > 0 ? (
        filtered.map(novel => {
          return <BlogCard key={novel.slug} blog={novel} slug="novel" />;
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
