import { eq } from "drizzle-orm";
import { z } from "zod";
import { getDb } from "../../../../db";
import { leadSubmissions } from "../../../../db/schema";
const leadSchema = z.object({ formCode: z.string().trim().min(1).max(100), sourcePath: z.string().trim().startsWith("/").max(300), name: z.string().trim().min(2, "Please enter your full name.").max(120), email: z.string().trim().email("Please enter a valid email address.").max(320), phone: z.string().trim().min(7, "Please enter a valid phone number.").max(32).regex(/^[+()\-\s0-9]+$/, "Please enter a valid phone number."), message: z.string().trim().max(1500, "Please keep your message under 1,500 characters.").optional() });
const allowedFormCodes = new Set(["homepage_consultation", "landing_study_in_france", "landing_study_in_germany", "landing_study_in_europe", "landing_study_business_in_europe_france_germany", "landing_study_at_icn"]);
function errorResponse(status: number, code: string, message: string, fieldErrors?: Record<string, string>) { return Response.json({ error: { code, message, fieldErrors, requestId: crypto.randomUUID() } }, { status }); }
export async function POST(request: Request) {
  const idempotencyKey = request.headers.get("idempotency-key")?.trim();
  if (!idempotencyKey || idempotencyKey.length > 100) return errorResponse(400, "INVALID_IDEMPOTENCY_KEY", "Please refresh the page and try again.");
  let body: unknown; try { body = await request.json(); } catch { return errorResponse(400, "INVALID_JSON", "Please review the form and try again."); }
  const parsed = leadSchema.safeParse(body);
  if (!parsed.success) { const fields: Record<string, string> = {}; for (const issue of parsed.error.issues) fields[String(issue.path[0])] ??= issue.message; return errorResponse(400, "VALIDATION_ERROR", "Please review the highlighted fields.", fields); }
  if (!allowedFormCodes.has(parsed.data.formCode)) return errorResponse(400, "UNSUPPORTED_FORM", "This form is not available.");
  try {
    const db = await getDb(); const existing = await db.select({ submissionReference: leadSubmissions.submissionReference }).from(leadSubmissions).where(eq(leadSubmissions.idempotencyKey, idempotencyKey)).limit(1);
    if (existing[0]) return Response.json({ submissionReference: existing[0].submissionReference, redirectTo: `/thank-you?ref=${encodeURIComponent(existing[0].submissionReference)}`, duplicate: true });
    const submissionReference = `OW-${crypto.randomUUID().replaceAll("-", "").slice(0, 10).toUpperCase()}`;
    await db.insert(leadSubmissions).values({ id: crypto.randomUUID(), idempotencyKey, formCode: parsed.data.formCode, sourcePath: parsed.data.sourcePath, fullName: parsed.data.name, email: parsed.data.email.toLowerCase(), phone: parsed.data.phone, message: parsed.data.message || null, submissionReference, status: "accepted", createdAt: new Date() });
    return Response.json({ submissionReference, redirectTo: `/thank-you?ref=${encodeURIComponent(submissionReference)}`, duplicate: false }, { status: 201 });
  } catch (error) { console.error(JSON.stringify({ event: "lead_submission_failed", error: error instanceof Error ? error.name : "UnknownError" })); return errorResponse(503, "LEAD_SERVICE_UNAVAILABLE", "We couldn’t accept your enquiry right now. Please try again shortly."); }
}
