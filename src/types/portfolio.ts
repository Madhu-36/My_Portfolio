export type ProjectDomain = 'all' | 'cyber' | 'ai' | 'systems';

export interface ProjectItem {
  title: string;
  category: string;
  domain: ProjectDomain;
  description: string;
  tech: string[];
  image: string;
  accent: string;
  link: string;
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
