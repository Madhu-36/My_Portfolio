import { useState, useEffect } from 'react';
import { WifiOff, RefreshCw } from 'lucide-react';
import { useOnlineStatus } from '../hooks/useOnlineStatus';

/**
 * Persistent offline banner showing network drop alert and an auto-retry countdown timer.
 */
export default function OfflineBanner() {
  const isOnline = useOnlineStatus();
  const [countdown, setCountdown] = useState(15);

  useEffect(() => {
    if (isOnline) return;

    const interval = setInterval(() => {
      setCountdown((prev) => (prev <= 1 ? 15 : prev - 1));
    }, 1000);

    return () => clearInterval(interval);
  }, [isOnline]);

  if (isOnline) return null;

  return (
    <div
      role="alert"
      aria-live="assertive"
      className="fixed bottom-0 inset-x-0 z-50 flex items-center justify-between gap-3 bg-red-950/95 backdrop-blur-md px-4 py-2.5 text-xs font-mono text-red-200 shadow-2xl border-t border-red-800/80"
    >
      <div className="flex items-center gap-2.5 mx-auto">
        <WifiOff size={15} className="shrink-0 text-red-400 animate-pulse" />
        <span>
          SYSTEM OFFLINE: Local cache active. Auto-reconnect in <span className="text-white font-bold">{countdown}s</span>...
        </span>
        <button
          type="button"
          onClick={() => window.location.reload()}
          className="ml-3 inline-flex items-center gap-1 rounded border border-red-700/60 bg-red-900/40 px-2 py-0.5 text-[11px] text-red-200 hover:bg-red-800/60 hover:text-white transition-colors"
        >
          <RefreshCw size={11} />
          <span>Retry</span>
        </button>
      </div>
    </div>
  );
}
