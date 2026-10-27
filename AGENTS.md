# XPEN portfolio coding-agent instructions

The production-facing portfolio is maintained in `portfolio-2026/`, with exact duplicate deployable assets in `portfolio-2026/public/`. Preserve mirrored files when editing. The root React/Vite app is a separate project surface; do not assume it is the same portfolio build.

## Design guidance
Read [docs/ui-ux-skill-playbook.md](docs/ui-ux-skill-playbook.md) before any website UI/UX work. This playbook maps eight relevant external design skills to the site's existing design system. The skills are external references and are **not automatically installed** by this file.

Keep established XPEN identity (dark neutrals, lime accent, "x." mark, DM Sans/Space Grotesk), genuine project descriptions, launch-status accuracy, Founder's Journal, Metricool code and social/contact links. Make changes as small, testable iterations. Avoid repetitive glows, arbitrary badges, tiny touch controls, invisible focus, and ornamental motion.

## Quality gates
- Verify 320/390/768/1024/1440 responsive layouts, focus + keyboard navigation, search, filters, journal deep links, and reduced-motion.
- Keep `portfolio-2026/` and `portfolio-2026/public/` content byte-identical for paired pages/assets.
- Do not publish to `main` without authorization for production changes; use review PRs.
- A GitHub commit is not proof of Cloudflare deployment. Verify actual live output when accessible.

## Studio + founder's journey (current review direction)

The portfolio is **not** a SaaS homepage or a productivity OS. It is a distinctive creative studio combined with an honest founder journal, retaining genuinely useful interactive elements. Its real routes are `/`, `/projects/`, `/journal/`, `/now/` and `/about/`.

- `studio.css` is the current final visual layer (dark ink, moss, lime accent, warm-paper editorial work).
- `studio-nav.js` powers the horizontal website navigation and accessible mobile menu. Never reintroduce the old app-style desktop sidebar or bottom tab dock.
- `workspace.js` is **interaction logic**, not the design direction. Keep its command search, project inspector and desktop journal reader.
- `projects-gallery.js` and `journal.js` remain authoritative for the 12 existing projects and 12 authored journal entries. Preserve their statuses, URLs, filters and deep links.
- Work/Journal CSS order: `styles.css` → `xpen-redesign.css` → `ui-ux-polish.css` → `workspace.css` → `studio.css`.
- Overview, Now and About load `workspace.css` → `studio.css`. All routes load `studio-nav.js` + `workspace.js`.
- The About page preserves the founder's AED methodology and contact links. The Now page is a dated editorial snapshot, **not** an automatically live activity monitor.
- Preserve `portfolio-2026/` and `portfolio-2026/public/` mirrors. Use the root documentation in `portfolio-2026/README.md`.
- Run `node portfolio-2026/verify-workspace.mjs`. Test real interaction, keyboard and visual behavior at 320/390/768/1024/1440px before merging.
- Do not claim Cloudflare production publication without independent production deployment evidence.
