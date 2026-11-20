import { useState, useCallback } from 'react';

export interface UseToggleActions {
  toggle: () => void;
  setTrue: () => void;
  setFalse: () => void;
  set: (value: boolean) => void;
}

/**
 * Custom hook providing robust boolean state management and explicit switch handlers.
 */
export function useToggle(initialValue = false): [boolean, UseToggleActions] {
  const [value, setValue] = useState<boolean>(initialValue);

  const toggle = useCallback(() => setValue((prev) => !prev), []);
  const setTrue = useCallback(() => setValue(true), []);
  const setFalse = useCallback(() => setValue(false), []);
  const set = useCallback((v: boolean) => setValue(v), []);

  return [value, { toggle, setTrue, setFalse, set }];
}
