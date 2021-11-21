import type {WorkExperience} from '../models/resume';
import type {CategorizedSkill, Skill} from '../models/skill';
import {supabase} from '../utils/supabaseClient';
import {formatDate} from './date-formatter';

export const fetchSkills = async (onlyHightlights = false) => {
  let {data: skills} = onlyHightlights
    ? await supabase
        .from<Skill>('skill')
        .select('*')
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
  let {data: workExperiences} = await supabase
    .from<WorkExperience>('experience')
    .select('*')
    .eq('category', 'work')
    .order('start_date', {ascending: false});

  let {data: educationExperiences} = await supabase
    .from<WorkExperience>('experience')
    .select('*')
    .eq('category', 'education')
    .order('id', {ascending: true});

  // const categorizedSkills = await categorizedSkills();

  return {
    workExperiences:
      workExperiences?.map(exp => ({
        ...exp,
        end_date: formatDate(new Date(exp.end_date)),
        start_date: formatDate(new Date(exp.start_date)),
      })) ?? [],
    educationExperiences:
      educationExperiences?.map(exp => ({
        ...exp,
        end_date: formatDate(new Date(exp.end_date)),
        start_date: formatDate(new Date(exp.start_date)),
      })) ?? [],
  };
};
