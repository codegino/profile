'use client';
import {useTranslation} from '../../app/i18n/client';
import NextLink from '../../components/basic/NextLink';
import type {IBlogMetadata} from '../../models/mdxFiles';
import {BlogCardPreview} from './BlogCardPreview';

type Props = {
  blogs: IBlogMetadata[];
};

const BlogSuggestionsList = ({blogs}: Props) => {
  const {t} = useTranslation('home');

  return (
    <section
      id="blogs-list"
      className="flex flex-col justify-center items-center min-h-screen overflow-hidden
        py-16"
    >
      <h2 className="mb-16 text-4xl relative">
        {t('recent')}&nbsp;
        <NextLink href={'/blog'} aria-label="Blogs List" className="text-4xl">
          {t('blogs')}
        </NextLink>
      </h2>
      <div className="grid-cols-1 w-screen px-6 mb-0 grid md:grid-cols-2 md:max-w-4xl gap-8 ">
        {blogs.map(blog => (
          <BlogCardPreview blog={blog} key={blog.slug} />
        ))}
      </div>
    </section>
  );
};

export default BlogSuggestionsList;
