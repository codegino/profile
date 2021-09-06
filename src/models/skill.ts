export type Skill = {
  name: string;
  id: number;
  description: string;
  url: string;
  category: string;
  is_active: string;
};

export type CategorizedSkill = {
  category: string;
  skills: Skill[];
};
