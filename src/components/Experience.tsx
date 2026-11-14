import { useReveal } from '../hooks/useReveal';
import { experiencesData } from '../data/experience';
import { Badge } from './Badge';

export default function Experience() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="experience" className="section-pad relative">
      <div className="container-px mx-auto max-w-7xl">
        <div
          ref={ref}
          className={`reveal ${visible ? 'is-visible' : ''}`}
        >
          <span className="eyebrow mb-6">
            <span className="h-px w-8 bg-accent-400" />
            Journey
          </span>
          <h2 className="heading-lg mb-16 max-w-2xl text-balance">
            Learning, building, and growing.
          </h2>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-0 top-2 h-full w-px bg-gradient-to-b from-accent-500/40 via-ink-700 to-transparent md:left-1/2" />

            <div className="space-y-12">
              {experiencesData.map((exp, i) => (
                <div
                  key={exp.role + exp.company}
                  className={`relative flex flex-col gap-4 md:flex-row md:gap-0 ${
                    i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-0 top-2 z-10 h-3 w-3 -translate-x-[5px] rounded-full border-2 border-accent-500 bg-ink-950 md:left-1/2 md:-translate-x-[6px]" />

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Content */}
                  <div
                    className={`pl-8 md:w-1/2 md:pl-12 ${
                      i % 2 === 0
                        ? 'md:pl-12'
                        : 'md:pl-0 md:pr-12 md:text-right'
                    }`}
                  >
                    <div className="card card-hover p-6 sm:p-8">
                      <div className="mb-3">
                        <Badge variant="accent" className="font-mono text-[11px] uppercase tracking-wider">
                          {exp.period}
                        </Badge>
                      </div>
                      <h3 className="font-display text-xl font-semibold text-white">
                        {exp.role}
                      </h3>
                      <p className="mt-1 text-base text-ink-400">
                        {exp.company}
                      </p>
                      <p className="mt-4 text-sm leading-relaxed text-ink-300">
                        {exp.description}
                      </p>
                      <ul
                        className={`mt-5 space-y-2 ${
                          i % 2 !== 0 ? 'md:flex md:flex-col md:items-end' : ''
                        }`}
                      >
                        {exp.highlights.map((h) => (
                          <li
                            key={h}
                            className="flex items-center gap-2 text-sm text-ink-300"
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
