# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.0] - 2026-11-14

### Added
- **Interactive Terminal Tools**: Command history buffer with Up/Down arrow key recall, Tab autocompletion for registered shell commands, two-column formatted help grid, cyber ASCII banner (`banner`), and one-click copy logs button with clipboard feedback.
- **Project Search & Filter**: Real-time project search input debounced with `useDebounce`, dynamic counts inside domain filter pills (`All`, `Cybersecurity`, `AI`, `Systems`), and responsive empty search state.
- **Keyboard Shortcuts Modal**: Universal modal dialog triggered with `?` key or floating shortcuts pill, listing all single-key shortcuts (`T`, `W`, `C`, `B`, `ESC`, `HACK`).
- **Single-Key Navigation**: Rapid section jumping (`T` for Terminal, `W` for Work, `C` for Contact, `B` for Back-to-Top) with input-focus isolation.
- **Interactive System HUD**: Collapsible/expandable LiveStatsHUD with toggle chevron.
- **Audio Controls**: Persistent mute/unmute sound effects toggle in Navbar backed by `localStorage`.
- **Reusable UI Components**: Generic `<Badge>` component with accent, ghost, gold, and outline variants; `<OfflineBanner>` with aria-live network status alerts; and `cn(...)` utility merging clsx and tailwind-merge.
- **Custom React Hooks**: `useActiveSection`, `useScrollProgress`, `useWindowSize`, `usePrefersReducedMotion`, `useLocalStorage`, `useDebounce`, `useHover`, `useOnlineStatus`, `useDocumentTitle`, and `useKeyPress`.
- **SEO & Social Media Sharing**: OpenGraph (`og:image`, `og:title`, `og:description`, `og:url`), Twitter Summary Large Image card, XML sitemap, and Google crawler `robots.txt`.

### Changed
- Refactored projects, career experience, and technical skills into dedicated typed modules under `src/data/`.
- Updated Drei `<MeshTransmissionMaterial>` distortion properties and removed invalid `fontWeight` prop from `<Text>` components to guarantee zero TypeScript errors.
- Enhanced GitHub Actions CI workflow to run strict `npm run typecheck` prior to building for GitHub Pages.

### Accessibility (a11y)
- Added `usePrefersReducedMotion` check in `CustomCursor` to disable canvas tracking for motion-sensitive users.
- Added `aria-label`, `aria-expanded`, and `role="dialog"` attributes to all interactive modals and buttons.
- Provided skip-to-content accessibility link at the top of the DOM.

---

## [1.0.0] - 2026-11-12

### Initial Release
- Personal developer portfolio showcasing AI, cybersecurity, and game development projects.
- Hardware-accelerated Three.js 3D background with clamped DPR and fallback error boundary.
- Mobile-responsive navigation, dynamic contact form, and Maxhu AI digital assistant.
