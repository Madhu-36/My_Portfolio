import { useState, useEffect, useRef } from 'react';

interface UseIdleTimerOptions {
  timeoutMs?: number;
  onIdle?: () => void;
  onActive?: () => void;
}

export function useIdleTimer(options: UseIdleTimerOptions = {}): boolean {
  const { timeoutMs = 60000, onIdle, onActive } = options;
  const [isIdle, setIsIdle] = useState(false);
  const timeoutId = useRef<number | null>(null);

  useEffect(() => {
    const handleActivity = () => {
      if (isIdle) {
        setIsIdle(false);
        onActive?.();
      }

      if (timeoutId.current) {
        window.clearTimeout(timeoutId.current);
      }

      timeoutId.current = window.setTimeout(() => {
        setIsIdle(true);
        onIdle?.();
      }, timeoutMs);
    };

    const events = ['mousemove', 'keydown', 'scroll', 'touchstart', 'click'];
    events.forEach((evt) => window.addEventListener(evt, handleActivity, { passive: true }));

    timeoutId.current = window.setTimeout(() => {
      setIsIdle(true);
      onIdle?.();
    }, timeoutMs);

    return () => {
      events.forEach((evt) => window.removeEventListener(evt, handleActivity));
      if (timeoutId.current) {
        window.clearTimeout(timeoutId.current);
      }
    };
  }, [timeoutMs, isIdle, onIdle, onActive]);

  return isIdle;
}
