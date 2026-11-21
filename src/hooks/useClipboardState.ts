import { useState, useCallback } from 'react';
import { copyToClipboard } from '../utils/dom';

export interface UseClipboardStateReturn {
  copied: boolean;
  copiedText: string | null;
  copy: (text: string) => Promise<boolean>;
  reset: () => void;
}

/**
 * Enhanced clipboard management hook that tracks copied text and auto-resets status.
 */
export function useClipboardState(timeout = 2000): UseClipboardStateReturn {
  const [copied, setCopied] = useState(false);
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const copy = useCallback(
    async (text: string): Promise<boolean> => {
      const success = await copyToClipboard(text);
      if (success) {
        setCopied(true);
        setCopiedText(text);
        setTimeout(() => {
          setCopied(false);
          setCopiedText(null);
        }, timeout);
      }
      return success;
    },
    [timeout]
  );

  const reset = useCallback(() => {
    setCopied(false);
    setCopiedText(null);
  }, []);

  return { copied, copiedText, copy, reset };
}
