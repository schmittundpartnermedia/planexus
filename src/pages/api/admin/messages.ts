import type { APIRoute } from 'astro';
import { db } from '../../../lib/db';
import { contactMessages } from '../../../lib/schema';
import { desc, eq } from 'drizzle-orm';
import { isValidToken } from './login';

export const prerender = false;

export const GET: APIRoute = async ({ request }) => {
  const token = request.headers.get('Authorization')?.replace('Bearer ', '');
  if (!token || !isValidToken(token)) {
    return new Response(JSON.stringify({ error: 'Nicht autorisiert.' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const messages = await db.select().from(contactMessages).orderBy(desc(contactMessages.createdAt));
    return new Response(JSON.stringify(messages), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error fetching messages:', error);
    return new Response(JSON.stringify({ error: 'Fehler beim Laden der Nachrichten.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};

export const PATCH: APIRoute = async ({ request }) => {
  const token = request.headers.get('Authorization')?.replace('Bearer ', '');
  if (!token || !isValidToken(token)) {
    return new Response(JSON.stringify({ error: 'Nicht autorisiert.' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const { id, read: isRead } = await request.json();
    await db.update(contactMessages).set({ read: isRead }).where(eq(contactMessages.id, id));
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error updating message:', error);
    return new Response(JSON.stringify({ error: 'Fehler beim Aktualisieren.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};

export const DELETE: APIRoute = async ({ request }) => {
  const token = request.headers.get('Authorization')?.replace('Bearer ', '');
  if (!token || !isValidToken(token)) {
    return new Response(JSON.stringify({ error: 'Nicht autorisiert.' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const { id } = await request.json();
    await db.delete(contactMessages).where(eq(contactMessages.id, id));
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error deleting message:', error);
    return new Response(JSON.stringify({ error: 'Fehler beim Löschen.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
