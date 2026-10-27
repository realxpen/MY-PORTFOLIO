# XPEN — Personal Workspace (October 2026 concept)

This is the static, user-facing portfolio in `portfolio-2026/`, deployed as an assets-only Cloudflare Worker through its **`public/`** directory. The repository root also contains a separate React/Vite application; **do not deploy that application as this portfolio**.

## Why this iteration exists

The previous version was a single marketing-like landing page with anchor sections. The new layout is a **personal workspace**: real, separate places for the work, the thoughts, current learning, and biography. It should feel like an interface to explore, not a sales funnel.

## Real routes

| Route | Purpose | Interactions |
| --- | --- | --- |
| `/` | Overview / curated workbench | Active builds, latest journal entries, learning directions, navigation |
| `/projects/` | Work explorer | Search, category filters, individual project inspector with source/demo links |
| `/journal/` | Founder's Journal | Topic filters, full-text search, desktop two-pane reader, mobile native expandable notes, deep links |
| `/now/` | Current focus | Dated snapshot of work, tests and learning; not real-time telemetry |
| `/about/` | Personal profile | Background, tools, path, contact links |

Other site-wide features: persistent desktop left navigation, mobile bottom navigation, global command search (`Ctrl+K` / `⌘K`, or `/` outside text inputs), native dialogs, keyboard focus and reduced-motion preferences.

## Real content

The 12 project entries are still authored in `projects-gallery.js`. The 12 original journal entries and their IDs remain in `journal/index.html`; `journal.js` still manages filters and mobile deep links. The new `workspace.js` adds global search, the project inspector and desktop reading pane. No invented metrics, fake integrations, financial execution, or real-time updates.

The October 2026 **Now** page is a manually edited public snapshot. Do not describe it as a live activity feed. Project status labels must remain accurate.

## Styles and architecture

- `workspace.css` is the new shared visual system for Overview, Work, Journal, Now and About.
- Project and journal pages additionally load the original `styles.css`, `xpen-redesign.css`, and `ui-ux-polish.css` for legacy cards and note content, followed by `workspace.css` as the final override.
- `workspace.js` handles cross-page search and enhancement. It does not fetch user conversations, private data, or API tokens.
- Metricool's existing portfolio tracker remains included once per route.
- Each public asset/page has an identical source file under `portfolio-2026/` and a deployable mirror under `portfolio-2026/public/`.

## Develop and verify

```bash
cd portfolio-2026
node verify-workspace.mjs
python3 -m http.server 8080 --directory public
# Open http://localhost:8080/
```

Review using widths 320, 390, 768, 1024 and 1440 px and keyboard-only navigation. Test global search, project filters, opening an inspector, journal filters/reader, mobile native journal details, direct deep links, manifest resolution, focus rings and reduced motion. Automated checks run on pull requests via `.github/workflows/portfolio-workspace-check.yml`.

## Deployment

The portfolio is currently developed against GitHub `main`, with `portfolio-2026/wrangler.jsonc` serving the `public` folder. A GitHub merge does **not** prove that Cloudflare has deployed the latest version. Check the actual Cloudflare Worker deployment and public URL before claiming the site is updated.

Do not merge the personal-workspace concept until review and visual QA are complete. Do not publish unapproved personal details or substitute project prototypes for production launch claims.
