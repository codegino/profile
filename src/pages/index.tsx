import {InferGetStaticPropsType} from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import {getPlaiceholder} from 'plaiceholder';
import Hero from '../components/Hero';
import ResumeSummary from '../components/ResumeSummary';
import {resumeProps} from '../utils/resume-props';

const CustomGithubCalendar = dynamic(
  () => import('../components/CustomGithubCalendar'),
  {ssr: false},
);

const ReactTooltip = dynamic(() => import('react-tooltip'), {ssr: false});

const Timeline = dynamic(() => import('../components/timeline/Timeline'), {
  ssr: true,
});
const Skills = dynamic(() => import('../components/skills/Skills'), {
  ssr: true,
});

export default function Home({
  workExperiences,
  educationExperiences,
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
      <ResumeSummary />
      <Skills skills={skills} />
      <Timeline
        workExperiences={workExperiences}
        educationExperiences={educationExperiences}
      />
      <ReactTooltip backgroundColor="#111111" />
      <CustomGithubCalendar />
    </>
  );
}

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
