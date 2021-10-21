import styled from '@emotion/styled';
import fs from 'fs';
import matter from 'gray-matter';
import {InferGetStaticPropsType} from 'next';
import Head from 'next/head';
import path from 'path';
import {BlurredImage} from '../../components/BlurredImage';
import BlogCard from '../../components/blog/BlogCard';
import {BlogMetadata} from '../../models/blog';
import {formatDate} from '../../utils/date-formatter';
import {BLOGS_PATH, getAllBlogsPaths} from '../../utils/mdxUtils';
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
        <title>Anne Mariel Recio Blogs</title>
        <meta name="description" content="Anne Mariel Recio" />
      </Head>
      <Container>
        <h1>Anne Mariel Recio&lsquo;s Blogs</h1>
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
  padding: var(--padding-medium) 0;
`;

const PlaceholderContainer = styled.div`
  overflow: hidden;
  position: relative;
  height: 20rem;
  width: 20rem;
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
  const {img, svg} = await getImageFromSupabase('profile_photo');

  const blogs = (await getAllBlogsPaths())
    .map(directory => {
      const blogPath = path.join(BLOGS_PATH, `${directory}`);
      const source = fs.readFileSync(blogPath);

      const {data} = matter(source);

      return {
        ...data,
        slug: directory.replace('.mdx', ''),
      } as BlogMetadata;
    })
    .sort((a, b) => new Date(b.date).getDate() - new Date(a.date).getDate())
    .map(blog => ({
      ...blog,
      date: formatDate(new Date(blog.date)),
    }));

  return {
    props: {blogs, img, svg},
  };
};
