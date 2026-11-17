# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.2.1] - 2026-11-17

### Added
- **Terminal Productivity Commands**: Added `echo` and `version` commands with build spec outputs, alongside animated prompt badges (`guest@cyberspace:~$`).
- **Device & Touch Detection**: Introduced `useDeviceType` hook with automatic custom cursor suppression on touch and mobile devices.
- **Project Interaction**: One-click copy project repository URL button with transient visual checkmark feedback.
- **Domain Visual Cues**: Added domain-specific icons (Shield, Cpu, Terminal) alongside project category tags.
- **Command Palette Tech Search**: Enabled filtering and finding projects by underlying tech stacks (`rust`, `python`, `docker`, etc.).
- **PWA Navigation Resilience**: Added SPA navigation fallback and asset caching strategy in `public/sw.js`.
- **Open Source Governance**: Added `CONTRIBUTING.md` and `SECURITY.md` policies for community development and responsible disclosure.
- **Enhanced SEO Schema**: Added OpenGraph image alt tags, `og:site_name`, `og:locale`, and `WebSite` Schema.org JSON-LD.

### Changed
- Added `aria-pressed` states to project domain filters and navbar audio mute toggle.
- Added active section indicator dot in desktop navigation bar.
- Added live system heartbeat pulse and release version badge in footer.

---

## [1.2.0] - 2026-11-16

### Added
- **Cyberspace Color System**: Introduced `electric-violet` (#8b5cf6) and `neural-indigo` (#6366f1) tokens to Tailwind configuration, alongside new 'neural' and 'emerald' variants in `<Badge />`.
- **Command Palette (`Cmd+K` / `Ctrl+K`)**: Global accessible spotlight search modal with quick-launch triggers for interactive terminal commands (`whoami`, `theme`), project navigation, audio toggles, and matrix mode.
- **Terminal Capabilities**: Added `'theme'`, `'contact'`, and `'stats'` shell commands with palette breakdowns, direct mailto triggers, and live telemetry outputs.
- **Accessibility & Focus Traps**: Comprehensive focus trapping across `CommandPalette` and `ProjectCaseStudyModal`, plus screen-reader live announcements for filter counts.
- **SoftwareSourceCode JSON-LD**: Added structured SEO schema for CodeShield and Kavach open-source repositories in `index.html`.
- **Offline PWA Architecture**: Added production Service Worker (`public/sw.js`) and registration pipeline in `src/main.tsx` for offline resilience.
- **Formatters & Type Contracts**: Added `formatNumber` and `formatDateCompact` utilities in `src/utils/formatters.ts`, alongside strict TypeScript types in `src/types/portfolio.ts`.
- **Documentation**: Added `ARCHITECTURE.md` (component lifecycle, WebGL pipeline) and `FAQ.md` (performance, tech choices).

### Changed
- Refactored `LiveStatsHUD` to utilize centralized numeric and date formatters.
- Strengthened client-side email format regex validation in `Contact.tsx`.
- Optimized Vite bundle splitting with dedicated `react-vendor`, `three-vendor`, and `ui-vendor` chunks.

---

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
