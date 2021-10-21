import styled from '@emotion/styled';
import {FaFilePdf} from '@react-icons/all-files/fa/FaFilePdf';
import {FaFileWord} from '@react-icons/all-files/fa/FaFileWord';
import {InferGetStaticPropsType} from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Link from 'next/link';
import ResumeSummary from '../../components/ResumeSummary';
import CustomIcon from '../../components/icon/CustomIcon';
import Timeline from '../../components/timeline/Timeline';
import {commonMetaTags} from '../../frontend-utils/meta-tags';
import {resumeProps} from '../../utils/resume-props';
import {getImageFromSupabase} from '../../utils/supabase-image';

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
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>Carlo Gino Catapang Resume</title>
        <meta name="description" content="Carlo Gino Catapang resume" />$
        {commonMetaTags('/resume')}
      </Head>

      <ResumeDownloadWrapper>
        <Link href={process.env.NEXT_PUBLIC_RESUME_PDF_URL as string}>
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
      <hr />
      <hr />
      <Skills skills={skills} />
      <ReactTooltip backgroundColor="#111111" />
      <CustomGithubCalendar />
    </>
  );
}

export const getStaticProps = async () => {
  const props = await resumeProps();
  const {img, svg} = await getImageFromSupabase('profile_photo');

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
  top: 6rem;
`;
