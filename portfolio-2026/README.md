# Xpen Studio & Field Notes

Xpen's public portfolio is a combination of **creative studio and founder's personal journey**, not a SaaS landing page or productivity dashboard.

The deployed site lives in `portfolio-2026/public/`, mirrored byte-for-byte by site source under `portfolio-2026/`. The unrelated React/Vite app at repository root is a different surface.

## What visitors can explore

| Route | Public purpose | Interactions |
| --- | --- | --- |
| `/` | Editorial studio introduction, three featured projects, selected journal note, current interests | Project deep links, page links, keyboard search |
| `/projects/` | Catalog of all 12 authentic projects and prototypes | Search, filters, full project inspection dialog, demo/source links |
| `/journal/` | Twelve authentic founder/engineering/learning notes | Topic filters, search, desktop two-pane paper reader, mobile native expandable notes, deep links |
| `/now/` | Dated overview of the current work and learning | Contextual links into projects and journal |
| `/about/` | Biography, background, contacts and the AED method | Direct contact and public social profiles |

**Design:** dark ink and moss; deliberate lime accent; a warm printed-paper counterpoint for editorial content. The `x.` mark stays recognizable. The homepage feels like an evolving studio rather than a dashboard. Site navigation is a horizontal header and an accessible mobile menu, not a side rail or mobile bottom dock.

**Technical:** `studio.css` is the final visual layer; `studio-nav.js` handles the responsive menu. `workspace.js` still powers global command search (`Ctrl+K`, `⌘K`), the project inspection dialog and desktop journal reader. Existing `projects-gallery.js` and `journal.js` retain authoritative records, filters, deep-link behavior and mobile native reading. The project and journal pages still load the old CSS layers under `workspace.css` so the content components remain functional.

The global command search is navigable by keyboard. Native `<dialog>` components handle dismissal and focus. The journal remains readable with JavaScript disabled; animation respects reduced-motion preferences.

## Content and honesty

All **12 project records** and **12 existing journal articles** were preserved, as were real source/demo links, current stage labels and the existing Metricool tracker. The Now page is a public, **manually written October 2026 snapshot**, not a live GitHub activity feed or automated promise. No invented traction metrics or unapproved personal information.

## Local verification

```bash
node portfolio-2026/verify-workspace.mjs
cd portfolio-2026
python3 -m http.server 8080 --directory public
# Visit http://localhost:8080
```

The GitHub workflow `.github/workflows/portfolio-workspace-check.yml` runs the source and asset smoke checks. It cannot replace visual or interaction QA.

**Before merging:** inspect at 320, 390, 768, 1024, and 1440px; verify menu keyboard focus, real project filters, inspector deep links, desktop journal reading, mobile journal expansion, and the five actual routes. Check source/public mirror integrity, analytics, reduced motion and Chrome/Safari behavior. In particular, verify the reading pane and the visual rhythm of the studio at different sizes, not just JS syntax.

## Cloudflare

The existing assets-only Cloudflare Worker uses `portfolio-2026/wrangler.jsonc` with `public/` as the output. GitHub merge is not proof that the Worker has deployed. Confirm the production deployment using actual Cloudflare evidence before claiming the site is live. Keep design experiments on review branches until approved.
