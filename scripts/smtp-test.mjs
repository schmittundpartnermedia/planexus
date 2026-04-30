#!/usr/bin/env node
/**
 * SMTP-Diagnose für Microsoft 365 / IONOS
 * Aufruf auf dem Server:
 *   cd /var/www/app && node scripts/smtp-test.mjs
 *
 * Liest SMTP_HOST / SMTP_PORT / SMTP_USER / SMTP_PASS / CONTACT_EMAIL aus .env
 * und zeigt die EXAKTE Microsoft-Antwort, statt nur "535 5.7.139".
 */

import nodemailer from 'nodemailer';
import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

// .env minimal selbst einlesen (keine Extra-Dependency nötig)
const envPath = resolve(process.cwd(), '.env');
if (existsSync(envPath)) {
  for (const line of readFileSync(envPath, 'utf8').split('\n')) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/i);
    if (m && !process.env[m[1]]) {
      let v = m[2];
      if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) {
        v = v.slice(1, -1);
      }
      process.env[m[1]] = v;
    }
  }
}

const HOST = process.env.SMTP_HOST || 'smtp.office365.com';
const PORT = parseInt(process.env.SMTP_PORT || '587', 10);
const USER = process.env.SMTP_USER;
const PASS = process.env.SMTP_PASS;
const FROM = process.env.SMTP_FROM || USER;
const TO = process.env.CONTACT_EMAIL || USER;

console.log('--- SMTP-Diagnose ---');
console.log('Host:        ', HOST);
console.log('Port:        ', PORT);
console.log('User:        ', USER || '(NICHT GESETZT)');
console.log('Pass gesetzt:', PASS ? `ja (Länge ${PASS.length})` : 'NEIN');
console.log('From:        ', FROM);
console.log('To:          ', TO);
console.log('---------------------\n');

if (!USER || !PASS) {
  console.error('ABBRUCH: SMTP_USER oder SMTP_PASS fehlt in .env');
  process.exit(1);
}

const isImplicitTls = PORT === 465;

const transporter = nodemailer.createTransport({
  host: HOST,
  port: PORT,
  secure: isImplicitTls,
  requireTLS: !isImplicitTls,
  auth: { user: USER, pass: PASS },
  tls: { minVersion: 'TLSv1.2', ciphers: 'HIGH' },
  authMethod: 'LOGIN',
  connectionTimeout: 20_000,
  greetingTimeout: 20_000,
  socketTimeout: 30_000,
  logger: true,
  debug: true,
});

try {
  console.log('\n[1/2] verify() – prüft Verbindung + Login...');
  await transporter.verify();
  console.log('✅ verify() erfolgreich – Login akzeptiert.\n');

  console.log('[2/2] Test-Mail senden...');
  const info = await transporter.sendMail({
    from: FROM,
    sender: USER,
    to: TO,
    subject: 'SMTP-Test Planexus ' + new Date().toISOString(),
    text: 'Dies ist ein automatischer Test der SMTP-Konfiguration.',
  });
  console.log('✅ Mail gesendet. messageId:', info.messageId);
  console.log('   accepted:', info.accepted);
  console.log('   rejected:', info.rejected);
  console.log('   response:', info.response);
  process.exit(0);
} catch (err) {
  console.error('\n❌ FEHLER:');
  console.error('   message:', err?.message);
  console.error('   code:   ', err?.code);
  console.error('   command:', err?.command);
  console.error('   response:', err?.response);
  console.error('   responseCode:', err?.responseCode);
  process.exit(2);
}
