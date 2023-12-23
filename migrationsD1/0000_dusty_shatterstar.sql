CREATE TABLE `url` (
	`id` text PRIMARY KEY NOT NULL,
	`original_url` text NOT NULL,
	`shortened_url` text NOT NULL,
	`creation_date` integer NOT NULL,
	`expiry_date` integer,
	`user_id` integer,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` text PRIMARY KEY NOT NULL,
	`username` text,
	`password` text
);
--> statement-breakpoint
CREATE UNIQUE INDEX `url_shortened_url_unique` ON `url` (`shortened_url`);