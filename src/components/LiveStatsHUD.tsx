import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Terminal, ChevronDown, ChevronUp } from 'lucide-react';

export default function LiveStatsHUD() {
  const [time, setTime] = useState(new Date());
  const [isExpanded, setIsExpanded] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 6, duration: 1 }}
      className="fixed bottom-6 left-6 z-40 hidden lg:flex flex-col gap-2 pointer-events-auto"
    >
      <div className="flex items-center justify-between text-[10px] font-mono text-ink-400">
        <div className="flex items-center gap-2">
          <Activity size={12} className="text-accent-500 animate-pulse" />
          <span>LIVE SYSTEM STATUS</span>
        </div>
        <button
          type="button"
          onClick={() => setIsExpanded((prev) => !prev)}
          aria-label={isExpanded ? 'Collapse HUD stats' : 'Expand HUD stats'}
          className="ml-2 rounded p-0.5 text-ink-400 hover:text-white transition-colors"
        >
          {isExpanded ? <ChevronDown size={12} /> : <ChevronUp size={12} />}
        </button>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="rounded-lg border border-ink-800 bg-ink-950/80 backdrop-blur-md p-3 text-xs font-mono shadow-2xl overflow-hidden"
          >
            <div className="flex items-center gap-3 border-b border-ink-800 pb-2 mb-2">
              <Terminal size={12} className="text-gold-500" />
              <span className="text-white">Madhu-36 / Terminal</span>
            </div>

            <div className="space-y-1.5 text-ink-300">
              <div className="flex justify-between gap-8">
                <span className="text-ink-500">Local Time:</span>
                <span>{time.toLocaleTimeString()}</span>
              </div>
              <div className="flex justify-between gap-8">
                <span className="text-ink-500">Current Focus:</span>
                <span className="text-accent-400">Cybersecurity</span>
              </div>
              <div className="flex justify-between gap-8">
                <span className="text-ink-500">Weekly Commits:</span>
                <span className="text-white">34</span>
              </div>
              <div className="flex justify-between gap-8">
                <span className="text-ink-500">System Uptime:</span>
                <span className="text-gold-400">99.9%</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
