import {FaFilePdf} from '@react-icons/all-files/fa/FaFilePdf';
import {FaFileWord} from '@react-icons/all-files/fa/FaFileWord';
import type {GetStaticProps, InferGetStaticPropsType} from 'next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import ResumeSummary from '../../components/ResumeSummary';
import NextLink from '../../components/basic/NextLink';
import CustomIcon from '../../components/icon/CustomIcon';
import Timeline from '../../components/timeline/Timeline';
import {commonMetaTags} from '../../frontend-utils/meta-tags';
import {client, getBlurringImage} from '../../utils/contentful.utils';
import {fectchExperiences, fetchSkills} from '../../utils/resume-props';

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
        <title>Carlo Gino Catapang | Code Gino | Resume</title>
        {commonMetaTags('Resume Page', '/resume')}
      </Head>

      <div className="absolute flex right-5 top-24">
        <NextLink
          href={resumePdfUrl}
          target="_blank"
          title="Download PDF Version"
          aria-label="Download PDF Version"
          rel="noopener noreferrer nofollow"
        >
          <CustomIcon
            icon={FaFilePdf}
            size={44}
            color="#F40F02"
            title="Download PDF Version"
            hoverColor="red"
          />
          <span aria-hidden className="hidden">
            Download PDF Version
          </span>
        </NextLink>
        <NextLink
          href={resumeWordUrl}
          target="_blank"
          title="Download Word Version"
          aria-label="Download Word Version"
          rel="noopener noreferrer nofollow"
        >
          <CustomIcon
            icon={FaFileWord}
            size={44}
            color="#015299"
            title="Download Word Version"
            hoverColor="blue"
          />
          <span aria-hidden className="hidden">
            Download Word Version
          </span>
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
        <div className="w-full flex justify-center overflow-hidden">
          <div className="max-w-6xl">
            <CustomGithubCalendar />
          </div>
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({locale}) => {
  const experiences = await fectchExperiences(locale);
  const skills = await fetchSkills();

  const {img, svg} = await getBlurringImage('3fgK6fKTGvBcmIRel2hJ6Y');

  const resumePdfAsset = await client.getAsset('3BjRYsXrkYX4uwCWkYHCjK');
  const resumeWordAsset = await client.getAsset('3WY4hQgMdEJiffLSpsHRnJ');

  const resumePdfUrl = `https:${resumePdfAsset.fields.file.url}`;
  const resumeWordUrl = `https:${resumeWordAsset.fields.file.url}`;

  return {
    props: {
      ...experiences,
      skills,
      resumePdfUrl,
      resumeWordUrl,
      profileImage: img,
      profileSvg: svg,
      ...(await serverSideTranslations(locale as string, [
        'common',
        'home',
        'resume',
      ])),
    },
  };
};
