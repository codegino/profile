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
      className="flex min-h-screen flex-col items-center justify-center overflow-hidden
        py-16"
    >
      <h2 className="relative mb-16 text-4xl">
        {t('recent')}&nbsp;
        <NextLink href={'/blog'} aria-label="Blogs List" className="text-4xl">
          {t('blogs')}
        </NextLink>
      </h2>
      <div className="mb-0 grid w-screen grid-cols-1 gap-8 px-6 md:max-w-4xl md:grid-cols-2 ">
        {blogs.map(blog => (
          <BlogCardPreview blog={blog} key={blog.slug} />
        ))}
      </div>
    </section>
  );
};

export default BlogSuggestionsList;
