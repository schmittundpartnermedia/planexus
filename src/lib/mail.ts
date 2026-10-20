import nodemailer from 'nodemailer';

// Nutzereingaben nie roh ins Mail-HTML schreiben.
export const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

export const mailRow = (label: string, value: string) =>
  `<tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee; vertical-align: top;">${label}:</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${escapeHtml(value).replace(/\n/g, '<br>')}</td></tr>`;

export const recipientEmail = () => process.env.RECIPIENT_EMAIL || 'info@planexus.de';

/**
 * Liefert einen SMTP-Transport oder null, wenn kein SMTP_PASS gesetzt ist.
 * Ohne Passwort wird keine Mail versendet; Anfragen landen trotzdem in der DB.
 */
export function createMailer() {
  const smtpPass = process.env.SMTP_PASS || '';
  if (!smtpPass) return null;

  const smtpHost = process.env.SMTP_HOST || 'smtp.ionos.de';
  const smtpPort = parseInt(process.env.SMTP_PORT || '465');
  const smtpUser = process.env.SMTP_USER || 'Server@planexus.de';

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  return { transporter, from: `"Planexus Webseite" <${smtpUser}>` };
}
