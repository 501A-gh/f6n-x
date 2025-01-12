ALTER TABLE `variables` ADD `equationId` integer NOT NULL REFERENCES equations(id);--> statement-breakpoint
ALTER TABLE `variables` DROP COLUMN `equation-id`;