/**
 * Resilient localStorage wrapper with in-memory fallback for private windows,
 * disabled cookies, or environments where localStorage throws SecurityError.
 */

class SafeStorage {
  private fallbackStore: Record<string, string> = {};

  private isAvailable(): boolean {
    try {
      if (typeof window === 'undefined' || !window.localStorage) {
        return false;
      }
      const testKey = '__storage_test__';
      window.localStorage.setItem(testKey, testKey);
      window.localStorage.removeItem(testKey);
      return true;
    } catch {
      return false;
    }
  }

  getItem(key: string): string | null {
    if (this.isAvailable()) {
      try {
        return window.localStorage.getItem(key);
      } catch {
        return this.fallbackStore[key] ?? null;
      }
    }
    return this.fallbackStore[key] ?? null;
  }

  setItem(key: string, value: string): void {
    if (this.isAvailable()) {
      try {
        window.localStorage.setItem(key, value);
        return;
      } catch {
        // quota exceeded or storage restricted
      }
    }
    this.fallbackStore[key] = value;
  }

  removeItem(key: string): void {
    if (this.isAvailable()) {
      try {
        window.localStorage.removeItem(key);
        return;
      } catch {
        // storage restricted
      }
    }
    delete this.fallbackStore[key];
  }

  clear(): void {
    if (this.isAvailable()) {
      try {
        window.localStorage.clear();
      } catch {
        // storage restricted
      }
    }
    this.fallbackStore = {};
  }
}

export const safeStorage = new SafeStorage();
