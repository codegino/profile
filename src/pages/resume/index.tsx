import styled from '@emotion/styled';
import {FaFilePdf} from '@react-icons/all-files/fa/FaFilePdf';
import {FaFileWord} from '@react-icons/all-files/fa/FaFileWord';
import type {InferGetStaticPropsType} from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Link from 'next/link';
import ResumeSummary from '../../components/ResumeSummary';
import CustomIcon from '../../components/icon/CustomIcon';
import Timeline from '../../components/timeline/Timeline';
import {commonMetaTags} from '../../frontend-utils/meta-tags';
import {fectchExperiences, fetchSkills} from '../../utils/resume-props';
import {
  getImageFromSupabase,
  getUrlFromSupabase,
} from '../../utils/supabase.utils';

const CustomGithubCalendar = dynamic(
  () => import('../../components/CustomGithubCalendar'),
  {ssr: false},
);

const ReactTooltip = dynamic(() => import('react-tooltip'), {ssr: false});

const Skills = dynamic(() => import('../../components/skills/Skills'), {
  ssr: false,
});

export default function Resume({
  workExperiences,
  educationExperiences,
  skills,
  profileSvg,
  profileImage,
  resumePdfUrl,
  resumeWordUrl,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>Carlo Gino Catapang Resume</title>
        {commonMetaTags('/resume')}
      </Head>

      <ResumeDownloadWrapper>
        <Link href={resumePdfUrl}>
          <a
            target="_blank"
            data-tip="Download PDF Version"
            aria-label="Download PDF Version"
            rel="noopener"
          >
            <CustomIcon
              icon={FaFilePdf}
              size={40}
              color="#F40F02"
              hoverColor="red"
            />
          </a>
        </Link>
        <Link href={resumeWordUrl}>
          <a
            target="_blank"
            data-tip="Download Word Version"
            aria-label="Download Word Version"
            rel="noopener"
          >
            <CustomIcon
              icon={FaFileWord}
              size={40}
              color="#015299"
              hoverColor="blue"
            />
          </a>
        </Link>
      </ResumeDownloadWrapper>
      <main>
        <ResumeSummary img={profileImage} svg={profileSvg} />
        <hr />
        <hr />
        <Timeline
          workExperiences={workExperiences}
          educationExperiences={educationExperiences}
        />
        <hr />
        <hr />
        <section id="skills">
          <Skills skills={skills} />
        </section>
        <ReactTooltip backgroundColor="#111111" />
        <CustomGithubCalendar />
      </main>
    </>
  );
}

export const getStaticProps = async () => {
  const experiences = await fectchExperiences();
  const skills = await fetchSkills();
  const {img, svg} = await getImageFromSupabase('profile_photo');

  return {
    props: {
      ...experiences,
      skills,
      resumePdfUrl: await getUrlFromSupabase('resume_pdf_url'),
      resumeWordUrl: await getUrlFromSupabase('resume_word_url'),
      profileImage: img,
      profileSvg: svg,
    },
  };
};

const ResumeDownloadWrapper = styled.div`
  position: absolute;
  display: flex;
  right: 1rem;
  top: 6rem;
`;
