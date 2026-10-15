import { ArrowUpRight } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const projects = [
  {
    title: 'Adaptive Firewall using AI',
    category: 'Cybersecurity & AI',
    description:
      'Engineered an intelligent adaptive firewall that leverages machine learning to detect and mitigate network threats in real-time, reducing false positives by 35% and improving threat response time.',
    tech: ['Python', 'AI/ML', 'Networking'],
    image: '/previews/adaptive-firewall.jpg',
    accent: 'from-accent-500/20 to-accent-700/5',
    link: 'https://github.com/Madhu-36/Adaptive-firewall-Application-using-AI',
  },
  {
    title: 'DevIgnite',
    category: 'Development Tools',
    description:
      'Built a high-performance cross-platform environment manager in Rust. Features a sandboxed symlink routing engine that eliminated path pollution and reduced setup times by over 80%.',
    tech: ['Rust', 'CLI', 'System Architecture'],
    image: '/previews/devignite.jpg',
    accent: 'from-gold-500/20 to-gold-600/5',
    link: 'https://github.com/Madhu-36/DevIgnite',
  },
  {
    title: 'ASTra',
    category: 'Software Engineering',
    description:
      'Developed advanced abstract syntax tree (AST) tooling utilities for robust application development, streamlining code analysis and enabling automated security auditing workflows.',
    tech: ['Python', 'AST', 'Tooling'],
    image: '/previews/astra.jpg',
    accent: 'from-accent-500/20 to-accent-700/5',
    link: 'https://github.com/Madhu-36/ASTra',
  },
  {
    title: 'Game Complex',
    category: 'Game Development',
    description:
      'Programmed an interactive 3D game complex with optimized rendering pipelines and complex AI-driven mechanics, maintaining 60 FPS under heavy procedural generation loads.',
    tech: ['C#', 'Game Engine', '3D Graphics'],
    image: '/previews/game-complex.jpg',
    accent: 'from-gold-500/20 to-gold-600/5',
    link: 'https://github.com/Madhu-36/Game-Complex',
  },
  {
    title: 'Packet-way',
    category: 'Networking & Security',
    description:
      'Created a network packet analysis tool that parses and logs raw traffic flows, actively identifying anomalous behavior patterns with deep packet inspection techniques.',
    tech: ['Networking', 'Cybersecurity', 'Python'],
    image: '/previews/packet-way.jpg',
    accent: 'from-accent-500/20 to-accent-700/5',
    link: 'https://github.com/Madhu-36/Packet-way',
  },
  {
    title: 'Reflect-open',
    category: 'Open Source / Tools',
    description:
      'Contributed an open-source Local-First Markdown note-taking app structured for AI agent integration, optimizing offline data synchronization and rich text formatting.',
    tech: ['TypeScript', 'React', 'Markdown'],
    image: '/previews/reflect-open.jpg',
    accent: 'from-gold-500/20 to-gold-600/5',
    link: 'https://github.com/Madhu-36/reflect-open',
  },
];

export default function Projects() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="work" className="section-pad relative">
      <div className="container-px mx-auto max-w-7xl">
        <div
          ref={ref}
          className={`reveal ${visible ? 'is-visible' : ''}`}
        >
          <div className="mb-14 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="eyebrow mb-6">
                <span className="h-px w-8 bg-accent-400" />
                Selected Work
              </span>
              <h2 className="heading-lg text-balance">
                Projects I&apos;ve built.
              </h2>
            </div>
            <p className="max-w-sm text-base text-ink-400">
              A selection of security tools, AI models, and games I&apos;ve
              designed and built across my three domains of interest.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                key={project.title}
                className="card card-hover group relative overflow-hidden flex flex-col h-full"
              >
                {/* Image */}
                <div className="relative aspect-video overflow-hidden border-b border-ink-800 shrink-0">
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
                  <h3 className="mt-2 font-display text-lg font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-300 flex-grow">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5 shrink-0">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-md bg-ink-800/80 px-2 py-1 font-mono text-[10px] text-ink-400"
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
