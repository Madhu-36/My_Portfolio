import { ArrowUpRight } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const projects = [
  {
    title: 'Adaptive Firewall Application',
    category: 'Cybersecurity & AI',
    description:
      'An adaptive firewall application using AI to monitor and block malicious traffic in real-time, enhancing network security dynamically.',
    tech: ['Python', 'AI/ML', 'Network Security'],
    image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1200',
    accent: 'from-accent-500/20 to-accent-700/5',
    link: 'https://github.com/Madhu-36/Adaptive-firewall-Application-using-AI',
  },
  {
    title: 'ASTra',
    category: 'Development Tool',
    description:
      'A powerful Python-based project aimed at analyzing and manipulating Abstract Syntax Trees (AST) for code processing.',
    tech: ['Python', 'AST', 'Code Analysis'],
    image: 'https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1200',
    accent: 'from-gold-500/20 to-gold-600/5',
    link: 'https://github.com/Madhu-36/ASTra',
  },
  {
    title: 'DevIgnite',
    category: 'Developer Environment',
    description:
      'DevIgnite is a high-performance, cross-platform developer environment manager that lets you install, manage, and switch between programming language runtimes with a single click using a sandboxed symlink routing engine.',
    tech: ['Rust', 'CLI', 'System Programming'],
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1200',
    accent: 'from-accent-500/20 to-accent-700/5',
    link: 'https://github.com/Madhu-36/DevIgnite',
  },
  {
    title: 'Game Complex',
    category: 'Game Development',
    description:
      'A comprehensive JavaScript game project featuring complex mechanics, interactive gameplay, and engaging web-based elements.',
    tech: ['JavaScript', 'HTML5 Canvas', 'Game Engine'],
    image: 'https://images.pexels.com/photos/1174314/pexels-photo-1174314.jpeg?auto=compress&cs=tinysrgb&w=1200',
    accent: 'from-gold-500/20 to-gold-600/5',
    link: 'https://github.com/Madhu-36/Game-Complex',
  },
  {
    title: 'Annam Farm App',
    category: 'Web Application',
    description:
      'A responsive web application designed for farm management and agricultural operations, streamlining processes and data tracking.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: 'https://images.pexels.com/photos/265216/pexels-photo-265216.jpeg?auto=compress&cs=tinysrgb&w=1200',
    accent: 'from-accent-500/20 to-accent-700/5',
    link: 'https://github.com/Madhu-36/annam-farm-app',
  },
  {
    title: 'Personal Portfolio',
    category: 'Frontend Development',
    description:
      'My personal portfolio built with modern web technologies to showcase my projects, skills, and professional journey.',
    tech: ['TypeScript', 'React', 'Tailwind CSS', 'Vite'],
    image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1200',
    accent: 'from-gold-500/20 to-gold-600/5',
    link: 'https://github.com/Madhu-36/My_Portfolio',
  },
];

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

import ParallaxImage from './ParallaxImage';

function ProjectCard({ project }: { project: typeof projects[0] }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['7.5deg', '-7.5deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-7.5deg', '7.5deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block perspective-1000"
      style={{ perspective: 1000 }}
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="card card-hover group relative overflow-hidden h-full shadow-2xl transition-shadow duration-300 hover:shadow-accent-500/20"
      >
        <div style={{ transform: 'translateZ(20px)' }}>
          {/* Image */}
          <div className="relative aspect-[16/10] overflow-hidden border-b border-ink-800">
            <div
              className={`absolute inset-0 bg-gradient-to-br ${project.accent} z-10 transition-opacity duration-500 group-hover:opacity-0`}
            />
            <ParallaxImage
              src={project.image}
              alt={project.title}
              className="h-full w-full"
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
            <h3 className="mt-3 font-display text-2xl font-semibold text-white group-hover:text-accent-400 transition-colors duration-300">
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
        </div>
      </motion.div>
    </a>
  );
}

export default function Projects() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="work" className="section-pad relative z-10">
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
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
