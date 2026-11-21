# Troubleshooting & Diagnostics Guide

This document outlines common client-side and development environment anomalies alongside verified recovery procedures.

---

## 1. WebGL 3D Canvas Context Loss

### Symptom
- The 3D scene freezes, turns solid black, or logs `WebGL: CONTEXT_LOST_WEBGL`.

### Root Cause
- High GPU memory pressure, device sleep/wake cycles, or hardware acceleration toggles.

### Solution
- The canvas is wrapped by `CanvasErrorBoundary.tsx` which automatically falls back to lightweight CSS particle renders.
- To manually restore WebGL context in browser:
  ```bash
  # In Chrome: Visit chrome://gpu and verify 'WebGL: Hardware accelerated'
  # Reload with fresh GPU context: Shift + Ctrl + R (or Shift + Cmd + R)
  ```

---

## 2. PWA Service Worker Cache Stale State

### Symptom
- New commits pushed to GitHub are not immediately visible due to cache-first service worker rules.

### Solution
- Trigger a hard cache invalidation:
  1. Open Developer Tools (`F12`).
  2. Navigate to **Application** → **Service Workers**.
  3. Click **Update** or check **Bypass for network**.
  4. Alternatively, execute `localStorage.clear()` in the DevTools console.

---

## 3. Terminal Font Alignment Anomaly

### Symptom
- ASCII banners or tabular data appears jagged or misaligned on older mobile browsers.

### Solution
- The terminal uses `@font-mono` configured with `JetBrains Mono` and `ui-monospace` fallbacks.
- Ensure browser text zoom is set to 100% or reset with `Ctrl + 0`.
