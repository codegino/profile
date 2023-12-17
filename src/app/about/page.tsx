import {getLocale} from '@/app/i18n/server';
import {Locales} from '@/app/i18n/settings';
import {EntryFieldTypes} from 'contentful';
import dompurify from 'isomorphic-dompurify';
import type {Metadata, NextPage} from 'next';
import dynamicImport from 'next/dynamic';
import AboutMeHero from '../../components/AboutMeHero';
import NextLink from '../../components/basic/NextLink';
import {newCommonMetaTags} from '../../frontend-utils/meta-tags';
import type {StaticContent} from '../../models/static-content';
import {client, getBlurringImage} from '../../utils/contentful.utils';
import {mapLocale} from '../i18n/map-locale.util';

const TechStackCarousel = dynamicImport(
  () => import('../../components/TechStackCarousel'),
  {ssr: false},
);

export async function generateMetadata(): Promise<Metadata> {
  return {
    ...newCommonMetaTags('About Page', '/about'),
    title: 'About Page | Code Gino | Carlo Gino Catapang',
  };
}

const AboutMePage: NextPage = async () => {
  const {
    props: {aboutMeDetails, img, svg, techStacks},
  } = await getStaticProps();
  return (
    <>
      <AboutMeHero img={img} svg={svg} />
      <main>
        <article className="mb-20 pt-20" id="about-me-details">
          <h1 className="text-2xl sm:text-3xl">About Carlo Gino Catapang</h1>
          {aboutMeDetails.map(detail => {
            return (
              <section
                className="flex flex-col items-center p-2 [&:not(:last-child)]:mb-4"
                key={detail.key}
              >
                <h3 className="mb-4 text-xl">{detail.label}</h3>
                <div
                  className="text-justify max-w-screen-md px-4"
                  dangerouslySetInnerHTML={{
                    __html: dompurify.sanitize(detail.content),
                  }}
                />
              </section>
            );
          })}
        </article>

        <h2 className="text-center">This website is powered by</h2>
        <TechStackCarousel techStacks={techStacks} />

        <section className="mt-4 mb-2">
          <h4 className="text-center">
            This awesome carousel is easily made using&nbsp;
            <NextLink
              href="https://github.com/leandrowd/react-responsive-carousel"
              target="_blank"
              aria-label="React Responsive Carousel"
              rel="noreferrer"
              className="text-primary-900 dark:text-primary-300"
            >
              React Responsive Carousel
            </NextLink>
            .
          </h4>
        </section>
        <section className="pb-8">
          <h4 className="text-center">
            Here is the link to my&nbsp;
            <NextLink
              href="https://github.com/codegino/profile"
              target="_blank"
              aria-label="Github Repo"
              className="text-primary-900 dark:text-primary-300"
            >
              Github Repo
            </NextLink>
            .
          </h4>
        </section>
      </main>
    </>
  );
};

type StaticAssetSkeleton = {
  contentTypeId: 'staticText';
  fields: {
    key: EntryFieldTypes.Text;
    content: EntryFieldTypes.Text;
    category: EntryFieldTypes.Text;
    label: EntryFieldTypes.Text;
    order: EntryFieldTypes.Number;
  };
};

const getStaticProps = async () => {
  const lang = getLocale();
  const entries = await client.getEntries<StaticAssetSkeleton, Locales>({
    content_type: 'staticText',
    'fields.category': 'about_me',
    order: ['fields.order'],
    locale: mapLocale(lang),
  });

  const {img, svg} = await getBlurringImage('6F53k0CwsdmREXx1Y2ErSl');

  const assets = await client.getAssets<Locales>({
    'fields.title[in]': [
      'React,TypeScript,NextJS,Prettier,ESLint,Emotion,Supabase,GitHub,Vercel',
    ],
  });

  const techStacks = assets.items.map(asset => ({
    ...asset,
    name: asset.fields.title as string,
    url: asset.fields.file?.url as string,
  }));

  return {
    props: {
      aboutMeDetails: entries.items.map(
        entry => entry.fields,
      ) as StaticContent[],
      techStacks,
      img,
      svg,
    },
  };
};

export default AboutMePage;
