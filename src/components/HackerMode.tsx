import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal } from 'lucide-react';

export default function HackerMode() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    let sequence = '';
    const target = 'hack';

    const handleKeyDown = (e: KeyboardEvent) => {
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
  }, []);

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
          className="fixed top-24 left-1/2 -translate-x-1/2 z-[999] pointer-events-none"
        >
          <div className="flex items-center gap-2 bg-[#0a2e0f]/90 border border-[#0f0] text-[#0f0] px-4 py-2 rounded-md font-mono text-sm shadow-[0_0_15px_rgba(0,255,0,0.4)] backdrop-blur-sm">
            <Terminal size={16} />
            <span>SYSTEM OVERRIDE ACTIVATED</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
