import { ArrowUpRight } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const projects = [
  {
    title: 'Identity Management System',
    category: 'Cybersecurity',
    description:
      'Designed and implemented a secure identity management system with role-based access control, authentication flows, and audit logging to prevent unauthorized access.',
    tech: ['Python', 'OAuth 2.0', 'JWT', 'PostgreSQL'],
    image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1200',
    accent: 'from-accent-500/20 to-accent-700/5',
    link: '#',
  },
  {
    title: 'Malware Analysis Lab',
    category: 'Ethical Hacking',
    description:
      'Built an isolated malware analysis environment to reverse-engineer suspicious binaries, analyze behavior patterns, and document threat intelligence reports.',
    tech: ['VirtualBox', 'Remnux', 'Ghidra', 'Wireshark'],
    image: 'https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1200',
    accent: 'from-gold-500/20 to-gold-600/5',
    link: '#',
  },
  {
    title: 'Neural Network Classifier',
    category: 'AI & Data Science',
    description:
      'Developed a deep learning model for image classification using convolutional neural networks, achieving 94% accuracy on a custom dataset with data augmentation.',
    tech: ['Python', 'TensorFlow', 'Keras', 'NumPy'],
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200',
    accent: 'from-accent-500/20 to-accent-700/5',
    link: '#',
  },
  {
    title: 'Data Visualization Dashboard',
    category: 'Data Science',
    description:
      'Created an interactive dashboard for exploring large datasets with real-time filtering, statistical summaries, and predictive analytics visualizations.',
    tech: ['Python', 'Pandas', 'Plotly', 'Streamlit'],
    image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=1200',
    accent: 'from-gold-500/20 to-gold-600/5',
    link: '#',
  },
  {
    title: 'Unity Adventure Game',
    category: 'Game Development',
    description:
      'Designed and developed a 3D adventure game prototype in Unity with player movement, enemy AI, inventory system, and immersive level design.',
    tech: ['Unity', 'C#', 'Blender', 'Visual Studio'],
    image: 'https://images.pexels.com/photos/1174314/pexels-photo-1174314.jpeg?auto=compress&cs=tinysrgb&w=1200',
    accent: 'from-accent-500/20 to-accent-700/5',
    link: '#',
  },
  {
    title: 'Godot Platformer',
    category: 'Game Development',
    description:
      'Built a 2D platformer game with physics-based movement, parallax scrolling backgrounds, particle effects, and a custom level editor.',
    tech: ['Godot', 'GDScript', 'Aseprite'],
    image: 'https://images.pexels.com/photos/3693033/pexels-photo-3693033.jpeg?auto=compress&cs=tinysrgb&w=1200',
    accent: 'from-gold-500/20 to-gold-600/5',
    link: '#',
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

          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.title}
                className="card card-hover group relative overflow-hidden"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden border-b border-ink-800">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.accent} z-10 transition-opacity duration-500 group-hover:opacity-0`}
                  />
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-ink-950/80 text-ink-300 backdrop-blur-sm transition-all duration-300 group-hover:bg-accent-500 group-hover:text-ink-950">
                    <ArrowUpRight size={18} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8">
                  <span className="font-mono text-xs uppercase tracking-widest text-accent-400">
                    {project.category}
                  </span>
                  <h3 className="mt-3 font-display text-2xl font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-ink-300">
                    {project.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-md bg-ink-800/80 px-2.5 py-1 font-mono text-xs text-ink-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
