import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import Scene from './Scene';
import InteractiveTerminal from './InteractiveTerminal';
import MagneticButton from './MagneticButton';

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
    >
      <Scene />

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
                AI Engineer · Game Developer · Cyber Security
              </span>
            </div>


            <p
              className="mt-8 max-w-xl animate-fade-up text-lg leading-relaxed text-ink-300 opacity-0"
              style={{ animationDelay: '0.35s' }}
            >
              I&apos;m Madhu S — a software engineer passionate about AI, developer tools, and web development. From intelligent firewalls to high-performance CLI environments, I turn curiosity into robust code.
            </p>

            <div
              className="mt-10 flex animate-fade-up flex-wrap items-center gap-4 opacity-0"
              style={{ animationDelay: '0.5s' }}
            >
              <MagneticButton href="#work" className="btn-primary">
                View my work
                <ArrowDown size={16} />
              </MagneticButton>
              <MagneticButton href="#contact" className="btn-ghost">
                Get in touch
              </MagneticButton>
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

          {/* Right: interactive terminal */}
          <div
            className="animate-fade-up opacity-0"
            style={{ animationDelay: '0.8s' }}
          >
            <InteractiveTerminal />
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
