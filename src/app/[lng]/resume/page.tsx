import dynamicImport from 'next/dynamic';
import ResumeSummary from '../../../components/ResumeSummary';
import Timeline from '../../../components/timeline/Timeline';
import {client, getBlurringImage} from '../../../utils/contentful.utils';
import {fectchExperiences, fetchSkills} from '../../../utils/resume-props';
import {locales} from '../../i18n/locales.enum';
import LinkWrapper from './LinkWrapper';
import {NextPage} from 'next';
import {PropsWithLocale} from '../../../types/server-component';
import {newCommonMetaTags} from '../../../frontend-utils/meta-tags';

export const dynamic = 'force-static';

const CustomGithubCalendar = dynamicImport(
  () => import('../../../components/CustomGithubCalendar'),
  {ssr: false},
);

const Skills = dynamicImport(
  () => import('../../../components/skills/Skills'),
  {
    ssr: false,
  },
);

export const metadata = {
  ...newCommonMetaTags('Resume Page', '/resume'),
  title: 'Carlo Gino Catapang | Code Gino | Resume',
};

const ResumePage: NextPage<PropsWithLocale> = async ({params: {lng}}) => {
  const {
    props: {
      workExperiences,
      educationExperiences,
      skills,
      profileSvg,
      profileImage,
      resumePdfUrl,
      resumeWordUrl,
    },
  } = await getStaticProps({locale: lng});

  return (
    <>
      <LinkWrapper resumePdfUrl={resumePdfUrl} resumeWordUrl={resumeWordUrl} />
      <main>
        <ResumeSummary img={profileImage} svg={profileSvg} lang={lng} />
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
};

const getStaticProps = async ({locale}: {locale: locales}) => {
  const experiences = await fectchExperiences(locale);
  const skills = await fetchSkills();

  const {img, svg} = await getBlurringImage('3fgK6fKTGvBcmIRel2hJ6Y');

  const resumePdfAsset = await client.getAsset('3BjRYsXrkYX4uwCWkYHCjK');
  const resumeWordAsset = await client.getAsset('3WY4hQgMdEJiffLSpsHRnJ');

  const resumePdfUrl = `https:${resumePdfAsset.fields?.file?.url}`;
  const resumeWordUrl = `https:${resumeWordAsset.fields?.file?.url}`;

  return {
    props: {
      ...experiences,
      skills,
      resumePdfUrl,
      resumeWordUrl,
      profileImage: img,
      profileSvg: svg,
    },
  };
};

export default ResumePage;
