import styled from '@emotion/styled';
import type {InferGetStaticPropsType} from 'next';
import Head from 'next/head';
import SubscribeForm from '../../components/SubscribeForm';
import BlogCard from '../../components/blog/BlogCard';
import {commonMetaTags} from '../../frontend-utils/meta-tags';
import {formatDate} from '../../utils/date-formatter';
import {getBlogsMetadata} from '../../utils/mdxUtils';

export default function Blog({
  blogs,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>Carlo Gino Catapang Blogs</title>
        {commonMetaTags('/blog')}
      </Head>
      <Container>
        <h1>My Blogs</h1>
        {blogs.map(blog => {
          return <BlogCard key={blog.slug} blog={blog} />;
        })}
        <br />
        <hr />
        <br />
        <SubscribeForm />
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

export const getStaticProps = async () => {
  const blogs = (await getBlogsMetadata())
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .map(blog => ({
      ...blog,
      date: formatDate(new Date(blog.date)),
    }));

  return {
    props: {blogs},
  };
};
