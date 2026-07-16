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

        <div className="mt-8 border-t border-ink-800 pt-6 text-center">
          <p className="font-mono text-sm text-ink-500">
            © {new Date().getFullYear()} Madhu S. Built with curiosity &amp;
            code.
          </p>
        </div>
      </div>
    </footer>
  );
}
