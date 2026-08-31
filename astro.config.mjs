import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import node from '@astrojs/node';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { execFileSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { DE_TO_EN, EN_TO_DE, normalizePath } from './src/i18n/routes.ts';

const projectRoot = path.dirname(fileURLToPath(import.meta.url));
const siteUrl = 'https://planexus.de';
const SITEMAP_EXCLUDE = new Set(['/about', '/services', '/contact', '/products', '/404', '/en/404']);

function gitLastmod(pathname) {
  const rel = pathname === '/' ? 'index' : pathname.replace(/^\/+|\/+$/g, '');
  const candidates = [`src/pages/${rel}.astro`, `src/pages/${rel}/index.astro`];
  const file = candidates.find((f) => existsSync(path.join(projectRoot, f)));
  if (!file) return undefined;
  try {
    const date = execFileSync('git', ['log', '-1', '--format=%cI', '--', file], {
      cwd: projectRoot,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim();
    return date || undefined;
  } catch {
    return undefined;
  }
}

function sitemapLinks(pathname) {
  const pathNorm = normalizePath(pathname);
  let dePath;
  let enPath;
  if (pathNorm === '/en' || pathNorm.startsWith('/en/')) {
    enPath = pathNorm === '' ? '/en' : pathNorm;
    dePath = EN_TO_DE[enPath];
  } else {
    dePath = pathNorm === '' ? '/' : pathNorm;
    enPath = DE_TO_EN[pathNorm];
  }
  if (!enPath || dePath === undefined) return undefined;
  const deHref = dePath === '/' || dePath === '' ? siteUrl : `${siteUrl}${dePath}`;
  return [
    { url: deHref, lang: 'de-DE' },
    { url: `${siteUrl}${enPath}`, lang: 'en' },
    { url: deHref, lang: 'x-default' },
  ];
}

export default defineConfig({
  site: 'https://planexus.de',
  trailingSlash: 'never',
  i18n: {
    defaultLocale: 'de',
    locales: ['de', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  redirects: {
    '/about': '/ueber-uns',
    '/services': '/leistungen',
    '/contact': '/kontakt',
    '/products': '/laborcontainer',
  },
  adapter: node({
    mode: 'standalone',
  }),
  integrations: [
    react(),
    sitemap({
      filter: (page) => {
        if (/\/(admin|api)(\/|$)/.test(page)) return false;
        const pathname = new URL(page).pathname.replace(/\/+$/, '') || '/';
        return !SITEMAP_EXCLUDE.has(pathname);
      },
      serialize(item) {
        const pathname = new URL(item.url).pathname;
        const lastmod = gitLastmod(pathname);
        if (lastmod) item.lastmod = lastmod;
        const links = sitemapLinks(pathname);
        if (links) item.links = links;
        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@assets': '/attached_assets',
      },
      dedupe: ['react', 'react-dom'],
    },
    optimizeDeps: {
      include: ['react', 'react-dom', 'react/jsx-runtime', 'react/jsx-dev-runtime'],
    },
    server: {
      allowedHosts: ['.replit.dev', '.janeway.replit.dev', '.repl.co'],
      watch: {
        ignored: [
          '**/.local/**',
          '**/node_modules/**',
          '**/.git/**',
          '**/.cache/**',
          '**/.astro/**',
          '**/dist/**',
        ],
      },
    },
  },
  server: {
    port: 5000,
    host: '0.0.0.0',
  },
});
