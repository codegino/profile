export type WorkExperience = {
  id: number;
  organization: string;
  role: string;
  title: string;
  start_date: string;
  end_date: string;
  content: string;
  category: 'work' | 'education';
};
