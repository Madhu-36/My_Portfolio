/**
 * Performance benchmarking and execution throttling utilities.
 */

/**
 * Measures the execution time of a synchronous function in milliseconds.
 */
export function measureExecutionTime<T>(label: string, fn: () => T): { result: T; durationMs: number } {
  const start = typeof performance !== 'undefined' ? performance.now() : Date.now();
  const result = fn();
  const end = typeof performance !== 'undefined' ? performance.now() : Date.now();
  const durationMs = end - start;

  if (process.env.NODE_ENV === 'development') {
    console.debug(`[Perf: ${label}] took ${durationMs.toFixed(2)}ms`);
  }

  return { result, durationMs };
}

/**
 * Creates a throttled version of a callback function.
 */
export function createThrottledCallback<T extends (...args: unknown[]) => void>(
  callback: T,
  limitMs: number
): (...args: Parameters<T>) => void {
  let inThrottle = false;

  return function (this: unknown, ...args: Parameters<T>) {
    if (!inThrottle) {
      callback.apply(this, args);
      inThrottle = true;
      setTimeout(() => {
        inThrottle = false;
      }, limitMs);
    }
  };
}
