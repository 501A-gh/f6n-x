ALTER TABLE `user` ADD `slug` text;--> statement-breakpoint
CREATE UNIQUE INDEX `user_slug_unique` ON `user` (`slug`);