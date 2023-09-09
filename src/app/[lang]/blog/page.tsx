import {NextPage} from 'next';
import SubscribeForm from '@/components/SubscribeForm';
import {newCommonMetaTags} from '@/frontend-utils/meta-tags';
import type {IBlogMetadata} from '@/models/mdxFiles';
import {getBlogsMetadata} from '@/utils/mdx.utils';
import {client} from '@/utils/contentful.utils';
import BlogsWrapper from './BlogsWrapper';
import {PropsWithLocale} from '@/types/server-component';
import {createTranslation} from '../../i18n';

export const dynamic = 'force-static';

export const metadata = {
  ...newCommonMetaTags('Blogs Page', '/blog'),
  title: 'My Blogs Listing Page | CodeGino | Carlo Gino Catapang',
};

const BlogPage: NextPage<PropsWithLocale> = async ({params: {lang}}) => {
  const {
    props: {blogs},
  } = await getStaticProps();
  const {t} = await createTranslation(lang, 'blog');

  return (
    <>
      <main className="flex items-center flex-col pt-12">
        <h1>{t('myBlogs')}</h1>
        <BlogsWrapper blogs={blogs} lang={lang} />
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
