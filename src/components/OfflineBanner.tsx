import { WifiOff } from 'lucide-react';
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
      className="fixed bottom-0 inset-x-0 z-50 flex items-center justify-center gap-3 bg-red-900/90 backdrop-blur-sm px-4 py-3 text-sm text-red-100 shadow-2xl border-t border-red-700/50"
    >
      <WifiOff size={16} className="shrink-0 text-red-300" />
      <span>
        You're offline. Some features may be unavailable until your connection is restored.
      </span>
    </div>
  );
}
