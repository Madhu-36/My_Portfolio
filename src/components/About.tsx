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
    icon: Brain,
    title: 'AI Engineer',
    desc: 'Building intelligent systems with ML models, neural networks, and data-driven decision making.',
    animationClass: 'animate-float-fast',
    color: 'text-blue-400 bg-blue-500/10',
  },
  {
    icon: Gamepad2,
    title: 'Game Developer',
    desc: 'Crafting immersive game worlds and interactive experiences with complex physics and game engines.',
    animationClass: 'animate-bounce-custom',
    color: 'text-green-400 bg-green-500/10',
  },
  {
    icon: Shield,
    title: 'Cyber Security / Ethical Hacker',
    desc: 'Vulnerability analysis, adaptive firewalls, malware analysis, and penetration testing.',
    animationClass: 'animate-glitch-fast',
    color: 'text-red-400 bg-red-500/10',
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

          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20 items-center">
            <div>
              <div className="mb-8 w-32 h-32 rounded-full overflow-hidden border-2 border-accent-500/30">
                <img src="https://avatars.githubusercontent.com/u/212555608?v=4" alt="Madhu S" className="w-full h-full object-cover" />
              </div>
              <h2 className="heading-lg text-balance">
                Problem solver,
                <br />
                <span className="text-ink-400">builder spirit.</span>
              </h2>
            </div>

            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-ink-300">
                I&apos;m Madhu S, a passionate software engineer and developer tool builder. My journey lives at the intersection of AI, robust system programming, and modern web applications. I believe building better tools empowers better software.
              </p>
              <p className="text-lg leading-relaxed text-ink-300">
                I have hands-on experience building environments like DevIgnite in Rust, implementing adaptive AI firewalls in Python, and crafting web applications. I love diving into Abstract Syntax Trees (AST) and performance optimizations to make things run faster and smarter.
              </p>
              <p className="text-lg leading-relaxed text-ink-300">
                When I&apos;m not coding, you&apos;ll find me exploring new technologies, experimenting with complex logic in game engines, or contributing to the open-source community.
              </p>
            </div>
          </div>

          {/* Pillars */}
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="card card-hover p-6 group"
              >
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${p.color} ${p.animationClass}`}>
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
