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

const skillDescriptions: Record<string, string> = {
  // Cybersecurity
  'Penetration Testing': 'Simulating cyberattacks to identify and exploit vulnerabilities before malicious hackers can.',
  'Vulnerability Analysis': 'Systematic review of security weaknesses in information systems to evaluate threat levels.',
  'Malware Analysis': 'Dissecting malicious software to understand its behavior, origin, and potential impact.',
  'Identity Management': 'Frameworks and policies for ensuring appropriate access to technology resources.',
  'Network Security': 'Implementing defenses to protect network infrastructure from unauthorized access and attacks.',
  'Burp Suite': 'The premier platform for performing security testing and web application penetration testing.',
  'Wireshark': 'Deep packet inspection for network troubleshooting and analyzing malicious traffic.',
  'Metasploit': 'A powerful penetration testing framework for developing and executing exploit code.',
  'Nmap': 'Network mapping and security auditing to discover active devices, open ports, and vulnerabilities.',
  'OWASP Top 10': 'Expertise in mitigating the ten most critical web application security risks.',
  
  // AI & Data Science
  'Python': 'My primary language for building AI models, scripting cybersecurity tools, and rapid prototyping.',
  'Machine Learning': 'Applying statistical models and algorithms to train systems without explicit programming.',
  'Deep Learning': 'Designing multi-layered neural networks for complex pattern recognition and computer vision.',
  'Neural Networks': 'Building biologically-inspired computing systems for advanced AI decision-making.',
  'TensorFlow': 'Google\'s open-source framework for building and training scalable deep learning models.',
  'Pandas': 'High-performance data manipulation and analysis library for structured data processing.',
  'NumPy': 'Fundamental package for scientific computing, matrix operations, and mathematical functions.',
  'Scikit-learn': 'Essential library for standard machine learning algorithms like classification and regression.',
  'Data Visualization': 'Translating complex data sets into graphical representations to uncover actionable insights.',
  'NLP': 'Natural Language Processing techniques to help computers understand and generate human language.',
  
  // Game Development
  'Unity': 'Industry-leading game engine for building immersive 3D environments and scripting complex logic.',
  'C#': 'Object-oriented programming used for Unity game development and building robust enterprise systems.',
  'Godot': 'An advanced, feature-packed open-source game engine for both 2D and 3D game creation.',
  'Game Physics': 'Simulating real-world physical laws like gravity, collision, and momentum within game engines.',
  'Level Design': 'Crafting interactive environments and mapping out gameplay progression and player experience.',
  '3D Modeling': 'Creating three-dimensional representations of objects and characters for game assets.',
  'Blender': 'Comprehensive open-source 3D creation suite for modeling, rigging, animation, and rendering.',
  'Shader Programming': 'Writing GPU code to create custom visual effects, lighting, and material rendering.',
  
  // Tools & Languages
  'Git & GitHub': 'Version control and collaborative workflow management for tracking code changes.',
  'Linux': 'My preferred OS environment for ethical hacking, server management, and advanced scripting.',
  'Docker': 'Containerizing applications for secure, scalable, isolated deployment across any environment.',
  'VS Code': 'My primary code editor, highly customized with extensions for productivity and debugging.',
  'C++': 'High-performance language used for resource-critical systems and advanced game engine logic.',
  'JavaScript': 'The backbone of dynamic web development, used for interactive front-end user experiences.',
  'SQL': 'Managing, querying, and structuring relational databases to support complex backends.',
  'Bash Scripting': 'Automating system tasks, security auditing workflows, and environment setups on Linux.',
};

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
                    <div key={item} className="relative group cursor-default z-10 hover:z-50">
                      <span
                        className="block rounded-lg border border-ink-700 bg-ink-800/50 px-3.5 py-1.5 text-sm font-medium text-ink-200 transition-all duration-300 group-hover:border-accent-500/40 group-hover:bg-accent-500/10 group-hover:text-accent-300"
                      >
                        {item}
                      </span>
                      
                      {/* Tooltip */}
                      <div className="pointer-events-none absolute bottom-full left-1/2 z-50 mb-2 -translate-x-1/2 translate-y-2 scale-95 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100">
                        <div className="w-56 rounded-xl border border-ink-700 bg-ink-900/95 p-3 text-center shadow-xl backdrop-blur-md">
                          <p className="text-xs leading-relaxed text-ink-200">
                            {skillDescriptions[item] || 
                             `An essential tool I leverage to build robust and secure solutions.`}
                          </p>
                          {/* Triangle pointer */}
                          <div className="absolute -bottom-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 border-b border-r border-ink-700 bg-ink-900/95" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative mt-20 flex overflow-hidden border-y border-ink-800 bg-ink-900/40 py-6 pointer-events-none">
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
