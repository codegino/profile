import styled from '@emotion/styled';
import type {InferGetStaticPropsType} from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Link from 'next/link';
import Greetings from '../components/Greetings';
import Hero from '../components/Hero';
import ResumeSummary from '../components/ResumeSummary';
import BlogSuggestionsList from '../components/blog/BlogSuggestionsList';
import {underlineOnHover} from '../frontend-utils/animation-effects';
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
        <Greetings />

        <BlogSuggestionsList blogs={blogs} />
        <hr />
        <hr />
        <ResumeSummary img={profileImage} svg={profileSvg} />
        <Skills skills={skills} />
        <CueToResume>
          <p>
            Check&nbsp;
            <Link href="/resume#skills">
              <a aria-label="full skills list">full list</a>
            </Link>
            &nbsp;of skills
          </p>
        </CueToResume>
        <ReactTooltip backgroundColor="#111111" />
        <CustomGithubCalendar />
        <WakatimeCharts />
        <CueToResume>
          <p>
            Visit my&nbsp;
            <Link href="/resume">
              <a aria-label="resume" data-tip="Link to my resume">
                resume
              </a>
            </Link>
            &nbsp;for more info
          </p>
        </CueToResume>
      </main>
    </>
  );
}

const CueToResume = styled.section`
  text-align: center;
  margin-bottom: var(--spacing-big);

  a {
    color: var(--color-primary-dark);

    ${underlineOnHover('var(--color-primary-dark)')}
  }
`;

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
