# Testing & Verification Guide

This guide details the quality assurance processes, type-checking policies, and continuous integration validation required for the portfolio codebase.

---

## 1. Quality Gates & Commands

| Stage | Command | Purpose | SLA / Threshold |
| :--- | :--- | :--- | :--- |
| **Type Integrity** | `npm run typecheck` | Validates strict TypeScript compilation (`tsconfig.app.json`) | 0 warnings, 0 errors |
| **Production Build** | `npm run build` | Bundles assets via Vite with Rollup chunk splitting | Zero bundling errors |
| **Linting** | `npm run lint` | Ensures ESLint rules conform to React 18 standards | Clean exit |
| **Local Preview** | `npm run preview` | Runs the production `dist/` directory locally | HTTP 200 on all routes |

---

## 2. Accessibility (a11y) Verification

- **Keyboard Focus Trapping**: Modals (`CommandPalette`, `ProjectCaseStudyModal`) must capture focus and cycle through focusable elements on <kbd>Tab</kbd> without escaping into background DOM.
- **Escape Dismissal**: Every open overlay must dismiss instantly on <kbd>Escape</kbd>.
- **Aria Attributes**: All interactive toggle controls (mute, search, filters) must declare `aria-pressed`, `aria-expanded`, or `aria-current`.

---

## 3. Bundle Size Budget

- Main vendor bundle (`three-vendor`) must not exceed 850 kB gzipped.
- React core chunk (`react-vendor`) must remain under 150 kB gzipped.
- Lazy-loaded components must load on demand without degrading Time to Interactive (TTI).
