import {NextPage} from 'next';
import dynamicImport from 'next/dynamic';
import {newCommonMetaTags} from '../../frontend-utils/meta-tags';
import {getBlurringImage} from '../../utils/contentful.utils';
import {fectchExperiences, fetchSkills} from '../../utils/resume-props';
import ResumeContactCta from './ResumeContactCta';
import ResumeHero from './ResumeHero';
import ResumeSkills from './ResumeSkills';
import ResumeTimeline from './ResumeTimeline';

const CustomGithubCalendar = dynamicImport(
  () => import('../../components/CustomGithubCalendar'),
);

export const metadata = {
  ...newCommonMetaTags('Resume Page', '/resume'),
  title: 'Carlo Gino Catapang | Code Gino | Resume',
};

const ResumePage: NextPage = async () => {
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
  } = await getStaticProps();

  return (
    <main>
      <ResumeHero
        img={profileImage}
        svg={profileSvg}
        resumePdfUrl={resumePdfUrl}
        resumeWordUrl={resumeWordUrl}
      />
      <ResumeTimeline
        workExperiences={workExperiences}
        educationExperiences={educationExperiences}
      />
      <div id="skills">
        <ResumeSkills skills={skills} />
      </div>
      <section className="flex w-full justify-center overflow-hidden px-4">
        <div className="w-full max-w-4xl">
          <CustomGithubCalendar />
        </div>
      </section>
      <ResumeContactCta
        resumePdfUrl={resumePdfUrl}
        resumeWordUrl={resumeWordUrl}
      />
    </main>
  );
};

const getStaticProps = async () => {
  const experiences = await fectchExperiences();
  const skills = await fetchSkills();

  const {img, svg} = await getBlurringImage('profile-picture.jpeg');

  // Stored in Supabase Storage (public bucket: "resume").
  // To publish an update, upload over the same object name so these URLs stay valid.
  const resumeBaseUrl =
    'https://wqxykwsooyvgyappeyat.supabase.co/storage/v1/object/public/resume';
  const resumePdfUrl = `${resumeBaseUrl}/carlo-gino-catapang-resume.pdf`;
  const resumeWordUrl = `${resumeBaseUrl}/carlo-gino-catapang-resume.docx`;

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
