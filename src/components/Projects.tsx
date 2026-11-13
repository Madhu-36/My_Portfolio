import { useState } from 'react';
import { ArrowUpRight, Github, FolderGit2 } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';
import { getAssetUrl } from '../utils/assets';
import { projectsData, projectFilterTabs } from '../data/projects';
import type { ProjectItem, ProjectDomain } from '../types/portfolio';

export type { ProjectItem as Project };

export default function Projects() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [activeFilter, setActiveFilter] = useState<ProjectDomain>('all');

  const filteredProjects = projectsData.filter((p) => {
    if (activeFilter === 'all') return true;
    return p.domain === activeFilter;
  });

  return (
    <section id="work" className="section-pad relative">
      <div className="container-px mx-auto max-w-7xl">
        <div
          ref={ref}
          className={`reveal ${visible ? 'is-visible' : ''}`}
        >
          <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between border-b border-ink-800 pb-6">
            <div>
              <span className="eyebrow mb-3">
                <FolderGit2 size={14} className="text-accent-400" />
                GitHub Repositories
              </span>
              <h2 className="heading-lg text-balance">
                Projects I&apos;ve built.
              </h2>
              <p className="mt-2 max-w-xl text-base text-ink-400">
                Live open-source repositories across cybersecurity, artificial intelligence, and systems tooling.
              </p>
            </div>

            <a
              href="https://github.com/Madhu-36?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-ink-700 bg-ink-900/60 px-4 py-2 text-xs font-mono uppercase tracking-wider text-ink-200 transition-all hover:border-accent-500/50 hover:bg-accent-500/10 hover:text-white"
            >
              <Github size={15} />
              <span>github.com/Madhu-36</span>
              <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Category Filter Tabs */}
          <div className="mb-8 flex flex-wrap items-center gap-2">
            {projectFilterTabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveFilter(tab.value)}
                className={`rounded-lg px-3.5 py-1.5 text-xs font-medium transition-all ${
                  activeFilter === tab.value
                    ? 'bg-accent-500 text-ink-950 font-semibold shadow-md shadow-accent-500/20'
                    : 'border border-ink-800 bg-ink-900/60 text-ink-400 hover:border-ink-700 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Project Cards Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                key={project.title}
                className="card card-hover group relative overflow-hidden flex flex-col h-full bg-ink-900/60"
              >
                {/* Image */}
                <div className="relative aspect-video overflow-hidden border-b border-ink-800 shrink-0 bg-ink-950">
                  <img
                    src={getAssetUrl(project.image)}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute right-3 top-3 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-ink-950/80 text-ink-300 backdrop-blur-sm transition-all duration-300 group-hover:bg-accent-500 group-hover:text-ink-950">
                    <ArrowUpRight size={16} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-grow">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-accent-400">
                    {project.category}
                  </span>
                  <h3 className="mt-2 font-display text-lg font-semibold text-white group-hover:text-accent-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-300 flex-grow">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5 shrink-0 pt-3 border-t border-ink-800/60">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-md bg-ink-800/80 px-2 py-1 font-mono text-[10px] text-ink-300 border border-ink-700/50"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
