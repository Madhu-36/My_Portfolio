import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal } from 'lucide-react';

export default function HackerMode() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    let sequence = '';
    const target = 'hack';

    const handleKeyDown = (e: KeyboardEvent) => {
      // Allow exiting via Escape key
      if (e.key === 'Escape' && active) {
        setActive(false);
        return;
      }

      sequence += e.key.toLowerCase();
      if (sequence.length > target.length) {
        sequence = sequence.slice(1);
      }
      
      if (sequence === target) {
        setActive(prev => !prev);
        sequence = '';
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [active]);

  useEffect(() => {
    if (active) {
      document.body.classList.add('hacker-mode');
    } else {
      document.body.classList.remove('hacker-mode');
    }
  }, [active]);

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="fixed top-20 left-1/2 -translate-x-1/2 z-[999] pointer-events-auto"
        >
          <div className="flex items-center gap-3 bg-[#0a2e0f]/95 border border-[#0f0] text-[#0f0] px-4 py-2 rounded-lg font-mono text-xs sm:text-sm shadow-[0_0_20px_rgba(0,255,0,0.4)] backdrop-blur-md">
            <div className="flex items-center gap-2">
              <Terminal size={16} className="animate-pulse" />
              <span>SYSTEM OVERRIDE ACTIVATED</span>
            </div>
            <button
              type="button"
              onClick={() => setActive(false)}
              aria-label="Exit hacker mode"
              className="flex items-center gap-1 rounded bg-[#0f0]/20 hover:bg-[#0f0]/30 text-[#0f0] px-2 py-0.5 text-xs font-semibold border border-[#0f0]/50 transition-colors ml-2 cursor-pointer"
            >
              <span>EXIT</span>
              <kbd className="text-[10px] opacity-75">(ESC)</kbd>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
