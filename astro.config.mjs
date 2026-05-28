import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import node from '@astrojs/node';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://planexus.de',
  trailingSlash: 'never',
  adapter: node({
    mode: 'standalone',
  }),
  integrations: [
    react(),
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
        ignored: ['**/.local/**', '**/node_modules/**', '**/.git/**'],
      },
    },
  },
  server: {
    port: 5000,
    host: '0.0.0.0',
  },
});
