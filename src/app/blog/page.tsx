import {NextPage} from 'next';
import SubscribeForm from '@/components/SubscribeForm';
import {newCommonMetaTags} from '@/frontend-utils/meta-tags';
import type {IBlogMetadata} from '@/models/mdxFiles';
import {getBlogsMetadata} from '@/utils/mdx.utils';
import {client} from '@/utils/contentful.utils';
import BlogsWrapper from './BlogsWrapper';
import {createTranslation} from '../i18n/server';

export const metadata = {
  ...newCommonMetaTags('Blogs Page', '/blog'),
  title: 'My Blogs Listing Page | CodeGino | Carlo Gino Catapang',
};

const BlogPage: NextPage = async () => {
  const {
    props: {blogs},
  } = await getStaticProps();
  const {t} = await createTranslation('blog');

  return (
    <>
      <main className="flex items-center flex-col sm:pt-12">
        <h1>{t('myBlogs')}</h1>
        <BlogsWrapper blogs={blogs} />
      </main>
      <SubscribeForm />
    </>
  );
};

export default BlogPage;

const getStaticProps = async () => {
  const blogs = (await getBlogsMetadata()).sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  for (let blog of blogs) {
    const asset = await client.getAsset(blog.bannerId);

    const bannerUrl = `https:${asset.fields.file?.url}`;
    blog.bannerId = bannerUrl;
  }

  return {
    props: {
      blogs: blogs as IBlogMetadata[],
    },
  };
};
