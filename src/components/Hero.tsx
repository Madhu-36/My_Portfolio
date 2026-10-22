import { ArrowDown, Github, Linkedin, FileText, ShieldCheck, Cpu, Code2 } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[92vh] items-center overflow-hidden pt-20 pb-16"
    >
      <div className="subtle-grid absolute inset-0 opacity-40 pointer-events-none" />

      <div className="container-px relative z-10 mx-auto w-full max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.25fr_1fr] lg:items-center">
          {/* Left: Introduction */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-ink-800 bg-ink-900/80 px-3.5 py-1 text-xs text-ink-300 mb-6">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for engineering roles &amp; research collaborations</span>
            </div>

            <h1 className="heading-xl tracking-tight text-balance">
              Hi, I&apos;m <span className="text-accent-400">Madhu S</span>.
              <br />
              <span className="text-ink-200">
                Software &amp; Security Engineer.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-300">
              Undergraduate in Artificial Intelligence &amp; Data Science based in Bengaluru.
              I build resilient systems across penetration testing, applied machine learning,
              and systems-level developer tooling.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <a href="#work" className="btn-primary">
                View Selected Work
                <ArrowDown size={15} />
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <FileText size={15} className="text-accent-400" />
                Resume PDF
              </a>
              <a href="#contact" className="btn-ghost">
                Contact Me
              </a>
            </div>

            <div className="mt-10 flex items-center gap-4 text-ink-400">
              <a
                href="https://github.com/Madhu-36"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="flex items-center gap-2 text-sm text-ink-300 hover:text-white transition-colors"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-ink-800 bg-ink-900/60 hover:border-ink-700">
                  <Github size={17} />
                </span>
                <span className="hidden sm:inline font-mono text-xs">github.com/Madhu-36</span>
              </a>

              <a
                href="https://www.linkedin.com/in/madhu-s-/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="flex items-center gap-2 text-sm text-ink-300 hover:text-white transition-colors"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-ink-800 bg-ink-900/60 hover:border-ink-700">
                  <Linkedin size={17} />
                </span>
                <span className="hidden sm:inline font-mono text-xs">linkedin.com/in/madhu-s-</span>
              </a>
            </div>
          </div>

          {/* Right: Technical Profile Card */}
          <div className="card p-6 md:p-8 border-ink-800/80 bg-ink-900/70 shadow-2xl">
            <div className="flex items-center justify-between border-b border-ink-800/80 pb-4 mb-5">
              <div className="flex items-center gap-2 text-xs font-mono text-ink-400 uppercase tracking-wider">
                <Code2 size={15} className="text-accent-400" />
                Engineering Snapshot
              </div>
              <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                Bengaluru, IN
              </span>
            </div>

            <div className="space-y-4 text-sm">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-ink-400 block mb-1">
                  Education
                </span>
                <p className="font-medium text-white">
                  B.E. in Artificial Intelligence &amp; Data Science
                </p>
                <p className="text-xs text-ink-300 mt-0.5">
                  East West Institute of Technology (2022 – Present)
                </p>
              </div>

              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-ink-400 block mb-1">
                  Primary Domains
                </span>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  <span className="inline-flex items-center gap-1 rounded bg-ink-800/70 px-2.5 py-1 text-xs text-ink-200 border border-ink-700/60">
                    <ShieldCheck size={12} className="text-accent-400" />
                    Penetration Testing
                  </span>
                  <span className="inline-flex items-center gap-1 rounded bg-ink-800/70 px-2.5 py-1 text-xs text-ink-200 border border-ink-700/60">
                    <Cpu size={12} className="text-accent-400" />
                    Applied AI / ML
                  </span>
                  <span className="inline-flex items-center gap-1 rounded bg-ink-800/70 px-2.5 py-1 text-xs text-ink-200 border border-ink-700/60">
                    <Code2 size={12} className="text-accent-400" />
                    Systems &amp; CLI Tools
                  </span>
                </div>
              </div>

              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-ink-400 block mb-1">
                  Core Technologies
                </span>
                <p className="text-xs text-ink-200 font-mono leading-relaxed bg-ink-950/70 p-2.5 rounded-lg border border-ink-800">
                  Python · Rust · C# · TypeScript · Docker · AWS · Linux · Burp Suite · Nmap · PyTorch
                </p>
              </div>

              <div className="pt-2 border-t border-ink-800/80 flex items-center justify-between text-xs text-ink-400">
                <span>Recent Focus</span>
                <span className="text-ink-200 font-medium">Adaptive Firewall &amp; DevIgnite</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
