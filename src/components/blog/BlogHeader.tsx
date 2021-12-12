import React, {FunctionComponent} from 'react';
import {IGetPlaiceholderReturn} from 'plaiceholder';
import type {IBlogMetadata} from '../../models/blog';
import {BlurringImage} from '../BlurringImage';

type Props = {
  blog: IBlogMetadata;
} & Pick<IGetPlaiceholderReturn, 'svg' | 'img'>;

const BlogHeader: FunctionComponent<Props> = ({blog, img, svg}) => {
  return (
    <article className="mb-8 text-center">
      <h1>{blog.title}</h1>
      {blog.description && <h2 className="description">{blog.description}</h2>}
      <p className="mb-4">{blog.date}</p>
      {img && svg && !blog.hideBanner ? (
        <div className="cover-image">
          <BlurringImage
            alt={blog.bannerDescription}
            img={img}
            svg={svg}
            layout="responsive"
            height={700}
            width={1200}
            objectFit="cover"
            objectPosition="center"
            className="rounded-xl"
          />
        </div>
      ) : null}
      {blog.bannerDescription ? (
        <aside className="mt-1">
          <i className="text-2xl">{blog.bannerDescription}</i>
        </aside>
      ) : null}
    </article>
  );
};

export default BlogHeader;
