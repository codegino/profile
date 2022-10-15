import type {FunctionComponent} from 'react';
import clsx from 'clsx';
import {useTranslation} from 'next-i18next';
import Image from 'next/image';
import NextLink from '../../components/basic/NextLink';
import type {IBlogMetadata} from '../../models/blog';

const BlogCard: FunctionComponent<{
  blog: IBlogMetadata;
}> = ({blog}) => {
  const {t} = useTranslation('common');

  return (
    <article
      className={clsx(
        ' flex items-center justify-between flex-col sm:flex-row-reverse',
        'rounded-xl w-full py-4 px-8 bg-lightest',
        'shadow-sm hover:shadow-md hover:shadow-dark shadow-dark mb-5 last:mb-0 max-w-[45rem] sm:max-w-[55rem]',
      )}
    >
      <div
        className={clsx(
          'relative rounded-2xl overflow-hidden',
          'mt-4 shadow-md shadow-dark md:ml-2',
          'h-[7.5rem] sm:h-[15rem] w-full sm:w-[10rem] min-w-[7.5rem] sm:min-w-[20rem]',
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
      <NextLink href={`/blog/${blog.slug}`} aria-label={blog.title}>
        <h2>{blog.title}</h2>
        <h3>{blog.description}</h3>
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
                className="inline-block bg-light border-light py-2 px-4 rounded-xl"
                key={tag}
              >
                {tag}
              </span>
            ))}
          </div>
        ) : null}
      </NextLink>
    </article>
  );
};

export default BlogCard;
