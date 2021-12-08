import React, {FunctionComponent} from 'react';
import styled from '@emotion/styled';
import {IGetPlaiceholderReturn} from 'plaiceholder';
import type {IBlogMetadata} from '../../models/blog';
import {BlurringImage} from '../BlurringImage';

type Props = {
  blog: IBlogMetadata;
} & Pick<IGetPlaiceholderReturn, 'svg' | 'img'>;

const BlogHeader: FunctionComponent<Props> = ({blog, img, svg}) => {
  return (
    <Article>
      <h1>{blog.title}</h1>
      {blog.description && (
        <>
          <h2 className="description">{blog.description}</h2>
          <p>{blog.date}</p>
        </>
      )}
      {img && svg && !blog.hideBanner ? (
        <div className="cover-image">
          <BlurringImage
            alt="Hero photo"
            img={img}
            svg={svg}
            layout="responsive"
            height={700}
            width={1200}
            objectFit="cover"
            objectPosition="center"
          />
          <style jsx>{`
            .cover-image {
              border-radius: 0.5rem;
              margin-top: var(--spacing-medium);
            }
          `}</style>
        </div>
      ) : null}
      {blog.bannerDescription ? (
        <aside>
          <i>{blog.bannerDescription}</i>
        </aside>
      ) : null}
    </Article>
  );
};

const Article = styled.article`
  margin-bottom: var(--spacing-medium);

  text-align: center;

  aside {
    margin-top: var(--spacing-very-small);
  }

  i {
    font-size: 0.85em;
  }
`;

export default BlogHeader;
