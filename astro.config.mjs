// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// DEPLOY_BASE: sub-path hosting (e.g. GitHub Pages project site).
// Local dev/preview: leave unset -> served from '/'.
// GitHub Pages: the deploy workflow sets DEPLOY_BASE=/demo-website-medical-clinic,
// so the site is served from https://<user>.github.io/demo-website-medical-clinic/.
const rawBase = process.env.DEPLOY_BASE ?? '';
const deployBase = rawBase ? `/${rawBase}/`.replace(/\/{2,}/g, '/') : '/';
const siteOrigin = 'https://mustaque369.github.io';

// https://astro.build/config
export default defineConfig({
  site: `${siteOrigin}${deployBase === '/' ? '' : deployBase.replace(/\/$/, '')}`,
  base: deployBase,
  // Prefetch in-view links so internal navigation feels instant on mobile.
  prefetch: { prefetchAll: true, defaultStrategy: 'viewport' },
  vite: {
    // @ts-expect-error - Vite version mismatch between Astro and @tailwindcss/vite
    plugins: [...tailwindcss()],
  },
});
