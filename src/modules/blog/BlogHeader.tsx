'use client';
import type {FunctionComponent} from 'react';
import {useParams} from 'next/navigation';
import {BlurringImage} from '../../components/BlurringImage';
import type {IBlogMetadata} from '../../models/mdxFiles';
import {useTranslation} from '../../app/i18n/client';
import type {BlurImageType} from '../../utils/image-blur.utils';
import {locales} from '../../app/i18n/locales.enum';

type Props = {
  blog: IBlogMetadata;
} & Pick<BlurImageType, 'svg' | 'img'>;

const BlogHeader: FunctionComponent<Props> = ({blog, img, svg}) => {
  const locale = useParams()?.lang as locales;
  const {t} = useTranslation(locale, 'common');

  return (
    <article className="sm:pt-4 text-center flex flex-col items-center">
      <h1 className="mb-0 text-4xl text-balance">{blog.title}</h1>
      {blog.description && (
        <h2 className="description text-balance">{blog.description}</h2>
      )}
      <p className="mb-4 text-neutral-700 dark:text-neutral-200">
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
        <div className="relative h-[60vh] w-[95vw] lg:h-[35rem] lg:w-[65rem] max-h-[35rem] md:max-h-[50rem] lg:px-10 flex justify-center items-center">
          <BlurringImage
            alt={blog.bannerDescription}
            title={blog.bannerDescription}
            img={img}
            svg={svg}
            fill
            priority={true}
            className="rounded-xl shadow-sm shadow-neutral-900 object-cover object-center"
          />
        </div>
      ) : null}
      {blog.bannerDescription ? (
        <aside className="line-clamp-1 mt-1 w-full text-neutral-700 dark:text-neutral-200 text-sm">
          {blog.bannerDescription}
        </aside>
      ) : null}
      <br />
    </article>
  );
};

export default BlogHeader;
