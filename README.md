# Log Ghost — marketing site (Next.js)

This app renders the landing page from **`../Log-Ghost-extension/data/logghost.json`**. Edit that file to change copy, stats, links, and theme tokens.

## Commands

```bash
cd Log-Ghost-Website
npm install
npm run dev    # http://localhost:3000
npm run build
npm start      # production server
```

## Deploy

- **Vercel / Netlify:** set the project root to `Log-Ghost-Website` and use the default Next.js build.
- **Static export (optional):** add `output: "export"` to `next.config.ts` if you need a fully static `out/` for hosting without a Node server.

## Logo

- **`public/log-ghost-purple.svg`** — Mark used in the UI (purple squircle, white ghost, purple→cyan trail). Edit the SVG to tweak.
- **`public/log-ghost-logo.png`** — Copied from the extension `docs/assets` for Open Graph / fallbacks.

## License

MIT — see [../LICENSE](../LICENSE) in the repository root (same terms as the extension).

## Package name

The npm package is `log-ghost-website` (lowercase) because of npm naming rules; the folder can stay `Log-Ghost-Website`.
