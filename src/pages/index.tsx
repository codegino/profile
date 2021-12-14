import type {InferGetStaticPropsType} from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import {FullScreenWrapper} from '../components/FullScreenWrapper';
import Greetings from '../components/Greetings';
import Hero from '../components/Hero';
import ResumeSummary from '../components/ResumeSummary';
import NextLink from '../components/basic/NextLink';
import BlogSuggestionsList from '../components/blog/BlogSuggestionsList';
import {commonMetaTags} from '../frontend-utils/meta-tags';
import {generateRssFeed} from '../lib/rss';
import generateSitemap from '../lib/sitemap';
import {formatDate} from '../utils/date-formatter';
import {getBlogsMetadata} from '../utils/mdxUtils';
import {fetchSkills} from '../utils/resume-props';
import {getImageFromSupabase} from '../utils/supabase.utils';

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
  return (
    <>
      <Head>
        <title>Welcome to my Website | Code Gino | Carlo Gino Catapang</title>
        {commonMetaTags('Home Page')}
      </Head>

      <Hero img={heroImage} svg={heroSvg} />
      <FullScreenWrapper tr bl>
        <Greetings />
      </FullScreenWrapper>
      <main>
        <FullScreenWrapper tl br>
          <ResumeSummary img={profileImage} svg={profileSvg} />
          <Skills skills={skills} />
          <div className="text-center mb-20">
            <p>
              Check&nbsp;
              <NextLink
                href="/resume#skills"
                aria-label="full skills list"
                className="text-primary-dark underline-on-hover"
              >
                full list
              </NextLink>
              &nbsp;of skills
            </p>
          </div>
        </FullScreenWrapper>
        <FullScreenWrapper tr bl>
          <BlogSuggestionsList blogs={blogs} />
        </FullScreenWrapper>
        <FullScreenWrapper tl br>
          <CustomGithubCalendar />
          <WakatimeCharts />
          <div className="text-center mb-20">
            <p>
              Visit my&nbsp;
              <NextLink
                href="/resume"
                aria-label="resume"
                title="Link to my resume"
                className="text-primary-dark underline-on-hover"
              >
                resume
              </NextLink>
              &nbsp;for more info
            </p>
          </div>
        </FullScreenWrapper>
      </main>
      <FullScreenWrapper className="bg-light" tr bl>
        <SubscribeForm />
      </FullScreenWrapper>
    </>
  );
}

export const getStaticProps = async () => {
  const {img: heroImage, svg: heroSvg} = await getImageFromSupabase(
    'home_hero_cover',
  );

  const {img: profileImage, svg: profileSvg} = await getImageFromSupabase(
    'profile_photo',
  );

  const blogs = (await getBlogsMetadata())
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .map(blog => ({
      ...blog,
      date: formatDate(new Date(blog.date)),
    }))
    .slice(0, 4);

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
    },
  };
};
