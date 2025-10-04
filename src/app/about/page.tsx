import {FALLBACK_LOCALE, Locales} from '@/app/i18n/settings';
import dompurify from 'isomorphic-dompurify';
import type {Metadata, NextPage} from 'next';
import dynamicImport from 'next/dynamic';
import AboutMeHero from '../../components/AboutMeHero';
import NextLink from '../../components/basic/NextLink';
import {newCommonMetaTags} from '../../frontend-utils/meta-tags';
import {getBlurringImage} from '../../utils/contentful.utils';
import {aboutMeData} from '@/models/static-content';

const TechStackCarousel = dynamicImport(
  () => import('../../components/TechStackCarousel'),
);

export async function generateMetadata(): Promise<Metadata> {
  return {
    ...newCommonMetaTags('About Page', '/about'),
    title: 'About Page | Code Gino | Carlo Gino Catapang',
  };
}

const AboutMePage: NextPage = async () => {
  const {
    props: {aboutMeDetails, img, svg},
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
                  className="max-w-screen-md px-4 text-justify"
                  dangerouslySetInnerHTML={{
                    __html: dompurify.sanitize(detail.content),
                  }}
                />
              </section>
            );
          })}
        </article>

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

const getStaticProps = async () => {
  // Use local about me data instead of Contentful
  const aboutMeDetails = aboutMeData.sort((a, b) => a.order - b.order);

  const {img, svg} = await getBlurringImage('batman_cover.png');

  return {
    props: {
      aboutMeDetails,
      img,
      svg,
    },
  };
};

export default AboutMePage;
