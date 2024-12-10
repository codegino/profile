import SubscribeForm from '@/components/SubscribeForm';
import {newCommonMetaTags} from '@/frontend-utils/meta-tags';
import type {IBlogMetadata} from '@/models/mdxFiles';
import {getBlogsMetadata} from '@/utils/mdx.utils';
import BlogsWrapper from './BlogsWrapper';
import {createTranslation} from '../i18n/server';
import {blogAssets} from '@/data/blog-asset';

export const metadata = {
  ...newCommonMetaTags('Blogs Page', '/blog'),
  title: 'My Blogs Listing Page | CodeGino | Carlo Gino Catapang',
};

export const dynamic = 'force-dynamic';

async function BlogPage() {
  const {
    props: {blogs},
  } = await getStaticProps();
  const {t} = await createTranslation('blog');

  return (
    <>
      <main className="flex flex-col items-center sm:pt-12">
        <h1>{t('myBlogs')}</h1>
        <BlogsWrapper blogs={blogs} />
      </main>
      <SubscribeForm />
    </>
  );
}

export default BlogPage;

const getStaticProps = async () => {
  let blogs = await getBlogsMetadata();

  blogs.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  for (let blog of blogs) {
    blog.bannerId = blogAssets[blog.slug];
  }

  return {
    props: {
      blogs: blogs as IBlogMetadata[],
    },
  };
};
