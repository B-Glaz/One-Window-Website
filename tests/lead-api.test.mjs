import assert from "node:assert/strict";
import test from "node:test";

const baseUrl = process.env.TEST_BASE_URL ?? "http://127.0.0.1:4173";

test("lead API rejects invalid fields without a success redirect", async () => {
  const response = await fetch(`${baseUrl}/api/v1/leads`, { method: "POST", headers: { "content-type": "application/json", "idempotency-key": crypto.randomUUID() }, body: JSON.stringify({ formCode: "homepage_consultation", sourcePath: "/", name: "", email: "bad", phone: "x", message: "" }) });
  const body = await response.json();
  assert.equal(response.status, 400);
  assert.equal(body.error.code, "VALIDATION_ERROR");
  assert.equal("redirectTo" in body, false);
});

test("lead API returns the same reference for the same idempotency key", async () => {
  const key = crypto.randomUUID();
  const payload = { formCode: "homepage_consultation", sourcePath: "/", name: "Contract Test", email: "contract.test@example.com", phone: "+91 90000 00001", message: "Automated local contract test" };
  const submit = () => fetch(`${baseUrl}/api/v1/leads`, { method: "POST", headers: { "content-type": "application/json", "idempotency-key": key }, body: JSON.stringify(payload) });
  const first = await submit(); const firstBody = await first.json(); const second = await submit(); const secondBody = await second.json();
  assert.equal(first.status, 201);
  assert.equal(second.status, 200);
  assert.equal(secondBody.duplicate, true);
  assert.equal(secondBody.submissionReference, firstBody.submissionReference);
});
