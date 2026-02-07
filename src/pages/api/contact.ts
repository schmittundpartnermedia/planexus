import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';
import { db } from '../../lib/db';
import { contactMessages } from '../../lib/schema';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const { name, email, subject, message } = data;

    if (!name || !email || !subject || !message) {
      return new Response(JSON.stringify({ error: 'Alle Felder sind erforderlich.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(JSON.stringify({ error: 'Ungültige E-Mail-Adresse.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
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
