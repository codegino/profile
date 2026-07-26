'use client';
import {Fade} from 'react-awesome-reveal';
import {useTranslation} from '../../app/i18n/client';
import NextLink from '../../components/basic/NextLink';
import SectionHeader from '../../components/home/SectionHeader';
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
      className="flex flex-col items-center overflow-hidden px-4 py-16 sm:py-20"
    >
      <Fade direction="up" triggerOnce>
        <SectionHeader
          kicker={t('blogSection.kicker')}
          title={t('blogSection.title')}
        />
      </Fade>
      <div className="grid w-full grid-cols-1 gap-8 md:max-w-4xl md:grid-cols-2">
        {blogs.map(blog => (
          <Fade key={blog.slug} direction="up" triggerOnce className="w-full">
            <div className="transition-transform duration-200 hover:-translate-y-1">
              <BlogCardPreview blog={blog} />
            </div>
          </Fade>
        ))}
      </div>
      <NextLink
        href="/blog"
        aria-label="Blogs List"
        className="mt-10 inline-flex items-center gap-2 rounded-lg border-2 border-neutral-300 px-5 py-2.5 font-semibold text-neutral-700 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary-900 hover:text-primary-900 dark:border-neutral-600 dark:text-neutral-200 dark:hover:border-primary-300 dark:hover:text-primary-300"
      >
        {t('blogSection.viewAll')}
      </NextLink>
    </section>
  );
};

export default BlogSuggestionsList;
