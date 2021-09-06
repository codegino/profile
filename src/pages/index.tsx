import {InferGetStaticPropsType} from 'next';
import Head from 'next/head';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Skills from '../components/skills/Skills';
import Timeline from '../components/timeline/Timeline';
import {WorkExperience} from '../models/resume';
import {CategorizedSkill, Skill} from '../models/skill';
import {supabase} from '../utils/supabaseClient';

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

      <Skills skills={skills} />
      <Timeline workExperiences={workExperiences} />
      <h1>Welcome to my page</h1>
      <p>This page is under construction</p>
      <Hero />
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
