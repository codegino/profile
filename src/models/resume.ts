export type WorkExperience = {
  id: string;
  organization: string;
  role: string;
  title: string;
  startDate: string;
  endDate: string;
  content: string;
  category: 'work';
  url: string;
};

export type EducationExperience = {
  id: string;
  organization: string;
  role: string;
  title: string;
  startDate: string;
  endDate: string;
  content: string;
  category: 'education';
  url: string;
};
