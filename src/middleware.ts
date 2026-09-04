import { defineMiddleware } from 'astro:middleware';
import { canonicalUrlForPath, stripTrailingSlash } from './lib/canonical';

const APEX_HOST = 'planexus.de';

function isFilePath(pathname: string): boolean {
  return /\.[A-Za-z0-9]+$/.test(pathname);
}

export const onRequest = defineMiddleware((context, next) => {
  // Prerender/static: kein Header-Zugriff. Slash/www macht nginx + server-start.mjs.
  if (context.isPrerendered) {
    return next();
  }

  const method = context.request.method;
  if (method !== 'GET' && method !== 'HEAD') {
    return next();
  }

  const url = new URL(context.request.url);
  if (url.pathname === '/en' || url.pathname.startsWith('/en/')) {
    return new Response('Not Found', { status: 404, headers: { 'content-type': 'text/plain; charset=utf-8' } });
  }
  const host = (context.request.headers.get('x-forwarded-host') || context.request.headers.get('host') || url.hostname)
    .split(':')[0]
    .toLowerCase();
  const isWww = host === `www.${APEX_HOST}` || host.startsWith('www.');
  const pathname = url.pathname;
  const hasSlash = pathname.length > 1 && pathname.endsWith('/');
  const destPath = hasSlash && !isFilePath(pathname) ? stripTrailingSlash(pathname) : pathname;

  if (isWww) {
    return context.redirect(`${canonicalUrlForPath(destPath)}${url.search}`, 301);
  }

  if (hasSlash && !isFilePath(pathname)) {
    return new Response(null, {
      status: 301,
      headers: { Location: `${destPath}${url.search}` },
    });
  }

  return next();
});
