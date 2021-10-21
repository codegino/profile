import React, {FunctionComponent} from 'react';
import styled from '@emotion/styled';
import Head from 'next/head';
import {IGetPlaiceholderReturn} from 'plaiceholder';
import {BlogMetadata} from '../../models/blog';
import {BlurredImage} from '../BlurredImage';

type Props = {
  blogMetadata: BlogMetadata;
} & Pick<IGetPlaiceholderReturn, 'svg' | 'img'>;

const BlogHeader: FunctionComponent<Props> = ({blogMetadata, img, svg}) => {
  return (
    <>
      <Head>
        <title>{blogMetadata.title}</title>
        <meta name="description" content={blogMetadata.description} />
      </Head>

      <Article>
        <h1>{blogMetadata.title}</h1>
        {blogMetadata.description && (
          <>
            <h2 className="description">{blogMetadata.description}</h2>
            <p>{blogMetadata.date}</p>
          </>
        )}
        {img && svg ? (
          <BlurredImage
            alt="Hero photo"
            img={img}
            svg={svg}
            layout="responsive"
            height={90}
            width={150}
            blurLevel={80}
            objectFit="cover"
            objectPosition="right"
            style={{borderRadius: '0.5rem', marginTop: 'var(--margin-medium)'}}
          />
        ) : null}
      </Article>
    </>
  );
};

const Article = styled.article`
  margin-bottom: var(--margin-medium);

  text-align: center;
`;

export default BlogHeader;
