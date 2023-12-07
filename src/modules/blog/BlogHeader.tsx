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
    <article className="my-8 text-center flex flex-col items-center">
      <h1 className="mb-0 text-4xl">{blog.title}</h1>
      {blog.description && (
        <h2 className="description text-neutral-900 dark:text-neutral-50">
          {blog.description}
        </h2>
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
        <div className="relative h-[66vh] w-[95vw] lg:h-[35rem] lg:w-[65rem] lg:px-10 flex justify-center items-center">
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
        <aside className="mt-1 text-neutral-800 dark:text-neutral-100">
          {blog.bannerDescription}
        </aside>
      ) : null}
      <br />
      {locale !== 'en' && <i>Sorry, this blog is only available in English</i>}
    </article>
  );
};

export default BlogHeader;
