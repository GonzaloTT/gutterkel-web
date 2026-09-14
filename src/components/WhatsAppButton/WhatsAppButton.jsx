import { useEffect, useRef } from "react";

import { WHATSAPP_URL } from "../../utils/whatsapp";
import { WhatsAppIcon } from "../Icons/Icons";

import "./WhatsAppButton.css";

function WhatsAppButton() {
  const linkRef = useRef(null);

  useEffect(() => {
    const link = linkRef.current;
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let intervalId;
    let animation;

    const stopAnimation = () => {
      window.clearInterval(intervalId);
      animation?.cancel();
    };

    const configureAnimation = () => {
      stopAnimation();
      if (motionPreference.matches) return;

      animation = link.animate(
        [{ opacity: 0, translate: "12px 0" }, { opacity: 1, translate: "0 0" }],
        { duration: 450, easing: "ease-out" },
      );

      intervalId = window.setInterval(() => {
        if (document.hidden || link.matches(":hover, :focus-within")) return;
        animation = link.animate(
          [{ scale: "1" }, { scale: "1.025" }, { scale: "1" }],
          { duration: 800, easing: "ease-in-out" },
        );
      }, 45_000);
    };

    configureAnimation();
    motionPreference.addEventListener("change", configureAnimation);
    return () => {
      stopAnimation();
      motionPreference.removeEventListener("change", configureAnimation);
    };
  }, []);

  return (
    <a
      ref={linkRef}
      className="whatsapp-button"
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="¿Necesitas ayuda? Escríbenos por WhatsApp a Gutterkel (se abre en una pestaña nueva)"
    >
      <span className="whatsapp-button__icon" aria-hidden="true">
        <WhatsAppIcon size={28} />
      </span>
      <span className="whatsapp-button__text">
        <strong className="whatsapp-button__title">¿Necesitas ayuda?</strong>
        <span className="whatsapp-button__description">Escríbenos por WhatsApp</span>
      </span>
    </a>
  );
}

export default WhatsAppButton;
