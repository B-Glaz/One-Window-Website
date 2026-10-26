import { acceptLead, isSupportedForm, leadSchema } from "@backend/backend/src/modules/leads/service";
function errorResponse(status: number, code: string, message: string, fieldErrors?: Record<string, string>) { return Response.json({ error: { code, message, fieldErrors, requestId: crypto.randomUUID() } }, { status }); }
export async function POST(request: Request) {
  const idempotencyKey = request.headers.get("idempotency-key")?.trim();
  if (!idempotencyKey || idempotencyKey.length > 100) return errorResponse(400, "INVALID_IDEMPOTENCY_KEY", "Please refresh the page and try again.");
  let body: unknown; try { body = await request.json(); } catch { return errorResponse(400, "INVALID_JSON", "Please review the form and try again."); }
  const parsed = leadSchema.safeParse(body);
  if (!parsed.success) { const fields: Record<string, string> = {}; for (const issue of parsed.error.issues) fields[String(issue.path[0])] ??= issue.message; return errorResponse(400, "VALIDATION_ERROR", "Please review the highlighted fields.", fields); }
  if (!isSupportedForm(parsed.data.formCode)) return errorResponse(400, "UNSUPPORTED_FORM", "This form is not available.");
  try {
    const result = await acceptLead(parsed.data, idempotencyKey);
    return Response.json({ ...result, redirectTo: `/thank-you?ref=${encodeURIComponent(result.submissionReference)}` }, { status: result.duplicate ? 200 : 201 });
  } catch (error) { console.error(JSON.stringify({ event: "lead_submission_failed", error: error instanceof Error ? error.name : "UnknownError" })); return errorResponse(503, "LEAD_SERVICE_UNAVAILABLE", "We couldn’t accept your enquiry right now. Please try again shortly."); }
}
