import { Github, Linkedin, Mail, ArrowUp, Terminal } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-ink-800 bg-ink-950">
      <div className="container-px mx-auto max-w-7xl py-12">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-500 text-ink-950">
              <Terminal size={16} />
            </span>
            <span className="font-display text-base font-semibold text-white">
              Madhu S
            </span>
          </div>

          <div className="flex items-center gap-4">
            {[
              { Icon: Github, href: 'https://github.com/Madhu-36', label: 'Visit Madhu S on GitHub' },
              { Icon: Linkedin, href: 'https://www.linkedin.com/in/madhu-s-/', label: 'Connect with Madhu S on LinkedIn' },
              { Icon: Mail, href: '#contact', label: 'Send Madhu S an email message' },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={label.includes('email') ? undefined : '_blank'}
                rel={label.includes('email') ? undefined : 'noopener noreferrer'}
                aria-label={label}
                title={label}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-ink-700 text-ink-400 transition-all duration-300 hover:border-accent-500/50 hover:text-accent-400"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>

          <a
            href="#top"
            className="group flex items-center gap-2 text-sm text-ink-400 transition-colors hover:text-white"
          >
            Back to top
            <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-ink-700 transition-all group-hover:border-accent-500/50 group-hover:-translate-y-0.5">
              <ArrowUp size={14} />
            </span>
          </a>
        </div>

        <div className="mt-8 border-t border-ink-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-ink-500">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>All systems operational · Node BLR</span>
            <span className="hidden md:inline text-ink-600">|</span>
            <span className="hidden md:inline text-accent-400">v1.2.0</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[11px] text-ink-500 hidden sm:inline">
              Press <kbd className="rounded border border-ink-700 bg-ink-900 px-1 py-0.5 text-[10px] text-ink-300 font-mono">Cmd+K</kbd> for palette
            </span>
            <p>
              © {new Date().getFullYear()} Madhu S.
            </p>
          </div>
        </div>
        {/* Tech credits */}
        <p className="mt-4 text-center font-mono text-[10px] text-ink-600 tracking-wide">
          Built with React · Vite · Three.js · Tailwind CSS · TypeScript
        </p>
      </div>
    </footer>
  );
}
