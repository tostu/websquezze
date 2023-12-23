import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';
import { user } from './user';

export const url = sqliteTable('url', {
	ID: text('id').primaryKey(),
	OriginalURL: text('original_url').notNull(),
	ShortenedURL: text('shortened_url').notNull().unique(),
	CreationDate: integer('creation_date', { mode: 'timestamp' }).notNull(),
	ExpiryDate: integer('expiry_date', { mode: 'timestamp' }),
	UserID: integer('user_id').references(() => user.ID)
});

export type Url = typeof url.$inferSelect;
export type InsertUrl = typeof url.$inferInsert;
