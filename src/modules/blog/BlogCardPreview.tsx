'use client';

import Image from 'next/image';
import NextLink from '../../components/basic/NextLink';
import type {IBlogMetadata} from '../../models/mdxFiles';
import {useTranslation} from '../../app/i18n/client';
import {useParams} from 'next/navigation';
import {locales} from '../../app/i18n/locales.enum';
import {createI18nUrlSegment} from '@/app/i18n/create-slug';

type Props = {
  blog: IBlogMetadata;
};

export const BlogCardPreview = ({blog}: Props) => {
  const locale = useParams()?.lang as locales;
  const {t} = useTranslation(locale, 'common');

  return (
    <figure className="relative w-ful min-h-[20rem] text-center overflow-hidden shadow-sm hover:shadow-md hover:shadow-neutral-800 shadow-neutral-800 rounded-2xl bg-light md:max-w-4xl">
      <NextLink
        href={createI18nUrlSegment(`/blog/${blog.slug}`, locale)}
        aria-label={blog.title}
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
        <figcaption className="absolute bottom-0 w-full bg-white dark:bg-black pb-4 opacity-95 px-4 md:h-[10rem] flex flex-col justify-between">
          <h2 className="line-clamp-2 text-xl">{blog.title}</h2>
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
