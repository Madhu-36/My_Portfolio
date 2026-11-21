import { useState, useEffect } from 'react';

export interface BatteryState {
  supported: boolean;
  loading: boolean;
  level: number | null;
  charging: boolean | null;
  chargingTime: number | null;
  dischargingTime: number | null;
}

interface BatteryManager extends EventTarget {
  charging: boolean;
  chargingTime: number;
  dischargingTime: number;
  level: number;
  addEventListener: (type: string, listener: EventListener) => void;
  removeEventListener: (type: string, listener: EventListener) => void;
}

interface NavigatorWithBattery extends Navigator {
  getBattery?: () => Promise<BatteryManager>;
}

/**
 * Tracks device battery level and charging state using the Battery Status API.
 */
export function useBattery(): BatteryState {
  const [state, setState] = useState<BatteryState>({
    supported: true,
    loading: true,
    level: null,
    charging: null,
    chargingTime: null,
    dischargingTime: null,
  });

  useEffect(() => {
    if (typeof navigator === 'undefined') {
      setState((prev) => ({ ...prev, supported: false, loading: false }));
      return;
    }

    const nav = navigator as NavigatorWithBattery;
    if (!nav.getBattery) {
      setState((prev) => ({ ...prev, supported: false, loading: false }));
      return;
    }

    let battery: BatteryManager | null = null;

    const updateBattery = () => {
      if (!battery) return;
      setState({
        supported: true,
        loading: false,
        level: Math.round(battery.level * 100),
        charging: battery.charging,
        chargingTime: battery.chargingTime,
        dischargingTime: battery.dischargingTime,
      });
    };

    nav.getBattery().then((bm) => {
      battery = bm;
      updateBattery();

      battery.addEventListener('chargingchange', updateBattery);
      battery.addEventListener('levelchange', updateBattery);
      battery.addEventListener('chargingtimechange', updateBattery);
      battery.addEventListener('dischargingtimechange', updateBattery);
    }).catch(() => {
      setState((prev) => ({ ...prev, supported: false, loading: false }));
    });

    return () => {
      if (battery) {
        battery.removeEventListener('chargingchange', updateBattery);
        battery.removeEventListener('levelchange', updateBattery);
        battery.removeEventListener('chargingtimechange', updateBattery);
        battery.removeEventListener('dischargingtimechange', updateBattery);
      }
    };
  }, []);

  return state;
}
