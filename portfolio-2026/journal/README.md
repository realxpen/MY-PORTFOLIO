# Xpen's Founder's Journal — editing guide

The public journal is at `/journal/`. The featured section on the homepage links to selected entries.

## What belongs here
- **Founder's journal:** product hypotheses, discoveries from talking to users, lessons from Hustle and SWIFNA.
- **Engineering notes:** hard design decisions, tests, security boundaries, integrations and tradeoffs.
- **Learning log:** skills being studied, experiments and honest evidence.
- **Personal growth:** communication, creative thinking, consistency and lessons beyond coding.

## A useful weekly template
- **Week of:** YYYY-MM-DD
- **Context:** What was I working on?
- **What changed:** One concrete observation or decision.
- **What I learned:** What would I do differently?
- **Unanswered question:** What still needs evidence?
- **Next experiment:** What will I try?

Don't invent results or present prototypes as production systems. Keep private financial, family, health, relationship, account and identity details off the public website unless deliberately reviewed and approved.

## Updating entries
1. Update `portfolio-2026/journal/index.html` and the mirrored file under `portfolio-2026/public/journal/index.html`.
2. Add a semantic `<details class="journal-entry" data-topic="founder|engineering|learning|growth" id="unique-slug">...</details>` in the list. Keep the `data-search` attribute so search can find the full entry.
3. For a new featured note, update the `thought-grid` in both homepage HTML copies.
4. Commit to the GitHub production branch. Cloudflare should deploy the change automatically if repository deployment is configured.

The initial seven pieces are editorial summaries of known build work and learning interests as of October 2026, **not verbatim historical diary entries**. Rewrite in your natural voice over time.
