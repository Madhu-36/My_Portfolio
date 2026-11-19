import { useState, useEffect } from 'react';

interface ScrollPosition {
  x: number;
  y: number;
}

/**
 * Returns reactive window scroll coordinates with passive scroll event listeners.
 */
export function useWindowScroll(): ScrollPosition {
  const [scroll, setScroll] = useState<ScrollPosition>(() => {
    if (typeof window === 'undefined') return { x: 0, y: 0 };
    return { x: window.scrollX, y: window.scrollY };
  });

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScroll({ x: window.scrollX, y: window.scrollY });
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scroll;
}
