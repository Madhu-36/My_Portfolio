import { Github, Linkedin, Mail, ArrowUp, FileText } from 'lucide-react';
import MSLogo from './MSLogo';

export default function Footer() {
  return (
    <footer className="border-t border-ink-800/80 bg-ink-950 py-12">
      <div className="container-px mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-3">
            <MSLogo size={28} className="text-accent-400" />
            <div>
              <span className="font-display text-sm font-semibold text-white block">
                Madhu S
              </span>
              <span className="text-xs text-ink-400 font-mono">
                AI &amp; Cybersecurity Engineer · Bengaluru
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-ink-400">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#work" className="hover:text-white transition-colors">Work</a>
            <a href="#expertise" className="hover:text-white transition-colors">Expertise</a>
            <a href="#experience" className="hover:text-white transition-colors">Journey</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-400 hover:text-accent-300 transition-colors flex items-center gap-1"
            >
              <FileText size={12} />
              Resume
            </a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Madhu-36"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-ink-800 bg-ink-900/60 text-ink-400 hover:border-ink-700 hover:text-white transition-colors"
            >
              <Github size={15} />
            </a>
            <a
              href="https://www.linkedin.com/in/madhu-s-/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-ink-800 bg-ink-900/60 text-ink-400 hover:border-ink-700 hover:text-white transition-colors"
            >
              <Linkedin size={15} />
            </a>
            <a
              href="mailto:madhu.s.3606@gmail.com"
              aria-label="Email"
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-ink-800 bg-ink-900/60 text-ink-400 hover:border-ink-700 hover:text-white transition-colors"
            >
              <Mail size={15} />
            </a>
            <a
              href="#top"
              aria-label="Back to top"
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-ink-800 bg-ink-900/60 text-ink-400 hover:border-ink-700 hover:text-white transition-colors ml-2"
            >
              <ArrowUp size={14} />
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-ink-800/60 pt-6 text-center text-xs text-ink-500 font-mono">
          © {new Date().getFullYear()} Madhu S. Built with React, TypeScript &amp; Tailwind CSS.
        </div>
      </div>
    </footer>
  );
}
