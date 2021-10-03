import styled from '@emotion/styled';
import {FaFilePdf} from '@react-icons/all-files/fa/FaFilePdf';
import {FaFileWord} from '@react-icons/all-files/fa/FaFileWord';
import {InferGetStaticPropsType} from 'next';
import Head from 'next/head';
import Link from 'next/link';
import ResumeSummary from '../../components/ResumeSummary';
import Skills from '../../components/skills/Skills';
import Timeline from '../../components/timeline/Timeline';
import {WorkExperience} from '../../models/resume';
import {CategorizedSkill, Skill} from '../../models/skill';
import {supabase} from '../../utils/supabaseClient';

const ResumeDownloadWrapper = styled.div`
  position: absolute;
  right: 1rem;
  top: 4rem;
`;

export default function Resume({
  workExperiences,
  skills,
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
          <a target="_blank">
            <FaFilePdf size={30} title="Download PDF Version" />
          </a>
        </Link>
        <Link href={process.env.NEXT_PUBLIC_RESUME_DOC_URL as string}>
          <a target="_blank">
            <FaFileWord size={30} title="Download Word Version" />
          </a>
        </Link>
      </ResumeDownloadWrapper>
      <ResumeSummary />
      <Skills skills={skills} />
      <Timeline workExperiences={workExperiences} />
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
