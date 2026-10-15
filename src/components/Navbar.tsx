import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import MSLogo from './MSLogo';
import { Magnetic } from './Magnetic';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Journey', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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
          {links.map((link) => (
            <Magnetic key={link.href}>
              <a
                href={link.href}
                className="link-underline"
              >
                {link.label}
              </a>
            </Magnetic>
          ))}
          <Magnetic>
            <a href="#contact" className="btn-primary !py-2 !px-5">
              Let&apos;s talk
            </a>
          </Magnetic>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-ink-700 text-ink-200 md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
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
