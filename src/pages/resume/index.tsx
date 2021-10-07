import styled from '@emotion/styled';
import {FaFilePdf} from '@react-icons/all-files/fa/FaFilePdf';
import {FaFileWord} from '@react-icons/all-files/fa/FaFileWord';
import {InferGetStaticPropsType} from 'next';
import Head from 'next/head';
import Link from 'next/link';
import ResumeSummary from '../../components/ResumeSummary';
import CustomIcon from '../../components/icon/CustomIcon';
import Skills from '../../components/skills/Skills';
import Timeline from '../../components/timeline/Timeline';
import {resumeProps} from '../../utils/resume-props';

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
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </Head>

      <ResumeDownloadWrapper>
        <Link href={process.env.NEXT_PUBLIC_RESUME_PDF_URL as string}>
          <a
            target="_blank"
            title="Download PDF Version"
            className="animate__animated animate__pulse animate__infinite"
          >
            <CustomIcon icon={FaFilePdf} size={30} color="red" />
          </a>
        </Link>
        <Link href={process.env.NEXT_PUBLIC_RESUME_DOC_URL as string}>
          <a
            target="_blank"
            title="Download Word Version"
            className="animate__animated animate__pulse animate__infinite"
          >
            <CustomIcon icon={FaFileWord} size={30} color="blue" />
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

const ResumeDownloadWrapper = styled.div`
  position: absolute;
  display: flex;
  right: 1rem;
  top: 4rem;
`;
