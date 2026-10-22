import { ArrowUpRight, Github, FolderGit2 } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const projects = [
  {
    title: 'Adaptive Firewall using AI',
    category: 'Cybersecurity & Machine Learning',
    description:
      'Engineered an intelligent adaptive firewall application that leverages machine learning models to detect and mitigate malicious network anomalies in real-time. Reduced false positive alerts by 35% while increasing response times to zero-day probes.',
    tech: ['Python', 'Scikit-learn', 'Networking', 'Packet Inspection'],
    image: '/previews/adaptive-firewall.jpg',
    link: 'https://github.com/Madhu-36/Adaptive-firewall-Application-using-AI',
  },
  {
    title: 'DevIgnite',
    category: 'Systems & Developer Tooling',
    description:
      'Built a high-performance cross-platform developer environment manager in Rust. Implemented a sandboxed symlink routing engine that eliminates path collisions and reduced fresh workstation configuration times by over 80%.',
    tech: ['Rust', 'CLI Architecture', 'Systems Programming', 'Linux'],
    image: '/previews/devignite.jpg',
    link: 'https://github.com/Madhu-36/DevIgnite',
  },
  {
    title: 'ASTra',
    category: 'Static Analysis & Tooling',
    description:
      'Developed an abstract syntax tree (AST) inspection framework to parse and evaluate source code structures. Enables automated static vulnerability detection and automated compliance pattern scanning.',
    tech: ['Python', 'AST Analysis', 'Static Auditing', 'Security'],
    image: '/previews/astra.jpg',
    link: 'https://github.com/Madhu-36/ASTra',
  },
  {
    title: 'Game Complex',
    category: 'Interactive 3D Simulation',
    description:
      'Engineered an interactive 3D simulation with customized physics calculations and procedural generation mechanics, maintaining a stable 60 FPS through optimized rendering pipelines and memory pooling.',
    tech: ['C#', 'Unity Engine', 'HLSL Shaders', '3D Graphics'],
    image: '/previews/game-complex.jpg',
    link: 'https://github.com/Madhu-36/Game-Complex',
  },
  {
    title: 'Packet-way',
    category: 'Network Forensics',
    description:
      'Created a network packet sniffer and analysis engine that parses raw Ethernet and IP traffic, reconstructing packet flows and flagging suspicious handshake anomalies and port-scan attempts.',
    tech: ['Python', 'Raw Sockets', 'Wireshark Integration', 'Cybersecurity'],
    image: '/previews/packet-way.jpg',
    link: 'https://github.com/Madhu-36/Packet-way',
  },
  {
    title: 'Reflect-open',
    category: 'Local-First Application',
    description:
      'Engineered an open-source, local-first markdown note-taking workspace designed for offline resilience, fast indexing, and structured data preparation for local AI evaluation pipelines.',
    tech: ['TypeScript', 'React', 'Local-First DB', 'Markdown'],
    image: '/previews/reflect-open.jpg',
    link: 'https://github.com/Madhu-36/reflect-open',
  },
];

export default function Projects() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="work" className="section-pad relative border-t border-ink-800/60">
      <div className="container-px mx-auto max-w-7xl">
        <div
          ref={ref}
          className={`reveal ${visible ? 'is-visible' : ''}`}
        >
          <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between border-b border-ink-800/80 pb-6">
            <div>
              <span className="eyebrow mb-2">
                <FolderGit2 size={13} className="text-accent-400" />
                Featured Repositories
              </span>
              <h2 className="heading-lg text-balance mt-1">
                Engineered Projects &amp; Software
              </h2>
            </div>
            <a
              href="https://github.com/Madhu-36?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-ink-300 hover:text-white transition-colors"
            >
              <Github size={14} />
              View all on GitHub
              <ArrowUpRight size={13} />
            </a>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                key={project.title}
                className="card card-hover group relative overflow-hidden flex flex-col h-full border-ink-800/80 bg-ink-900/50"
              >
                {/* Project Media */}
                <div className="relative aspect-video overflow-hidden border-b border-ink-800/80 shrink-0 bg-ink-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute right-3 top-3 z-10 flex h-7 w-7 items-center justify-center rounded-md bg-ink-950/80 text-ink-300 backdrop-blur-sm border border-ink-700/60 transition-colors group-hover:border-accent-500/50 group-hover:text-accent-300">
                    <ArrowUpRight size={14} />
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-5 flex flex-col flex-grow">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-accent-400">
                    {project.category}
                  </span>
                  <h3 className="mt-1.5 font-display text-base font-semibold text-white group-hover:text-accent-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-ink-300 flex-grow">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5 shrink-0 pt-3 border-t border-ink-800/60">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded bg-ink-800/80 px-2 py-0.5 font-mono text-[10px] text-ink-300 border border-ink-700/50"
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
