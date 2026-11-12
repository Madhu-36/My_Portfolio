import { useState, useCallback } from 'react';

/**
 * Like useState but persisted to localStorage.
 * Falls back gracefully if localStorage is unavailable (e.g. private browsing).
 */
export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T | ((prev: T) => T)) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = localStorage.getItem(key);
      return item !== null ? (JSON.parse(item) as T) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const setValue = useCallback(
    (value: T | ((prev: T) => T)) => {
      setStoredValue((prev) => {
        const resolved = typeof value === 'function' ? (value as (prev: T) => T)(prev) : value;
        try {
          localStorage.setItem(key, JSON.stringify(resolved));
        } catch {
          // localStorage may be full or unavailable – fail silently
        }
        return resolved;
      });
    },
    [key]
  );

  return [storedValue, setValue];
}
