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

export const dynamic = 'force-dynamic';

async function BlogPage({
  searchParams,
}: {
  searchParams: {[key: string]: string | undefined};
}) {
  const {
    props: {blogs},
  } = await getStaticProps(searchParams.search);
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
}

export default BlogPage;

const getStaticProps = async (search: string | undefined) => {
  let blogs = await getBlogsMetadata();

  if (search) {
    blogs = blogs.filter(blog => {
      if (
        blog.title.toLowerCase().includes(search.toLowerCase()) ||
        blog.description.toLowerCase().includes(search.toLowerCase())
      ) {
        return true;
      }
    });
  }

  blogs.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

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
