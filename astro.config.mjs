import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import node from '@astrojs/node';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://www.planexus.de',
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
    },
    server: {
      allowedHosts: ['.replit.dev', '.janeway.replit.dev', '.repl.co'],
    },
  },
  server: {
    port: 5000,
    host: '0.0.0.0',
  },
});
