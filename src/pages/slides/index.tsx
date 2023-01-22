import type {GetStaticPropsContext, InferGetStaticPropsType} from 'next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import {commonMetaTags} from '../../frontend-utils/meta-tags';
import {ISlideMetadata} from '../../models/slide';
import BlogCard from '../../modules/blog/BlogCard';
import {client} from '../../utils/contentful.utils';
import {getSlidessMetadata} from '../../utils/slides-mdx.utils';

export default function Slides({
  slides: filtered,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>My slides Listing Page | CodeGino | Carlo Gino Catapang</title>
        {commonMetaTags('Blogs Page', '/blog')}
      </Head>

      <main className="flex items-center flex-col pt-12 min-h-[76vh]">
        <h1>Presentation Slides</h1>
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
    </>
  );
}

export const getStaticProps = async ({locale}: GetStaticPropsContext) => {
  const slides = (await getSlidessMetadata()).sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  for (let slide of slides) {
    const asset = await client.getAsset(slide.bannerId);

    const bannerUrl = `https:${asset.fields.file.url}`;
    slide.bannerId = bannerUrl;
  }

  return {
    props: {
      slides: slides as ISlideMetadata[],
      ...(await serverSideTranslations(locale as string, [
        'common',
        'newsletter',
      ])),
    },
  };
};
