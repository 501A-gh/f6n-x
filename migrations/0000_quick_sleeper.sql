CREATE TABLE `equations` (
	`id` integer PRIMARY KEY NOT NULL,
	`title` text NOT NULL,
	`description` text NOT NULL,
	`latex` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `variables` (
	`id` integer PRIMARY KEY NOT NULL,
	`equation-id` integer NOT NULL,
	`placeholder` text NOT NULL,
	`label` text NOT NULL,
	`unit` text,
	FOREIGN KEY (`equation-id`) REFERENCES `equations`(`id`) ON UPDATE no action ON DELETE no action
);
