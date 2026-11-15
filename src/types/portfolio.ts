export type ProjectDomain = 'all' | 'cyber' | 'ai' | 'systems';

export interface CaseStudyData {
  problem: string;
  architecture: string[];
  solution: string;
  metrics: string[];
  githubUrl: string;
}

export interface ProjectItem {
  title: string;
  category: string;
  domain: ProjectDomain;
  description: string;
  tech: string[];
  image: string;
  accent: string;
  link: string;
  caseStudy?: CaseStudyData;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  link: string;
  icon?: string;
}

export interface TerminalHistoryItem {
  command: string;
  output: React.ReactNode;
}
