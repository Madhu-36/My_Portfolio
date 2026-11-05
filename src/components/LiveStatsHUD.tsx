import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Activity, Terminal } from 'lucide-react';

export default function LiveStatsHUD() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 6, duration: 1 }}
      className="fixed bottom-6 left-6 z-40 hidden lg:flex flex-col gap-2 pointer-events-none"
    >
      <div className="flex items-center gap-2 text-[10px] font-mono text-ink-400">
        <Activity size={12} className="text-accent-500 animate-pulse" />
        <span>LIVE SYSTEM STATUS</span>
      </div>
      
      <div className="rounded-lg border border-ink-800 bg-ink-950/80 backdrop-blur-md p-3 text-xs font-mono shadow-2xl">
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
      </div>
    </motion.div>
  );
}
