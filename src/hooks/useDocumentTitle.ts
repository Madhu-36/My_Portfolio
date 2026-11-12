import { useEffect, useRef } from 'react';

export interface UseDocumentTitleOptions {
  /** If true, restores previous title when component unmounts. Default: true */
  restoreOnUnmount?: boolean;
}

/**
 * Dynamically updates document.title and optionally restores the previous title on unmount.
 *
 * @param title - The new title string to apply to the document
 * @param options - Configuration options (restoreOnUnmount)
 */
export function useDocumentTitle(
  title: string,
  options: UseDocumentTitleOptions = {}
): void {
  const { restoreOnUnmount = true } = options;
  const previousTitleRef = useRef<string>(typeof document !== 'undefined' ? document.title : '');

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.title = title;
    }
  }, [title]);

  useEffect(() => {
    const prev = previousTitleRef.current;
    return () => {
      if (restoreOnUnmount && typeof document !== 'undefined' && prev) {
        document.title = prev;
      }
    };
  }, [restoreOnUnmount]);
}
