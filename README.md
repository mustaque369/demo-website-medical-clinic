# Dr. Rajib Das Neurological Clinic — Demo Website

A fast, mobile-first Astro + Tailwind CSS v4 demo site for a neurology clinic:
Home, Doctor Profile, Services & Diagnostics, Contact & Booking, branded 404,
sitemap, and an installable web-app manifest.

## Commands

| Command | Action |
|---|---|
| `npm install` | Install dependencies |
| `npm run dev` | Local dev server at `localhost:4321` |
| `npm run build` | Production build into `./dist/` |
| `npm run preview` | Preview the production build locally |

## Hosting / sub-path deploys

The site is served from `/` locally and from `/demo-website-medical-clinic/`
on GitHub Pages. `astro.config.mjs` reads the `DEPLOY_BASE` env var (see
`.github/workflows/deploy.yml`); every internal link, asset, the manifest and
the sitemap derive from it automatically — do not hardcode root-absolute
paths in pages.

## Conventions

- Clinic data (phone, WhatsApp, address, hours, map links) lives in
  `src/constants/clinic.ts` — pages and components must import from there.
- Design tokens live in `src/styles/global.css` (`@theme` + `@layer utilities`);
  the full spec is documented in `DESIGN.md`.
- Mobile-first: the bottom action bar (<768px) plus the hamburger panel
  (below `xl`) cover small screens; sticky-header anchor offsets, iOS
  safe-area padding and a 16px mobile form font size are baked into the CSS.

## Analytics (optional)

Set `PUBLIC_PLAUSIBLE_DOMAIN` or `PUBLIC_GA4_ID` as env vars to enable
analytics. GA4 only loads after consent when `enableConsentBanner` is on.
