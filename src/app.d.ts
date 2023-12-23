// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		interface Locals {
			D1: D1Database;
		}
		interface Platform {
			env?: {
				D1: D1Database;
			};
			context?: {
				waitUntil(promise: Promise<never>): void;
			};
			caches: CacheStorage & { default: Cache };
		}
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
