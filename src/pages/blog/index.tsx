import styled from '@emotion/styled';
import fs from 'fs';
import {InferGetStaticPropsType} from 'next';
import Head from 'next/head';
import path from 'path';
import BlogCard from '../../components/blog/BlogCard';
import {BlogMetadata} from '../../models/blog';

export default function Home({
  blogs,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>Carlo Gino Catapang</title>
        <meta name="description" content="Carlo Gino Catapang" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 style={{textAlign: 'center'}}>My blogs</h1>
      <Container>
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
`;

export const getStaticProps = async () => {
  const postsDirectory = path.join(process.cwd(), 'src/pages/blog');

  const blogDirectories = fs
    .readdirSync(postsDirectory)
    .filter(filename => !filename.includes('index.tsx')); // exclude this file

  const blogs = blogDirectories
    .map(directory => {
      const mdxContent = require(`./${directory}/index.mdx`);

      const meta: BlogMetadata = mdxContent?.meta ?? {
        author: null,
        date: null,
        title: null,
      };

      return {
        ...meta,
        slug: directory,
      };
    })
    .sort((a, b) => a.order - b.order);

  return {
    props: {blogs},
  };
};
