export type SkillColor = "blue" | "green" | "purple" | "orange" | "pink";

export interface Link {
  label: string;
  url: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  /** ISO start date, used only for sorting/JSON-LD, never rendered directly */
  startDate: string;
  /** ISO end date, or null if current */
  endDate: string | null;
  description: string;
  tech: { label: string; color: SkillColor }[];
  highlights?: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  period: string;
  description: string;
  tech: { label: string; color: SkillColor }[];
  links: Link[];
}

export interface SkillGroup {
  key: string;
  title: string;
  color: SkillColor;
  items: string[];
}

export interface EducationItem {
  id: string;
  title: string;
  institution: string;
  period: string;
}

export interface Reference {
  name: string;
  role: string;
  company: string;
  phone: string;
  email: string;
}

export interface Language {
  name: string;
  level: string;
}

export interface Profile {
  name: string;
  title: string;
  bio: string;
  shortBio: string;
  location: string;
  email: string;
  phone: string;
  phoneHref: string;
  github: string;
  githubUrl: string;
}
