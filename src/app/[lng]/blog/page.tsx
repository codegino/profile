import Head from 'next/head';
import SubscribeForm from '../../../components/SubscribeForm';
import {commonMetaTags} from '../../../frontend-utils/meta-tags';
import type {IBlogMetadata} from '../../../models/blog';
import {getBlogsMetadata} from '../../../utils/blogs-mdx.utils';
import {client} from '../../../utils/contentful.utils';
import BlogsWrapper from './BlogsWrapper';

export const dynamic = 'force-static';

export default async function Blog() {
  const {
    props: {blogs},
  } = await getStaticProps();

  return (
    <>
      <Head>
        <title>My Blogs Listing Page | CodeGino | Carlo Gino Catapang</title>
        {commonMetaTags('Blogs Page', '/blog')}
      </Head>

      <main className="flex items-center flex-col pt-12">
        <h1>My Blogs</h1>
        <BlogsWrapper blogs={blogs} />
      </main>
      <SubscribeForm />
    </>
  );
}

const getStaticProps = async () => {
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
      // ...(await serverSideTranslations(locale as string, [
      //   'common',
      //   'newsletter',
      // ])),
    },
  };
};
