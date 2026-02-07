import type { APIRoute } from 'astro';

export const prerender = true;

const pages = [
  { url: '/', priority: '1.0', changefreq: 'weekly' },
  { url: '/ueber-uns/', priority: '0.8', changefreq: 'monthly' },
  { url: '/team/', priority: '0.7', changefreq: 'monthly' },
  { url: '/projekte/', priority: '0.8', changefreq: 'monthly' },
  { url: '/partner/', priority: '0.6', changefreq: 'monthly' },
  { url: '/kontakt/', priority: '0.9', changefreq: 'monthly' },
  { url: '/leistungen/', priority: '0.9', changefreq: 'monthly' },
  { url: '/leistungen/planung/', priority: '0.8', changefreq: 'monthly' },
  { url: '/leistungen/modulbau/', priority: '0.8', changefreq: 'monthly' },
  { url: '/leistungen/logistik/', priority: '0.8', changefreq: 'monthly' },
  { url: '/leistungen/ausstattung/', priority: '0.8', changefreq: 'monthly' },
  { url: '/leistungen/beratung/', priority: '0.8', changefreq: 'monthly' },
  { url: '/leistungen/smart-lab/', priority: '0.8', changefreq: 'monthly' },
  { url: '/laborcontainer-berlin/', priority: '0.7', changefreq: 'monthly' },
  { url: '/laborcontainer-muenchen/', priority: '0.7', changefreq: 'monthly' },
  { url: '/laborcontainer-stuttgart/', priority: '0.7', changefreq: 'monthly' },
  { url: '/magazin/', priority: '0.7', changefreq: 'weekly' },
  { url: '/magazin/bsl-2-bsl-3-container-labor/', priority: '0.6', changefreq: 'monthly' },
  { url: '/magazin/innovation-modulbau-zukunft-mobiles-labor/', priority: '0.6', changefreq: 'monthly' },
  { url: '/magazin/nachhaltigkeit-laborbau-energieeffizienz/', priority: '0.6', changefreq: 'monthly' },
  { url: '/impressum/', priority: '0.3', changefreq: 'yearly' },
  { url: '/datenschutz/', priority: '0.3', changefreq: 'yearly' },
];

const site = 'https://www.planexus.de';
const today = new Date().toISOString().split('T')[0];

export const GET: APIRoute = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${site}${page.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
