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
