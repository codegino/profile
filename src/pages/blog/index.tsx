import styled from '@emotion/styled';
import type {InferGetStaticPropsType} from 'next';
import Head from 'next/head';
import {BlurringImage} from '../../components/BlurringImage';
import SubscribeSection from '../../components/SubscribeSection';
import BlogCard from '../../components/blog/BlogCard';
import {commonMetaTags} from '../../frontend-utils/meta-tags';
import {formatDate} from '../../utils/date-formatter';
import {getBlogsMetadata} from '../../utils/mdxUtils';
import {mediaQuery} from '../../utils/media-query';
import {getImageFromSupabase} from '../../utils/supabase.utils';

export default function Blog({
  blogs,
  img,
  svg,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>Carlo Gino Catapang Blogs</title>
        {commonMetaTags('/blog')}
      </Head>
      <Container>
        <h1>Carlo Gino Catapang&lsquo;s Blogs</h1>
        <PlaceholderContainer>
          <BlurringImage
            alt="Work in progress"
            img={img}
            svg={svg}
            layout="fill"
            blurLevel={80}
            objectFit="cover"
            objectPosition="left"
          />
        </PlaceholderContainer>
        {blogs.map(blog => {
          return <BlogCard key={blog.slug} blog={blog} />;
        })}
        <SubscribeSection />
      </Container>
    </>
  );
}

const Container = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 80vh;
  padding: var(--spacing-medium) 0;
`;

const PlaceholderContainer = styled.div`
  overflow: hidden;
  position: relative;
  height: 20rem;
  width: 20rem;
  margin-bottom: var(--spacing-medium);

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

  const blogs = (await getBlogsMetadata())
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .map(blog => ({
      ...blog,
      date: formatDate(new Date(blog.date)),
    }));

  return {
    props: {blogs, img, svg},
  };
};
