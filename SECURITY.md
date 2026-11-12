# Security Policy

## Supported Versions

This is a personal portfolio project. Security updates will be applied to the current `main` branch only.

| Version | Supported |
|---------|-----------|
| `main`  | ✅        |
| Older branches | ❌  |

## Reporting a Vulnerability

If you discover a security vulnerability in this project, please **do not** open a public GitHub Issue.

Instead, report it responsibly by emailing:

📧 **madhu.s.3606@gmail.com**

Please include:
- A description of the vulnerability.
- Steps to reproduce the issue.
- Any potential impact.
- Suggested remediation (optional).

I will acknowledge your report within **72 hours** and aim to release a fix within **7 days** for high-severity issues.

## Scope

This portfolio uses:
- **React / Vite** – Front-end SPA, no server-side code.
- **GitHub Pages** – Static hosting; no user data is stored.
- **Supabase** (optional contact form backend) – Environment variables are never committed.

## Best Practices Applied

- No secrets or API keys committed to the repository.
- Environment variables gated via `import.meta.env`.
- Dependencies kept up to date with `npm audit`.
- Content Security Policy headers considered for future hardening.

Thank you for helping keep this project secure! 🔐
