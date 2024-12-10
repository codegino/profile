'use client';

import type {FunctionComponent} from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import NextLink from '../../components/basic/NextLink';
import type {IBlogMetadata} from '../../models/mdxFiles';
import {ISlideMetadata} from '../../models/slide';
import {useTranslation} from '../../app/i18n/client';

const BlogCard: FunctionComponent<{
  blog: IBlogMetadata | ISlideMetadata;
  slug?: 'blog' | 'novel';
}> = ({blog, slug: feature = 'blog'}) => {
  const {t} = useTranslation('blog');

  return (
    <figure
      className={clsx(
        'relative flex flex-col items-center justify-between sm:flex-row-reverse',
        'h-[25rem] w-full rounded-xl bg-neutral-50 dark:bg-neutral-800 sm:h-80 sm:px-8 sm:py-4',
        'mb-8 max-w-[45rem] shadow-sm shadow-neutral-700 last:mb-0 hover:shadow-md hover:shadow-neutral-800 sm:max-w-[55rem]',
      )}
    >
      <div
        className={clsx(
          'absolute overflow-hidden rounded-2xl sm:relative',
          'inset-0',
          'shadow-md shadow-neutral-600 sm:ml-2 sm:mt-4',
          'size-full sm:h-60 sm:w-80 sm:min-w-80',
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
      <figcaption className="absolute bottom-0 w-full bg-neutral-50 p-4 opacity-95 dark:bg-neutral-800 sm:relative sm:p-0 sm:opacity-100">
        <NextLink href={`/${feature}/${blog.slug}`} aria-label={blog.title}>
          <h2 className="line-clamp-2 text-balance">{blog.title}</h2>
          <h3 className="line-clamp-2 text-balance text-neutral-800 dark:text-neutral-200">
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
            <div className="mt-4 flex flex-wrap gap-2 sm:mt-8">
              {blog.tags.map(tag => (
                <span
                  className="inline-block flex-nowrap rounded-xl bg-white px-3 py-1 shadow-sm shadow-neutral-200 dark:bg-neutral-900 dark:shadow-neutral-900"
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
