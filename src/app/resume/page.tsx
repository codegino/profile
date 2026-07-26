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

  const resumePdfUrl =
    'https://cdn.grigora.co/projects/10ddb1b4-c8f5-48cd-98f4-e11824bf400b/others/cv/CarloGinoCatapang-FullStack.pdf';
  const resumeWordUrl =
    'https://cdn.grigora.co/projects/10ddb1b4-c8f5-48cd-98f4-e11824bf400b/others/cv/Carlo Gino Catapang Full Stack.docx';

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
