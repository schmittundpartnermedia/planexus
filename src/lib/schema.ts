import { pgTable, serial, text, timestamp, boolean } from 'drizzle-orm/pg-core';

export const contactMessages = pgTable('contact_messages', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull(),
  subject: text('subject').notNull(),
  message: text('message').notNull(),
  emailSent: boolean('email_sent').default(false),
  read: boolean('read').default(false),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});
