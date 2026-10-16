CREATE TABLE `lead_submissions` (
	`id` text PRIMARY KEY NOT NULL,
	`idempotency_key` text NOT NULL,
	`form_code` text NOT NULL,
	`source_path` text NOT NULL,
	`full_name` text NOT NULL,
	`email` text NOT NULL,
	`phone` text NOT NULL,
	`message` text,
	`submission_reference` text NOT NULL,
	`status` text DEFAULT 'accepted' NOT NULL,
	`created_at` integer NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `lead_submissions_idempotency_key_unique` ON `lead_submissions` (`idempotency_key`);--> statement-breakpoint
CREATE UNIQUE INDEX `lead_submissions_submission_reference_unique` ON `lead_submissions` (`submission_reference`);