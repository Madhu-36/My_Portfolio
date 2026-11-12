import { useEffect, useState } from 'react';

/**
 * Debounces a rapidly-changing value, returning only the settled value
 * after the specified delay in milliseconds.
 *
 * @example
 * const debouncedQuery = useDebounce(searchQuery, 300);
 */
export function useDebounce<T>(value: T, delayMs: number): T {
  const [debounced, setDebounced] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delayMs);
    return () => clearTimeout(timer);
  }, [value, delayMs]);

  return debounced;
}
