import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, ShieldCheck, Cpu, ArrowRight } from 'lucide-react';
import { useKeyPress } from '../hooks/useKeyPress';
import { Badge } from './Badge';
import type { ProjectItem } from '../types/portfolio';

interface ProjectCaseStudyModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export function ProjectCaseStudyModal({ project, onClose }: ProjectCaseStudyModalProps) {
  useKeyPress('Escape', onClose, { enabled: Boolean(project) });

  if (!project || !project.caseStudy) return null;

  const { problem, architecture, solution, metrics, githubUrl } = project.caseStudy;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-ink-950/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          role="dialog"
          aria-label={`Case Study: ${project.title}`}
          aria-modal="true"
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.2 }}
          className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-ink-700 bg-ink-900/95 p-6 sm:p-8 shadow-2xl backdrop-blur-xl"
        >
          {/* Header */}
          <div className="flex items-start justify-between gap-4 border-b border-ink-800 pb-5">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <Badge variant="accent" className="text-[10px] uppercase tracking-wider">
                  Case Study
                </Badge>
                <span className="font-mono text-xs text-ink-400">{project.category}</span>
              </div>
              <h2 className="font-display text-2xl font-bold text-white">{project.title}</h2>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close case study"
              className="rounded-lg p-2 text-ink-400 hover:bg-ink-800 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Body Content */}
          <div className="mt-6 space-y-6 text-sm">
            {/* The Problem */}
            <div>
              <h3 className="flex items-center gap-2 font-display text-base font-semibold text-red-400">
                <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
                The Engineering Challenge
              </h3>
              <p className="mt-2 text-ink-300 leading-relaxed bg-ink-950/50 rounded-xl p-4 border border-ink-800/60">
                {problem}
              </p>
            </div>

            {/* Architecture Pipeline */}
            <div>
              <h3 className="flex items-center gap-2 font-display text-base font-semibold text-accent-400">
                <Cpu size={16} />
                System Architecture
              </h3>
              <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
                {architecture.map((layer, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 rounded-xl border border-ink-800 bg-ink-950/40 p-3"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-500/20 font-mono text-[11px] font-bold text-accent-400">
                      {idx + 1}
                    </span>
                    <span className="text-xs text-ink-200 leading-snug">{layer}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Solution */}
            <div>
              <h3 className="flex items-center gap-2 font-display text-base font-semibold text-white">
                <ShieldCheck size={16} className="text-emerald-400" />
                Technical Solution & Implementation
              </h3>
              <p className="mt-2 text-ink-300 leading-relaxed bg-ink-950/50 rounded-xl p-4 border border-ink-800/60">
                {solution}
              </p>
            </div>

            {/* Metrics & Benchmarks */}
            <div>
              <h3 className="font-display text-base font-semibold text-gold-400">
                Key Metrics & Measured Impact
              </h3>
              <ul className="mt-2.5 space-y-2">
                {metrics.map((m, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-xs text-ink-200">
                    <ArrowRight size={14} className="text-gold-400 shrink-0" />
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="mt-8 flex items-center justify-between border-t border-ink-800 pt-5">
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg border border-ink-700 bg-ink-800/50 px-4 py-2 text-xs font-mono text-ink-300 hover:text-white transition-colors"
            >
              Close
            </button>
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-accent-500 px-4 py-2 text-xs font-semibold text-ink-950 hover:bg-accent-400 transition-colors shadow-lg shadow-accent-500/20"
            >
              <span>Explore Source Repository</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
export default ProjectCaseStudyModal;
