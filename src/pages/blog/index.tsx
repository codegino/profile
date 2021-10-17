import styled from '@emotion/styled';
import fs from 'fs';
import matter from 'gray-matter';
import {InferGetStaticPropsType} from 'next';
import Head from 'next/head';
import path from 'path';
import {BlurredImage} from '../../components/BlurredImage';
import BlogCard from '../../components/blog/BlogCard';
import {BlogMetadata} from '../../models/blog';
import {BLOGS_PATH} from '../../utils/mdxUtils';
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
        {blogs.map(blog => {
          return <BlogCard key={blog.slug} {...blog} />;
        })}
      </Container>
    </>
  );
}

const Container = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 80vh;
  margin: 3rem 0;
`;

const PlaceholderContainer = styled.div`
  overflow: hidden;
  position: relative;
  height: 20rem;
  width: 20rem;
  top: -5rem;
  margin-bottom: var(--margin-medium);

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
  const {img, svg} = await getImageFromSupabase('work_in_progress');

  const blogDirectories = fs.readdirSync(BLOGS_PATH);

  const blogs = blogDirectories.map(directory => {
    const source = fs.readFileSync(
      path.join(BLOGS_PATH, directory, 'index.mdx'),
    );

    const {data} = matter(source);

    return {
      ...data,
      slug: directory,
    } as BlogMetadata;
  });

  return {
    props: {blogs, img, svg},
  };
};
