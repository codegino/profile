import React, {FunctionComponent} from 'react';
import styled from '@emotion/styled';
import Head from 'next/head';
import {IGetPlaiceholderReturn} from 'plaiceholder';
import {IBlogMetadata} from '../../models/blog';
import {BlurredImage} from '../BlurredImage';

type Props = {
  blog: IBlogMetadata;
} & Pick<IGetPlaiceholderReturn, 'svg' | 'img'>;

const BlogHeader: FunctionComponent<Props> = ({blog, img, svg}) => {
  return (
    <>
      <Head>
        <title>{blog.title}</title>
        <meta
          property="og:url"
          content={`https://carlogino.cc/blog/${blog.slug}`}
        />
        <meta property="og:type" content="blog" />
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={blog.description} />
        <meta property="og:image" content={blog.bannerId} />

        <meta name="description" content={blog.description} />

        <meta name="twitter:image" content="/assets/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={blog.bannerId} />
        <meta name="twitter:description" content={blog.description} />
        <meta name="twitter:title" content="Carlo Gino Catapang" />
      </Head>

      <Article>
        <h1>{blog.title}</h1>
        {blog.description && (
          <>
            <h2 className="description">{blog.description}</h2>
            <p>{blog.date}</p>
          </>
        )}
        {img && svg ? (
          <BlurredImage
            alt="Hero photo"
            img={img}
            svg={svg}
            layout="responsive"
            height={700}
            width={1200}
            blurLevel={80}
            objectFit="cover"
            objectPosition="center"
            style={{borderRadius: '0.5rem', marginTop: 'var(--margin-medium)'}}
          />
        ) : null}
        {blog.bannerDescription ? (
          <aside style={{marginTop: 'var(--margin-very-small)'}}>
            <i style={{fontSize: '0.85em'}}>{blog.bannerDescription}</i>
          </aside>
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
