import test from "node:test";
import assert from "node:assert/strict";
import { onRequest, handleContact } from "../functions/api/contact.js";
import { validateContactPayload, solutionOptions } from "../src/utils/formValidation.js";
import { submitContact } from "../src/services/contact.js";

const payload = {
  name: "  Persona de prueba  ", company: "", phone: "+52 (442) 123-4567",
  email: "prueba@example.com", location: "Querétaro, Qro.", projectType: "residential",
  solutions: ["Aislante Térmico"], details: "Cotización local de prueba.", turnstileToken: "",
};
const request = (data = payload, options = {}) => new Request("http://localhost/api/contact", {
  method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data), ...options,
});

test("normalizes text, accepts optional company, international phone and all solutions", () => {
  const result = validateContactPayload({ ...payload, solutions: solutionOptions, phone: "+44 20 7946 0958 ext. 123" });
  assert.equal(result.valid, true);
  assert.equal(result.data.name, "Persona de prueba");
  assert.equal(result.data.solutions.length, 6);
});

test("all required fields, invalid email, blank details, no/unknown solutions", () => {
  for (const field of ["name", "phone", "email", "location", "projectType", "details"]) {
    assert.ok(validateContactPayload({ ...payload, [field]: "  " }).errors[field]);
  }
  assert.ok(validateContactPayload({ ...payload, email: "invalid@" }).errors.email);
  assert.ok(validateContactPayload({ ...payload, solutions: [] }).errors.solutions);
  assert.ok(validateContactPayload({ ...payload, solutions: ["unknown"] }).errors.solutions);
  assert.ok(validateContactPayload({ ...payload, projectType: "toString" }).errors.projectType);
});

test("rejects malformed shapes, types, unknown keys and excessive field lengths", () => {
  for (const value of [null, [], "text", 5]) assert.equal(validateContactPayload(value).valid, false);
  assert.ok(validateContactPayload({ ...payload, name: {} }).errors.name);
  assert.ok(validateContactPayload({ ...payload, company: 10 }).errors.company);
  assert.ok(validateContactPayload({ ...payload, details: "x".repeat(5001) }).errors.details);
  assert.ok(validateContactPayload({ ...payload, turnstileToken: "x".repeat(2049) }).errors.turnstileToken);
  assert.ok(validateContactPayload({ ...payload, recipient: "injected@example.com" }).errors.form);
});

test("Pages rejects methods, content types, invalid JSON and oversized streaming bodies", async () => {
  const get = await onRequest({ request: new Request("http://localhost/api/contact") });
  assert.equal(get.status, 405);
  assert.equal(get.headers.get("allow"), "POST");
  assert.equal((await onRequest({ request: request(payload, { headers: { "Content-Type": "text/plain" } }) })).status, 415);
  assert.equal((await onRequest({ request: request(payload, { body: "{" }) })).status, 400);
  assert.equal((await onRequest({ request: request(null) })).status, 422);
  assert.equal((await onRequest({ request: request({ ...payload, details: "x".repeat(33000) }) })).status, 413);
  const stream = new ReadableStream({ start(controller) { controller.enqueue(new Uint8Array(33000)); controller.close(); } });
  assert.equal((await onRequest({ request: request(payload, { body: stream, duplex: "half" }) })).status, 413);
});

test("Pages revalidates independently and fails closed until integrations are implemented", async () => {
  const invalid = await onRequest({ request: request({ ...payload, solutions: [] }) });
  assert.equal(invalid.status, 422);
  assert.ok((await invalid.json()).errors.solutions);
  const response = await onRequest({ request: request(), env: { RESEND_API_KEY: "dummy-test-only" }, data: { localPreview: true } });
  assert.equal(response.status, 503);
  assert.equal((await response.json()).success, false);
});

test("local rehearsal explicitly reports no delivery/storage and cannot be enabled by payload", async () => {
  const response = await handleContact(request(), { localPreview: true });
  const result = await response.json();
  assert.equal(result.success, true);
  assert.equal(result.preview, true);
  assert.match(result.message, /No se enviaron correos ni se guardó/);
  assert.equal((await onRequest({ request: request({ ...payload, localPreview: true }) })).status, 422);
});

test("client handles Vite HTML, network failures, invalid JSON and server errors", async () => {
  for (const fetchImpl of [
    async () => new Response("<html/>", { headers: { "Content-Type": "text/html" } }),
    async () => { throw new Error("network unavailable"); },
    async () => new Response("{", { headers: { "Content-Type": "application/json" } }),
    async () => Response.json({ success: true, message: "bad response" }, { status: 500 }),
  ]) assert.equal((await submitContact(payload, { fetchImpl })).success, false);
});

test("client keeps provisional success distinct and submits JSON to same-origin API", async () => {
  const result = await submitContact(payload, { fetchImpl: async (url, options) => {
    assert.equal(url, "/api/contact");
    assert.equal(options.method, "POST");
    assert.deepEqual(JSON.parse(options.body), payload);
    return handleContact(request(JSON.parse(options.body)), { localPreview: true });
  } });
  assert.equal(result.success, true);
  assert.equal(result.preview, true);
});
