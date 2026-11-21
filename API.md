# External Integration & API Reference

This specification documents third-party REST integrations and data synchronization pipelines active within the portfolio.

---

## 1. GitHub REST API Ingestion

The portfolio queries the official GitHub v3 API client-side to keep public repositories, follower counts, and commit telemetry fresh:

- **Endpoint**: `GET https://api.github.com/users/Madhu-36`
- **Cache Strategy**: Stale-While-Revalidate via `localStorage['madhu-gh-stats']`
- **Rate Limit Defense**: If HTTP 403 / 429 is encountered, cached metrics persist gracefully with no client-facing UI interruption.

### Schema Structure
```json
{
  "public_repos": 14,
  "followers": 8,
  "updated_at": "2026-11-21T07:19:48Z"
}
```

---

## 2. PWA Asset Manifest

- **Route**: `/manifest.json`
- **Purpose**: Defines progressive web app metadata, theme tokens (`#00f3ff`, `#030712`), high-res icons, and home-screen shortcuts for mobile users.

---

## 3. SEO Sitemap & Robots Directives

- **Robots Route**: `/robots.txt`
- **XML Sitemap**: `/sitemap.xml`
- **Verification Engine**: Validated against Google Search Console & Schema.org validator protocols.
