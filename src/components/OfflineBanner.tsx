import { WifiOff, RefreshCw } from 'lucide-react';
import { useOnlineStatus } from '../hooks/useOnlineStatus';

/**
 * Shows a persistent banner at the bottom of the screen when the user loses internet connectivity.
 * Hides automatically when connectivity is restored.
 */
export default function OfflineBanner() {
  const isOnline = useOnlineStatus();

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
          SYSTEM OFFLINE: Local cache active. Restoring uplink connection...
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
