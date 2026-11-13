import { ProjectItem } from '../types/portfolio';

export const projectsData: ProjectItem[] = [
  {
    title: 'Kavach: Agentic AI Security',
    category: 'Cybersecurity & Agentic AI',
    domain: 'cyber',
    description:
      'Cryptographic micro-mandates that guarantee mathematical spending safety for autonomous AI agents over digital payment rails, pairing asymmetric Ed25519 signatures with process isolation.',
    tech: ['Python', 'Ed25519 Cryptography', 'Process Isolation', 'Docker'],
    image: '/previews/kavach.gif',
    accent: 'from-accent-500/20 to-accent-700/5',
    link: 'https://github.com/Madhu-36/Kavach',
  },
  {
    title: 'CodeShield: AI Firewall',
    category: 'AI Security & Tooling',
    domain: 'cyber',
    description:
      'Edge-native security firewall and AST static analysis engine to intercept prompt injection, dangerous code generation patterns, and malicious code execution in real time.',
    tech: ['Python', 'AST Analysis', 'Security Auditing', 'CI/CD Pipelines'],
    image: '/previews/codeshield.jpg',
    accent: 'from-accent-500/20 to-accent-700/5',
    link: 'https://github.com/Madhu-36/CodeShield',
  },
  {
    title: 'Adaptive Firewall using AI',
    category: 'Cybersecurity & Machine Learning',
    domain: 'cyber',
    description:
      'Intelligent adaptive firewall leveraging LSTM-Autoencoders and Reinforcement Learning (PPO) for real-time anomaly detection and kernel-level mitigation, cutting false positives by 35%.',
    tech: ['Python', 'LSTM-Autoencoders', 'RL (PPO)', 'Kernel Automation'],
    image: '/previews/adaptive-firewall.jpg',
    accent: 'from-accent-500/20 to-accent-700/5',
    link: 'https://github.com/Madhu-36/Adaptive-firewall-Application-using-AI',
  },
  {
    title: 'DevIgnite',
    category: 'Systems & Developer Tooling',
    domain: 'systems',
    description:
      'High-performance cross-platform environment manager built in Rust. Features a sandboxed symlink routing engine that eliminates path pollution and slashes setup times by over 80%.',
    tech: ['Rust', 'CLI Architecture', 'Systems Programming', 'Linux'],
    image: '/previews/devignite.jpg',
    accent: 'from-gold-500/20 to-gold-600/5',
    link: 'https://github.com/Madhu-36/DevIgnite',
  },
  {
    title: 'MXB (Machine eXecutive Brain)',
    category: 'AI & Desktop Automation',
    domain: 'ai',
    description:
      'Desktop executive AI assistant and second brain for Windows, integrating local LLM inference engines, offline resilience, and automated context retrieval workflows.',
    tech: ['Python', 'Local Inference', 'Desktop Automation', 'NLP'],
    image: '/previews/mxb.jpg',
    accent: 'from-accent-500/20 to-accent-700/5',
    link: 'https://github.com/Madhu-36/MXB',
  },
  {
    title: 'PacketWay 3D',
    category: 'Network Forensics & WebGL',
    domain: 'cyber',
    description:
      'Enterprise-grade network threat detection and deep packet inspection platform featuring real-time 3D packet traffic visualization and live anomaly telemetry.',
    tech: ['React', 'Node.js', 'Three.js', 'Packet Forensics'],
    image: '/previews/packet-way.jpg',
    accent: 'from-accent-500/20 to-accent-700/5',
    link: 'https://github.com/Madhu-36/Packet-way',
  },
  {
    title: 'Game Complex',
    category: 'Full Stack & Game Platform',
    domain: 'systems',
    description:
      'Next-generation digital games storefront and interactive platform featuring optimized real-time catalog navigation, secure checkout, and high-performance game asset delivery.',
    tech: ['React 19', 'Django', 'Python', 'Tailwind CSS'],
    image: '/previews/game-complex.jpg',
    accent: 'from-gold-500/20 to-gold-600/5',
    link: 'https://github.com/Madhu-36/Game-Complex',
  },
  {
    title: 'Reflect-open',
    category: 'Open Source / Local-First',
    domain: 'systems',
    description:
      'Open-source local-first Markdown workspace structured for agentic AI integration, zero-latency offline synchronization, and rich document knowledge mapping.',
    tech: ['TypeScript', 'React', 'Local-First DB', 'Markdown'],
    image: '/previews/reflect-open.jpg',
    accent: 'from-gold-500/20 to-gold-600/5',
    link: 'https://github.com/Madhu-36/reflect-open',
  },
];

export const projectFilterTabs = [
  { label: 'All Projects', value: 'all' },
  { label: 'Cybersecurity', value: 'cyber' },
  { label: 'AI & Machine Learning', value: 'ai' },
  { label: 'Systems & Tools', value: 'systems' },
] as const;
