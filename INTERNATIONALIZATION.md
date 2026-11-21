# Internationalization (i18n) & Localization Strategy

This document outlines the architectural guidelines for internationalization, timezone standardization, and multilingual localization in the Madhu S Portfolio.

---

## 1. Timezone Standardization

All system logs, terminal telemetry, and footer clock metrics adhere to strict timezone designations:

- **Primary Development Node**: `Asia/Kolkata` (IST - UTC+05:30)
- **Universal Machine Time**: `UTC` (ISO 8601 timestamps e.g. `2026-11-21T07:19:48Z`)
- **Formatting Protocol**: Handled via `Intl.DateTimeFormat` with resilient fallbacks.

---

## 2. Multi-Locale Roadmap (v1.3+)

Target locales slated for staged deployment:

| Code | Language | Layout Direction | Target Region |
| :--- | :--- | :--- | :--- |
| `en` | English | LTR (Left-to-Right) | Global / Default |
| `kn` | Kannada | LTR | Karnataka, India |
| `ja` | Japanese | LTR | East Asia Tech Hubs |
| `de` | German | LTR | Central European Engineering |

---

## 3. String Token Extraction

All translatable copy in `About.tsx`, `Projects.tsx`, and `Contact.tsx` will migrate toward decoupled dictionary JSON modules under `src/locales/` during the v1.3.0 cycle.
