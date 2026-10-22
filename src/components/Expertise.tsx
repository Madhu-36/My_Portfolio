import { Terminal, Shield, Brain, Wrench, Layers } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const skillCategories = [
  {
    category: 'Security & Penetration Testing',
    icon: Shield,
    summary: 'Auditing system boundaries, inspecting protocols, and mitigating vulnerabilities.',
    items: [
      'Burp Suite',
      'Wireshark',
      'Nmap',
      'Metasploit',
      'OWASP Top 10',
      'Vulnerability Assessment',
      'Packet Analysis',
      'Identity & Access Management',
      'Kali Linux',
      'Network Security Auditing',
    ],
  },
  {
    category: 'Languages & Core Runtimes',
    icon: Terminal,
    summary: 'Building cross-platform services, automation scripts, and systems utilities.',
    items: [
      'Python',
      'Rust',
      'C#',
      'TypeScript',
      'JavaScript',
      'C++',
      'SQL (PostgreSQL/MySQL)',
      'Bash Scripting',
    ],
  },
  {
    category: 'Applied AI & Data Science',
    icon: Brain,
    summary: 'Training predictive classifiers, processing features, and deploying neural nets.',
    items: [
      'PyTorch',
      'TensorFlow',
      'Scikit-learn',
      'Pandas',
      'NumPy',
      'OpenCV',
      'Feature Engineering',
      'Anomaly Detection Models',
      'Data Visualization',
    ],
  },
  {
    category: 'Cloud, Infrastructure & Tooling',
    icon: Wrench,
    summary: 'Containerizing workloads, managing cloud assets, and structuring delivery.',
    items: [
      'Linux Administration',
      'Docker Containers',
      'Amazon Web Services (AWS)',
      'Git & Version Control',
      'GitHub Workflows',
      'Unity 3D Engine',
      'VS Code / Neovim',
      'CI/CD Pipelines',
    ],
  },
];

export default function Expertise() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="expertise" className="section-pad relative border-t border-ink-800/60">
      <div className="container-px mx-auto max-w-7xl">
        <div
          ref={ref}
          className={`reveal ${visible ? 'is-visible' : ''}`}
        >
          <div className="mb-12 border-b border-ink-800/80 pb-6">
            <span className="eyebrow mb-2">
              <Layers size={13} className="text-accent-400" />
              Technical Competencies
            </span>
            <h2 className="heading-lg text-balance mt-1">
              Skills &amp; Engineering Tooling
            </h2>
            <p className="mt-2 text-sm text-ink-300 max-w-xl">
              An overview of the programming languages, security frameworks, and engineering tools
              I leverage to build and audit applications.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {skillCategories.map((group) => (
              <div
                key={group.category}
                className="card p-6 border-ink-800/80 bg-ink-900/50"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-ink-800/80 text-accent-400 border border-ink-700/60">
                    <group.icon size={17} />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-semibold text-white">
                      {group.category}
                    </h3>
                    <p className="text-xs text-ink-400 mt-0.5">
                      {group.summary}
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-2 pt-4 border-t border-ink-800/60">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-ink-700/60 bg-ink-950/60 px-3 py-1 text-xs font-medium text-ink-200 transition-colors hover:border-accent-500/30 hover:text-white"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
