import {EducationExperience, WorkExperience} from '@/models/resume';
import type {CategorizedSkill, Skill} from '../models/skill';
import {apitable} from './api-table';

export const fetchSkills = async (
  onlyHightlights = false,
): Promise<CategorizedSkill[]> => {
  const skillsDatasheet = apitable.datasheet('dsth3SW8jqkBAt0guK');

  const {data} = await skillsDatasheet.records.query();

  const skills = data?.records.map(skill => ({
    ...skill.fields,
  })) as Skill[];
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
  const educationDatasheet = apitable.datasheet('dstRgM4WjV3VMCPAhe');
  const workDatasheet = apitable.datasheet('dstubZqko7X7tsnlgl');

  return {
    workExperiences:
      ((await workDatasheet.records.query())?.data?.records.map(
        exp => exp.fields,
      ) as WorkExperience[]) ?? [],
    educationExperiences:
      ((await educationDatasheet.records.query())?.data?.records.map(
        exp => exp.fields,
      ) as EducationExperience[]) ?? [],
  };
};
