import styled from '@emotion/styled';
import {InferGetStaticPropsType} from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Link from 'next/link';
import Greetings from '../components/Greetings';
import Hero from '../components/Hero';
import ResumeSummary from '../components/ResumeSummary';
import WakatimeCharts from '../components/WakatimeCharts';
import Skills from '../components/skills/Skills';
import generateSitemap from '../lib/sitemap';
import {resumeProps} from '../utils/resume-props';
import {getImageFromSupabase} from '../utils/supabase-image';

const CustomGithubCalendar = dynamic(
  () => import('../components/CustomGithubCalendar'),
  {ssr: false},
);

const ReactTooltip = dynamic(() => import('react-tooltip'), {ssr: false});

export default function Home({
  skills,
  heroImage,
  heroSvg,
  profileImage,
  profileSvg,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>Carlo Gino Catapang</title>
        <meta name="description" content="Carlo Gino Catapang" />
      </Head>

      <Hero img={heroImage} svg={heroSvg} />
      <Greetings />
      <ResumeSummary img={profileImage} svg={profileSvg} />
      <Skills skills={skills} />
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
    </>
  );
}

const CueToResume = styled.div`
  text-align: center;
  margin-bottom: var(--margin-small);

  a {
    color: var(--color-primary-dark);

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const getStaticProps = async () => {
  const {img: heroImage, svg: heroSvg} = await getImageFromSupabase(
    'home_hero_cover',
  );
  const {img: profileImage, svg: profileSvg} = await getImageFromSupabase(
    'profile_photo',
  );

  if (process.env.NODE_ENV === 'production') {
    await generateSitemap();
  }

  const resume = await resumeProps();

  return {
    props: {
      ...resume,
      heroImage,
      heroSvg,
      profileImage,
      profileSvg,
    },
  };
};
