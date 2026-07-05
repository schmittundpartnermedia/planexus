import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import node from '@astrojs/node';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { execFileSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

// Reales lastmod pro Seite aus dem letzten Git-Commit der Quelldatei.
// So spiegelt die Sitemap echte Änderungsdaten wider statt eines erfundenen Einheitsdatums.
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

export default defineConfig({
  site: 'https://planexus.de',
  trailingSlash: 'never',
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
      filter: (page) => !/\/(admin|api)(\/|$)/.test(page),
      serialize(item) {
        const lastmod = gitLastmod(new URL(item.url).pathname);
        if (lastmod) item.lastmod = lastmod;
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
