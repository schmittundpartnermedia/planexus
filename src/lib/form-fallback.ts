// Formular wurde ohne JavaScript (oder vor dem Laden) abgeschickt: nichts speichern,
// per 303 zurück zur Seite. So stehen Eingaben nie in der URL, Bots ohne JS gehen leer aus.
export function redirectBack(request: Request): Response {
  const referer = request.headers.get('referer');
  let target = '/kontakt';
  try {
    if (referer) {
      const url = new URL(referer);
      if (url.host === new URL(request.url).host) target = url.pathname;
    }
  } catch {
    // Ungültiger Referer: Standardziel behalten.
  }
  return new Response(null, { status: 303, headers: { Location: target } });
}

export const isJsonRequest = (request: Request) =>
  (request.headers.get('content-type') || '').includes('application/json');
