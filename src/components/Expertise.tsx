import { useReveal } from '../hooks/useReveal';

const skills = [
  {
    category: 'Cybersecurity & Ethical Hacking',
    items: [
      'Penetration Testing',
      'Vulnerability Analysis',
      'Malware Analysis',
      'Identity Management',
      'Network Security',
      'Burp Suite',
      'Wireshark',
      'Metasploit',
      'Nmap',
      'OWASP Top 10',
    ],
  },
  {
    category: 'AI & Data Science',
    items: [
      'Python',
      'Machine Learning',
      'Deep Learning',
      'Neural Networks',
      'TensorFlow',
      'Pandas',
      'NumPy',
      'Scikit-learn',
      'Data Visualization',
      'NLP',
    ],
  },
  {
    category: 'Game Development',
    items: [
      'Unity',
      'C#',
      'Godot',
      'Game Physics',
      'Level Design',
      '3D Modeling',
      'Blender',
      'Shader Programming',
    ],
  },
  {
    category: 'Tools & Languages',
    items: [
      'Git & GitHub',
      'Linux',
      'Docker',
      'VS Code',
      'C++',
      'JavaScript',
      'SQL',
      'Bash Scripting',
    ],
  },
];

const marqueeItems = [
  'Python', 'C#', 'C++', 'Linux', 'Burp Suite', 'Wireshark',
  'Metasploit', 'Nmap', 'Unity', 'Godot', 'TensorFlow',
  'Pandas', 'NumPy', 'Scikit-learn', 'Docker', 'Git',
  'OWASP', 'Malware Analysis', 'Neural Networks',
];

export default function Expertise() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="expertise" className="section-pad relative overflow-hidden">
      <div className="container-px mx-auto max-w-7xl">
        <div
          ref={ref}
          className={`reveal ${visible ? 'is-visible' : ''}`}
        >
          <span className="eyebrow mb-6">
            <span className="h-px w-8 bg-accent-400" />
            Expertise
          </span>
          <h2 className="heading-lg mb-12 max-w-2xl text-balance">
            A versatile toolkit across three worlds.
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {skills.map((group) => (
              <div key={group.category} className="card card-hover p-8">
                <h3 className="font-display text-xl font-semibold text-white">
                  {group.category}
                </h3>
                <div className="mt-5 flex flex-wrap gap-2.5">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-ink-700 bg-ink-800/50 px-3.5 py-1.5 text-sm font-medium text-ink-200 transition-all duration-300 hover:border-accent-500/40 hover:bg-accent-500/10 hover:text-accent-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative mt-20 flex overflow-hidden border-y border-ink-800 bg-ink-900/40 py-6">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              className="mx-8 font-display text-2xl font-medium text-ink-600 transition-colors hover:text-accent-400"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
