import type { Handle } from '@sveltejs/kit';
import { connectD1 } from 'wrangler-proxy';

export const handle: Handle = ({ event, resolve }) => {
	event.locals.D1 = event.platform?.env?.D1 ?? connectD1('D1');
	// or connectD1('D1', { hostname: 'custom-host-name' });
	// default hostname is `http://127.0.0.1:8787`
	return resolve(event);
};
