import dynamicImport from 'next/dynamic';
import {FullScreenWrapper} from '../../components/FullScreenWrapper';
import Hero from '../../components/Hero';
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

export const dynamic = 'force-static';

const Greetings = dynamicImport(() => import('../../components/Greetings'), {
  ssr: false,
});

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
      <Hero img={heroImage} svg={heroSvg} />
      <FullScreenWrapper tr bl>
        <Greetings />
      </FullScreenWrapper>
      <main>
        <FullScreenWrapper tl br className="bg-lightest">
          <ResumeSummary img={profileImage} svg={profileSvg} lang={lang} />
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
