import {educationExperience, workExperiences} from '@/data/experiences';
import {skills} from '@/data/skills';
import type {CategorizedSkill, Skill} from '../models/skill';

export const fetchSkills = async (
  onlyHightlights = false,
): Promise<CategorizedSkill[]> => {
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
  const activeSkills = skills?.filter(skill => skill.isHighlight) ?? [];

  // Set active skills as the first element
  categorizedSkills.unshift({
    category: 'highlights',
    skills: activeSkills,
  });

  return categorizedSkills;
};

export const fectchExperiences = async () => {
  const work = workExperiences;
  work.sort((a, b) => {
    return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
  });
  return {
    workExperiences: work,
    educationExperiences: educationExperience,
  };
};
