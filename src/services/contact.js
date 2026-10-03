// Same-origin endpoint works with Pages local/preview and the optional Vite proxy.
export async function submitContact(payload, { fetchImpl = fetch } = {}) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15000);
  try {
    const response = await fetchImpl("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });
    if (!response.headers.get("content-type")?.includes("application/json")) {
      return { success: false, message: "El formulario no está disponible en este momento. Tus datos se conservan; puedes contactarnos por teléfono, WhatsApp o correo.", errors: {} };
    }
    const result = await response.json();
    if (!result || typeof result.success !== "boolean" || typeof result.message !== "string") {
      throw new Error("Invalid contact response");
    }
    return { ...result, success: response.ok && result.success };
  } catch {
    return { success: false, message: "No se pudo confirmar la recepción. Tus datos se conservan. Inténtalo nuevamente o utiliza otro medio de contacto.", errors: {} };
  } finally {
    clearTimeout(timeout);
  }
}
