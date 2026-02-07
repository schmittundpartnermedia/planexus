import type { APIRoute } from 'astro';
import crypto from 'crypto';
import { db } from '../../../lib/db';
import { adminSessions } from '../../../lib/schema';
import { eq, gt, lt } from 'drizzle-orm';

export const prerender = false;

const SESSION_DURATION_HOURS = 24;

const loginAttempts = new Map<string, { count: number; blockedUntil: number }>();

function hashToken(token: string): string {
  return crypto.createHash('sha256').update(token).digest('hex');
}

function generateToken(): string {
  return crypto.randomBytes(32).toString('hex');
}

function getClientIp(request: Request): string {
  return request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
}

function isRateLimited(ip: string): boolean {
  const entry = loginAttempts.get(ip);
  if (!entry) return false;
  if (entry.blockedUntil > Date.now()) return true;
  if (entry.blockedUntil <= Date.now() && entry.count >= 5) {
    loginAttempts.delete(ip);
    return false;
  }
  return false;
}

function recordAttempt(ip: string): void {
  const entry = loginAttempts.get(ip) || { count: 0, blockedUntil: 0 };
  entry.count++;
  if (entry.count >= 5) {
    entry.blockedUntil = Date.now() + 15 * 60 * 1000;
  }
  loginAttempts.set(ip, entry);
}

function clearAttempts(ip: string): void {
  loginAttempts.delete(ip);
}

export async function isValidToken(token: string): Promise<boolean> {
  const hash = hashToken(token);
  const now = new Date();
  const sessions = await db.select().from(adminSessions)
    .where(eq(adminSessions.tokenHash, hash));
  
  if (sessions.length === 0) return false;
  if (sessions[0].expiresAt < now) {
    await db.delete(adminSessions).where(eq(adminSessions.tokenHash, hash));
    return false;
  }
  return true;
}

async function cleanExpiredSessions(): Promise<void> {
  await db.delete(adminSessions).where(lt(adminSessions.expiresAt, new Date()));
}

export const POST: APIRoute = async ({ request }) => {
  try {
    const ip = getClientIp(request);

    if (isRateLimited(ip)) {
      return new Response(JSON.stringify({ error: 'Zu viele Versuche. Bitte 15 Minuten warten.' }), {
        status: 429,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const { password } = await request.json();
    const adminPassword = process.env.ADMIN_PASSWORD;

    if (!adminPassword) {
      return new Response(JSON.stringify({ error: 'Admin-Zugang nicht konfiguriert.' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    if (password !== adminPassword) {
      recordAttempt(ip);
      return new Response(JSON.stringify({ error: 'Falsches Passwort.' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    clearAttempts(ip);
    await cleanExpiredSessions();

    const token = generateToken();
    const hash = hashToken(token);
    const expiresAt = new Date(Date.now() + SESSION_DURATION_HOURS * 60 * 60 * 1000);

    await db.insert(adminSessions).values({ tokenHash: hash, expiresAt });

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
