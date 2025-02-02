PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_equations` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`title` text NOT NULL,
	`description` text NOT NULL,
	`latex` text NOT NULL,
	`slug` text,
	`userId` text NOT NULL,
	FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
INSERT INTO `__new_equations`("id", "title", "description", "latex", "slug", "userId") SELECT "id", "title", "description", "latex", "slug", "userId" FROM `equations`;--> statement-breakpoint
DROP TABLE `equations`;--> statement-breakpoint
ALTER TABLE `__new_equations` RENAME TO `equations`;--> statement-breakpoint
PRAGMA foreign_keys=ON;