import nodemailer from 'nodemailer';

const SMTP_HOST = process.env.SMTP_HOST || 'smtp.office365.com';
const SMTP_PORT = parseInt(process.env.SMTP_PORT || '587', 10);
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;
const SMTP_FROM = process.env.SMTP_FROM || SMTP_USER;
const CONTACT_EMAIL = process.env.CONTACT_EMAIL || 'info@planexus.de';

const isImplicitTls = SMTP_PORT === 465;

const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: SMTP_PORT,
  secure: isImplicitTls,
  requireTLS: !isImplicitTls,
  auth: SMTP_USER && SMTP_PASS ? { user: SMTP_USER, pass: SMTP_PASS } : undefined,
  tls: {
    minVersion: 'TLSv1.2',
    ciphers: 'HIGH',
  },
  authMethod: 'LOGIN',
  connectionTimeout: 20_000,
  greetingTimeout: 20_000,
  socketTimeout: 30_000,
  logger: process.env.SMTP_DEBUG === '1',
  debug: process.env.SMTP_DEBUG === '1',
});

export async function verifySmtp(): Promise<{ ok: boolean; error?: string }> {
  try {
    await transporter.verify();
    return { ok: true };
  } catch (err: any) {
    return { ok: false, error: err?.message || String(err) };
  }
}

export async function sendContactEmail(data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  if (!SMTP_USER || !SMTP_PASS) {
    throw new Error('SMTP_USER oder SMTP_PASS nicht gesetzt – kein Mailversand möglich.');
  }

  const mailOptions = {
    from: SMTP_FROM,
    sender: SMTP_USER,
    to: CONTACT_EMAIL,
    replyTo: data.email,
    subject: `Kontaktanfrage: ${data.subject}`,
    html: `
      <h2>Neue Kontaktanfrage von der Webseite</h2>
      <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
      <p><strong>E-Mail:</strong> ${escapeHtml(data.email)}</p>
      <p><strong>Betreff:</strong> ${escapeHtml(data.subject)}</p>
      <hr />
      <p><strong>Nachricht:</strong></p>
      <p>${escapeHtml(data.message).replace(/\n/g, '<br>')}</p>
    `,
    text:
      `Neue Kontaktanfrage von der Webseite\n\n` +
      `Name: ${data.name}\n` +
      `E-Mail: ${data.email}\n` +
      `Betreff: ${data.subject}\n\n` +
      `Nachricht:\n${data.message}\n`,
  };

  return transporter.sendMail(mailOptions);
}

function escapeHtml(input: string): string {
  return String(input)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
