import Footer from '../components/Footer';
import Hero from '../components/Hero';
import ResumeSummary from '../components/ResumeSummary';
import Skills from '../components/skills/Skills';
import Timeline from '../components/timeline/Timeline';
import {WorkExperience} from '../models/resume';
import {CategorizedSkill, Skill} from '../models/skill';
import {supabase} from '../utils/supabaseClient';
import {InferGetStaticPropsType} from 'next';
import Head from 'next/head';

export default function Home({
  workExperiences,
  skills,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>Carlo Gino</title>
        <meta name="description" content="Carlo Gino Catapang" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <ResumeSummary />
      <Skills skills={skills} />
      <Timeline workExperiences={workExperiences} />
      <Footer />
    </>
  );
}

export const getStaticProps = async () => {
  let {data: workExperiences} = await supabase
    .from<WorkExperience>('experience')
    .select('*');

  let {data: skills} = await supabase.from<Skill>('skill').select('*');

  const categorizedSkills: CategorizedSkill[] =
    skills?.reduce(
      (acc: CategorizedSkill[], curr: Skill): CategorizedSkill[] => {
        const existingCategory = acc.find(
          category => category.category === curr.category,
        );

        if (existingCategory) {
          existingCategory.skills.push(curr);
        } else {
          acc.push({
            category: curr.category,
            skills: [curr],
          });
        }

        return acc;
      },
      [],
    ) ?? [];

  // Create category for active skills
  const activeSkills = skills?.filter(skill => skill.is_active) ?? [];

  // Set active skills as the first element
  categorizedSkills.unshift({
    category: 'Active Skills',
    skills: activeSkills,
  });

  return {
    props: {
      workExperiences: workExperiences as WorkExperience[],
      skills: categorizedSkills as CategorizedSkill[],
    },
  };
};
