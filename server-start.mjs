import { config } from 'dotenv';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import http from 'node:http';

const __dirname = dirname(fileURLToPath(import.meta.url));
config({ path: resolve(__dirname, '.env') });

const APEX_HOST = 'planexus.de';
const SITE_ORIGIN = `https://${APEX_HOST}`;

function isFilePath(pathname) {
  return /\.[A-Za-z0-9]+$/.test(pathname);
}

function stripTrailingSlash(pathname) {
  if (!pathname || pathname === '/') return '/';
  return pathname.replace(/\/+$/, '') || '/';
}

/** www + Slash in einem Hop, bevor Astro Static ausliefert. */
function maybeCanonicalRedirect(req, res) {
  const method = req.method || 'GET';
  if (method !== 'GET' && method !== 'HEAD') return false;

  const host = String(req.headers.host || '')
    .split(':')[0]
    .toLowerCase();
  let pathname = '/';
  let search = '';
  try {
    const parsed = new URL(req.url || '/', `http://${host || APEX_HOST}`);
    pathname = parsed.pathname;
    search = parsed.search;
  } catch {
    return false;
  }

  const isWww = host === `www.${APEX_HOST}` || host.startsWith('www.');
  const hasSlash = pathname.length > 1 && pathname.endsWith('/');
  const destPath = hasSlash && !isFilePath(pathname) ? stripTrailingSlash(pathname) : pathname;

  if (isWww) {
    const location = destPath === '/' ? `${SITE_ORIGIN}/${search}` : `${SITE_ORIGIN}${destPath}${search}`;
    res.writeHead(301, { Location: location });
    res.end();
    return true;
  }

  if (hasSlash && !isFilePath(pathname)) {
    res.writeHead(301, { Location: `${destPath}${search}` });
    res.end();
    return true;
  }

  return false;
}

function wrapListener(listener) {
  return (req, res) => {
    if (maybeCanonicalRedirect(req, res)) return;
    return listener(req, res);
  };
}

const originalCreateServer = http.createServer.bind(http);
http.createServer = function patchedCreateServer(opts, listener) {
  if (typeof opts === 'function') {
    return originalCreateServer(wrapListener(opts));
  }
  if (typeof listener === 'function') {
    return originalCreateServer(opts, wrapListener(listener));
  }
  return originalCreateServer(opts, listener);
};

await import('./dist/server/entry.mjs');
