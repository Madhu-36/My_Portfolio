import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Command, X, Keyboard } from 'lucide-react';
import { useKeyPress } from '../hooks/useKeyPress';

interface ShortcutItem {
  keys: string[];
  description: string;
}

const shortcuts: ShortcutItem[] = [
  { keys: ['?'], description: 'Toggle keyboard shortcuts menu' },
  { keys: ['Esc'], description: 'Close active modal, AI chat, or menu' },
  { keys: ['H', 'A', 'C', 'K'], description: 'Toggle Matrix / Hacker mode override' },
  { keys: ['T'], description: 'Jump to Interactive Terminal' },
  { keys: ['W'], description: 'Jump to Projects & Work section' },
  { keys: ['C'], description: 'Jump to Contact form section' },
  { keys: ['B'], description: 'Smooth scroll back to top' },
];

export function KeyboardShortcutsModal() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle on '?' key when not focused in an input or textarea
  useKeyPress(['?', '/'], (e) => {
    const activeEl = document.activeElement;
    const isEditing = activeEl instanceof HTMLInputElement || activeEl instanceof HTMLTextAreaElement;
    if (!isEditing && e.key === '?') {
      e.preventDefault();
      setIsOpen((prev) => !prev);
    }
  });

  // Close on Escape
  useKeyPress('Escape', () => setIsOpen(false), { enabled: isOpen });

  return (
    <>
      {/* Floating Shortcut Quick Pill */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label="Open keyboard shortcuts guide"
        className="fixed bottom-6 right-24 z-40 hidden md:flex items-center gap-1.5 rounded-full border border-ink-800 bg-ink-950/80 px-3 py-2 text-xs font-mono text-ink-400 backdrop-blur-md shadow-lg hover:border-accent-500/40 hover:text-white transition-all duration-300"
      >
        <Keyboard size={14} className="text-accent-400" />
        <span className="hidden lg:inline">Shortcuts</span>
        <kbd className="rounded border border-ink-700 bg-ink-900 px-1.5 py-0.5 text-[10px] text-ink-300">?</kbd>
      </button>

      {/* Shortcuts Modal Dialog */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-ink-950/80 backdrop-blur-sm"
            />

            {/* Modal Card */}
            <motion.div
              role="dialog"
              aria-label="Keyboard Shortcuts"
              aria-modal="true"
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-md rounded-2xl border border-ink-700 bg-ink-900/95 p-6 shadow-2xl backdrop-blur-xl"
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-ink-800 pb-4">
                <div className="flex items-center gap-2 text-white">
                  <Command size={18} className="text-accent-400" />
                  <h3 className="font-display font-semibold text-base">Keyboard Navigation</h3>
                </div>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close keyboard shortcuts dialog"
                  className="rounded-lg p-1.5 text-ink-400 hover:bg-ink-800 hover:text-white transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Shortcuts List */}
              <div className="mt-4 space-y-2.5">
                {shortcuts.map((sc, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between py-1.5 text-xs border-b border-ink-800/40 last:border-none"
                  >
                    <span className="text-ink-300">{sc.description}</span>
                    <div className="flex items-center gap-1">
                      {sc.keys.map((k, idx) => (
                        <kbd
                          key={idx}
                          className="rounded border border-ink-700 bg-ink-800 px-2 py-0.5 font-mono text-[11px] font-semibold text-accent-300 shadow-sm"
                        >
                          {k}
                        </kbd>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 pt-3 border-t border-ink-800 text-center">
                <p className="text-[11px] font-mono text-ink-500">
                  Press <kbd className="text-ink-300">ESC</kbd> to close anytime
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
export default KeyboardShortcutsModal;
