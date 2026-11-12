import { useEffect, useCallback } from 'react';

export interface UseKeyPressOptions {
  /** Target element to attach listener to. Defaults to window */
  target?: HTMLElement | Window | Document | null;
  /** Whether Ctrl / Meta key must be held */
  ctrlOrMeta?: boolean;
  /** Whether Shift key must be held */
  shift?: boolean;
  /** Whether Alt key must be held */
  alt?: boolean;
  /** Whether the event handler should call event.preventDefault() */
  preventDefault?: boolean;
  /** Whether the listener is active */
  enabled?: boolean;
}

/**
 * Declaratively listens for specific keyboard key strokes.
 *
 * @param targetKey - Single key (e.g. 'Escape', 'Enter', 'k') or array of matching keys
 * @param handler - Callback function fired when key combination matches
 * @param options - Configuration options for target, modifier keys, preventDefault
 */
export function useKeyPress(
  targetKey: string | string[],
  handler: (event: KeyboardEvent) => void,
  options: UseKeyPressOptions = {}
): void {
  const {
    target = typeof window !== 'undefined' ? window : null,
    ctrlOrMeta = false,
    shift = false,
    alt = false,
    preventDefault = false,
    enabled = true,
  } = options;

  const stableHandler = useCallback(handler, [handler]);

  useEffect(() => {
    if (!enabled || !target) return;

    const keys = Array.isArray(targetKey) ? targetKey : [targetKey];

    const listener = (event: Event) => {
      const e = event as KeyboardEvent;
      const keyMatches = keys.some(
        (k) => k.toLowerCase() === e.key.toLowerCase()
      );

      if (!keyMatches) return;

      if (ctrlOrMeta && !(e.ctrlKey || e.metaKey)) return;
      if (shift && !e.shiftKey) return;
      if (alt && !e.altKey) return;

      if (preventDefault) {
        e.preventDefault();
      }

      stableHandler(e);
    };

    target.addEventListener('keydown', listener);
    return () => target.removeEventListener('keydown', listener);
  }, [targetKey, stableHandler, target, ctrlOrMeta, shift, alt, preventDefault, enabled]);
}
