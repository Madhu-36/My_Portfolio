import { useEffect, useRef } from 'react';

/**
 * Declarative setInterval React hook that handles dynamic delay changes and cleanup.
 * Pass null or undefined as delay to pause the interval.
 */
export function useInterval(callback: () => void, delay: number | null): void {
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay === null || delay === undefined) return;

    const tick = () => savedCallback.current();
    const id = setInterval(tick, delay);

    return () => clearInterval(id);
  }, [delay]);
}
