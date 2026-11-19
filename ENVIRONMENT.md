# Development Environment & Prerequisites

This document outlines the required runtime environments, system packages, and toolchains for building and deploying the portfolio.

---

## 1. Supported Runtimes

| Component | Recommended Version | Minimum Version | Notes |
| :--- | :--- | :--- | :--- |
| **Node.js** | `v20.x LTS` | `v18.18.0` | Required for modern Vite and Three.js bundling |
| **npm** | `v10.x` | `v9.x` | Lockfile v3 format (`package-lock.json`) |
| **TypeScript** | `v5.5.x` | `v5.0.0` | Strict type checking enabled |
| **Vite** | `v5.4.x` | `v5.0.0` | Fast HMR dev server |

---

## 2. Operating System Compatibility

- **Windows**: Windows 10/11 with PowerShell 7+ or Git Bash.
- **macOS**: macOS Monterey (12.0) through macOS Sequoia (15.x).
- **Linux**: Ubuntu 22.04 LTS, Debian 12, Arch Linux.

---

## 3. Environment Variables

This portfolio operates primarily as a static edge application and does not require private backend API secrets for standard compilation:
- `BASE_URL`: Defaults to `/My_Portfolio/` for GitHub Pages.
- `PROD`: Vite built-in flag indicating production build mode.
