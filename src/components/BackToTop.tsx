import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { useScrollProgress } from '../hooks/useScrollProgress';

/** Floating "back to top" button with a circular SVG progress ring. */
export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const scrollProgress = useScrollProgress();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference * (1 - scrollProgress);

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-xl border border-ink-700 bg-ink-900/90 text-ink-300 shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-accent-500/60 hover:text-accent-400 hover:-translate-y-1 ${
        visible
          ? 'translate-y-0 opacity-100 pointer-events-auto'
          : 'translate-y-4 opacity-0 pointer-events-none'
      }`}
    >
      <svg
        className="absolute inset-0 h-full w-full -rotate-90 pointer-events-none"
        viewBox="0 0 44 44"
      >
        <circle
          cx="22"
          cy="22"
          r={radius}
          fill="none"
          stroke="rgba(255, 255, 255, 0.08)"
          strokeWidth="2"
        />
        <circle
          cx="22"
          cy="22"
          r={radius}
          fill="none"
          stroke="#00f3ff"
          strokeWidth="2"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-[stroke-dashoffset] duration-150"
        />
      </svg>
      <ArrowUp size={16} className="relative z-10" />
    </button>
  );
}
