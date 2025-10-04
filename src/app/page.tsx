import GreetingsContent from '@/components/GreetingsContent';
import type {NextPage} from 'next';
import dynamicImport from 'next/dynamic';
import Script from 'next/script';
import {FullScreenWrapper} from '../components/FullScreenWrapper';
import ResumeSummary from '../components/ResumeSummary';
import NextLink from '../components/basic/NextLink';
import Skills from '../components/skills/Skills';
import {newCommonMetaTags} from '../frontend-utils/meta-tags';
import BlogSuggestionsList from '../modules/blog/BlogSuggestionsList';
import {getBlurringImage} from '../utils/contentful.utils';
import {getBlogsMetadata} from '../utils/mdx.utils';
import {fetchSkills} from '../utils/resume-props';
import {createTranslation} from './i18n/server';
import {blogAssets} from '@/data/blog-asset';
import ParallaxEyes from '../components/ParallaxEyes';

const SubscribeForm = dynamicImport(
  () => import('../components/SubscribeForm'),
  // {
  // ssr: false,
  // },
);

const CustomGithubCalendar = dynamicImport(
  () => import('../components/CustomGithubCalendar'),
  // {ssr: false},
);

const WakatimeCharts = dynamicImport(
  () => import('../components/WakatimeCharts'),
  // {
  // ssr: false,
  // },
);

export const metadata = {
  ...newCommonMetaTags('Home Page', '/'),
  title: 'Home Page | Code Gino | Carlo Gino Catapang',
};

const HomePage: NextPage = async () => {
  const {
    props: {skills, profileImage, profileSvg, blogs},
  } = await getStaticProps();

  const {t} = await createTranslation('home');

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{
          "@context": "http://schema.org/",
          "@type": "Person",
          "name": "Carlo Gino Catapang",
          "jobTitle": "Senior Software Engineer",
          "url": "https://carlogino.com"
          }`,
        }}
      />
      <FullScreenWrapper
        bl
        className="flex h-screen min-h-screen w-full  items-center justify-center bg-neutral-200 dark:bg-neutral-900"
      >
        <ParallaxEyes />
        <GreetingsContent />

        <svg
          className="absolute inset-0 -z-10 size-full stroke-primary-900 [mask-image:radial-gradient(50%_105%_at_bottom,black,transparent)] dark:stroke-primary-50"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"
          />
        </svg>
      </FullScreenWrapper>
      <main>
        <FullScreenWrapper
          tl
          br
          className="bg-neutral-100 dark:bg-neutral-800"
          id="resume-summary"
        >
          <ResumeSummary img={profileImage} svg={profileSvg} />
          <Skills skills={skills} />
          <div className="my-10 text-center">
            <p className="text-xl">
              {t('visitSkills.1')}
              <NextLink
                href="/resume#skills"
                aria-label="full skills list"
                className="underline-on-hover text-primary-900 dark:text-primary-300"
              >
                <span className="text-xl">{t('visitSkills.2')}</span>
              </NextLink>
              {t('visitSkills.3')}
            </p>
          </div>
        </FullScreenWrapper>
        <FullScreenWrapper tr bl className="bg-neutral-50 dark:bg-neutral-700">
          <BlogSuggestionsList blogs={blogs} />
        </FullScreenWrapper>
        <FullScreenWrapper
          tl
          br
          className="bg-neutral-100 px-2 dark:bg-neutral-800"
        >
          <div className="flex w-full justify-center">
            <div className="max-w-6xl">
              <CustomGithubCalendar />
            </div>
          </div>
          <div className="mb-10 flex w-full justify-center">
            <div className="w-full max-w-4xl">
              <WakatimeCharts />
            </div>
          </div>
          <div className="mb-10 text-center">
            <p className="text-lg">
              {t('visitResume.1')}
              <NextLink
                href="/resume"
                aria-label="resume"
                title="Link to my resume"
                className="underline-on-hover text-lg text-primary-900 dark:text-primary-300"
              >
                <span className="text-lg">{t('visitResume.2')}</span>
              </NextLink>
              {t('visitResume.3')}
            </p>
          </div>
        </FullScreenWrapper>
      </main>
      <FullScreenWrapper
        className="bg-neutral-50 dark:bg-neutral-700"
        tr
        bl
        id="subscribe"
      >
        <SubscribeForm />
      </FullScreenWrapper>{' '}
    </>
  );
};

const getStaticProps = async () => {
  const {img: profileImage, svg: profileSvg} = await getBlurringImage(
    'profile-picture.jpeg',
  );

  const blogs = (await getBlogsMetadata())
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 4);

  for (const blog of blogs) {
    blog.bannerId = blogAssets[blog.slug];
  }

  const skills = await fetchSkills(true);

  return {
    props: {
      skills,
      blogs,
      profileImage,
      profileSvg,
    },
  };
};

export default HomePage;
