import styled from '@emotion/styled';
import {FaFilePdf} from '@react-icons/all-files/fa/FaFilePdf';
import {FaFileWord} from '@react-icons/all-files/fa/FaFileWord';
import {InferGetStaticPropsType} from 'next';
import Head from 'next/head';
import Link from 'next/link';
import ResumeSummary from '../../components/ResumeSummary';
import Skills from '../../components/skills/Skills';
import Timeline from '../../components/timeline/Timeline';
import {resumeProps} from '../../utils/resume-props';

const ResumeDownloadWrapper = styled.div`
  position: absolute;
  right: 1rem;
  top: 4rem;
`;

export default function Resume({
  workExperiences,
  educationExperiences,
  skills,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>Carlo Gino Catapang Resume</title>
        <meta name="description" content="Carlo Gino Catapang resume" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ResumeDownloadWrapper>
        <Link href={process.env.NEXT_PUBLIC_RESUME_PDF_URL as string}>
          <a target="_blank">
            <FaFilePdf size={30} title="Download PDF Version" />
          </a>
        </Link>
        <Link href={process.env.NEXT_PUBLIC_RESUME_DOC_URL as string}>
          <a target="_blank">
            <FaFileWord size={30} title="Download Word Version" />
          </a>
        </Link>
      </ResumeDownloadWrapper>
      <ResumeSummary />
      <Skills skills={skills} />
      <Timeline
        workExperiences={workExperiences}
        educationExperiences={educationExperiences}
      />
    </>
  );
}

export const getStaticProps = async () => {
  const props = await resumeProps();

  return {
    props: {
      ...props,
    },
  };
};
