import { Shield, Brain, Gamepad2, Cpu } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const stats = [
  { value: '3', label: 'Core domains' },
  { value: '10+', label: 'Projects built' },
  { value: '5+', label: 'Tools mastered' },
  { value: '∞', label: 'Curiosity' },
];

const pillars = [
  {
    icon: Shield,
    title: 'Cybersecurity & Ethical Hacking',
    desc: 'Vulnerability analysis, identity management systems, malware analysis, and penetration testing.',
  },
  {
    icon: Brain,
    title: 'AI & Data Science',
    desc: 'Building intelligent systems with ML models, neural networks, and data-driven decision making.',
  },
  {
    icon: Gamepad2,
    title: 'Game Development',
    desc: 'Crafting immersive game worlds and interactive experiences with Unity and game engines.',
  },
];

export default function About() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="section-pad relative">
      <div className="container-px mx-auto max-w-7xl">
        <div
          ref={ref}
          className={`reveal ${visible ? 'is-visible' : ''}`}
        >
          <span className="eyebrow mb-6">
            <span className="h-px w-8 bg-accent-400" />
            About
          </span>

          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
            <div>
              <h2 className="heading-lg text-balance">
                Hacker mindset,
                <br />
                <span className="text-ink-400">builder spirit.</span>
              </h2>
            </div>

            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-ink-300">
                I&apos;m Madhu S, an aspiring AI &amp; Data Science engineer
                based in Bengaluru. My journey lives at the intersection of
                three worlds — cybersecurity, artificial intelligence, and game
                development. I believe each domain makes the others stronger:
                security thinking sharpens my AI systems, AI powers smarter
                games, and game engines teach me creative problem-solving.
              </p>
              <p className="text-lg leading-relaxed text-ink-300">
                I have hands-on experience identifying vulnerabilities and
                designing identity management systems. I&apos;ve explored
                malware analysis and penetration testing through real-world
                exercises. On the AI side, I build with ML models and data
                pipelines. And in game development, I turn ideas into
                interactive worlds.
              </p>
              <p className="text-lg leading-relaxed text-ink-300">
                When I&apos;m not coding, you&apos;ll find me exploring new
                security tools, reading up on AI research, or prototyping my
                next game concept.
              </p>
            </div>
          </div>

          {/* Pillars */}
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="card card-hover p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-500/10 text-accent-400">
                  <p.icon size={24} />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-white">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-300">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-ink-800 bg-ink-800 md:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-ink-900/80 p-6 transition-colors hover:bg-ink-900 sm:p-8"
              >
                <div className="flex items-center gap-2">
                  <Cpu size={16} className="text-accent-400/50" />
                  <div className="font-display text-4xl font-bold text-accent-400 sm:text-5xl">
                    {stat.value}
                  </div>
                </div>
                <div className="mt-2 text-sm text-ink-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
