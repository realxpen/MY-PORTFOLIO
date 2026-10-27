# XPEN UI/UX Skill Playbook

**Scope:** the public Xpen Portfolio in `portfolio-2026/`, with matching files under `portfolio-2026/public/`. This is a curated, original review checklist inspired by upstream skills, not a copy of their source files.

## Goal

Make the site feel like the work of one deliberate product-minded builder, not an AI-generated landing-page template. Preserve its established near-black canvas, lime-green identity, **XPEN/x.** mark, DM Sans + Space Grotesk typography, authentic project content, journal and contact routes.

**Visitor journey:** understand who Xpen is → inspect genuine project work and release status → read the thinking behind it → contact or follow.

## Eight skill sources and their responsibilities

| Skill | Verified upstream source | Responsibility in this portfolio |
| --- | --- | --- |
| UI/UX Pro Max | [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | Contrast, viewport sizes, keyboard and touch usability, typography, search/filter behavior. |
| Frontend Design | [anthropics/skills/frontend-design](https://github.com/anthropics/skills/tree/main/skills/frontend-design) | Purposeful typography and layout; project-specific content instead of generic hero patterns. |
| Redesign Existing Projects | [Leonxlnx taste-skill collection](https://github.com/Leonxlnx/taste-skill) and [catalogue listing](https://skillselion.com/skills/leonxlnx/taste-skill/redesign-existing-projects) | Improve existing markup and CSS incrementally, not a ground-up rebuild. The catalogue's particular subskill file was not independently retrieved; the linked upstream collection was reviewed. |
| Minimalist UI | [Leonxlnx taste-skill collection](https://github.com/Leonxlnx/taste-skill) and [catalogue listing](https://skillselion.com/skills/leonxlnx/taste-skill/minimalist-ui) | Reduce pointless decorations; retain necessary interface information and visible actions. Catalogue-specific subskill file was not independently retrieved. |
| Make Interfaces Feel Better | [jakubkrehel/make-interfaces-feel-better](https://github.com/jakubkrehel/make-interfaces-feel-better) | Accessible touch areas, optical spacing, type wrapping, restrained state feedback, explicit CSS transitions. |
| Logo Generator | [op7418/logo-generator-skill](https://github.com/op7418/logo-generator-skill) | Audit the existing x. brand's legibility at favicon/header sizes; explore variants *separately*. Do not automatically replace the approved logo. |
| Kill AI Slop | [yetone/kill-ai-slop](https://github.com/yetone/kill-ai-slop) | Identify redundant glows, identical graphic treatments, tiny labels, and template phrasing. Keep deliberate brand choices. |
| Improve Animations | [EmilKowalski/skills/improve-animations](https://github.com/EmilKowalski/skills/tree/main/skills/improve-animations) | **Read-only** motion audit and proposed fixes; its skill is not an implementation instruction. |

### Installation note

A GitHub file edit cannot run `npx` inside your laptop or install these external agent packages. This repository references the upstream skills; it does **not** embed or falsely claim installation of all eight. Review each third-party package's code, permissions and license before installing. Install supported agents locally according to their upstream README, for example:

```bash
npx skills add nextlevelbuilder/ui-ux-pro-max-skill
npx skills add anthropics/skills --skill frontend-design
npx skills add jakubkrehel/make-interfaces-feel-better
npx skills add op7418/logo-generator-skill
npx skills add yetone/kill-ai-slop
npx skills add emilkowalski/skills --skill improve-animations
```

`redesign-existing-projects` and `minimalist-ui` have catalogue entries; use their actual source-specific install instructions after confirming their files in the installed `taste-skill` repository. Do not substitute an unverified package name.

## Decisions applied in design/skill-driven-ux-polish-2026-10-27

- **Touch targets:** increase category-filter controls and menu toggle to at least 44px. Search inputs are 16px for mobile zoom behavior.
- **Editorial project imagery:** move away from the identical green orb / floating monogram template to project-name-specific typographic graphics. The project name, status, real description, source links and demo links stay present.
- **Readable information:** improve small descriptions, journal intro text, tags, and metadata without changing source claims or project status.
- **Mobile navigation:** keep the existing navigation behavior, add focus containment while menu is expanded, and restore focus on Escape.
- **Motion:** remove unnecessary hover card jumps, use only explicit transition properties for the polish layer, and honor reduced-motion.
- **Brand:** preserve the current x. mark and brand colors. Do not automatically select a new logo.
- **Privacy:** preserve Metricool integration and current content; do not add analytics trackers, third-party assets or personal information.

## Verified code-review findings and recommended checks

1. `portfolio-2026/xpen-redesign.css`: mobile filter controls were typically 34–35px high. Target 44px. **Addressed by `ui-ux-polish.css`.**
2. `portfolio-2026/xpen-redesign.css`: many project graphics used the same circular glow with single-character mark. **Addressed in the new editorial treatment.**
3. `portfolio-2026/script.js` and `xpen-nav.js`: Escape closed mobile navigation, but focus was not guaranteed to return and Tab could leave the expanded menu. **Addressed with `nav-focus.js`.**
4. `portfolio-2026/styles.css`: motion includes `rotateSlow` (35s/55s), `marquee` (32s), `scanMove` (7s), `weaveRotate` (24s), reveal transitions and several `transition:all` declarations. **Open animation review.** Motion is not necessarily a defect; inspect actual states and respect the existing reduced-motion support.
5. `portfolio-2026/styles.css` and `xpen-redesign.css`: multiple layers create an unusually long cascade. **Open refactor.** Once visual QA passes, consolidate repeated selectors with a regression check; do not blindly replace the live styling files.

## Read-only animation plan (inspired by improve-animations)

**Priority A — Interaction frequency:** Test mobile menu open/close and search/filter changes first. Use 160–220ms interruptible ease-out transitions, only for opacity, transform, border-color and color; avoid animations of layout dimensions. Check quickly tapping filters twice and pressing Escape mid-transition.

**Priority B — Repeated motion:** Confirm the marquee and ambient hero rotation convey anything to visitors, particularly on battery-sensitive mobile devices. If not, replace with static visual presence or pause when out of view. Keep `prefers-reduced-motion` opt-out.

**Priority C — Reveal behavior:** Ensure text is immediately readable with JavaScript disabled or motion preferences set to reduced. If animated, avoid hiding informative content until a scroll event; use short, one-time reveals sparingly.

**Priority D — Browser validation:** Record desktop (1440/1024), tablet (768), mobile (390/320) and keyboard-only checks. Measure browser console errors, clipped text, WCAG contrast and animations in actual rendered pages. Source inspection alone cannot prove these checks passed.

## Acceptance checklist

- [ ] At 320px, 390px, 768px, 1024px and 1440px, no horizontal overflow or clipped key content.
- [ ] All visible links and interactive controls are keyboard accessible with an obvious focus ring.
- [ ] Mobile navigation opens, keeps Tab/Shift+Tab inside, closes with Escape, and restores focus.
- [ ] Project and journal filters/search work, including empty states and deep links.
- [ ] Content (12 portfolio projects and 12 current journal entries) is preserved unless a separate approved update changes it.
- [ ] Existing links, Metricool tracker, source/public asset mirrors remain intact.
- [ ] No substantial unreviewed animation; reduced-motion visitors receive static content.
- [ ] Check deployment before calling the production website updated.

## How to change this site

- Update the **source file and its exact `public/` mirror** together.
- `portfolio-2026/styles.css` → `xpen-redesign.css` → `ui-ux-polish.css` is the current CSS cascade order.
- `portfolio-2026/script.js` powers the homepage, `journal.js` the journal, and `projects-gallery.js` the projects page.
- `xpen-nav.js` powers subpage menus; `nav-focus.js` adds shared keyboard accessibility.
- Treat actual content, release labels, GitHub/demo URLs, and approved founder-journal writing as authoritative.
- Open a PR to `main`, test the review branch and only then merge or publish. Never call a live Cloudflare deployment verified based on a GitHub commit alone.
