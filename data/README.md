# Site copy (`logghost.json`)

The Next app imports **`data/logghost.json`** in this folder. This must exist in the repo (e.g. **Vercel** only clones `Log-Ghost-Site` with no `Log-Ghost-extension` sibling).

If you work in the **full monorepo** and also keep `Log-Ghost-extension/data/logghost.json` in sync, copy when you change copy:

```bash
# from monorepo root, with both folders present
cp Log-Ghost-extension/data/logghost.json Log-Ghost-Website/data/logghost.json
```

**Vercel:** set **Project → Settings → Environment variables** `NEXT_PUBLIC_SITE_URL` to your live URL (e.g. `https://log-ghost.yourdomain.com`) so Open Graph and `metadataBase` resolve correctly. If unset, `VERCEL_URL` is used on deploy previews.
