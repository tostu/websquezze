import type { RequestHandler } from '@sveltejs/kit';
import { drizzle } from 'drizzle-orm/d1';

export const POST = (async ({ request, locals }) => {
	// const { results } = await db.prepare('SHOW TABLES').all();
	// return Response.json(results);

	return new Response(String(Math.random()));
}) satisfies RequestHandler;
