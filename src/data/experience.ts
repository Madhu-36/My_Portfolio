export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
}

export const experiencesData: ExperienceItem[] = [
  {
    role: 'Ethical Hacker Intern',
    company: 'Jutrm Career Academy',
    period: 'Mar 2026',
    description:
      'Completed hands-on penetration testing and vulnerability assessments across real-time network infrastructure projects. Analyzed system vulnerabilities and evaluated kernel-level security requirements.',
    highlights: [
      'Real-time network penetration testing',
      'Kernel-level security evaluation',
      'Vulnerability assessment & mitigation',
    ],
  },
  {
    role: 'Ethical Hacker Intern',
    company: 'ACMEGRADE',
    period: 'Dec 2025 – Jun 2026',
    description:
      'Executed web and network vulnerability assessments using Burp Suite and Nmap. Intercepted HTTP traffic, verified security risks, and documented PoCs and remediation reports for development teams.',
    highlights: [
      'Burp Suite & Nmap vulnerability scanning',
      'XSS, SQLi, & Access Control assessment',
      'PoC documentation & remediation reporting',
      'Security patch verification',
    ],
  },
  {
    role: 'B.E. in Computer Science / AI & DS',
    company: 'East West Institute of Technology',
    period: '2022 – Present',
    description:
      'Pursuing engineering with a focus on Artificial Intelligence and Data Science. Coursework spans machine learning, data structures, algorithms, and software engineering.',
    highlights: [
      'ML & deep learning projects',
      'Data science & analytics',
      'Strong CS fundamentals',
      'Active in technical communities',
    ],
  },
];
