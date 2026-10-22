import { Shield, Brain, Cpu, ExternalLink, Award, FileCode2, Terminal } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const stats = [
  { value: '3', label: 'Core Engineering Domains' },
  { value: '10+', label: 'Shipped Projects' },
  { value: '6', label: 'Verified Certifications' },
  { value: '2026', label: 'Graduating Year (BE AI&DS)' },
];

const certifications = [
  {
    title: 'Cyber Security Analyst',
    issuer: 'TATA STRIVE',
    link: '/certificates/tata_cybersecurity.pdf',
    icon: Shield,
    date: 'Certified',
  },
  {
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    link: '/certificates/aws_cloud.pdf',
    icon: Cpu,
    date: 'Cloud Infrastructure',
  },
  {
    title: 'Cybersecurity Job Simulation',
    issuer: 'Deloitte',
    link: '/certificates/deloitte_cybersecurity.pdf',
    icon: Shield,
    date: 'Industry Simulation',
  },
  {
    title: 'AI Fluency',
    issuer: 'Claude / Anthropic',
    link: '/certificates/claude_ai_fluency.pdf',
    icon: Brain,
    date: 'Applied AI',
  },
  {
    title: 'Unity Junior Programmer',
    issuer: 'Unity Technologies',
    link: '/certificates/unity_junior_programmer.pdf',
    icon: FileCode2,
    date: 'Game Architecture',
  },
  {
    title: 'Cyber Security Operations',
    issuer: 'Forage Simulation',
    link: '/certificates/cyber_security_operations.pdf',
    icon: Terminal,
    date: 'Defensive Ops',
  },
];

const pillars = [
  {
    icon: Shield,
    title: 'Cybersecurity & Ethical Hacking',
    desc: 'Conducting web application penetration testing, network packet inspection, vulnerability mitigation, and kernel-level security audits using tools like Burp Suite, Nmap, and Wireshark.',
  },
  {
    icon: Brain,
    title: 'Applied AI & Data Science',
    desc: 'Designing machine learning pipelines, anomaly detection models for threat mitigation, and deep neural networks to extract structured intelligence from complex datasets.',
  },
  {
    icon: FileCode2,
    title: 'Systems & Tooling Engineering',
    desc: 'Crafting performant CLI utilities in Rust, cross-platform developer tools, and real-time interactive simulation engines in C# and Unity with an emphasis on low overhead.',
  },
];

export default function About() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="section-pad relative border-t border-ink-800/60">
      <div className="container-px mx-auto max-w-7xl">
        <div
          ref={ref}
          className={`reveal ${visible ? 'is-visible' : ''}`}
        >
          <span className="eyebrow mb-4">
            <span className="h-px w-6 bg-accent-400" />
            Background &amp; Philosophy
          </span>

          <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16 items-start mt-2">
            <div>
              <h2 className="heading-lg text-balance">
                Security-minded engineer building robust software.
              </h2>
            </div>

            <div className="space-y-4 text-base text-ink-300 leading-relaxed">
              <p>
                I am an engineering student at East West Institute of Technology in Bengaluru,
                specializing in Artificial Intelligence and Data Science. My technical work connects
                security research with practical software engineering: understanding how systems fail
                in order to construct more resilient applications.
              </p>
              <p>
                Through internships at Jutrm Career Academy and ACMEGRADE, I have conducted vulnerability
                assessments on live networks, analyzed OWASP Top 10 web vectors, and evaluated system
                defenses. Concurrently, I build practical developer utilities in Rust, machine learning
                models for traffic anomaly detection, and interactive game systems.
              </p>
            </div>
          </div>

          {/* Core Pillars */}
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="card card-hover p-6 border-ink-800/80 bg-ink-900/50"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent-500/10 text-accent-400 border border-accent-500/20">
                  <p.icon size={20} />
                </div>
                <h3 className="mt-4 font-display text-base font-semibold text-white">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-300">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Stats Bar */}
          <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-ink-800/80 bg-ink-800/80 md:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-ink-950/90 p-5 sm:p-6"
              >
                <div className="font-display text-3xl font-bold text-white sm:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs font-mono uppercase tracking-wider text-ink-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Certifications Section */}
          <div className="mt-20">
            <div className="flex items-center justify-between mb-8 border-b border-ink-800/80 pb-4">
              <div>
                <span className="eyebrow mb-2">
                  <Award size={13} className="text-accent-400" />
                  Credentials
                </span>
                <h3 className="heading-md mt-1">
                  Certifications &amp; Verified Badges
                </h3>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {certifications.map((cert) => (
                <a
                  key={cert.title}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card card-hover group p-4 flex items-start gap-3.5 border-ink-800/80 bg-ink-900/50"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-ink-800/80 text-accent-400 border border-ink-700/60 group-hover:border-accent-500/30">
                    <cert.icon size={18} />
                  </div>
                  <div className="flex flex-col flex-grow min-w-0">
                    <h4 className="font-medium text-sm text-white group-hover:text-accent-300 transition-colors truncate">
                      {cert.title}
                    </h4>
                    <span className="text-xs text-ink-400 mt-0.5">
                      {cert.issuer}
                    </span>
                    <span className="text-[11px] text-ink-500 font-mono mt-1">
                      {cert.date}
                    </span>
                  </div>
                  <ExternalLink size={14} className="text-ink-500 group-hover:text-accent-400 shrink-0 mt-1 transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
