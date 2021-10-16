import React, {FunctionComponent} from 'react';
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

      <section className="blog-header">
        <h1>{blogMetadata.title}</h1>
        {blogMetadata.description && (
          <h2 className="description">{blogMetadata.description}</h2>
        )}
        {img && svg ? (
          <BlurredImage
            alt="Hero photo"
            img={img}
            svg={svg}
            layout="responsive"
            height={100}
            width={150}
            blurLevel={80}
            objectFit="cover"
            objectPosition="right"
          />
        ) : null}
      </section>
    </>
  );
};

export default BlogHeader;
