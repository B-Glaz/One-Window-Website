import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
export const leadSubmissions = sqliteTable("lead_submissions", {
  id: text("id").primaryKey(), idempotencyKey: text("idempotency_key").notNull().unique(), formCode: text("form_code").notNull(), sourcePath: text("source_path").notNull(), fullName: text("full_name").notNull(), email: text("email").notNull(), phone: text("phone").notNull(), message: text("message"), submissionReference: text("submission_reference").notNull().unique(), status: text("status", { enum: ["accepted"] }).notNull().default("accepted"), createdAt: integer("created_at", { mode: "timestamp_ms" }).notNull(),
});
