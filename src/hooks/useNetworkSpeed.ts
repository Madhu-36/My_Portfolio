import { useState, useEffect } from 'react';

export interface NetworkConnectionInfo {
  downlink?: number; // Megabits per second
  effectiveType?: 'slow-2g' | '2g' | '3g' | '4g';
  rtt?: number; // Round-trip time in ms
  saveData?: boolean;
  supported: boolean;
}

interface NetworkInformation extends EventTarget {
  downlink?: number;
  effectiveType?: 'slow-2g' | '2g' | '3g' | '4g';
  rtt?: number;
  saveData?: boolean;
  addEventListener: (type: string, listener: EventListener) => void;
  removeEventListener: (type: string, listener: EventListener) => void;
}

/**
 * Hook to track client network speed, round-trip time, and connection type via Navigator.connection.
 */
export function useNetworkSpeed(): NetworkConnectionInfo {
  const [networkInfo, setNetworkInfo] = useState<NetworkConnectionInfo>(() => {
    if (typeof navigator === 'undefined') {
      return { supported: false };
    }
    const nav = navigator as Navigator & { connection?: NetworkInformation };
    if (!nav.connection) {
      return { supported: false };
    }
    return {
      downlink: nav.connection.downlink,
      effectiveType: nav.connection.effectiveType,
      rtt: nav.connection.rtt,
      saveData: nav.connection.saveData,
      supported: true,
    };
  });

  useEffect(() => {
    if (typeof navigator === 'undefined') return;
    const nav = navigator as Navigator & { connection?: NetworkInformation };
    const conn = nav.connection;
    if (!conn) return;

    const handleConnectionChange = () => {
      setNetworkInfo({
        downlink: conn.downlink,
        effectiveType: conn.effectiveType,
        rtt: conn.rtt,
        saveData: conn.saveData,
        supported: true,
      });
    };

    conn.addEventListener('change', handleConnectionChange);
    return () => {
      conn.removeEventListener('change', handleConnectionChange);
    };
  }, []);

  return networkInfo;
}
