import {createClient} from 'contentful';
import type {EducationExperience, WorkExperience} from '../models/resume';
import type {CategorizedSkill, Skill} from '../models/skill';
import {client} from './contentful.utils';

export const fetchSkills = async (onlyHightlights = false) => {
  const entries = await client.getEntries<Skill>({
    content_type: 'skill',
    order: '-fields.level',
  });

  const skills = entries.items.map(skill => ({
    ...skill.fields,
    id: skill.sys.id,
  }));

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

export const fectchExperiences = async (lang = 'en') => {
  const workExperiences = await client.getEntries<WorkExperience>({
    content_type: 'experience',
    'fields.language': lang,
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
      })) ?? [],
    educationExperiences:
      educationExperiences.items?.map(exp => ({
        ...exp.fields,
        id: exp.sys.id,
      })) ?? [],
  };
};
