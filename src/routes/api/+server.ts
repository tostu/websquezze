import type { RequestHandler } from './$types';

export const GET = (async ({ locals }) => {
	const db = locals.D1;

	// const { results } = await db.prepare('SHOW TABLES').all();
	// return Response.json(results);

	return new Response(String(Math.random()));
}) satisfies RequestHandler;
