# Cloudflare Workers Git deployment

This folder contains the static portfolio plus a Cloudflare Workers assets-only setup.

- `wrangler.jsonc` configures the worker `xpen-portfolio` to serve the `public` directory.
- `public/` contains the website files copied from the project root.
- `public/index.html` is the site entry point.

In the existing `xpen-portfolio` Cloudflare Worker:

1. **Settings → Build → Branch control**: set production branch to `portfolio-refresh-2026`.
2. **Settings → Build → Build configuration**:
   - Root directory: `portfolio-2026` (without preceding slash in the dashboard).
   - Build command: `exit 0` (or leave blank).
   - Deploy command: `npx wrangler deploy`.
3. Save and retry deployment.

Cloudflare may display a different path prefix; the intended root is the `portfolio-2026` directory relative to Git repository root.

No secrets, backend or framework are required.

For Cloudflare Pages instead, deploy branch `portfolio-refresh-2026` with root `portfolio-2026`, output `public`, framework None, and no build command.
