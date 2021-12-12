import {FaFilePdf} from '@react-icons/all-files/fa/FaFilePdf';
import {FaFileWord} from '@react-icons/all-files/fa/FaFileWord';
import type {InferGetStaticPropsType} from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import ResumeSummary from '../../components/ResumeSummary';
import NextLink from '../../components/basic/NextLink';
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
        <title>
          Check out my Resume Page | Code Gino | Carlo Gino Catapang
        </title>
        {commonMetaTags('Resume Page', '/resume')}
      </Head>

      <div className="absolute flex right-5 top-24">
        <NextLink
          href={resumePdfUrl}
          target="_blank"
          title="Download PDF Version"
          aria-label="Download PDF Version"
          rel="noopener nofollow"
        >
          <CustomIcon
            icon={FaFilePdf}
            size={40}
            color="#F40F02"
            title="Download PDF Version"
            hoverColor="red"
          />
        </NextLink>
        <NextLink
          href={resumeWordUrl}
          target="_blank"
          title="Download Word Version"
          aria-label="Download Word Version"
          rel="noopener nofollow"
        >
          <CustomIcon
            icon={FaFileWord}
            size={40}
            color="#015299"
            title="Download Word Version"
            hoverColor="blue"
          />
        </NextLink>
      </div>
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
        <div id="skills">
          <Skills skills={skills} />
        </div>
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
