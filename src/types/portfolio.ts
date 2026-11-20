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

export type VulnerabilitySeverity = 'low' | 'medium' | 'high' | 'critical';

export interface ASTScanResult {
  ruleId: string;
  severity: VulnerabilitySeverity;
  message: string;
  line: number;
  snippet?: string;
}

export interface SecurityAuditReport {
  timestamp: string;
  target: string;
  clean: boolean;
  findings: ASTScanResult[];
}

export interface NetworkTelemetry {
  downlinkSpeedMbps: number;
  effectiveType: string;
  roundTripTimeMs: number;
  edgeLocation: string;
}

export interface SystemBenchmark {
  fps: number;
  domNodes: number;
  jsHeapSizeMb: number;
  lighthouseScore: number;
}

export interface TerminalCommandDoc {
  command: string;
  usage: string;
  description: string;
  category: 'core' | 'network' | 'cyber' | 'info';
}

export interface ShellMetadata {
  shellName: string;
  version: string;
  user: string;
  host: string;
  registeredCommands: string[];
}

