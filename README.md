# Log Ghost — marketing site (Next.js)

Landing page data lives in **[`data/logghost.json`](./data/logghost.json)** (imported at build time). This file must be in the **same repo** you deploy to Vercel (the site no longer depends on a sibling `Log-Ghost-extension` folder).

## Commands

```bash
cd Log-Ghost-Website
npm install
npm run dev    # http://localhost:3000
npm run build
npm start      # production server
```

## Deploy (Vercel)

- **Root directory:** the folder that contains this `package.json` (often the repo root if the site is the whole repo).
- **Build:** `npm run build` (default) · **Output:** Next.js.
- **Env:** set `NEXT_PUBLIC_SITE_URL` to your production URL (e.g. `https://www.yoursite.com`) for correct `metadataBase` and Open Graph image URLs. Optional: Vercel sets `VERCEL_URL` for preview deployments.

## Logo

- **`public/log-ghost-purple.svg`** — Mark used in the UI (purple squircle, white ghost, purple→cyan trail). Edit the SVG to tweak.
- **`public/log-ghost-logo.png`** — For Open Graph / social previews.

## License

MIT — if this repo is only the site, add a `LICENSE` file or point to your main project’s license.

## Package name

The npm package is `log-ghost-website` (lowercase) because of npm naming rules; the folder can stay `Log-Ghost-Website`.
