import dynamicImport from 'next/dynamic';
import {FullScreenWrapper} from '../../components/FullScreenWrapper';
import ResumeSummary from '../../components/ResumeSummary';
import NextLink from '../../components/basic/NextLink';
import BlogSuggestionsList from '../../modules/blog/BlogSuggestionsList';
import {getBlogsMetadata} from '../../utils/mdx.utils';
import {client, getBlurringImage} from '../../utils/contentful.utils';
import {fetchSkills} from '../../utils/resume-props';
import {PropsWithLocale} from '../../types/server-component';
import {createTranslation} from '../i18n';
import {NextPage} from 'next';
import Skills from '../../components/skills/Skills';
import {newCommonMetaTags} from '../../frontend-utils/meta-tags';
import Script from 'next/script';
import GreetingsContent from '@/components/GreetingsContent';

export const dynamic = 'force-static';

const SubscribeForm = dynamicImport(
  () => import('../../components/SubscribeForm'),
  {
    ssr: false,
  },
);

const CustomGithubCalendar = dynamicImport(
  () => import('../../components/CustomGithubCalendar'),
  {ssr: false},
);

const WakatimeCharts = dynamicImport(
  () => import('../../components/WakatimeCharts'),
  {
    ssr: false,
  },
);

export const metadata = {
  ...newCommonMetaTags('Home Page', '/'),
  title: 'Home Page | Code Gino | Carlo Gino Catapang',
};

const HomePage: NextPage<PropsWithLocale> = async ({params: {lang}}) => {
  const {
    props: {skills, heroImage, heroSvg, profileImage, profileSvg, blogs},
  } = await getStaticProps();

  const {t} = await createTranslation(lang, 'home');

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
        className="isolate flex justify-center flex-col items-center min-h-screen w-full bg-zinc-200 dark:bg-zinc-900"
      >
        <GreetingsContent lang={lang} />
        <svg
          className="absolute inset-1 -z-10 h-full w-full stroke-primary-900 dark:stroke-primary-50 [mask-image:radial-gradient(100%_100%_at_top_right,black,transparent)]"
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
          className="bg-zinc-100 dark:bg-zinc-800"
          id="resume-summary"
        >
          <ResumeSummary img={profileImage} svg={profileSvg} lang={lang} />
          <Skills skills={skills} />
          <div className="text-center my-10">
            <p className="text-xl">
              {t('visitSkills.1')}
              <NextLink
                href="/resume#skills"
                aria-label="full skills list"
                className="text-primary-900 dark:text-primary-300 underline-on-hover"
              >
                <span className="text-xl">{t('visitSkills.2')}</span>
              </NextLink>
              {t('visitSkills.3')}
            </p>
          </div>
        </FullScreenWrapper>
        <FullScreenWrapper tr bl className="bg-zinc-50 dark:bg-zinc-700">
          <BlogSuggestionsList blogs={blogs} />
        </FullScreenWrapper>
        <FullScreenWrapper tl br className="bg-zinc-100 dark:bg-zinc-800">
          <div className="w-full flex justify-center">
            <div className="max-w-6xl">
              <CustomGithubCalendar />
            </div>
          </div>
          <div className="w-full flex justify-center mb-10">
            <div className="w-full max-w-4xl">
              <WakatimeCharts />
            </div>
          </div>
          <div className="text-center mb-10">
            <p className="text-xl">
              {t('visitResume.1')}
              <NextLink
                href="/resume"
                aria-label="resume"
                title="Link to my resume"
                className="text-primary-900 dark:text-primary-300 underline-on-hover"
              >
                <span className="text-xl">{t('visitResume.2')}</span>
              </NextLink>
              {t('visitResume.3')}
            </p>
          </div>
        </FullScreenWrapper>
      </main>
      <FullScreenWrapper
        className="bg-zinc-50 dark: dark:bg-zinc-700"
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
  const {img: heroImage, svg: heroSvg} = await getBlurringImage(
    '4tQ2p1PhiXEya0uWbAZC6O',
  );

  const {img: profileImage, svg: profileSvg} = await getBlurringImage(
    '3fgK6fKTGvBcmIRel2hJ6Y',
  );

  const blogs = (await getBlogsMetadata())
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 4);

  for (let blog of blogs) {
    const asset = await client.getAsset(blog.bannerId);

    const bannerUrl = `https:${asset.fields.file?.url}`;
    blog.bannerId = bannerUrl;
  }

  const skills = await fetchSkills(true);

  return {
    props: {
      skills,
      blogs,
      heroImage,
      heroSvg,
      profileImage,
      profileSvg,
    },
  };
};

export default HomePage;
