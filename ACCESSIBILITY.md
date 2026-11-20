# Accessibility Standards & Conformance (WCAG 2.1 AA)

This document details the accessibility architecture, assistive technology support, keyboard navigation flows, and ARIA matrix implemented in the Madhu S Portfolio application.

---

## 1. Conformance Status

- **Standard**: Web Content Accessibility Guidelines (WCAG) 2.1 Level AA
- **Automated Audit**: Lighthouse Accessibility Score: 100/100
- **Screen Reader Support**: NVDA, VoiceOver (macOS / iOS), TalkBack (Android)

---

## 2. Keyboard Navigation Flows

The application supports complete mouse-free operation via standard keyboard controls:

| Key / Shortcut | Target Component | Action |
| :--- | :--- | :--- |
| `Tab` / `Shift + Tab` | All interactive elements | Sequential DOM focus order with visible cyber focus rings |
| `Cmd + K` / `Ctrl + K` | Global Command Palette | Opens quick command launcher from anywhere in viewport |
| `Esc` | Modals & Drawer | Dismisses modals, Command Palette, or Mobile Navigation |
| `↑` / `↓` Arrows | Interactive Terminal | Cycles through command history buffer |
| `Tab` | Interactive Terminal | Autocompletes typed shell commands |
| `Space` / `Enter` | Buttons & Toggles | Activates filters, modal triggers, and audio controls |

---

## 3. ARIA Roles and Attributes Matrix

| Component | ARIA Attribute | Semantic Purpose |
| :--- | :--- | :--- |
| `Navbar.tsx` | `aria-label="Main Navigation"` | Landmark identification for screen readers |
| `Navbar.tsx` | `aria-current="page"` | Identifies active visible section in navigation |
| `Navbar.tsx` | `aria-pressed={isMuted}` | Reflects audio synthesizer mute state |
| `Projects.tsx` | `aria-pressed={domain === d}` | Exposes active filter chip category |
| `OfflineBanner.tsx` | `role="alert"` / `aria-live="assertive"` | Informs assistive tech instantly of network drop |
| `CustomCursor.tsx` | `aria-hidden="true"` | Prevents synthetic pointer visualizer from cluttering tree |
| `LiveStatsHUD.tsx` | `aria-live="polite"` | Broadcasts background repository sync telemetry |
| `Footer.tsx` | `aria-label="Visit ..."` | Explicit destination context on icon-only links |

---

## 4. Visual Contrast & Reduced Motion

1. **Color Contrast**:
   - Primary text (`#f8fafc`) on dark background (`#030712`) achieves > 14:1 contrast ratio.
   - Accent cyan (`#00f3ff`) on dark surfaces satisfies > 4.5:1 ratio for UI controls.
2. **Motion Sensitivity**:
   - Respects `prefers-reduced-motion: reduce`.
   - Disables 3D camera sweeps, particle flocking, and high-frequency CSS animations when motion reduction is requested.
