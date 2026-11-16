# Architecture & Technical Design

This document details the architectural principles, component hierarchy, rendering pipelines, and data flow of Madhu S's engineering portfolio.

## 1. Architectural Principles

- **Zero-Bloat Minimalist Runtime**: Pure React 18, Vite 5, TypeScript 5, and Tailwind CSS.
- **Client-Side Cybernetic Experience**: Interactive Canvas 3D rendering (Three.js), AST-based security analysis simulation (CodeShield), interactive CLI emulator, and keyboard navigation (<kbd>Cmd</kbd>+<kbd>K</kbd>).
- **Type Safety & Zero Lint Tolerance**: Strict TypeScript (`noUnusedLocals`, `noUnusedParameters`, strict null checks).
- **Accessibility by Default**: Focus trapping on all dialogs, screen-reader live regions (`aria-live`), WCAG AA compliant contrast ratios.

---

## 2. Component Hierarchy

```text
src/
├── main.tsx                         # DOM Root & Service Worker initialization
├── App.tsx                          # App shell, suspense boundaries, Easter egg listeners
│   ├── components/
│   │   ├── Navbar.tsx               # Fixed header, mobile drawer, sound & search toggles
│   │   ├── CommandPalette.tsx       # Cmd+K accessible spotlight search modal
│   │   ├── Hero.tsx                 # Headline, Three.js 3D Earth container, CTA buttons
│   │   │   └── CyberEarth.tsx       # Procedural WebGL wireframe Earth & orbital satellites
│   │   ├── About.tsx                # Bio, technical pillars, certifications
│   │   ├── TechnicalPillars.tsx     # Cyber, AI, Systems deep-dive cards
│   │   ├── Expertise.tsx            # Skill categorizations, progress badges
│   │   ├── Projects.tsx             # Filterable project catalog with live counter
│   │   │   └── ProjectCaseStudyModal.tsx # Architectural deep-dive case studies
│   │   ├── InteractiveTerminal.tsx  # Emulated POSIX/cyber CLI environment
│   │   ├── Contact.tsx              # Validated contact form with client-side verification
│   │   ├── LiveStatsHUD.tsx         # Real-time GitHub telemetry and system stats
│   │   └── Footer.tsx               # Copyright, live status, and social backlinks
```

---

## 3. Data & State Management

- **Centralized Data Sources**:
  - `src/data/projects.ts`: Project metadata, tags, architecture breakdown, and case studies.
  - `src/data/certifications.ts`: Industry credentials and verifying authority links.
- **Custom React Hooks**:
  - `useClipboard.ts`: Transient clipboard write state with feedback timeout.
  - `useKeyPress.ts`: Global keyboard combination handling (<kbd>Cmd+K</kbd>, <kbd>Esc</kbd>).
  - `useSoundEffects.ts`: Web Audio API synthetic synthesis for UI clicks and feedback.
  - `useReveal.ts`: IntersectionObserver hook for viewport-triggered entrance transitions.

---

## 4. WebGL 3D Pipeline

- Rendered with Three.js via an HTML5 canvas element inside `CyberEarth.tsx`.
- Utilizes requestAnimationFrame loops with FPS limiting and adaptive resolution scaling based on `window.devicePixelRatio`.
- Clean teardown logic (`useEffect` cleanup) disposing geometries, materials, and canvas contexts to prevent memory leaks across route reloads.

---

## 5. Security & Verification

- Client-side input sanitization across contact and interactive terminal commands.
- Subresource integrity and cache busting parameters on binary assets (`Madhu_S_Resume.pdf?v=20261115`).
- No external unverified third-party trackers or telemetry scripts.
