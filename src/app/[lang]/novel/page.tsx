import {NextPage} from 'next';
import SubscribeForm from '@/components/SubscribeForm';
import {newCommonMetaTags} from '@/frontend-utils/meta-tags';
import type {INovelMetadata} from '@/models/mdxFiles';
import {getNovelsMetadata} from '@/utils/mdx.utils';
import {client} from '@/utils/contentful.utils';
import NovelsWrapper from './NovelsWrapper';
import {PropsWithLocale} from '@/types/server-component';
import {createTranslation} from '../../i18n';

export const dynamic = 'force-static';

export const metadata = {
  ...newCommonMetaTags('Novels Page', '/novel'),
  title: 'My Novels Listing Page | CodeGino | Carlo Gino Catapang',
};

const BlogPage: NextPage<PropsWithLocale> = async ({params: {lang}}) => {
  const {
    props: {novels},
  } = await getStaticProps();
  const {t} = await createTranslation(lang, 'blog');

  return (
    <>
      <main className="flex items-center flex-col pt-12">
        <h1>{t('myNovels')}</h1>
        <NovelsWrapper novels={novels} lang={lang} />
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
