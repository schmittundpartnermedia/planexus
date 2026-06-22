import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';
import { db } from '../../lib/db';
import { contactMessages } from '../../lib/schema';

export const prerender = false;

const MIN_ELAPSED_MS = 3000;
const MAX_LINKS = 5;
const MAX_LENGTH = {
  name: 100,
  email: 254,
  subject: 200,
  message: 5000,
} as const;

const jsonResponse = (body: object, status: number) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const { name, email, subject, message, website, elapsedMs } = data;

    // 1. Honeypot: nur Bots füllen das unsichtbare Feld aus.
    //    Erfolg vorgaukeln, aber WEDER Mail versenden NOCH in der DB speichern.
    if (typeof website === 'string' && website.trim() !== '') {
      return jsonResponse({ success: true, message: 'Nachricht erfolgreich gesendet.' }, 200);
    }

    // 2. Zeit-Falle: unrealistisch schnell nach dem Laden abgeschickt (Bot-typisch).
    //    Erfolg vorgaukeln, aber WEDER Mail versenden NOCH speichern.
    if (
      typeof elapsedMs !== 'number' ||
      !Number.isFinite(elapsedMs) ||
      elapsedMs < MIN_ELAPSED_MS
    ) {
      return jsonResponse({ success: true, message: 'Nachricht erfolgreich gesendet.' }, 200);
    }

    // 3. Serverseitige Validierung vor Mailversand und DB-Insert.
    if (!name || !email || !subject || !message) {
      return jsonResponse({ error: 'Alle Felder sind erforderlich.' }, 400);
    }

    if (
      typeof name !== 'string' ||
      typeof email !== 'string' ||
      typeof subject !== 'string' ||
      typeof message !== 'string'
    ) {
      return jsonResponse({ error: 'Ungültige Eingabe.' }, 400);
    }

    if (
      name.length > MAX_LENGTH.name ||
      email.length > MAX_LENGTH.email ||
      subject.length > MAX_LENGTH.subject ||
      message.length > MAX_LENGTH.message
    ) {
      return jsonResponse({ error: 'Eingabe zu lang.' }, 400);
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return jsonResponse({ error: 'Ungültige E-Mail-Adresse.' }, 400);
    }

    const linkCount = (message.match(/https?:\/\/|www\./gi) || []).length;
    if (linkCount > MAX_LINKS) {
      return jsonResponse({ error: 'Zu viele Links in der Nachricht.' }, 400);
    }

    let emailSent = false;

    const smtpPass = process.env.SMTP_PASS || '';
    if (smtpPass) {
      try {
        const smtpHost = process.env.SMTP_HOST || 'smtp.ionos.de';
        const smtpPort = parseInt(process.env.SMTP_PORT || '465');
        const smtpUser = process.env.SMTP_USER || 'Server@planexus.de';
        const recipientEmail = process.env.RECIPIENT_EMAIL || 'info@planexus.de';

        const transporter = nodemailer.createTransport({
          host: smtpHost,
          port: smtpPort,
          secure: smtpPort === 465,
          auth: {
            user: smtpUser,
            pass: smtpPass,
          },
        });

        await transporter.sendMail({
          from: `"Planexus Webseite" <${smtpUser}>`,
          replyTo: `"${name}" <${email}>`,
          to: recipientEmail,
          subject: `Kontaktformular: ${subject}`,
          html: `
            <h2>Neue Kontaktanfrage</h2>
            <table style="border-collapse: collapse; width: 100%;">
              <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Name:</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${name}</td></tr>
              <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">E-Mail:</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${email}</td></tr>
              <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Betreff:</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${subject}</td></tr>
              <tr><td style="padding: 8px; font-weight: bold; vertical-align: top;">Nachricht:</td><td style="padding: 8px;">${message.replace(/\n/g, '<br>')}</td></tr>
            </table>
            <hr style="margin-top: 20px;">
            <p style="color: #888; font-size: 12px;">Gesendet über das Kontaktformular auf planexus.de</p>
          `,
        });

        emailSent = true;
      } catch (emailError) {
        console.error('SMTP error (message saved to database):', emailError);
      }
    }

    await db.insert(contactMessages).values({
      name,
      email,
      subject,
      message,
      emailSent,
    });

    return new Response(JSON.stringify({ success: true, message: 'Nachricht erfolgreich gesendet.' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Contact form error:', error);
    return new Response(JSON.stringify({ error: 'Fehler beim Senden der Nachricht. Bitte versuchen Sie es später erneut.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
