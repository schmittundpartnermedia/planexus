import type { APIRoute } from 'astro';
import { db } from '../../lib/db';
import { contactMessages } from '../../lib/schema';
import { createMailer, mailRow, recipientEmail } from '../../lib/mail';
import { isJsonRequest, redirectBack } from '../../lib/form-fallback';

export const prerender = false;

// Lead-Magnet „Lastenheft-Vorlage“: E-Mail + Einwilligung gegen sofortigen Download.
// Gespeichert wird in contact_messages (keine Schema-Änderung nötig), info@ wird benachrichtigt.
// An die eingegebene Adresse wird bewusst KEINE Mail geschickt (sonst ließe sich das
// Formular missbrauchen, um Dritte anzuschreiben). Der Link kommt direkt in der Antwort.

const MIN_ELAPSED_MS = 2000;
const DOWNLOADS = {
  de: '/downloads/planexus-lastenheft-vorlage-laborcontainer.docx',
  en: '/downloads/planexus-lab-container-specification-template.docx',
} as const;

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
    const locale: 'de' | 'en' = data.locale === 'en' ? 'en' : 'de';
    const downloadUrl = DOWNLOADS[locale];

    // Honeypot und Zeit-Falle: Bots bekommen eine Erfolgsantwort, es wird nichts gespeichert.
    if (typeof data.website === 'string' && data.website.trim() !== '') {
      return jsonResponse({ success: true, downloadUrl }, 200);
    }
    if (typeof data.elapsedMs !== 'number' || !Number.isFinite(data.elapsedMs) || data.elapsedMs < MIN_ELAPSED_MS) {
      return jsonResponse({ success: true, downloadUrl }, 200);
    }

    const email = typeof data.email === 'string' ? data.email.trim() : '';
    const company = typeof data.company === 'string' ? data.company.trim() : '';
    const page = typeof data.page === 'string' ? data.page.slice(0, 200) : '';

    if (!email || email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return jsonResponse({ error: 'invalid-email' }, 400);
    }
    if (company.length > 200) {
      return jsonResponse({ error: 'invalid-input' }, 400);
    }
    if (data.consent !== true) {
      return jsonResponse({ error: 'consent-required' }, 400);
    }

    const subject = locale === 'en' ? 'Download: Specification template (EN)' : 'Download: Lastenheft-Vorlage';
    const message = [
      'Lastenheft-Vorlage heruntergeladen.',
      company ? `Firma: ${company}` : '',
      `Seite: ${page || '-'}`,
      'Einwilligung: Planexus darf einmal per E-Mail zum Laborprojekt Kontakt aufnehmen (Checkbox bestätigt).',
    ]
      .filter(Boolean)
      .join('\n');

    let emailSent = false;
    const mailer = createMailer();
    if (mailer) {
      try {
        await mailer.transporter.sendMail({
          from: mailer.from,
          replyTo: email,
          to: recipientEmail(),
          subject: `Website: ${subject}`,
          html: `
            <h2>Neuer Download der Lastenheft-Vorlage</h2>
            <table style="border-collapse: collapse; width: 100%;">
              ${mailRow('E-Mail', email)}
              ${company ? mailRow('Firma', company) : ''}
              ${mailRow('Sprache', locale.toUpperCase())}
              ${mailRow('Seite', page || '-')}
              ${mailRow('Einwilligung', 'Einmalige Kontaktaufnahme per E-Mail zum Laborprojekt erlaubt')}
            </table>
            <hr style="margin-top: 20px;">
            <p style="color: #888; font-size: 12px;">Gesendet über planexus.de</p>
          `,
        });
        emailSent = true;
      } catch (emailError) {
        console.error('SMTP error (download lead saved to database):', emailError);
      }
    }

    await db.insert(contactMessages).values({
      name: company || email,
      email,
      subject,
      message,
      emailSent,
    });

    return jsonResponse({ success: true, downloadUrl }, 200);
  } catch (error) {
    console.error('Lastenheft download error:', error);
    return jsonResponse({ error: 'server-error' }, 500);
  }
};
