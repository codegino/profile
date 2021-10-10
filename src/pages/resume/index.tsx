import styled from '@emotion/styled';
import {FaFilePdf} from '@react-icons/all-files/fa/FaFilePdf';
import {FaFileWord} from '@react-icons/all-files/fa/FaFileWord';
import {InferGetStaticPropsType} from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Link from 'next/link';
import {getPlaiceholder} from 'plaiceholder';
import ResumeSummary from '../../components/ResumeSummary';
import CustomIcon from '../../components/icon/CustomIcon';
import {resumeProps} from '../../utils/resume-props';

const CustomGithubCalendar = dynamic(
  () => import('../../components/CustomGithubCalendar'),
  {ssr: false},
);

const ReactTooltip = dynamic(() => import('react-tooltip'), {ssr: false});

const Timeline = dynamic(() => import('../../components/timeline/Timeline'), {
  ssr: true,
});
const Skills = dynamic(() => import('../../components/skills/Skills'), {
  ssr: true,
});

export default function Resume({
  workExperiences,
  educationExperiences,
  skills,
  profileSvg,
  profileImage,
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
          <a
            target="_blank"
            data-tip="Download PDF Version"
            arial-label="Download PDF Version"
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
        <Link href={process.env.NEXT_PUBLIC_RESUME_DOC_URL as string}>
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
      <ResumeSummary img={profileImage} svg={profileSvg} />
      <hr />
      <hr />
      <Timeline
        workExperiences={workExperiences}
        educationExperiences={educationExperiences}
      />
      <Skills skills={skills} />
      <ReactTooltip backgroundColor="#111111" />
      <CustomGithubCalendar />
    </>
  );
}

export const getStaticProps = async () => {
  const props = await resumeProps();
  const {img, svg} = await getPlaiceholder('/assets/profile-picture.jpeg');

  return {
    props: {
      ...props,
      profileImage: img,
      profileSvg: svg,
    },
  };
};

const ResumeDownloadWrapper = styled.div`
  position: absolute;
  display: flex;
  right: 1rem;
  top: 4rem;
`;
