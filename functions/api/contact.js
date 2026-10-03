import { validateContactPayload } from "../../src/utils/formValidation.js";

const MAX_BODY_BYTES = 32 * 1024;
const json = (status, body, headers = {}) => new Response(JSON.stringify(body), {
  status,
  headers: { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store", ...headers },
});
const failure = (status, message, errors = {}, headers = {}) => json(status, { success: false, message, errors }, headers);

async function readBody(request) {
  if (Number(request.headers.get("content-length")) > MAX_BODY_BYTES) throw new RangeError();
  const reader = request.body?.getReader();
  if (!reader) return "";
  const chunks = [];
  let length = 0;
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      length += value.byteLength;
      if (length > MAX_BODY_BYTES) {
        await reader.cancel();
        throw new RangeError();
      }
      chunks.push(value);
    }
  } finally {
    reader.releaseLock();
  }
  const bytes = new Uint8Array(length);
  let offset = 0;
  for (const chunk of chunks) { bytes.set(chunk, offset); offset += chunk.length; }
  return new TextDecoder("utf-8", { fatal: true }).decode(bytes);
}

// localPreview is supplied only by our loopback development adapter, never by JSON,
// a query parameter, an Origin header or the public Pages entry point.
export async function handleContact(request, { localPreview = false } = {}) {
  if (request.method !== "POST") return failure(405, "Método no permitido.", {}, { Allow: "POST" });
  if (request.headers.get("content-type")?.split(";")[0].trim().toLowerCase() !== "application/json") {
    return failure(415, "La solicitud debe enviarse como JSON.");
  }
  let input;
  try { input = JSON.parse(await readBody(request)); }
  catch (error) { return failure(error instanceof RangeError ? 413 : 400, error instanceof RangeError ? "La solicitud es demasiado grande." : "El JSON de la solicitud no es válido."); }
  const { valid, errors } = validateContactPayload(input);
  if (!valid) return failure(422, "Revisa los campos indicados.", errors);

  if (localPreview) {
    return json(200, {
      success: true, preview: true,
      message: "Prueba local completada. No se enviaron correos ni se guardó la solicitud.",
    });
  }

  // DELIVERY PENDING — deliberately fail closed even if environment bindings exist.
  // Next: validate data.turnstileToken with Siteverify + TURNSTILE_SECRET_KEY.
  // Reject expired/invalid tokens and enforce the expected hostname/action.
  // Then use RESEND_API_KEY and server-only CONTACT_RECIPIENT, CONTACT_CC, EMAIL_FROM:
  // 1. Internal quote email, with the validated customer email as Reply-To.
  // 2. Customer confirmation, only after accepting the internal request.
  // Escape untrusted content and add idempotency/partial-failure handling before enabling.
  // No email, persistence, security validation or external fetch is simulated here.
  return failure(503, "El envío de solicitudes todavía no está habilitado. Utiliza teléfono, WhatsApp o correo para contactarnos.");
}

export function onRequest({ request }) {
  return handleContact(request);
}
