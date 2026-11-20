/**
 * Generic array transformation and collection utilities.
 */

/**
 * Splits an array into chunks of a specified size.
 */
export function chunk<T>(array: T[], size: number): T[][] {
  if (size <= 0) return [array];
  const result: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

/**
 * Returns an array with duplicate elements removed while preserving order.
 */
export function unique<T>(array: T[]): T[] {
  return Array.from(new Set(array));
}

/**
 * Returns a random element from an array, or undefined if the array is empty.
 */
export function sample<T>(array: T[]): T | undefined {
  if (array.length === 0) return undefined;
  const index = Math.floor(Math.random() * array.length);
  return array[index];
}

/**
 * Groups elements of an array by a key generated from a callback selector.
 */
export function groupBy<T, K extends string | number | symbol>(
  array: T[],
  keySelector: (item: T) => K
): Record<K, T[]> {
  return array.reduce((accumulator, item) => {
    const key = keySelector(item);
    if (!accumulator[key]) {
      accumulator[key] = [];
    }
    accumulator[key].push(item);
    return accumulator;
  }, {} as Record<K, T[]>);
}
