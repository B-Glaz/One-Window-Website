import { eq } from "drizzle-orm";
import { z } from "zod";
import { getDb } from "../../../../db";
import { leadSubmissions } from "../../../../db/schema";

// ─── Validation Contract ───

export const leadSchema = z.object({
  formCode: z.string().trim().min(1).max(100),
  sourcePath: z.string().trim().startsWith("/").max(300),
  name: z.string().trim().min(2, "Please enter your full name.").max(120),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address.")
    .max(320),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number.")
    .max(32)
    .regex(/^[+()\-\s0-9]+$/, "Please enter a valid phone number."),
  message: z
    .string()
    .trim()
    .max(1500, "Please keep your message under 1,500 characters.")
    .optional(),
});
const allowedFormCodes = new Set([
  "homepage_consultation",
  "landing_study_in_france",
  "landing_study_in_germany",
  "landing_study_in_europe",
  "landing_study_business_in_europe_france_germany",
  "landing_study_at_icn",
]);
export type LeadInput = z.infer<typeof leadSchema>;

// ─── Form Authorization ───

export function isSupportedForm(formCode: string) {
  return allowedFormCodes.has(formCode);
}

// ─── Idempotent Persistence ───

export async function acceptLead(input: LeadInput, idempotencyKey: string) {
  const db = await getDb();
  const existing = await db
    .select({
      submissionReference: leadSubmissions.submissionReference,
    })
    .from(leadSubmissions)
    .where(eq(leadSubmissions.idempotencyKey, idempotencyKey))
    .limit(1);
  if (existing[0])
    return {
      submissionReference: existing[0].submissionReference,
      duplicate: true,
    };
  const submissionReference = `OW-${crypto.randomUUID().replaceAll("-", "").slice(0, 10).toUpperCase()}`;
  await db.insert(leadSubmissions).values({
    id: crypto.randomUUID(),
    idempotencyKey,
    formCode: input.formCode,
    sourcePath: input.sourcePath,
    fullName: input.name,
    email: input.email.toLowerCase(),
    phone: input.phone,
    message: input.message || null,
    submissionReference,
    status: "accepted",
    createdAt: new Date(),
  });
  return {
    submissionReference,
    duplicate: false,
  };
}
