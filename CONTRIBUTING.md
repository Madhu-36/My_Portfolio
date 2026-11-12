# Contributing to Madhu S – Portfolio

Thank you for your interest in contributing! This document explains how to set up the project locally and submit changes.

## Prerequisites

- **Node.js** ≥ 18 (LTS recommended)
- **npm** ≥ 9

## Local Development

```bash
# 1. Clone the repo
git clone https://github.com/Madhu-36/My_Portfolio.git
cd My_Portfolio

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

The app will be available at `http://localhost:5173`.

## Project Structure

```
src/
├── components/   # Reusable UI components
├── hooks/        # Custom React hooks
├── types/        # TypeScript type definitions
├── utils/        # Helper utilities
├── App.tsx       # Root component
└── index.css     # Global styles & design tokens
```

## Code Style

- **TypeScript** – All new files must use `.ts` / `.tsx`.
- **CSS** – Use Tailwind utility classes; avoid inline styles unless animated.
- **Commits** – Follow [Conventional Commits](https://www.conventionalcommits.org/):
  - `feat:`, `fix:`, `docs:`, `style:`, `refactor:`, `perf:`, `test:`, `ci:`, `chore:`
- **Components** – Keep them small and single-purpose.
- **Hooks** – Start with `use`, export named functions, clean up all effects.

## Submitting a Pull Request

1. Fork the repository.
2. Create a feature branch: `git checkout -b feat/my-awesome-feature`
3. Commit your changes with a descriptive message.
4. Open a Pull Request against `main` and fill in the PR template.

## Reporting Issues

Please open a GitHub Issue with:
- A clear title and description.
- Steps to reproduce (if it's a bug).
- Browser / OS version if relevant.

---

Built with ❤️ by [Madhu S](https://github.com/Madhu-36)
