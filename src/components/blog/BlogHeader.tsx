import type {FunctionComponent} from 'react';
import {IGetPlaiceholderReturn} from 'plaiceholder';
import type {IBlogMetadata} from '../../models/blog';
import {BlurringImage} from '../BlurringImage';

type Props = {
  blog: IBlogMetadata;
} & Pick<IGetPlaiceholderReturn, 'svg' | 'img'>;

const BlogHeader: FunctionComponent<Props> = ({blog, img, svg}) => {
  return (
    <article className="mb-8 text-center flex flex-col items-center">
      <h1 className="mb-0">{blog.title}</h1>
      {blog.description && <h2 className="description">{blog.description}</h2>}
      <p className="mb-4">{blog.date}</p>
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
    </article>
  );
};

export default BlogHeader;
