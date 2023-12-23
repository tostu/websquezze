import { text, sqliteTable } from 'drizzle-orm/sqlite-core';
export const user = sqliteTable('users', {
	ID: text('id').primaryKey(),
	Username: text('username'),
	Password: text('password')
});
