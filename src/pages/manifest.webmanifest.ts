import type { APIRoute } from 'astro';
import { CLINIC } from '../constants/clinic';

/**
 * Web app manifest so the clinic site can be installed to a phone home screen
 * (Android / iOS) and launched full-screen. Generated as a route so the
 * GitHub Pages sub-path (BASE_URL) is always respected.
 */
export const GET: APIRoute = () => {
  const base = import.meta.env.BASE_URL;

  const manifest = {
    name: CLINIC.name,
    short_name: CLINIC.doctor.name,
    description: `Consult ${CLINIC.doctor.name}, ${CLINIC.doctor.qualifications}. Neurology services, EEG/EMG diagnostics and appointment booking.`,
    lang: 'en-IN',
    start_url: base,
    scope: base,
    display: 'standalone',
    orientation: 'portrait-primary',
    background_color: '#ffffff',
    theme_color: '#0c4a8a',
    categories: ['medical', 'health'],
    icons: [
      { src: `${base}favicon.svg`, sizes: 'any', type: 'image/svg+xml', purpose: 'any' },
      { src: `${base}favicon.svg`, sizes: 'any', type: 'image/svg+xml', purpose: 'maskable' },
    ],
  };

  return new Response(JSON.stringify(manifest, null, 2), {
    headers: {
      'Content-Type': 'application/manifest+json; charset=utf-8',
    },
  });
};
