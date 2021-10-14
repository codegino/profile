import styled from '@emotion/styled';
import fs from 'fs';
import {InferGetStaticPropsType} from 'next';
import Head from 'next/head';
import path from 'path';
import {BlurredImage} from '../../components/BlurredImage';
import BlogCard from '../../components/blog/BlogCard';
import {BlogMetadata} from '../../models/blog';
import {mediaQuery} from '../../utils/media-query';
import {getImageFromSupabase} from '../../utils/supabase-image';

export default function Home({
  blogs,
  img,
  svg,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>Carlo Gino Catapang</title>
        <meta name="description" content="Carlo Gino Catapang" />
      </Head>
      <h1 style={{textAlign: 'center'}}>My blogs</h1>
      <Container>
        <PlaceholderContainer>
          <BlurredImage
            alt="Work in progress"
            img={img}
            svg={svg}
            layout="fill"
            height={undefined}
            width={undefined}
            blurLevel={80}
            objectFit="cover"
            objectPosition="left"
          />
        </PlaceholderContainer>
      </Container>
    </>
  );
}

const Container = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 80vh;
`;

const PlaceholderContainer = styled.div`
  overflow: hidden;
  position: relative;
  height: 20rem;
  width: 20rem;
  margin: auto;
  top: -5rem;

  ${mediaQuery(
    400,
    `
    top: 0rem;
    height: 25rem;
    width: 25rem;
  `,
  )}

  display: flex;
  justify-content: center;
`;

export const getStaticProps = async () => {
  const postsDirectory = path.join(process.cwd(), 'src/pages/blog');

  const {img, svg} = await getImageFromSupabase('work_in_progress');

  const blogDirectories = fs
    .readdirSync(postsDirectory)
    .filter(filename => !filename.includes('index.tsx')); // exclude this file

  const blogs = blogDirectories
    .map(directory => {
      const mdxContent = require(`./${directory}/index.mdx`);

      const meta: BlogMetadata = mdxContent?.meta ?? {};

      return {
        ...meta,
        slug: directory,
      };
    })
    .sort((a, b) => a.order - b.order);

  return {
    props: {blogs, img, svg},
  };
};
