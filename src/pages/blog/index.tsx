import {useState} from 'react';
import type {GetStaticPropsContext, InferGetStaticPropsType} from 'next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import SubscribeForm from '../../components/SubscribeForm';
import {commonMetaTags} from '../../frontend-utils/meta-tags';
import type {IBlogMetadata} from '../../models/blog';
import BlogCard from '../../modules/blog/BlogCard';
import BlogsFilter from '../../modules/blog/BlogsFilter';
import {client} from '../../utils/contentful.utils';
import {getBlogsMetadata} from '../../utils/mdxUtils';

export default function Blog({
  blogs,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [filtered, setFiltered] = useState<IBlogMetadata[]>(blogs);

  return (
    <>
      <Head>
        <title>My Blogs Listing Page | CodeGino | Carlo Gino Catapang</title>
        {commonMetaTags('Blogs Page', '/blog')}
      </Head>

      <main className="flex items-center flex-col pt-12">
        <h1>My Blogs</h1>
        <BlogsFilter
          blogs={blogs}
          onChange={slugs => {
            const filteredBlogs = blogs.filter(blog =>
              slugs.includes(blog.slug),
            );

            setFiltered(filteredBlogs);
          }}
        />
        {filtered.length > 0 ? (
          filtered.map(blog => {
            return <BlogCard key={blog.slug} blog={blog} />;
          })
        ) : (
          <section className="flex flex-col items-center">
            <h2>Empty result👎</h2>
            <h3>Try a different combination</h3>
          </section>
        )}
      </main>
      <SubscribeForm />
    </>
  );
}

export const getStaticProps = async ({locale}: GetStaticPropsContext) => {
  const blogs = (await getBlogsMetadata()).sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  for (let blog of blogs) {
    const asset = await client.getAsset(blog.bannerId);

    const bannerUrl = `https:${asset.fields.file.url}`;
    blog.bannerId = bannerUrl;
  }

  return {
    props: {
      blogs: blogs as IBlogMetadata[],
      ...(await serverSideTranslations(locale as string, [
        'common',
        'newsletter',
      ])),
    },
  };
};
