import type { InsertUrl } from '$lib/db/url';
import { drizzle, type DrizzleD1Database } from 'drizzle-orm/d1';
import { nanoid } from 'nanoid';

export const shortenUrl = async (d1: D1Database, originalUrl: string) => {
	try {
		const URL: InsertUrl = {};

		const db = drizzle(d1);
		const result = await db.insert();
	} catch (e) {
		return null;
	}
};
