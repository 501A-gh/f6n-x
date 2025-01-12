PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_equations` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`title` text NOT NULL,
	`description` text NOT NULL,
	`latex` text NOT NULL
);
--> statement-breakpoint
INSERT INTO `__new_equations`("id", "title", "description", "latex") SELECT "id", "title", "description", "latex" FROM `equations`;--> statement-breakpoint
DROP TABLE `equations`;--> statement-breakpoint
ALTER TABLE `__new_equations` RENAME TO `equations`;--> statement-breakpoint
PRAGMA foreign_keys=ON;--> statement-breakpoint
CREATE TABLE `__new_variables` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`equation-id` integer NOT NULL,
	`placeholder` text NOT NULL,
	`label` text NOT NULL,
	`unit` text,
	FOREIGN KEY (`equation-id`) REFERENCES `equations`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
INSERT INTO `__new_variables`("id", "equation-id", "placeholder", "label", "unit") SELECT "id", "equation-id", "placeholder", "label", "unit" FROM `variables`;--> statement-breakpoint
DROP TABLE `variables`;--> statement-breakpoint
ALTER TABLE `__new_variables` RENAME TO `variables`;