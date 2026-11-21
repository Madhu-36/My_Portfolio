/**
 * Input validation, sanitization, and verification utilities.
 */

/**
 * Validates whether a given string is a valid email address.
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
}

/**
 * Checks whether a string contains only alphanumeric characters (letters and numbers).
 */
export function isAlphanumeric(text: string): boolean {
  return /^[a-zA-Z0-9]+$/.test(text);
}

/**
 * Sanitizes user input by trimming and escaping dangerous script tags.
 */
export function sanitizeInput(input: string): string {
  return input
    .trim()
    .replace(/[<>]/g, '')
    .slice(0, 500);
}

/**
 * Validates string length against min and max boundary criteria.
 */
export function validateLength(text: string, min: number, max: number): boolean {
  const len = text.trim().length;
  return len >= min && len <= max;
}
