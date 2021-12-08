import type {InferGetStaticPropsType} from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Link from 'next/link';
import {FullScreenWrapper} from '../components/FullScreenWrapper';
import Greetings from '../components/Greetings';
import Hero from '../components/Hero';
import ResumeSummary from '../components/ResumeSummary';
import SubscribeForm from '../components/SubscribeForm';
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

const CustomGithubCalendar = dynamic(
  () => import('../components/CustomGithubCalendar'),
  {ssr: false},
);

const WakatimeCharts = dynamic(() => import('../components/WakatimeCharts'), {
  ssr: false,
});

const ReactTooltip = dynamic(() => import('react-tooltip'), {ssr: false});

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
        <title>Code Gino</title>
        {commonMetaTags()}
      </Head>

      <Hero img={heroImage} svg={heroSvg} />
      <main>
        <FullScreenWrapper tr bl>
          <Greetings />
        </FullScreenWrapper>

        <FullScreenWrapper tl br>
          <ResumeSummary img={profileImage} svg={profileSvg} />
          <Skills skills={skills} />
          <section className="text-center mb-20">
            <p>
              Check&nbsp;
              <Link href="/resume#skills">
                <a
                  aria-label="full skills list"
                  className="text-primary-dark underline-on-hover"
                >
                  full list
                </a>
              </Link>
              &nbsp;of skills
            </p>
          </section>
        </FullScreenWrapper>
        <FullScreenWrapper tr bl>
          <BlogSuggestionsList blogs={blogs} />
        </FullScreenWrapper>
        <ReactTooltip backgroundColor="#111111" />
        <FullScreenWrapper tl br>
          <CustomGithubCalendar />
          <WakatimeCharts />
          <section className="text-center mb-20">
            <p>
              Visit my&nbsp;
              <Link href="/resume">
                <a
                  aria-label="resume"
                  data-tip="Link to my resume"
                  className="text-primary-dark underline-on-hover"
                >
                  resume
                </a>
              </Link>
              &nbsp;for more info
            </p>
          </section>
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
