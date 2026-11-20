# Production Telemetry & System Monitoring

This specification outlines the telemetry architecture, health checking pipelines, and performance budgets governing the Madhu S Portfolio deployment.

---

## 1. Core Web Vitals Service Level Objectives (SLOs)

| Metric | Target (p75) | Description | Verification Tool |
| :--- | :--- | :--- | :--- |
| **LCP (Largest Contentful Paint)** | `< 1.2s` | Time until primary hero title and canvas load | Chrome UX Report / Lighthouse |
| **FID (First Input Delay)** | `< 50ms` | Main thread responsiveness to initial clicks | Web Vitals JS Lib |
| **INP (Interaction to Next Paint)** | `< 100ms` | Command palette and filter transitions | Web Vitals JS Lib |
| **CLS (Cumulative Layout Shift)** | `< 0.02` | Visual stability of dynamic components | Web Vitals JS Lib |
| **TTFB (Time to First Byte)** | `< 180ms` | Edge CDN delivery via GitHub Pages anycast | Global synthetic probe |

---

## 2. Telemetry Ingestion Architecture

```
[ Client Browser ]
        │
        ├──> Navigator.connection ──> useNetworkSpeed Hook ──> LiveStatsHUD
        │
        ├──> GitHub REST API ───────> Stale-While-Revalidate ──> LocalStorage Cache
        │
        └──> Window Performance API ─> AST Security Playground ─> Diagnostics Panel
```

---

## 3. Resilience & Failure Modes

1. **GitHub API Rate Limiting**:
   - Fallback to statically verified metrics (`publicRepos: 14, followers: 8`).
   - Cached responses persist up to 24 hours in browser `localStorage`.
2. **Offline Detection**:
   - `useOnlineStatus` triggers `OfflineBanner` with network recovery heartbeat.
3. **WebGL Context Loss**:
   - Wrapped by `CanvasErrorBoundary` with automatic 2D CSS fallback renderer.
