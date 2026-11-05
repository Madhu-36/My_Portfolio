import { useState } from 'react';
import { ArrowUpRight, Github, FolderGit2 } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

export interface Project {
  title: string;
  category: string;
  domain: 'all' | 'cyber' | 'ai' | 'systems';
  description: string;
  tech: string[];
  image: string;
  accent: string;
  link: string;
}

const projects: Project[] = [
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

const filterTabs = [
  { label: 'All Projects', value: 'all' },
  { label: 'Cybersecurity', value: 'cyber' },
  { label: 'AI & Machine Learning', value: 'ai' },
  { label: 'Systems & Tools', value: 'systems' },
] as const;

export default function Projects() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [activeFilter, setActiveFilter] = useState<'all' | 'cyber' | 'ai' | 'systems'>('all');

  const filteredProjects = projects.filter((p) => {
    if (activeFilter === 'all') return true;
    return p.domain === activeFilter;
  });

  return (
    <section id="work" className="section-pad relative">
      <div className="container-px mx-auto max-w-7xl">
        <div
          ref={ref}
          className={`reveal ${visible ? 'is-visible' : ''}`}
        >
          <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between border-b border-ink-800 pb-6">
            <div>
              <span className="eyebrow mb-3">
                <FolderGit2 size={14} className="text-accent-400" />
                GitHub Repositories
              </span>
              <h2 className="heading-lg text-balance">
                Projects I&apos;ve built.
              </h2>
              <p className="mt-2 max-w-xl text-base text-ink-400">
                Live open-source repositories across cybersecurity, artificial intelligence, and systems tooling.
              </p>
            </div>

            <a
              href="https://github.com/Madhu-36?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-ink-700 bg-ink-900/60 px-4 py-2 text-xs font-mono uppercase tracking-wider text-ink-200 transition-all hover:border-accent-500/50 hover:bg-accent-500/10 hover:text-white"
            >
              <Github size={15} />
              <span>github.com/Madhu-36</span>
              <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Category Filter Tabs */}
          <div className="mb-8 flex flex-wrap items-center gap-2">
            {filterTabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveFilter(tab.value)}
                className={`rounded-lg px-3.5 py-1.5 text-xs font-medium transition-all ${
                  activeFilter === tab.value
                    ? 'bg-accent-500 text-ink-950 font-semibold shadow-md shadow-accent-500/20'
                    : 'border border-ink-800 bg-ink-900/60 text-ink-400 hover:border-ink-700 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Project Cards Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                key={project.title}
                className="card card-hover group relative overflow-hidden flex flex-col h-full bg-ink-900/60"
              >
                {/* Image */}
                <div className="relative aspect-video overflow-hidden border-b border-ink-800 shrink-0 bg-ink-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute right-3 top-3 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-ink-950/80 text-ink-300 backdrop-blur-sm transition-all duration-300 group-hover:bg-accent-500 group-hover:text-ink-950">
                    <ArrowUpRight size={16} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-grow">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-accent-400">
                    {project.category}
                  </span>
                  <h3 className="mt-2 font-display text-lg font-semibold text-white group-hover:text-accent-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-300 flex-grow">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5 shrink-0 pt-3 border-t border-ink-800/60">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-md bg-ink-800/80 px-2 py-1 font-mono text-[10px] text-ink-300 border border-ink-700/50"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
