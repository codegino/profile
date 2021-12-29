import {createClient} from 'contentful';
import type {EducationExperience, WorkExperience} from '../models/resume';
import type {CategorizedSkill, Skill} from '../models/skill';
import {supabase} from '../utils/supabaseClient';
import {formatDate} from './date-formatter';

export const fetchSkills = async (onlyHightlights = false) => {
  let {data: skills} = onlyHightlights
    ? await supabase
        .from<Skill>('skill')
        .select('id,name,description,url,category,is_highlight,level')
        .eq('is_highlight', onlyHightlights)
        .order('level', {ascending: false})
    : await supabase
        .from<Skill>('skill')
        .select('*')
        .order('level', {ascending: false});

  const categorizedSkills: CategorizedSkill[] = !onlyHightlights
    ? skills?.reduce(
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
      ) ?? []
    : [];

  // Create category for active skills
  const activeSkills = skills?.filter(skill => skill.is_highlight) ?? [];

  // Set active skills as the first element
  categorizedSkills.unshift({
    category: 'highlights',
    skills: activeSkills,
  });

  return categorizedSkills;
};

export const fectchExperiences = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID as string,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
  });

  const workExperiences = await client.getEntries<WorkExperience>({
    content_type: 'experience',
    order: '-fields.startDate',
  });

  const educationExperiences = await client.getEntries<EducationExperience>({
    content_type: 'education',
    order: '-fields.startDate',
  });

  return {
    workExperiences:
      workExperiences.items?.map(exp => ({
        ...exp.fields,
        id: exp.sys.id,
        end_date: formatDate(new Date(exp.fields.endDate)),
        start_date: formatDate(new Date(exp.fields.startDate)),
      })) ?? [],
    educationExperiences:
      educationExperiences.items?.map(exp => ({
        ...exp.fields,
        id: exp.sys.id,
        end_date: formatDate(new Date(exp.fields.endDate)),
        start_date: formatDate(new Date(exp.fields.startDate)),
      })) ?? [],
  };
};
