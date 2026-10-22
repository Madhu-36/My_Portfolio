import { Briefcase, Calendar, GraduationCap, MapPin } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const experiences = [
  {
    type: 'work',
    role: 'Ethical Hacker Intern',
    company: 'Jutrm Career Academy',
    location: 'Bengaluru, India',
    period: 'March 2026',
    description:
      'Completed hands-on network penetration testing and infrastructure vulnerability audits across live environments. Evaluated system exposure and formulated kernel-level remediation steps.',
    highlights: [
      'Real-time network vulnerability scanning and mapping',
      'System hardening & kernel-level defense analysis',
      'Remediation reporting and attack surface reduction',
    ],
    tech: ['Penetration Testing', 'Network Security', 'Linux', 'Security Audits'],
  },
  {
    type: 'work',
    role: 'Ethical Hacker Intern',
    company: 'ACMEGRADE',
    location: 'Remote',
    period: 'December 2025 – June 2026',
    description:
      'Executed web application vulnerability assessments focusing on the OWASP Top 10. Intercepted and modified HTTP/S traffic using Burp Suite, documented reproducible PoCs, and assisted in verification of security patches.',
    highlights: [
      'Burp Suite & Nmap automated + manual reconnaissance',
      'SQL injection, XSS, and broken access control testing',
      'Wrote actionable vulnerability documentation and risk impact ratings',
    ],
    tech: ['Burp Suite', 'Nmap', 'OWASP Top 10', 'Web Security', 'HTTP Analysis'],
  },
  {
    type: 'education',
    role: 'Bachelor of Engineering in AI & Data Science',
    company: 'East West Institute of Technology',
    location: 'Bengaluru, India',
    period: '2022 – 2026 (Expected)',
    description:
      'Specialized coursework in Machine Learning, Deep Neural Networks, Data Structures & Algorithms, Network Security, and Distributed Systems.',
    highlights: [
      'Core focus on Applied Artificial Intelligence and Systems Engineering',
      'Active participant in technical hackathons and cybersecurity clubs',
      'Built multiple open-source software tools and ML pipelines',
    ],
    tech: ['Machine Learning', 'Data Structures', 'Python', 'Algorithms', 'Security'],
  },
];

export default function Experience() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="experience" className="section-pad relative border-t border-ink-800/60">
      <div className="container-px mx-auto max-w-7xl">
        <div
          ref={ref}
          className={`reveal ${visible ? 'is-visible' : ''}`}
        >
          <div className="mb-12 border-b border-ink-800/80 pb-6">
            <span className="eyebrow mb-2">
              <Briefcase size={13} className="text-accent-400" />
              Career &amp; Education
            </span>
            <h2 className="heading-lg text-balance mt-1">
              Experience &amp; Academic Journey
            </h2>
          </div>

          <div className="max-w-4xl space-y-8">
            {experiences.map((exp) => (
              <div
                key={exp.role + exp.company}
                className="card p-6 sm:p-7 border-ink-800/80 bg-ink-900/50"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 border-b border-ink-800/70 pb-4">
                  <div>
                    <div className="flex items-center gap-2">
                      {exp.type === 'education' ? (
                        <GraduationCap size={16} className="text-accent-400 shrink-0" />
                      ) : (
                        <Briefcase size={16} className="text-accent-400 shrink-0" />
                      )}
                      <h3 className="font-display text-lg font-semibold text-white">
                        {exp.role}
                      </h3>
                    </div>
                    <p className="text-sm font-medium text-ink-200 mt-1">
                      {exp.company}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs text-ink-400 font-mono">
                    <span className="inline-flex items-center gap-1">
                      <Calendar size={12} className="text-accent-400/80" />
                      {exp.period}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin size={12} className="text-ink-500" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <p className="mt-4 text-xs sm:text-sm leading-relaxed text-ink-300">
                  {exp.description}
                </p>

                <ul className="mt-4 space-y-1.5 text-xs text-ink-300">
                  {exp.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent-400 mt-1.5 shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-1.5 pt-4 border-t border-ink-800/60">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded bg-ink-800/70 px-2 py-0.5 font-mono text-[10px] text-ink-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
