import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

const BOOT_LINES = [
  "> Initializing system...",
  "> Loading modules: [AI] [GAME] [SECURITY]",
  "> Establishing secure connection...",
  "> Decrypting portfolio data...",
  "> Rendering 3D environment...",
  "> System ready.",
];

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [lines, setLines] = useState<string[]>([]);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const timeouts: ReturnType<typeof setTimeout>[] = [];

    BOOT_LINES.forEach((line, index) => {
      timeouts.push(
        setTimeout(() => {
          setLines((prev) => [...prev, line]);
        }, index * 400)
      );
    });

    timeouts.push(
      setTimeout(() => {
        setIsDone(true);
      }, 2400)
    );

    timeouts.push(
      setTimeout(() => {
        onComplete();
      }, 2800)
    );

    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-ink-950 transition-opacity duration-500 ${
        isDone ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="w-full max-w-lg rounded-lg border border-green-900 bg-black/80 shadow-2xl">
        {/* Title bar */}
        <div className="flex items-center gap-2 border-b border-green-900 px-4 py-2">
          <span className="h-3 w-3 rounded-full bg-red-500" />
          <span className="h-3 w-3 rounded-full bg-yellow-500" />
          <span className="h-3 w-3 rounded-full bg-green-500" />
          <span className="ml-2 font-mono text-sm text-green-400">
            madhu@boot:~$
          </span>
        </div>

        {/* Body */}
        <div className="min-h-[200px] p-4">
          <AnimatePresence>
            {lines.map((line, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="font-mono text-sm text-green-400"
              >
                {line}
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Blinking cursor */}
          <span className="inline-block h-4 w-2 animate-pulse bg-green-400 font-mono" />
        </div>
      </div>
    </div>
  );
}
