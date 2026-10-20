import type { APIRoute } from 'astro';
import { db } from '../../lib/db';
import { contactMessages } from '../../lib/schema';
import { createMailer, mailRow, recipientEmail } from '../../lib/mail';
import { isJsonRequest, redirectBack } from '../../lib/form-fallback';

export const prerender = false;

const MIN_ELAPSED_MS = 3000;
const MAX_LINKS = 5;
const MAX_LENGTH = {
  name: 100,
  email: 254,
  subject: 200,
  message: 5000,
  company: 200,
  phone: 50,
} as const;

const INTEREST_LABELS: Record<string, string> = {
  miete: 'Laborcontainer mieten',
  kauf: 'Laborcontainer kaufen',
  labtogo: 'LABtoGO',
  offen: 'Noch offen – Beratung gewünscht',
};

const optionalText = (value: unknown, max: number): string | null => {
  if (value === undefined || value === null || value === '') return '';
  if (typeof value !== 'string' || value.length > max) return null;
  return value.trim();
};

const jsonResponse = (body: object, status: number) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });

export const POST: APIRoute = async ({ request }) => {
  if (!isJsonRequest(request)) {
    return redirectBack(request);
  }
  try {
    const data = await request.json();
    const { name, email, subject, message, website, elapsedMs } = data;
    const company = optionalText(data.company, MAX_LENGTH.company);
    const phone = optionalText(data.phone, MAX_LENGTH.phone);
    const interest = typeof data.interest === 'string' && INTEREST_LABELS[data.interest] ? INTEREST_LABELS[data.interest] : '';

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

    if (company === null || phone === null) {
      return jsonResponse({ error: 'Ungültige Eingabe.' }, 400);
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return jsonResponse({ error: 'Ungültige E-Mail-Adresse.' }, 400);
    }

    const linkCount = (message.match(/https?:\/\/|www\./gi) || []).length;
    if (linkCount > MAX_LINKS) {
      return jsonResponse({ error: 'Zu viele Links in der Nachricht.' }, 400);
    }

    // Zusatzangaben ohne Schema-Änderung mit der Nachricht speichern.
    const extraLines = [
      company ? `Firma: ${company}` : '',
      phone ? `Telefon: ${phone}` : '',
      interest ? `Anliegen: ${interest}` : '',
    ].filter(Boolean);
    const storedMessage = extraLines.length ? `${extraLines.join('\n')}\n\n${message}` : message;

    let emailSent = false;

    const mailer = createMailer();
    if (mailer) {
      try {
        const { transporter, from } = mailer;

        await transporter.sendMail({
          from,
          replyTo: { name: name.replace(/["\r\n]/g, ''), address: email },
          to: recipientEmail(),
          subject: `Kontaktformular: ${subject.replace(/[\r\n]+/g, ' ')}`,
          html: `
            <h2>Neue Kontaktanfrage</h2>
            <table style="border-collapse: collapse; width: 100%;">
              ${mailRow('Name', name)}
              ${mailRow('E-Mail', email)}
              ${company ? mailRow('Firma', company) : ''}
              ${phone ? mailRow('Telefon', phone) : ''}
              ${interest ? mailRow('Anliegen', interest) : ''}
              ${mailRow('Betreff', subject)}
              ${mailRow('Nachricht', message)}
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
      message: storedMessage,
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
