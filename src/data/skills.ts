export interface SkillCategory {
  category: string;
  items: string[];
}

export const skillsData: SkillCategory[] = [
  {
    category: 'Cybersecurity & Ethical Hacking',
    items: [
      'Penetration Testing',
      'Vulnerability Analysis',
      'Malware Analysis',
      'Identity Management',
      'Network Security',
      'Burp Suite',
      'Wireshark',
      'Metasploit',
      'Nmap',
      'OWASP Top 10',
    ],
  },
  {
    category: 'AI & Data Science',
    items: [
      'Python',
      'Machine Learning',
      'Deep Learning',
      'Neural Networks',
      'TensorFlow',
      'Pandas',
      'NumPy',
      'Scikit-learn',
      'Data Visualization',
      'NLP',
    ],
  },
  {
    category: 'Game Development',
    items: [
      'Unity',
      'C#',
      'Godot',
      'Game Physics',
      'Level Design',
      '3D Modeling',
      'Blender',
      'Shader Programming',
    ],
  },
  {
    category: 'Tools & Languages',
    items: [
      'Git & GitHub',
      'Linux',
      'Docker',
      'VS Code',
      'C++',
      'JavaScript',
      'SQL',
      'Bash Scripting',
    ],
  },
];

export const marqueeSkills = [
  'Python', 'C#', 'C++', 'Linux', 'Burp Suite', 'Wireshark',
  'Metasploit', 'Nmap', 'Unity', 'Godot', 'TensorFlow',
  'Pandas', 'NumPy', 'Scikit-learn', 'Docker', 'Git',
  'React', 'TypeScript', 'Rust', 'Reverse Engineering',
];
