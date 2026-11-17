import { useEffect, useState, useMemo } from 'react';
import { Menu, X, Volume2, VolumeX, Search } from 'lucide-react';
import MSLogo from './MSLogo';
import { Magnetic } from './Magnetic';
import { useActiveSection } from '../hooks/useActiveSection';
import { useScrollProgress } from '../hooks/useScrollProgress';
import { useKeyPress } from '../hooks/useKeyPress';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { useSoundEffects } from '../hooks/useSoundEffects';

const links = [
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Work', href: '#work', id: 'work' },
  { label: 'Expertise', href: '#expertise', id: 'expertise' },
  { label: 'Journey', href: '#experience', id: 'experience' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

const sectionIds = links.map((l) => l.id);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const activeSection = useActiveSection(sectionIds);
  const scrollProgress = useScrollProgress();
  const { muted, toggleMute } = useSoundEffects();

  // Dynamic document title based on active section in viewport
  const sectionTitle = useMemo(() => {
    switch (activeSection) {
      case 'about':
        return 'Madhu S | About';
      case 'work':
        return 'Madhu S | Projects';
      case 'expertise':
        return 'Madhu S | Expertise';
      case 'experience':
        return 'Madhu S | Journey';
      case 'contact':
        return 'Madhu S | Contact';
      default:
        return 'Madhu S - AI, Data Science & Cyber Security Engineer';
    }
  }, [activeSection]);

  useDocumentTitle(sectionTitle);

  // Close mobile menu on Escape key
  useKeyPress('Escape', () => setOpen(false), { enabled: open });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-ink-800/80 bg-ink-950/80 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      {/* Reading progress bar */}
      <div
        role="progressbar"
        aria-label="Reading progress"
        aria-valuenow={Math.round(scrollProgress * 100)}
        aria-valuemin={0}
        aria-valuemax={100}
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-accent-500 to-gold-400 transition-[width] duration-100"
        style={{ width: `${scrollProgress * 100}%` }}
      />
      <nav className="container-px mx-auto flex h-16 max-w-7xl items-center justify-between md:h-20">
        <Magnetic>
          <a href="#top" className="group flex items-center gap-2.5">
            <MSLogo size={36} className="text-accent-500 transition-transform duration-300 group-hover:scale-110" />
            <span className="font-display text-lg font-semibold tracking-tight text-white">
              Madhu S
            </span>
          </a>
        </Magnetic>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <Magnetic key={link.href}>
                <a
                  href={link.href}
                  className={`link-underline relative flex items-center gap-1.5 transition-colors duration-200 ${
                    isActive ? 'text-white font-medium' : 'text-ink-400 hover:text-ink-200'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {isActive && (
                    <span className="h-1.5 w-1.5 rounded-full bg-accent-400 shadow-[0_0_6px_rgba(34,211,238,0.8)]" />
                  )}
                  {link.label}
                </a>
              </Magnetic>
            );
          })}
          <Magnetic>
            <a href="#contact" className="btn-primary !py-2 !px-5">
              Let&apos;s talk
            </a>
          </Magnetic>

          <Magnetic>
            <button
              type="button"
              onClick={() => {
                window.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', metaKey: true }));
              }}
              aria-label="Open command palette (Cmd+K)"
              aria-haspopup="dialog"
              className="flex items-center gap-1.5 h-9 px-2.5 rounded-lg border border-ink-800 bg-ink-900/60 text-ink-400 hover:border-accent-500/40 hover:text-white transition-all text-xs font-mono"
            >
              <Search size={14} className="text-accent-400" />
              <kbd className="hidden lg:inline text-[10px] text-ink-500 bg-ink-800 px-1 py-0.5 rounded">⌘K</kbd>
            </button>
          </Magnetic>

          <Magnetic>
            <button
              type="button"
              onClick={toggleMute}
              aria-label={muted ? 'Unmute UI sound effects' : 'Mute UI sound effects'}
              aria-pressed={!muted}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-ink-800 bg-ink-900/60 text-ink-400 hover:border-accent-500/40 hover:text-white transition-all"
            >
              {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
            </button>
          </Magnetic>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={() => {
              window.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', metaKey: true }));
            }}
            aria-label="Open command palette"
            aria-haspopup="dialog"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-ink-700 text-ink-200"
          >
            <Search size={18} className="text-accent-400" />
          </button>
          <button
            type="button"
            onClick={toggleMute}
            aria-label={muted ? 'Unmute UI sound effects' : 'Mute UI sound effects'}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-ink-700 text-ink-200"
          >
            {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-ink-700 text-ink-200"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-nav"
        role="navigation"
        aria-label="Mobile navigation"
        className={`overflow-hidden border-t border-ink-800 bg-ink-950/95 backdrop-blur-xl transition-all duration-300 md:hidden ${
          open ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="container-px mx-auto flex max-w-7xl flex-col gap-1 py-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-base font-medium text-ink-200 transition-colors hover:bg-ink-800 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
