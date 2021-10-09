import styled from '@emotion/styled';
import {InferGetStaticPropsType} from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Link from 'next/link';
import {getPlaiceholder} from 'plaiceholder';
import Greetings from '../components/Greetings';
import Hero from '../components/Hero';
import ResumeSummary from '../components/ResumeSummary';
import WakatimeCharts from '../components/WakatimeCharts';
import Skills from '../components/skills/Skills';
import {resumeProps} from '../utils/resume-props';

const CustomGithubCalendar = dynamic(
  () => import('../components/CustomGithubCalendar'),
  {ssr: false},
);

const ReactTooltip = dynamic(() => import('react-tooltip'), {ssr: false});

export default function Home({
  skills,
  img,
  svg,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>Carlo Gino Catapang</title>
        <meta name="description" content="Carlo Gino Catapang" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero img={img} svg={svg} />
      <Greetings />
      <ResumeSummary />
      <Skills skills={skills} />
      <ReactTooltip backgroundColor="#111111" />
      <CustomGithubCalendar />
      <WakatimeCharts />
      <CueToResume>
        <p>
          Visit my&nbsp;
          <Link href="/resume">
            <a
              style={{color: '#777'}}
              aria-label="resume"
              data-tip="Link to my resume"
            >
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

  a:hover {
    text-decoration: underline;
  }
`;

export const getStaticProps = async () => {
  const {img, svg} = await getPlaiceholder('/assets/hero-placeholder.jpg');

  const resume = await resumeProps();

  return {
    props: {
      ...resume,
      svg,
      img,
    },
  };
};
