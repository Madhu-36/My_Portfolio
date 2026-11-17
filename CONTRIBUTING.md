# Contributing Guidelines

Thank you for your interest in contributing to **Madhu S's Portfolio & Engineering Projects**!

## 1. Development Workflow

1. **Fork the repository** on GitHub.
2. **Clone your fork locally**:
   ```bash
   git clone https://github.com/<your-username>/My_Portfolio.git
   cd My_Portfolio
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Create a topic branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```
5. **Start the local dev server**:
   ```bash
   npm run dev
   ```

---

## 2. Code Quality & Standards

- **TypeScript Strictness**: Code must compile without errors using `npm run typecheck`. No unused imports or variables (`noUnusedLocals`, `noUnusedParameters`).
- **Styling**: Use utility classes from Tailwind CSS. Respect the existing dark cyberpunk aesthetic (`#05060a` ink canvas, `#22d3ee` cyan, `#8b5cf6` neural violet, `#f59e0b` gold).
- **Accessibility**: Include appropriate `aria-*` attributes, focus trapping for modals, and keyboard accessibility.
- **Production Build**: Verify your changes with `npm run build` prior to opening a Pull Request.

---

## 3. Conventional Commits Standard

We adhere strictly to the [Conventional Commits specification](https://www.conventionalcommits.org/):

- `feat(...)`: A new user-facing feature.
- `ui(...)`: Visual enhancements, styling updates, or animation refinements.
- `a11y(...)`: Accessibility improvements.
- `refactor(...)`: Code changes that neither fix a bug nor add a feature.
- `perf(...)`: Changes that improve performance or bundle size.
- `docs(...)`: Documentation additions or revisions.
- `chore(...)`: Maintenance, dependency updates, or release version bumps.

---

## 4. Submitting a Pull Request

- Open a PR against the `main` branch.
- Provide a clear description of the problem solved or feature introduced.
- Ensure all CI workflow checks pass.
