import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.ionos.de',
  port: parseInt(process.env.SMTP_PORT || '465'),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendContactEmail(data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  const mailOptions = {
    from: process.env.SMTP_USER,
    to: process.env.CONTACT_EMAIL || 'info@planexus.de',
    replyTo: data.email,
    subject: `Kontaktanfrage: ${data.subject}`,
    html: `
      <h2>Neue Kontaktanfrage von der Webseite</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>E-Mail:</strong> ${data.email}</p>
      <p><strong>Betreff:</strong> ${data.subject}</p>
      <hr />
      <p><strong>Nachricht:</strong></p>
      <p>${data.message.replace(/\n/g, '<br>')}</p>
    `,
  };

  const result = await transporter.sendMail(mailOptions);
  return result;
}
