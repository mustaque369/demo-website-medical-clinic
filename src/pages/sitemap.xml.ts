import type { APIRoute } from 'astro';

const pages = [
  { url: '', changefreq: 'weekly', priority: '1.0' },
  { url: 'about', changefreq: 'monthly', priority: '0.8' },
  { url: 'services', changefreq: 'weekly', priority: '0.9' },
  { url: 'contact', changefreq: 'monthly', priority: '0.8' },
];

export const GET: APIRoute = ({ site }) => {
  const base = (site ? site.toString() : 'https://drrajibdasneurology.com').replace(/\/$/, '');
  const now = new Date().toISOString().split('T')[0];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (p) => `  <url>
    <loc>${base}/${p.url}${p.url ? '/' : ''}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
