import { useCallback, useRef, useState } from 'react';

/**
 * Returns a ref to attach to an element and a boolean indicating
 * whether the mouse is currently hovering over that element.
 *
 * @example
 * const { ref, isHovered } = useHover<HTMLButtonElement>();
 * return <button ref={ref} className={isHovered ? 'bg-accent' : ''}>{...}</button>;
 */
export function useHover<T extends HTMLElement>() {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<T>(null);

  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);

  const callbackRef = useCallback(
    (node: T | null) => {
      if (ref.current) {
        ref.current.removeEventListener('mouseenter', handleMouseEnter);
        ref.current.removeEventListener('mouseleave', handleMouseLeave);
      }
      (ref as React.MutableRefObject<T | null>).current = node;
      if (node) {
        node.addEventListener('mouseenter', handleMouseEnter);
        node.addEventListener('mouseleave', handleMouseLeave);
      }
    },
    [handleMouseEnter, handleMouseLeave]
  );

  return { ref: callbackRef, isHovered };
}

// Needed for type reference in callback
import type React from 'react';
