# Performance Benchmarks & Architecture

This document outlines the performance engineering, asset optimization, and rendering pipeline targets for Madhu S's Portfolio.

---

## 1. Core Web Vitals Targets

| Metric | Target | Observed | Status |
| :--- | :--- | :--- | :--- |
| **First Contentful Paint (FCP)** | < 1.0s | ~0.7s | 🟢 Exceptional |
| **Largest Contentful Paint (LCP)** | < 2.0s | ~1.1s | 🟢 Exceptional |
| **Interaction to Next Paint (INP)** | < 100ms | < 35ms | 🟢 Exceptional |
| **Cumulative Layout Shift (CLS)** | < 0.05 | 0.00 | 🟢 Perfect (Zero shift) |

---

## 2. 3D WebGL Rendering Optimization

- **Dynamic Device Pixel Ratio (DPR)**: Clamped via `Math.min(window.devicePixelRatio, 2)` to eliminate GPU fillrate bottlenecks on high-density Retina and 4K mobile displays.
- **Frustum Culling**: Applied across all procedural particle meshes in `InteractiveParticles.tsx` and `CyberEarth.tsx`.
- **Memory Leak Protection**: Strict lifecycle teardown disposing geometries, shader materials, and canvas webgl contexts upon unmount.
- **Tab Background Throttling**: Rendering halts automatically when the document is hidden (`document.hidden`), preserving mobile battery life.

---

## 3. Code Splitting & Asset Pipeline

- **Vendor Chunks**: Separated into `react-vendor`, `three-vendor`, and `ui-vendor` inside `vite.config.ts` for aggressive edge CDN caching.
- **Dynamic Lazy Loading**: Modals (`CommandPalette`, `KeyboardShortcutsModal`, `ProjectCaseStudyModal`) and secondary scenes load on-demand via React `Suspense`.
- **Audio Synthesis**: Pure Web Audio API procedural synthesis replacing binary MP3/WAV files with zero network payload.
