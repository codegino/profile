import {NextPage} from 'next';
import SubscribeForm from '@/components/SubscribeForm';
import {newCommonMetaTags} from '@/frontend-utils/meta-tags';
import type {INovelMetadata} from '@/models/mdxFiles';
import {getNovelsMetadata} from '@/utils/mdx.utils';
import {client} from '@/utils/contentful.utils';
import NovelsWrapper from './NovelsWrapper';
import {createTranslation} from '../i18n/server';

export const metadata = {
  ...newCommonMetaTags('Novels Page', '/novel'),
  title: 'My Novels Listing Page | CodeGino | Carlo Gino Catapang',
};

const BlogPage: NextPage = async () => {
  const {
    props: {novels},
  } = await getStaticProps();
  const {t} = await createTranslation('blog');

  return (
    <>
      <main className="flex flex-col items-center pt-12">
        <h1>{t('myNovels')}</h1>
        <NovelsWrapper novels={novels} />
      </main>
      <SubscribeForm />
    </>
  );
};

export default BlogPage;

const getStaticProps = async () => {
  const novels = (await getNovelsMetadata()).sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  for (let blog of novels) {
    const asset = await client.getAsset(blog.bannerId);

    const bannerUrl = `https:${asset.fields.file?.url}`;
    blog.bannerId = bannerUrl;
  }

  return {
    props: {
      novels: novels as INovelMetadata[],
    },
  };
};
