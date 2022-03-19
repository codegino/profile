import type {GetStaticProps, InferGetStaticPropsType} from 'next';
import {useTranslation} from 'next-i18next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Script from 'next/script';
import {FullScreenWrapper} from '../components/FullScreenWrapper';
import Hero from '../components/Hero';
import ResumeSummary from '../components/ResumeSummary';
import NextLink from '../components/basic/NextLink';
import {commonMetaTags} from '../frontend-utils/meta-tags';
import {generateRssFeed} from '../lib/rss';
import generateSitemap from '../lib/sitemap';
import BlogSuggestionsList from '../modules/blog/BlogSuggestionsList';
import {client, getBlurringImage} from '../utils/contentful.utils';
import {formatDate} from '../utils/date-formatter';
import {getBlogsMetadata} from '../utils/mdxUtils';
import {fetchSkills} from '../utils/resume-props';

const Greetings = dynamic(() => import('../components/Greetings'), {
  ssr: true,
});

const Skills = dynamic(() => import('../components/skills/Skills'), {
  ssr: false,
});

const SubscribeForm = dynamic(() => import('../components/SubscribeForm'), {
  ssr: false,
});

const CustomGithubCalendar = dynamic(
  () => import('../components/CustomGithubCalendar'),
  {ssr: false},
);

const WakatimeCharts = dynamic(() => import('../components/WakatimeCharts'), {
  ssr: false,
});

export default function Home({
  skills,
  heroImage,
  heroSvg,
  profileImage,
  profileSvg,
  blogs,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const {t} = useTranslation('home');

  return (
    <>
      <Head>
        <title>Carlo Gino Catapang | Code Gino | Home</title>
        {commonMetaTags('Home Page')}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
          "@context": "http://schema.org/",
          "@type": "Person",
          "name": "Carlo Gino Catapang",
          "jobTitle": "Senior Software Engineer",
          "url": "https://codegino.com"
          }`,
          }}
        />

        {/* ABtesting.ai Code */}
        <link rel="preconnect" href="https://external.abtesting.ai" />
      </Head>
      {/* ABtesting.ai Code */}

      <Script
        strategy="afterInteractive"
        src="https://js.abtesting.ai/ab.js?userid=5393"
      />

      <Hero img={heroImage} svg={heroSvg} />
      <FullScreenWrapper tr bl>
        <Greetings />
      </FullScreenWrapper>
      <main>
        <FullScreenWrapper tl br className="bg-lightest">
          <ResumeSummary img={profileImage} svg={profileSvg} />
          <Skills skills={skills} />
          <div className="text-center my-10">
            <p className="text-xl">
              {t('visitSkills.1')}
              <NextLink
                href="/resume#skills"
                aria-label="full skills list"
                className="text-primary-dark underline-on-hover"
              >
                <span className="text-xl">{t('visitSkills.2')}</span>
              </NextLink>
              {t('visitSkills.3')}
            </p>
          </div>
        </FullScreenWrapper>
        <FullScreenWrapper tr bl className="bg-lightest">
          <BlogSuggestionsList blogs={blogs} />
        </FullScreenWrapper>
        <FullScreenWrapper tl br className="bg-lightest">
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
                className="text-primary-dark underline-on-hover"
              >
                <span className="text-xl">{t('visitResume.2')}</span>
              </NextLink>
              {t('visitResume.3')}
            </p>
          </div>
        </FullScreenWrapper>
      </main>
      <FullScreenWrapper className="bg-light" tr bl id="subscribe">
        <SubscribeForm />
      </FullScreenWrapper>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({locale}) => {
  const {img: heroImage, svg: heroSvg} = await getBlurringImage(
    '4tQ2p1PhiXEya0uWbAZC6O',
  );

  const {img: profileImage, svg: profileSvg} = await getBlurringImage(
    '3fgK6fKTGvBcmIRel2hJ6Y',
  );

  const blogs = (await getBlogsMetadata())
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .map(blog => ({
      ...blog,
      date: formatDate(new Date(blog.date)),
    }))
    .slice(0, 4);

  for (let blog of blogs) {
    const asset = await client.getAsset(blog.bannerId);

    const bannerUrl = `https:${asset.fields.file.url}`;
    blog.bannerId = bannerUrl;
  }

  if (process.env.NODE_ENV === 'production') {
    await generateSitemap();
    await generateRssFeed();
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
      ...(await serverSideTranslations(locale as string, [
        'common',
        'home',
        'resume',
      ])),
    },
  };
};
