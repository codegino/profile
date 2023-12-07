'use client';

import type {FunctionComponent} from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import NextLink from '../../components/basic/NextLink';
import type {IBlogMetadata} from '../../models/mdxFiles';
import {ISlideMetadata} from '../../models/slide';
import {useTranslation} from '../../app/i18n/client';
import {useParams} from 'next/navigation';
import {locales} from '../../app/i18n/locales.enum';
import {createI18nUrlSegment} from '@/app/i18n/create-slug';

const BlogCard: FunctionComponent<{
  blog: IBlogMetadata | ISlideMetadata;
  slug?: 'blog' | 'novel';
}> = ({blog, slug: feature = 'blog'}) => {
  const lang = useParams()?.lang as locales;
  const {t} = useTranslation(lang, 'blog');

  return (
    <figure
      className={clsx(
        'relative flex items-center justify-between flex-col sm:flex-row-reverse',
        'rounded-xl w-full sm:py-4 sm:px-8 bg-neutral-50 dark:bg-neutral-800 h-[25rem] sm:h-[20rem]',
        'shadow-sm hover:shadow-md hover:shadow-neutral-800 shadow-neutral-700 mb-8 last:mb-0 max-w-[45rem] sm:max-w-[55rem]',
      )}
    >
      <div
        className={clsx(
          'absolute sm:relative rounded-2xl overflow-hidden',
          'top-0 left-0 right-0 bottom-0',
          'sm:mt-4 shadow-md shadow-neutral-600 sm:ml-2',
          'h-full w-full sm:h-[15rem] sm:w-[20rem] sm:min-w-[20rem]',
        )}
      >
        <Image
          src={blog.bannerId}
          alt={blog.bannerDescription}
          title={blog.bannerDescription}
          fill={true}
          className="object-cover"
          placeholder="blur"
          blurDataURL={blog.bannerId}
        />
      </div>
      <figcaption className="bg-neutral-50 dark:bg-neutral-800 opacity-95 sm:opacity-100 p-4 sm:p-0 absolute bottom-0 w-full sm:relative">
        <NextLink
          href={createI18nUrlSegment(`/${feature}/${blog.slug}`, lang)}
          aria-label={blog.title}
        >
          <h2 className="line-clamp-2">{blog.title}</h2>
          <h3 className="line-clamp-2 text-neutral-800 dark:text-neutral-200">
            {blog.description}
          </h3>
          <p className="mt-3 text-neutral-700 dark:text-neutral-300">
            {t('date', {
              val: new Date(blog.date),
              formatParams: {
                val: {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                },
              },
            })}
          </p>

          {blog.tags && blog.tags.length ? (
            <div className="mt-4 sm:mt-8 flex gap-2 flex-wrap">
              {blog.tags.map(tag => (
                <span
                  className="inline-block bg-white shadow-sm shadow-neutral-200 dark:shadow-neutral-900 dark:bg-neutral-900 py-1 px-3 rounded-xl flex-nowrap"
                  key={tag}
                >
                  {tag}
                </span>
              ))}
            </div>
          ) : null}
        </NextLink>
      </figcaption>
    </figure>
  );
};

export default BlogCard;
