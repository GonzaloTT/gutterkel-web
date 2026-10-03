import { createServer } from "node:http";
import { Readable } from "node:stream";
import { handleContact } from "../functions/api/contact.js";

// Local-only rehearsal of the shared handler. No credentials, emails or PII logs.
createServer(async (incoming, outgoing) => {
  try {
    if (incoming.url !== "/api/contact") {
      outgoing.writeHead(404).end();
      return;
    }
    const request = new Request("http://127.0.0.1:8788/api/contact", {
      method: incoming.method, headers: incoming.headers,
      ...(!["GET", "HEAD"].includes(incoming.method) ? { body: Readable.toWeb(incoming), duplex: "half" } : {}),
    });
    const response = await handleContact(request, { localPreview: true });
    outgoing.writeHead(response.status, Object.fromEntries(response.headers));
    outgoing.end(await response.text());
  } catch {
    outgoing.writeHead(500, { "Content-Type": "application/json", "Cache-Control": "no-store" });
    outgoing.end(JSON.stringify({ success: false, message: "No se pudo procesar la solicitud local.", errors: {} }));
  }
}).listen(8788, "127.0.0.1", () => {
  console.log("Contact rehearsal: http://127.0.0.1:8788/api/contact (no email or storage)");
});
