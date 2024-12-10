'use client';

import Image from 'next/image';
import NextLink from '../../components/basic/NextLink';
import type {IBlogMetadata} from '../../models/mdxFiles';
import {useTranslation} from '../../app/i18n/client';

type Props = {
  blog: IBlogMetadata;
};

export const BlogCardPreview = ({blog}: Props) => {
  const {t} = useTranslation('common');

  return (
    <figure className="bg-light relative min-h-80 w-full overflow-hidden rounded-2xl text-center shadow-sm shadow-neutral-800 hover:shadow-md hover:shadow-neutral-800 md:max-w-4xl">
      <NextLink href={`/blog/${blog.slug}`} aria-label={blog.title}>
        <Image
          src={blog.bannerId}
          alt={blog.bannerDescription}
          title={blog.bannerDescription}
          fill={true}
          className="object-cover"
          placeholder="blur"
          blurDataURL={blog.bannerId}
        />
        <figcaption className="absolute bottom-0 flex w-full flex-col justify-between bg-neutral-100 px-4 pb-4 opacity-[0.98] dark:bg-neutral-800 md:h-40">
          <h2 className="line-clamp-2 text-balance text-xl">{blog.title}</h2>
          <div>
            <p className="line-clamp-1">{blog.description}</p>
            <p className="mt-2 text-neutral-700 dark:text-neutral-300">
              {t('date', {
                val: new Date(blog.date),
                formatParams: {
                  val: {
                    weekday: 'short',
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  },
                },
              })}
            </p>
          </div>
        </figcaption>
      </NextLink>
    </figure>
  );
};
