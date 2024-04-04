export type Skill = {
  name: string;
  id: string;
  url: string;
  category: SkillCategory;
  isHighlight: boolean;
  level: number;
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
  | 'others'
  | 'database';

export type CategorizedSkill = {
  category: SkillCategory;
  skills: Skill[];
};
