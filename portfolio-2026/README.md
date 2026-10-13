# XPEN — Personal portfolio (2026 refresh)

Accessible, responsive, animated portfolio for **Ayomide David Oladeji (Xpen)**.

This version lives in `portfolio-2026/` to preserve the existing React application at the repository root.

## Features
- Sticky blurred navigation and scroll progress
- Search by project name, description, role and technologies (shortcut: `/`)
- Project category filters and optional expansion from 6 featured to 12 projects
- Reduced-motion-aware transitions, focus states and accessible mobile navigation
- No framework or build dependencies
- Cloudflare Pages-ready headers and manifest

## Local development
```bash
cd portfolio-2026
python3 -m http.server 8080
# http://localhost:8080
```

## Cloudflare Pages deployment

In Cloudflare dashboard → Workers & Pages → Create application → Pages → Import Git repository → `realxpen/MY-PORTFOLIO`.

| Setting | Value |
| --- | --- |
| Production branch | `portfolio-refresh-2026` (or `main` after merging the PR) |
| Framework preset | None |
| Root directory | `portfolio-2026` |
| Build command | `exit 0` (or blank) |
| Build output directory | `.` |

After the first deployment, changes pushed to the production branch automatically trigger rebuilds. A successful deploy will create a unique `*.pages.dev` address.

## Editing
- `index.html`: bio, skills, experience, social accounts and SEO
- `script.js`: local array of projects, demo URLs and interactive filtering
- `styles.css`: layout, theme and motion
- `og-cover.svg`: social card illustration
- `_headers`: Cloudflare Pages security and caching rules

Conceptual illustrations in the gallery are not presented as actual product screenshots. Verify any external demo links before public launch. No analytics, authentication, payment processing or backend is included in this portfolio.
