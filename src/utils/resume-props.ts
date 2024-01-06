import type {EntryFieldTypes} from 'contentful';
import type {CategorizedSkill, Skill, SkillCategory} from '../models/skill';
import {client} from './contentful.utils';
import {mapLocale} from '@/app/i18n/map-locale.util';
import {FALLBACK_LOCALE} from '@/app/i18n/settings';

type SkillSkeleton = {
  contentTypeId: 'skill';
  fields: {
    name: EntryFieldTypes.Text;
    id: EntryFieldTypes.Text;
    url: EntryFieldTypes.Text;
    category: EntryFieldTypes.Text;
    isHighlight: EntryFieldTypes.Boolean;
    level: EntryFieldTypes.Number;
  };
};

export const fetchSkills = async (onlyHightlights = false) => {
  const entries = await client.getEntries<SkillSkeleton>({
    content_type: 'skill',
    order: ['-fields.level'],
  });

  const skills = entries.items.map(skill => ({
    ...skill.fields,
    category: skill.fields.category as SkillCategory,
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

type WorkExperienceSkeleton = {
  contentTypeId: 'experience';
  fields: {
    id: EntryFieldTypes.Text;
    url: EntryFieldTypes.Text;
    organization: EntryFieldTypes.Text;
    role: EntryFieldTypes.Text;
    title: EntryFieldTypes.Text;
    startDate: EntryFieldTypes.Date;
    endDate: EntryFieldTypes.Text;
    content: EntryFieldTypes.Text;
    language: EntryFieldTypes.Text;
    category: 'work';
  };
};

type EducationSkeleton = {
  contentTypeId: 'education';
  fields: {
    id: EntryFieldTypes.Text;
    organization: EntryFieldTypes.Text;
    role: EntryFieldTypes.Text;
    title: EntryFieldTypes.Text;
    startDate: EntryFieldTypes.Date;
    endDate: EntryFieldTypes.Text;
    content: EntryFieldTypes.Text;
    language: EntryFieldTypes.Text;
    category: 'education';
    url: EntryFieldTypes.Text;
  };
};

export const fectchExperiences = async () => {
  const locale = mapLocale(FALLBACK_LOCALE);
  const workExperiences = await client.getEntries<WorkExperienceSkeleton>({
    content_type: 'experience',
    order: ['-fields.startDate'],
    locale,
  });

  const educationExperiences = await client.getEntries<EducationSkeleton>({
    content_type: 'education',
    order: ['-fields.startDate'],
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
