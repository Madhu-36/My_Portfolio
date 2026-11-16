import { ProjectItem } from '../types/portfolio';

export const projectsData: ProjectItem[] = [
  {
    title: 'Kavach: Agentic AI Security',
    category: 'Cybersecurity & Agentic AI',
    domain: 'cyber',
    description:
      'Cryptographic micro-mandates that guarantee mathematical spending safety for autonomous AI agents over digital payment rails, pairing asymmetric Ed25519 signatures with process isolation.',
    tech: ['Python', 'Ed25519 Cryptography', 'Process Isolation', 'Docker'],
    image: '/previews/kavach.gif',
    accent: 'from-accent-500/20 to-accent-700/5',
    link: 'https://github.com/Madhu-36/Kavach',
    caseStudy: {
      problem: 'Autonomous AI agents running arbitrary tool calls can be coerced via prompt injection to trigger unauthorized financial transactions, drain API balances, or exceed spending authority without human consent.',
      architecture: [
        'Agent Sandbox Boundary (Docker + cgroups)',
        'Ed25519 Cryptographic Micro-Mandate Engine',
        'Atomic Budget Verification Controller',
        'Immutable Audit Ledger & Telemetry Pipeline'
      ],
      solution: 'Designed a dual-key asymmetric authorization rail where every agent tool action requires a cryptographic micro-mandate token signed by a verified policy governor, bounding both per-request spend and temporal duration.',
      metrics: [
        '100% elimination of unauthorized multi-hop spend',
        '< 4ms cryptographic signature validation latency',
        'Zero trust process isolation for tool-calling agents'
      ],
      githubUrl: 'https://github.com/Madhu-36/Kavach'
    }
  },
  {
    title: 'CodeShield: AI Firewall',
    category: 'AI Security & Tooling',
    domain: 'cyber',
    description:
      'Edge-native security firewall and AST static analysis engine to intercept prompt injection, dangerous code generation patterns, and malicious code execution in real time.',
    tech: ['Python', 'AST Analysis', 'Security Auditing', 'CI/CD Pipelines'],
    image: '/previews/codeshield.jpg',
    accent: 'from-accent-500/20 to-accent-700/5',
    link: 'https://github.com/Madhu-36/CodeShield',
    caseStudy: {
      problem: 'LLMs generate syntactically plausible code that often harbors dangerous deserialization exploits, arbitrary shell calls (e.g. `os.system`), and unescaped SQL injections that standard linters miss.',
      architecture: [
        'Streaming Token Ingestion Layer',
        'Python/JS Abstract Syntax Tree (AST) Parser',
        'OWASP Top 10 Heuristic Rule Matcher',
        'Automated Quarantine & Patch Generator'
      ],
      solution: 'Engineered an AST-level firewall that sits between AI code generators and target execution sandboxes, scoring vulnerability entropy and halting execution when dangerous system syscalls are detected.',
      metrics: [
        'Zero false-negative rate on OWASP A03 Injection vectors',
        'Real-time streaming evaluation in under 12ms',
        'Modular rule engine supporting Python, Bash, and JavaScript'
      ],
      githubUrl: 'https://github.com/Madhu-36/CodeShield'
    }
  },
  {
    title: 'Adaptive Firewall using AI',
    category: 'Cybersecurity & Machine Learning',
    domain: 'cyber',
    description:
      'Intelligent adaptive firewall leveraging LSTM-Autoencoders and Reinforcement Learning (PPO) for real-time anomaly detection and kernel-level mitigation, cutting false positives by 35%.',
    tech: ['Python', 'LSTM-Autoencoders', 'RL (PPO)', 'Kernel Automation'],
    image: '/previews/adaptive-firewall.jpg',
    accent: 'from-accent-500/20 to-accent-700/5',
    link: 'https://github.com/Madhu-36/Adaptive-firewall-Application-using-AI',
    caseStudy: {
      problem: 'Traditional rule-based firewalls fail against zero-day polymorphic traffic patterns and flood network operators with excessive false-positive alarms under heavy load.',
      architecture: [
        'Kernel Packet Capture (libpcap / socket)',
        'Feature Vector Normalization Pipeline',
        'LSTM-Autoencoder Anomaly Detection Core',
        'Proximal Policy Optimization (PPO) Rule Tuner'
      ],
      solution: 'Trained an LSTM-Autoencoder on benign temporal traffic flows to detect reconstruction anomalies, paired with a PPO reinforcement learning agent that dynamically adjusts iptables rule thresholds.',
      metrics: [
        '35% reduction in benign false positive alerts',
        'Sub-millisecond packet scoring overhead',
        'Automated kernel-level iptables rule synthesis'
      ],
      githubUrl: 'https://github.com/Madhu-36/Adaptive-firewall-Application-using-AI'
    }
  },
  {
    title: 'DevIgnite',
    category: 'Systems & Developer Tooling',
    domain: 'systems',
    description:
      'High-performance cross-platform environment manager built in Rust. Features a sandboxed symlink routing engine that eliminates path pollution and slashes setup times by over 80%.',
    tech: ['Rust', 'CLI Architecture', 'Systems Programming', 'Linux'],
    image: '/previews/devignite.jpg',
    accent: 'from-gold-500/20 to-gold-600/5',
    link: 'https://github.com/Madhu-36/DevIgnite',
    caseStudy: {
      problem: 'Developer onboarding involves manual tool installations, broken system PATH dependencies, and environment divergence across macOS, Linux, and Windows machines.',
      architecture: [
        'Zero-Dependency Rust CLI Core',
        'Sandboxed Symlink Routing Engine',
        'Lockfile Dependency Resolver',
        'Cross-Platform Shell Hook Generator'
      ],
      solution: 'Authored an ultra-fast Rust binary that manages project-specific environment binaries in isolated directories, swapping active toolchains instantaneously using atomic symlink updates.',
      metrics: [
        '> 80% decrease in local dev environment setup time',
        '< 10MB memory footprint during full dependency audits',
        'Native compilation support for Windows, Linux, and macOS'
      ],
      githubUrl: 'https://github.com/Madhu-36/DevIgnite'
    }
  },
  {
    title: 'MXB (Machine eXecutive Brain)',
    category: 'AI & Desktop Automation',
    domain: 'ai',
    description:
      'Desktop executive AI assistant and second brain for Windows, integrating local LLM inference engines, offline resilience, and automated context retrieval workflows.',
    tech: ['Python', 'Local Inference', 'Desktop Automation', 'NLP'],
    image: '/previews/mxb.jpg',
    accent: 'from-neural-500/20 to-neural-700/5',
    link: 'https://github.com/Madhu-36/MXB',
    caseStudy: {
      problem: 'Cloud-only AI assistants leak sensitive local file context, introduce high API subscription costs, and become completely unusable when internet connectivity drops.',
      architecture: [
        'Local GGUF Model Runtime (llama.cpp wrapper)',
        'Vector SQLite Local Document Embedder',
        'Windows OS Automation Hooks',
        'Encrypted Offline Profile Vault'
      ],
      solution: 'Engineered a private local-first AI assistant that indexes desktop files into a vector store and executes OS routines completely offline with zero data telemetry.',
      metrics: [
        '100% offline functionality with zero external API calls',
        'Sub-second context retrieval across 10,000+ local documents',
        'Hardware acceleration on integrated and discrete GPUs'
      ],
      githubUrl: 'https://github.com/Madhu-36/MXB'
    }
  },
  {
    title: 'PacketWay 3D',
    category: 'Network Forensics & WebGL',
    domain: 'cyber',
    description:
      'Enterprise-grade network threat detection and deep packet inspection platform featuring real-time 3D packet traffic visualization and live anomaly telemetry.',
    tech: ['React', 'Node.js', 'Three.js', 'Packet Forensics'],
    image: '/previews/packet-way.jpg',
    accent: 'from-accent-500/20 to-accent-700/5',
    link: 'https://github.com/Madhu-36/Packet-way',
    caseStudy: {
      problem: 'Raw PCAP files and table-based Wireshark dumps are difficult to parse during active cyber incidents, slowing down incident response times.',
      architecture: [
        'Packet Sniffer & Flow Aggregator',
        'WebSocket Stream Broker',
        'Three.js 3D Force-Directed Graph Engine',
        'Anomaly Highlight Shader Pipeline'
      ],
      solution: 'Visualized network flow nodes in real-time 3D space with color-coded packet types, allowing security analysts to spot botnet clusters and exfiltration streams in seconds.',
      metrics: [
        '60 FPS render performance with 1,000+ simultaneous nodes',
        'Real-time WebSocket streaming with < 15ms latency',
        'Interactive filtering by port, protocol, and threat signature'
      ],
      githubUrl: 'https://github.com/Madhu-36/Packet-way'
    }
  },
  {
    title: 'Game Complex',
    category: 'Full Stack & Game Platform',
    domain: 'systems',
    description:
      'Next-generation digital games storefront and interactive platform featuring optimized real-time catalog navigation, secure checkout, and high-performance game asset delivery.',
    tech: ['React 19', 'Django', 'Python', 'Tailwind CSS'],
    image: '/previews/game-complex.jpg',
    accent: 'from-gold-500/20 to-gold-600/5',
    link: 'https://github.com/Madhu-36/Game-Complex',
  },
  {
    title: 'Reflect-open',
    category: 'Open Source / Local-First',
    domain: 'systems',
    description:
      'Open-source local-first Markdown workspace structured for agentic AI integration, zero-latency offline synchronization, and rich document knowledge mapping.',
    tech: ['TypeScript', 'React', 'Local-First DB', 'Markdown'],
    image: '/previews/reflect-open.jpg',
    accent: 'from-gold-500/20 to-gold-600/5',
    link: 'https://github.com/Madhu-36/reflect-open',
  },
];

export const projectFilterTabs = [
  { label: 'All Projects', value: 'all' },
  { label: 'Cybersecurity', value: 'cyber' },
  { label: 'AI & Machine Learning', value: 'ai' },
  { label: 'Systems & Tools', value: 'systems' },
] as const;
