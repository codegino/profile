import styled from '@emotion/styled';
import {FaFilePdf} from '@react-icons/all-files/fa/FaFilePdf';
import {FaFileWord} from '@react-icons/all-files/fa/FaFileWord';
import {InferGetStaticPropsType} from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Link from 'next/link';
import {useMediaQuery} from 'react-responsive';
import ReactTooltip from 'react-tooltip';
import ResumeSummary from '../../components/ResumeSummary';
import CustomIcon from '../../components/icon/CustomIcon';
import Skills from '../../components/skills/Skills';
import Timeline from '../../components/timeline/Timeline';
import {resumeProps} from '../../utils/resume-props';

const CustomGithubCalendar = dynamic(
  () => import('../../components/CustomGithubCalendar'),
);

export default function Resume({
  workExperiences,
  educationExperiences,
  skills,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const is500PxAndUp = useMediaQuery({
    query: '(min-width: 500px)',
  });

  return (
    <>
      <Head>
        <title>Carlo Gino Catapang Resume</title>
        <meta name="description" content="Carlo Gino Catapang resume" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ResumeDownloadWrapper>
        <ReactTooltip />
        <Link href={process.env.NEXT_PUBLIC_RESUME_PDF_URL as string}>
          <a
            target="_blank"
            data-tip="Download PDF Version"
            arial-label="Download PDF Version"
            rel="noopener"
          >
            <CustomIcon
              icon={FaFilePdf}
              size={is500PxAndUp ? 48 : 40}
              color="#F40F02"
              hoverColor="red"
            />
          </a>
        </Link>
        <Link href={process.env.NEXT_PUBLIC_RESUME_DOC_URL as string}>
          <a
            target="_blank"
            data-tip="Download Word Version"
            aria-label="Download Word Version"
            rel="noopener"
          >
            <CustomIcon
              icon={FaFileWord}
              size={is500PxAndUp ? 48 : 40}
              color="#015299"
              hoverColor="blue"
            />
          </a>
        </Link>
      </ResumeDownloadWrapper>
      <ResumeSummary />
      <Skills skills={skills} />
      <Timeline
        workExperiences={workExperiences}
        educationExperiences={educationExperiences}
      />
      <CustomGithubCalendar />
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

const ResumeDownloadWrapper = styled.div`
  position: absolute;
  display: flex;
  right: 1rem;
  top: 4rem;
`;
