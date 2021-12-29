import type {InferGetStaticPropsType} from 'next';
import Head from 'next/head';
import SubscribeForm from '../../components/SubscribeForm';
import {commonMetaTags} from '../../frontend-utils/meta-tags';
import BlogCard from '../../modules/blog/BlogCard';
import {formatDate} from '../../utils/date-formatter';
import {getBlogsMetadata} from '../../utils/mdxUtils';

export default function Blog({
  blogs,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>My Blogs Listing Page | CodeGino | Carlo Gino Catapang</title>
        {commonMetaTags('Blogs Page', '/blog')}
      </Head>

      <main className="flex items-center flex-col min-h-screen py-12">
        <h1>My Blogs</h1>
        {blogs.map(blog => {
          return <BlogCard key={blog.slug} blog={blog} />;
        })}
        <br />
        <hr />
        <br />
        <SubscribeForm />
      </main>
    </>
  );
}

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
