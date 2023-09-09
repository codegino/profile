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
    <article className="mb-8 text-center flex flex-col items-center">
      <h1 className="mb-0">{blog.title}</h1>
      {blog.description && <h2 className="description">{blog.description}</h2>}
      <p className="mb-4">
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
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            priority={true}
            className="rounded-xl shadow-sm shadow-dark"
          />
        </div>
      ) : null}
      {blog.bannerDescription ? (
        <aside className="mt-1">
          <i className="text-base">{blog.bannerDescription}</i>
        </aside>
      ) : null}
      <br />
      {locale !== 'en' && <i>Sorry, this blog is only available in English</i>}
    </article>
  );
};

export default BlogHeader;
