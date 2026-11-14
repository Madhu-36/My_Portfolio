import { useState, useMemo } from 'react';
import { ArrowUpRight, Github, FolderGit2, Search, X } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';
import { getAssetUrl } from '../utils/assets';
import { projectsData, projectFilterTabs } from '../data/projects';
import { useDebounce } from '../hooks/useDebounce';
import { Badge } from './Badge';
import type { ProjectItem, ProjectDomain } from '../types/portfolio';

export type { ProjectItem as Project };

export default function Projects() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [activeFilter, setActiveFilter] = useState<ProjectDomain>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedSearch = useDebounce(searchQuery, 200).trim().toLowerCase();

  const categoryCounts = useMemo(() => {
    return {
      all: projectsData.length,
      cyber: projectsData.filter((p) => p.domain === 'cyber').length,
      ai: projectsData.filter((p) => p.domain === 'ai').length,
      systems: projectsData.filter((p) => p.domain === 'systems').length,
    };
  }, []);

  const filteredProjects = useMemo(() => {
    return projectsData.filter((p) => {
      const matchesFilter = activeFilter === 'all' || p.domain === activeFilter;
      if (!matchesFilter) return false;
      if (!debouncedSearch) return true;
      return (
        p.title.toLowerCase().includes(debouncedSearch) ||
        p.description.toLowerCase().includes(debouncedSearch) ||
        p.tech.some((t) => t.toLowerCase().includes(debouncedSearch))
      );
    });
  }, [activeFilter, debouncedSearch]);

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

          {/* Category Filter Tabs & Instant Search */}
          <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
              {projectFilterTabs.map((tab) => {
                const count = categoryCounts[tab.value];
                return (
                  <button
                    key={tab.value}
                    onClick={() => setActiveFilter(tab.value)}
                    className={`rounded-lg px-3.5 py-1.5 text-xs font-medium transition-all flex items-center gap-1.5 ${
                      activeFilter === tab.value
                        ? 'bg-accent-500 text-ink-950 font-semibold shadow-md shadow-accent-500/20'
                        : 'border border-ink-800 bg-ink-900/60 text-ink-400 hover:border-ink-700 hover:text-white'
                    }`}
                  >
                    <span>{tab.label}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                        activeFilter === tab.value
                          ? 'bg-ink-950/20 text-ink-950 font-bold'
                          : 'bg-ink-800 text-ink-400'
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="relative w-full sm:w-64">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-500 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search projects by tech, title..."
                aria-label="Search projects by keyword"
                className="w-full rounded-lg border border-ink-800 bg-ink-900/60 pl-8 pr-8 py-1.5 text-xs text-white placeholder-ink-500 transition-colors focus:border-accent-500/50 focus:outline-none"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear project search input"
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-ink-500 hover:text-white transition-colors"
                >
                  <X size={13} />
                </button>
              )}
            </div>
          </div>

          {filteredProjects.length === 0 ? (
            <div className="rounded-2xl border border-ink-800 bg-ink-900/40 p-12 text-center">
              <p className="text-base font-semibold text-white">No projects match &ldquo;{searchQuery}&rdquo;</p>
              <p className="mt-1 text-xs text-ink-400">
                Try searching for another keyword like &quot;Rust&quot;, &quot;Python&quot;, or select &quot;All Projects&quot;.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setActiveFilter('all');
                }}
                className="mt-4 inline-flex items-center rounded-lg border border-accent-500/30 bg-accent-500/10 px-3.5 py-1.5 text-xs font-mono text-accent-300 hover:bg-accent-500/20 transition-colors"
              >
                Reset all filters
              </button>
            </div>
          ) : (
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
                        <Badge
                          key={t}
                          variant="ghost"
                          className="rounded-md bg-ink-800/80 px-2 py-0.5 text-[10px]"
                        >
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
