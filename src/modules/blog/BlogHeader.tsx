'use client';
import type {FunctionComponent} from 'react';
import {useTranslation} from '../../app/i18n/client';
import {BlurringImage} from '../../components/BlurringImage';
import type {IBlogMetadata} from '../../models/mdxFiles';
import type {BlurImageType} from '../../utils/image-blur.utils';

type Props = {
  blog: IBlogMetadata;
} & Pick<BlurImageType, 'svg' | 'img'>;

const BlogHeader: FunctionComponent<Props> = ({blog, img, svg}) => {
  const {t} = useTranslation('common');

  return (
    <article className="flex flex-col items-center text-center sm:pt-4">
      <h1 className="mb-0 text-balance text-4xl">{blog.title}</h1>
      {blog.description && (
        <h2 className="description text-balance">{blog.description}</h2>
      )}
      <p className="mb-4 w-full text-neutral-700 dark:text-neutral-200">
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
      {img && svg && !blog.hideBanner ? (
        <div className="relative flex h-[60vh] max-h-[35rem] w-[95vw] items-center justify-center md:max-h-[50rem] lg:h-[35rem] lg:w-[65rem] lg:px-10">
          <BlurringImage
            alt={blog.bannerDescription}
            title={blog.bannerDescription}
            img={img}
            svg={svg}
            fill
            priority={true}
            className="rounded-xl object-cover object-center shadow-sm shadow-neutral-900"
          />
        </div>
      ) : null}
      {blog.bannerDescription ? (
        <aside className="mt-1 line-clamp-1 w-full text-sm text-neutral-700 dark:text-neutral-200">
          {blog.bannerDescription}
        </aside>
      ) : null}
      <br />
    </article>
  );
};

export default BlogHeader;
