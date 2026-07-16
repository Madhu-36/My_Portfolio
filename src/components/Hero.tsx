import { ArrowDown, Github, Linkedin, Mail, Terminal } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
    >
      {/* Background grid */}
      <div className="grid-pattern absolute inset-0 opacity-60" />

      {/* Floating orbs */}
      <div className="absolute -left-32 top-1/4 h-72 w-72 rounded-full bg-accent-500/20 blur-[120px] animate-pulse-slow" />
      <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-gold-500/10 blur-[140px] animate-pulse-slow" />

      {/* Scan line effect */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-0 h-32 w-full bg-gradient-to-b from-accent-500/5 to-transparent animate-scan" />
      </div>

      <div className="container-px relative z-10 mx-auto w-full max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:items-center">
          {/* Left: intro */}
          <div className="max-w-2xl">
            <div
              className="animate-fade-up opacity-0"
              style={{ animationDelay: '0.1s' }}
            >
              <span className="eyebrow mb-6">
                <span className="h-px w-8 bg-accent-400" />
                AI &amp; DS Engineer · Ethical Hacker · Game Developer
              </span>
            </div>

            <h1
              className="heading-xl animate-fade-up text-balance opacity-0"
              style={{ animationDelay: '0.2s' }}
            >
              Securing the{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-accent-400 via-accent-300 to-gold-400 bg-clip-text text-transparent text-glow">
                  digital world
                </span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 300 12"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 9C70 3 200 2 298 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-accent-500/40"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <br />
              one byte at a time.
            </h1>

            <p
              className="mt-8 max-w-xl animate-fade-up text-lg leading-relaxed text-ink-300 opacity-0"
              style={{ animationDelay: '0.35s' }}
            >
              I&apos;m Madhu S — an aspiring AI &amp; Data Science engineer
              passionate about ethical hacking, game development, and building
              intelligent systems. From vulnerability analysis to neural
              networks and immersive game worlds, I turn curiosity into code.
            </p>

            <div
              className="mt-10 flex animate-fade-up flex-wrap items-center gap-4 opacity-0"
              style={{ animationDelay: '0.5s' }}
            >
              <a href="#work" className="btn-primary">
                View my work
                <ArrowDown size={16} />
              </a>
              <a href="#contact" className="btn-ghost">
                Get in touch
              </a>
            </div>

            <div
              className="mt-12 flex animate-fade-up items-center gap-5 opacity-0"
              style={{ animationDelay: '0.65s' }}
            >
              {[
                { Icon: Github, href: 'https://github.com/Madhu-36', label: 'GitHub' },
                { Icon: Linkedin, href: 'https://www.linkedin.com/in/madhu-s-/', label: 'LinkedIn' },
                { Icon: Mail, href: '#contact', label: 'Email' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={label === 'Email' ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-ink-700 text-ink-400 transition-all duration-300 hover:border-accent-500/50 hover:text-accent-400 hover:-translate-y-0.5"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Right: terminal card */}
          <div
            className="animate-fade-up opacity-0"
            style={{ animationDelay: '0.8s' }}
          >
            <div className="terminal border-glow overflow-hidden">
              {/* Title bar */}
              <div className="flex items-center gap-2 border-b border-ink-800 bg-ink-900/80 px-4 py-3">
                <div className="flex gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-red-500/70" />
                  <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
                  <span className="h-3 w-3 rounded-full bg-green-500/70" />
                </div>
                <span className="ml-2 flex items-center gap-1.5 text-xs text-ink-400">
                  <Terminal size={12} />
                  madhu@portfolio:~$
                </span>
              </div>
              {/* Body */}
              <div className="space-y-1.5 p-5 text-sm leading-relaxed">
                <p className="text-ink-400">
                  <span className="text-accent-400">$</span> whoami
                </p>
                <p className="text-ink-200">Madhu S — Bengaluru, India</p>
                <p className="text-ink-400">
                  <span className="text-accent-400">$</span> cat skills.txt
                </p>
                <p className="text-ink-200">
                  &gt; Ethical Hacking &amp; Pen Testing
                </p>
                <p className="text-ink-200">
                  &gt; AI / Data Science / ML
                </p>
                <p className="text-ink-200">
                  &gt; Game Development (Unity / Godot)
                </p>
                <p className="text-ink-400">
                  <span className="text-accent-400">$</span> status --current
                </p>
                <p className="text-green-400">
                  &gt; Learning &amp; building continuously
                  <span className="animate-blink">_</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex">
        <span className="font-mono text-xs uppercase tracking-widest text-ink-500">
          Scroll
        </span>
        <div className="flex h-10 w-6 justify-center rounded-full border border-ink-700 p-1">
          <div className="h-2 w-1 animate-bounce rounded-full bg-accent-400" />
        </div>
      </div>
    </section>
  );
}
