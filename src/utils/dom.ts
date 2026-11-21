/**
 * Client DOM manipulation and element measurement utilities.
 */

/**
 * Smoothly scrolls to a DOM element matching the provided selector.
 */
export function scrollToElement(selector: string, offset = 0): boolean {
  if (typeof document === 'undefined') return false;
  const target = document.querySelector(selector);
  if (!target) return false;

  const top = target.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: 'smooth' });
  return true;
}

/**
 * Checks whether an element is currently within the visible viewport bounds.
 */
export function isInViewport(element: HTMLElement, threshold = 0): boolean {
  if (typeof window === 'undefined' || !element) return false;
  const rect = element.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  const windowWidth = window.innerWidth || document.documentElement.clientWidth;

  return (
    rect.top <= windowHeight * (1 + threshold) &&
    rect.bottom >= -windowHeight * threshold &&
    rect.left <= windowWidth * (1 + threshold) &&
    rect.right >= -windowWidth * threshold
  );
}

/**
 * Copies plain text to the clipboard using the modern Clipboard API with fallback.
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      // Fallback
    }
  }

  try {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.opacity = '0';
    document.body.appendChild(textArea);
    textArea.select();
    const success = document.execCommand('copy');
    document.body.removeChild(textArea);
    return success;
  } catch {
    return false;
  }
}
