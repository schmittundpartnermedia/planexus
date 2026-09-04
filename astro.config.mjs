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

function sitemapHomeSlash() {
  return {
    name: 'sitemap-home-slash',
    hooks: {
      'astro:build:done': async ({ dir }) => {
        const { readdir, readFile, writeFile } = await import('node:fs/promises');
        const roots = [fileURLToPath(dir), path.join(fileURLToPath(dir), 'client')];
        for (const root of roots) {
          let files = [];
          try {
            files = await readdir(root);
          } catch {
            continue;
          }
          for (const name of files) {
            if (!name.startsWith('sitemap') || !name.endsWith('.xml')) continue;
            const file = path.join(root, name);
            const xml = await readFile(file, 'utf8');
            const next = xml.replaceAll('<loc>https://planexus.de</loc>', '<loc>https://planexus.de/</loc>');
            if (next !== xml) await writeFile(file, next);
          }
        }
      },
    },
  };
}

function sitemapLinks(pathname) {
  const pathNorm = normalizePath(pathname);
  let dePath;
  let enPath;
  if (pathNorm === '/en' || pathNorm.startsWith('/en/')) {
    enPath = pathNorm;
    dePath = EN_TO_DE[enPath];
  } else {
    dePath = pathNorm === '' ? '/' : pathNorm;
    enPath = DE_TO_EN[pathNorm];
  }
  if (!enPath || dePath === undefined) return undefined;
  const deHref = dePath === '/' || dePath === '' ? `${siteUrl}/` : `${siteUrl}${dePath}`;
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
    '/about': { status: 301, destination: '/ueber-uns' },
    '/services': { status: 301, destination: '/leistungen' },
    '/contact': { status: 301, destination: '/kontakt' },
    '/products': { status: 301, destination: '/laborcontainer' },
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
        const parsed = new URL(item.url);
        const pathName = parsed.pathname === '/' ? '/' : parsed.pathname.replace(/\/+$/, '');
        item.url = pathName === '/' ? `${siteUrl}/` : `${siteUrl}${pathName}`;
        const lastmod = gitLastmod(pathName);
        if (lastmod) item.lastmod = lastmod;
        const links = sitemapLinks(pathName);
        if (links) item.links = links;
        return item;
      },
    }),
    sitemapHomeSlash(),
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
