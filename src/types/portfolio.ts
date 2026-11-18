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

export type CommandCategory = 'Navigation' | 'Projects' | 'Actions';

export interface CommandPaletteAction {
  id: string;
  category: CommandCategory;
  title: string;
  subtitle?: string;
  icon: React.ReactNode;
  action: () => void;
}

export interface GitHubStatsTelemetry {
  publicRepos: number;
  followers: number;
  starsCount: number;
  lastUpdated: string;
  uptimePercentage: number;
}

export interface NavigationLink {
  id: string;
  label: string;
  href: string;
}

export interface SystemTelemetry {
  uptimePercent: number;
  edgeNode: string;
  latencyMs: number;
  activeStatus: boolean;
}

