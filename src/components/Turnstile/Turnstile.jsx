import { useEffect, useImperativeHandle, useRef, useState } from "react";
import "./Turnstile.css";

const scriptUrl = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
let scriptPromise;

function loadTurnstile() {
  if (window.turnstile) return Promise.resolve(window.turnstile);
  if (!scriptPromise) {
    scriptPromise = new Promise((resolve, reject) => {
      const existing = document.querySelector(`script[src="${scriptUrl}"]`);
      const script = existing || document.createElement("script");
      const cleanup = () => {
        clearTimeout(timeout);
        script.removeEventListener("load", loaded);
        script.removeEventListener("error", failed);
      };
      const failed = () => {
        cleanup();
        script.remove();
        reject(new Error("Turnstile unavailable"));
      };
      const loaded = () => {
        if (!window.turnstile) { failed(); return; }
        // The script load event already guarantees the explicit API is available.
        cleanup();
        resolve(window.turnstile);
      };
      const timeout = setTimeout(failed, 15000);
      script.addEventListener("load", loaded);
      script.addEventListener("error", failed);
      if (!existing) {
        script.src = scriptUrl;
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);
      }
    }).catch((error) => { scriptPromise = undefined; throw error; });
  }
  return scriptPromise;
}

const messages = {
  loading: "Cargando la verificación de seguridad…",
  ready: "Completa la verificación de seguridad antes de enviar.",
  verified: "Verificación completada.",
  expired: "La verificación expiró. Vuelve a verificar antes de enviar.",
  error: "No se pudo cargar o completar la verificación. Inténtalo nuevamente.",
};

export default function Turnstile({ siteKey, onToken, ref }) {
  const container = useRef(null);
  const widget = useRef(null);
  const [status, setStatus] = useState("loading");
  const [attempt, setAttempt] = useState(0);

  function reset() {
    onToken("");
    if (widget.current !== null && window.turnstile) {
      setStatus("ready");
      try { window.turnstile.reset(widget.current); }
      catch { setStatus("error"); setAttempt((current) => current + 1); }
    } else {
      setStatus("loading");
      setAttempt((current) => current + 1);
    }
  }

  useImperativeHandle(ref, () => ({ reset }));

  useEffect(() => {
    if (!siteKey) return;
    let active = true;
    let widgetId;
    let api;
    let compact;
    let resizeFrame;
    const report = (nextStatus, token = "") => {
      if (!active) return;
      onToken(token);
      setStatus(nextStatus);
    };
    const renderWidget = () => {
      if (!active || !api) return;
      const nextCompact = container.current.clientWidth < 300;
      if (widgetId !== undefined && compact === nextCompact) return;
      if (widgetId !== undefined) api.remove(widgetId);
      compact = nextCompact;
      report("ready");
      widgetId = api.render(container.current, {
        sitekey: siteKey,
        // Flexible widgets require at least 300px; compact avoids mobile overflow.
        size: compact ? "compact" : "flexible",
        theme: "light",
        language: "es",
        "response-field": false,
        "refresh-expired": "manual",
        callback: (token) => report("verified", token),
        "expired-callback": () => report("expired"),
        "error-callback": () => { report("error"); return true; },
        "timeout-callback": () => report("expired"),
      });
      widget.current = widgetId;
    };
    const resizeObserver = new ResizeObserver(() => {
      // Rendering changes the container height; defer it outside observer delivery.
      cancelAnimationFrame(resizeFrame);
      resizeFrame = requestAnimationFrame(() => {
        try { renderWidget(); } catch { report("error"); }
      });
    });
    resizeObserver.observe(container.current);
    loadTurnstile().then((loadedApi) => {
      api = loadedApi;
      renderWidget();
    }).catch(() => report("error"));
    return () => {
      active = false;
      resizeObserver.disconnect();
      cancelAnimationFrame(resizeFrame);
      if (widgetId !== undefined) api?.remove(widgetId);
      widget.current = null;
      onToken("");
    };
  }, [siteKey, onToken, attempt]);

  return (
    <div className="contact-turnstile">
      <div ref={container} />
      <p role="status" aria-live="polite" aria-atomic="true">
        {siteKey ? messages[status] : "La verificación de seguridad está pendiente de configuración. Utiliza teléfono, WhatsApp o correo para contactarnos."}
      </p>
      {siteKey && (status === "expired" || status === "error") && (
        <button type="button" onClick={reset}>Volver a verificar</button>
      )}
    </div>
  );
}
