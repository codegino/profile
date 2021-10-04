export type Skill = {
  name: string;
  id: number;
  description: string;
  url: string;
  category: SkillCategory;
  is_highlight: string;
};

export type SkillCategory =
  | 'highlights'
  | 'frontend'
  | 'backend'
  | 'styling'
  | 'testing'
  | 'tools'
  | 'discipline'
  | 'hosting'
  | 'others';

export type CategorizedSkill = {
  category: SkillCategory;
  skills: Skill[];
};
