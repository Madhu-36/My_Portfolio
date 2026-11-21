/**
 * Asynchronous flow control, promise management, and retry utilities.
 */

/**
 * Returns a promise that resolves after the specified duration in milliseconds.
 */
export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Wraps a promise with a maximum timeout, rejecting if not settled within that limit.
 */
export function timeoutPromise<T>(promise: Promise<T>, timeoutMs: number, timeoutMsg = 'Operation timed out'): Promise<T> {
  let timer: ReturnType<typeof setTimeout>;

  const timeout = new Promise<never>((_, reject) => {
    timer = setTimeout(() => reject(new Error(timeoutMsg)), timeoutMs);
  });

  return Promise.race([
    promise.then((res) => {
      clearTimeout(timer);
      return res;
    }),
    timeout,
  ]);
}

/**
 * Executes an async task with exponential backoff retries.
 */
export async function retryWithBackoff<T>(
  task: () => Promise<T>,
  retries = 3,
  delayMs = 300,
  backoffFactor = 2
): Promise<T> {
  let attempt = 0;
  let currentDelay = delayMs;

  while (attempt < retries) {
    try {
      return await task();
    } catch (err) {
      attempt++;
      if (attempt >= retries) throw err;
      await sleep(currentDelay);
      currentDelay *= backoffFactor;
    }
  }

  throw new Error('All retry attempts exhausted');
}
