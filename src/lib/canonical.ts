export const SITE_ORIGIN = 'https://planexus.de';

/** Pfad ohne Trailing Slash; Startseite bleibt `/`. */
export function stripTrailingSlash(pathname: string): string {
  if (!pathname) return '/';
  const withLead = pathname.startsWith('/') ? pathname : `/${pathname}`;
  if (withLead === '/') return '/';
  return withLead.replace(/\/+$/, '') || '/';
}

/**
 * Kanonische Absolute URL.
 * Startseite: https://planexus.de/
 * Alle anderen Pfade: ohne Trailing Slash.
 */
export function canonicalUrlForPath(path: string): string {
  let pathname = path || '/';
  if (pathname.startsWith('http://') || pathname.startsWith('https://')) {
    try {
      pathname = new URL(pathname).pathname;
    } catch {
      pathname = path;
    }
  }
  const normalized = stripTrailingSlash(pathname);
  if (normalized === '/') return `${SITE_ORIGIN}/`;
  return `${SITE_ORIGIN}${normalized}`;
}
