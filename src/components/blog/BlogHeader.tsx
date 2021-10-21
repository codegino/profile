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
        <meta
          property="og:url"
          content={`https://carlogino.cc/blog/${blogMetadata.slug}`}
        />
        <meta property="og:type" content="blog" />
        <meta property="og:title" content={blogMetadata.title} />
        <meta property="og:description" content={blogMetadata.description} />
        <meta property="og:image" content={blogMetadata.bannerId} />

        <meta name="description" content={blogMetadata.description} />

        <meta name="twitter:image" content="/assets/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/assets/logo.png" />
        <meta name="twitter:description" content={blogMetadata.description} />
        <meta name="twitter:title" content="Carlo Gino Catapang" />
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
            layout="intrinsic"
            height={630}
            width={1200}
            blurLevel={80}
            objectFit="contain"
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
