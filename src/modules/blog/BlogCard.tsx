import type {FunctionComponent} from 'react';
import clsx from 'clsx';
import {useTranslation} from 'next-i18next';
import Image from 'next/legacy/image';
import NextLink from '../../components/basic/NextLink';
import type {IBlogMetadata} from '../../models/blog';

const BlogCard: FunctionComponent<{
  blog: IBlogMetadata;
}> = ({blog}) => {
  const {t} = useTranslation('common');

  return (
    <figure
      className={clsx(
        'relative flex items-center justify-between flex-col sm:flex-row-reverse',
        'rounded-xl w-full sm:py-4 sm:px-8 bg-lightest h-[25rem] sm:h-[20rem]',
        'shadow-sm hover:shadow-md hover:shadow-dark shadow-dark mb-8 last:mb-0 max-w-[45rem] sm:max-w-[55rem]',
      )}
    >
      <div
        className={clsx(
          'absolute sm:relative rounded-2xl overflow-hidden',
          'top-0 left-0 right-0 bottom-0',
          'sm:mt-4 shadow-md shadow-dark sm:ml-2',
          'h-full w-full sm:h-[15rem] sm:w-[20rem] sm:min-w-[20rem]',
        )}
      >
        <Image
          src={blog.bannerId}
          alt={blog.bannerDescription}
          title={blog.bannerDescription}
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          blurDataURL={blog.bannerId}
        />
      </div>
      <figcaption className="bg-white opacity-90 sm:opacity-100 p-4 sm:p-0 absolute bottom-0 w-full sm:relative">
        <NextLink href={`/blog/${blog.slug}`} aria-label={blog.title}>
          <h2 className="line-clamp-2">{blog.title}</h2>
          <h3 className="line-clamp-2">{blog.description}</h3>
          <p className="mt-3">
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
                  className="inline-block bg-light border-light py-2 px-4 rounded-xl flex-nowrap"
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
