import type { APIRoute } from 'astro';
import crypto from 'crypto';

export const prerender = false;

function generateToken(): string {
  return crypto.randomBytes(32).toString('hex');
}

const validTokens = new Set<string>();

export function isValidToken(token: string): boolean {
  return validTokens.has(token);
}

export function addToken(token: string): void {
  validTokens.add(token);
}

export function removeToken(token: string): void {
  validTokens.delete(token);
}

export const POST: APIRoute = async ({ request }) => {
  try {
    const { password } = await request.json();
    const adminPassword = process.env.ADMIN_PASSWORD;

    if (!adminPassword) {
      return new Response(JSON.stringify({ error: 'Admin-Zugang nicht konfiguriert.' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    if (password !== adminPassword) {
      return new Response(JSON.stringify({ error: 'Falsches Passwort.' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const token = generateToken();
    addToken(token);

    return new Response(JSON.stringify({ success: true, token }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch {
    return new Response(JSON.stringify({ error: 'Fehler bei der Anmeldung.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
