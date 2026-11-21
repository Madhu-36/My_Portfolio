import { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  FileText,
  Mail,
  Terminal,
  FolderGit2,
  Cpu,
  User,
  ArrowUp,
  Volume2,
  VolumeX,
  ExternalLink,
  ShieldAlert,
  Award,
} from 'lucide-react';
import { useKeyPress } from '../hooks/useKeyPress';
import { useSoundEffects } from '../hooks/useSoundEffects';
import { useClipboard } from '../hooks/useClipboard';
import { getAssetUrl } from '../utils/assets';
import { projectsData } from '../data/projects';

interface CommandItem {
  id: string;
  category: 'Navigation' | 'Projects' | 'Actions';
  title: string;
  subtitle?: string;
  icon: React.ReactNode;
  action: () => void;
}

export function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { playClick, muted, toggleMute } = useSoundEffects();
  const { copy } = useClipboard();
  const inputRef = useRef<HTMLInputElement>(null);
  const paletteRef = useRef<HTMLDivElement>(null);

  // Focus trap for accessible dialog navigation
  useEffect(() => {
    if (!isOpen) return;
    const modal = paletteRef.current;
    if (!modal) return;

    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;
      const focusable = modal.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last?.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first?.focus();
      }
    };

    window.addEventListener('keydown', handleTab);
    return () => window.removeEventListener('keydown', handleTab);
  }, [isOpen]);

  // Global listener for Cmd+K / Ctrl+K
  useKeyPress(['k', 'K'], (e) => {
    if (e.metaKey || e.ctrlKey) {
      e.preventDefault();
      setIsOpen((prev) => !prev);
    }
  });

  // Close on Escape
  useKeyPress('Escape', () => setIsOpen(false), { enabled: isOpen });

  // Focus input on open
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setSearch('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  const items: CommandItem[] = useMemo(() => {
    const navItems: CommandItem[] = [
      {
        id: 'nav-about',
        category: 'Navigation',
        title: 'About Madhu S',
        subtitle: 'Bio, pillars, and core background',
        icon: <User size={15} className="text-accent-400" />,
        action: () => {
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
          setIsOpen(false);
        },
      },
      {
        id: 'nav-work',
        category: 'Navigation',
        title: 'Projects & Repositories',
        subtitle: 'Open-source security, AI, and systems tools',
        icon: <FolderGit2 size={15} className="text-accent-400" />,
        action: () => {
          document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
          setIsOpen(false);
        },
      },
      {
        id: 'nav-expertise',
        category: 'Navigation',
        title: 'Technical Expertise',
        subtitle: 'Skill matrices, toolchains, and languages',
        icon: <Cpu size={15} className="text-accent-400" />,
        action: () => {
          document.getElementById('expertise')?.scrollIntoView({ behavior: 'smooth' });
          setIsOpen(false);
        },
      },
      {
        id: 'nav-terminal',
        category: 'Navigation',
        title: 'Interactive Terminal',
        subtitle: 'Terminal emulator and command runner',
        icon: <Terminal size={15} className="text-accent-400" />,
        action: () => {
          const t = document.getElementById('terminal-input');
          if (t) {
            t.scrollIntoView({ behavior: 'smooth', block: 'center' });
            setTimeout(() => t.focus({ preventScroll: true }), 400);
          }
          setIsOpen(false);
        },
      },
      {
        id: 'nav-contact',
        category: 'Navigation',
        title: 'Contact Form',
        subtitle: 'Send a direct message or collaboration proposal',
        icon: <Mail size={15} className="text-accent-400" />,
        action: () => {
          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          setIsOpen(false);
        },
      },
    ];

    const projectItems: CommandItem[] = projectsData.map((p) => ({
      id: `proj-${p.title}`,
      category: 'Projects',
      title: p.title,
      subtitle: `${p.category} · ${p.tech.join(', ')}`,
      icon: <ExternalLink size={15} className="text-gold-400" />,
      action: () => {
        window.open(p.link, '_blank');
        setIsOpen(false);
      },
    }));

    const actionItems: CommandItem[] = [
      {
        id: 'act-resume',
        category: 'Actions',
        title: 'Download / View Resume (PDF)',
        subtitle: 'Open current verified resume in new tab',
        icon: <FileText size={15} className="text-emerald-400" />,
        action: () => {
          window.open(getAssetUrl('/Madhu_S_Resume.pdf?v=20261115'), '_blank');
          setIsOpen(false);
        },
      },
      {
        id: 'act-certs',
        category: 'Actions',
        title: 'View Verified Certifications',
        subtitle: 'AWS, TATA Strive, Anthropic, Deloitte, Unity',
        icon: <Award size={15} className="text-gold-400" />,
        action: () => {
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
          setIsOpen(false);
        },
      },
      {
        id: 'act-email',
        category: 'Actions',
        title: 'Copy Email to Clipboard',
        subtitle: 'madhu.s.3606@gmail.com',
        icon: <Mail size={15} className="text-accent-400" />,
        action: () => {
          copy('madhu.s.3606@gmail.com');
          setIsOpen(false);
        },
      },
      {
        id: 'act-sound',
        category: 'Actions',
        title: muted ? 'Unmute Sound Effects' : 'Mute Sound Effects',
        subtitle: 'Toggle global audio feedback on interactions',
        icon: muted ? <VolumeX size={15} className="text-ink-400" /> : <Volume2 size={15} className="text-accent-400" />,
        action: () => {
          toggleMute();
          setIsOpen(false);
        },
      },
      {
        id: 'act-hacker',
        category: 'Actions',
        title: 'Toggle Matrix / Hacker Mode',
        subtitle: 'Activate retro-green terminal aesthetic',
        icon: <ShieldAlert size={15} className="text-emerald-400" />,
        action: () => {
          document.body.classList.toggle('hacker-mode');
          setIsOpen(false);
        },
      },
      {
        id: 'act-term-whoami',
        category: 'Actions',
        title: 'Run Terminal: whoami',
        subtitle: 'Inspect engineer identity & credentials in terminal',
        icon: <Terminal size={15} className="text-accent-400" />,
        action: () => {
          const t = document.getElementById('terminal-input') as HTMLInputElement | null;
          if (t) {
            t.scrollIntoView({ behavior: 'smooth', block: 'center' });
            setTimeout(() => {
              t.focus({ preventScroll: true });
              t.value = 'whoami';
            }, 350);
          }
          setIsOpen(false);
        },
      },
      {
        id: 'act-term-theme',
        category: 'Actions',
        title: 'Run Terminal: theme',
        subtitle: 'View cyberspace design tokens & palette',
        icon: <Terminal size={15} className="text-neural-400" />,
        action: () => {
          const t = document.getElementById('terminal-input') as HTMLInputElement | null;
          if (t) {
            t.scrollIntoView({ behavior: 'smooth', block: 'center' });
            setTimeout(() => {
              t.focus({ preventScroll: true });
              t.value = 'theme';
            }, 350);
          }
          setIsOpen(false);
        },
      },
      {
        id: 'act-term-ping',
        category: 'Actions',
        title: 'Run Terminal: ping',
        subtitle: 'Probe edge network round-trip latency in terminal',
        icon: <Terminal size={15} className="text-emerald-400" />,
        action: () => {
          const t = document.getElementById('terminal-input') as HTMLInputElement | null;
          if (t) {
            t.scrollIntoView({ behavior: 'smooth', block: 'center' });
            setTimeout(() => {
              t.focus({ preventScroll: true });
              t.value = 'ping';
            }, 350);
          }
          setIsOpen(false);
        },
      },
      {
        id: 'act-term-stack',
        category: 'Actions',
        title: 'Run Terminal: stack',
        subtitle: 'Inspect full technology stack architecture',
        icon: <Terminal size={15} className="text-accent-400" />,
        action: () => {
          const t = document.getElementById('terminal-input') as HTMLInputElement | null;
          if (t) {
            t.scrollIntoView({ behavior: 'smooth', block: 'center' });
            setTimeout(() => {
              t.focus({ preventScroll: true });
              t.value = 'stack';
            }, 350);
          }
          setIsOpen(false);
        },
      },
      {
        id: 'act-term-whois',
        category: 'Actions',
        title: 'Run Terminal: whois',
        subtitle: 'Cryptographic identity and GPG verification record',
        icon: <Terminal size={15} className="text-gold-400" />,
        action: () => {
          const t = document.getElementById('terminal-input') as HTMLInputElement | null;
          if (t) {
            t.scrollIntoView({ behavior: 'smooth', block: 'center' });
            setTimeout(() => {
              t.focus({ preventScroll: true });
              t.value = 'whois';
            }, 350);
          }
          setIsOpen(false);
        },
      },
      {
        id: 'act-term-battery',
        category: 'Actions',
        title: 'Run Terminal: battery',
        subtitle: 'Inspect client power & battery subsystem telemetry',
        icon: <Terminal size={15} className="text-emerald-400" />,
        action: () => {
          const t = document.getElementById('terminal-input') as HTMLInputElement | null;
          if (t) {
            t.scrollIntoView({ behavior: 'smooth', block: 'center' });
            setTimeout(() => {
              t.focus({ preventScroll: true });
              t.value = 'battery';
            }, 350);
          }
          setIsOpen(false);
        },
      },
      {
        id: 'act-term-neofetch',
        category: 'Actions',
        title: 'Run Terminal: neofetch',
        subtitle: 'Display system specs & retro ASCII terminal badge',
        icon: <Terminal size={15} className="text-accent-400" />,
        action: () => {
          const t = document.getElementById('terminal-input') as HTMLInputElement | null;
          if (t) {
            t.scrollIntoView({ behavior: 'smooth', block: 'center' });
            setTimeout(() => {
              t.focus({ preventScroll: true });
              t.value = 'neofetch';
            }, 350);
          }
          setIsOpen(false);
        },
      },
      {
        id: 'act-top',
        category: 'Actions',
        title: 'Scroll Back to Top',
        subtitle: 'Smooth scroll to page header',
        icon: <ArrowUp size={15} className="text-ink-400" />,
        action: () => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          setIsOpen(false);
        },
      },
    ];

    return [...navItems, ...actionItems, ...projectItems];
  }, [muted, toggleMute, copy]);

  const filteredItems = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return items;
    return items.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        (item.subtitle && item.subtitle.toLowerCase().includes(q)) ||
        item.category.toLowerCase().includes(q)
    );
  }, [items, search]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % Math.max(1, filteredItems.length));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % Math.max(1, filteredItems.length));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const current = filteredItems[selectedIndex];
      if (current) {
        playClick();
        current.action();
      }
    }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[120] flex items-start justify-center p-4 pt-20 sm:pt-28">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-ink-950/80 backdrop-blur-md"
            />

            {/* Palette Window */}
            <motion.div
              ref={paletteRef}
              role="dialog"
              aria-label="Command Palette"
              aria-modal="true"
              initial={{ opacity: 0, scale: 0.96, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -10 }}
              transition={{ duration: 0.15 }}
              className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-ink-700 bg-ink-900/95 shadow-2xl backdrop-blur-2xl"
            >
              {/* Search Header */}
              <div className="flex items-center gap-3 border-b border-ink-800 px-4 py-3.5">
                <Search size={18} className="text-ink-400 shrink-0" />
                <input
                  ref={inputRef}
                  type="text"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setSelectedIndex(0);
                  }}
                  onKeyDown={handleKeyDown}
                  placeholder="Type a command, project, or section..."
                  aria-label="Command palette search input"
                  className="flex-1 bg-transparent text-sm text-white placeholder-ink-500 outline-none"
                />
                <kbd className="hidden sm:inline-block rounded border border-ink-700 bg-ink-800 px-1.5 py-0.5 font-mono text-[10px] text-ink-400">
                  ESC
                </kbd>
              </div>

              {/* Items List */}
              <div className="max-h-80 overflow-y-auto p-2 scroll-smooth">
                {filteredItems.length === 0 ? (
                  <div className="py-8 text-center text-xs text-ink-500 font-mono">
                    No commands matching &ldquo;{search}&rdquo;
                  </div>
                ) : (
                  filteredItems.map((item, idx) => {
                    const isSelected = idx === selectedIndex;
                    return (
                      <div
                        key={item.id}
                        onClick={() => {
                          playClick();
                          item.action();
                        }}
                        onMouseEnter={() => setSelectedIndex(idx)}
                        className={`flex items-center justify-between rounded-xl px-3.5 py-2.5 cursor-pointer transition-colors ${
                          isSelected
                            ? 'bg-accent-500/15 border border-accent-500/30 text-white'
                            : 'text-ink-300 hover:bg-ink-800/40 border border-transparent'
                        }`}
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <div
                            className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg ${
                              isSelected ? 'bg-accent-500/20 text-accent-300' : 'bg-ink-800 text-ink-400'
                            }`}
                          >
                            {item.icon}
                          </div>
                          <div className="truncate">
                            <p className="text-xs font-medium text-white truncate">{item.title}</p>
                            {item.subtitle && (
                              <p className="text-[11px] text-ink-500 truncate">{item.subtitle}</p>
                            )}
                          </div>
                        </div>

                        <span className="shrink-0 font-mono text-[10px] uppercase text-ink-500">
                          {item.category}
                        </span>
                      </div>
                    );
                  })
                )}
              </div>

              {/* Footer hint */}
              <div className="flex items-center justify-between border-t border-ink-800/80 bg-ink-950/60 px-4 py-2 text-[11px] font-mono text-ink-500">
                <span>Navigate with <kbd className="text-ink-300">↑</kbd> <kbd className="text-ink-300">↓</kbd></span>
                <span>Select with <kbd className="text-ink-300">↵ Enter</kbd></span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
export default CommandPalette;
