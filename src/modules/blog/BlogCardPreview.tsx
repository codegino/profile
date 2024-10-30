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

  // Generate random rotations for note and stamp
  const noteRotation = Math.random() * 6 - 3;
  const stampRotation = Math.random() * 10 - 5;

  return (
    <NextLink href={`/blog/${blog.slug}`} aria-label={blog.title}>
      <div
        className="relative min-h-[16rem] w-full md:max-w-md p-6 m-4 bg-yellow-100 dark:bg-yellow-200 
          hover:shadow-lg transition-all duration-300 cursor-pointer"
        style={{
          transform: `rotate(${noteRotation}deg)`,
          boxShadow: '2px 3px 15px rgba(0,0,0,0.15)',
          clipPath: 'polygon(0% 0%, 100% 1%, 100% 100%, 1% 100%)',
        }}
      >
        <div className="absolute top-0 right-0 w-0 h-0 border-0 border-t-[40px] border-r-[40px] border-t-yellow-200 border-r-yellow-300 dark:border-t-yellow-300 dark:border-r-yellow-400" />

        <div className="flex flex-col h-full">
          <h2 className="mb-4 text-2xl font-bold text-neutral-800 line-clamp-2 text-balance">
            {blog.title}
          </h2>

          <p className="flex-grow mb-4 text-neutral-700 line-clamp-3">
            {blog.description}
          </p>

          <div className="flex justify-between items-end">
            <p className="text-sm text-neutral-600 italic">
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

            {/* Stamp-like image */}
            <div
              className="relative w-24 h-24 border-2 border-neutral-800/20 rounded-sm overflow-hidden"
              style={{
                transform: `rotate(${stampRotation}deg)`,
                boxShadow: '1px 1px 3px rgba(0,0,0,0.1)',
              }}
            >
              <Image
                src={blog.bannerId}
                alt={blog.bannerDescription}
                title={blog.bannerDescription}
                fill={true}
                className="object-cover grayscale opacity-90"
                placeholder="blur"
                blurDataURL={blog.bannerId}
              />
            </div>
          </div>
        </div>
      </div>
    </NextLink>
  );
};
