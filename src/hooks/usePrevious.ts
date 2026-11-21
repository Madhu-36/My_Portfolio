import { useEffect, useRef } from 'react';

/**
 * Stores and returns the previous value of a prop or state variable from the preceding render.
 */
export function usePrevious<T>(value: T): T | undefined {
  const ref = useRef<T>();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}
