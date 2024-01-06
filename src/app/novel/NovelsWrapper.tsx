'use client';
import {INovelMetadata} from '@/models/mdxFiles';
import BlogCard from '@/modules/common/ContentCard';

const BlogsWrapper = ({novels}: {novels: INovelMetadata[]}) => {
  return (
    <>
      {novels.length > 0 &&
        novels.map(novel => {
          return <BlogCard key={novel.slug} blog={novel} slug="novel" />;
        })}
    </>
  );
};

export default BlogsWrapper;
