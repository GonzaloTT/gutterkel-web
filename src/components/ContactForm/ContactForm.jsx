import { useRef, useState } from "react";
import { emptyContactForm, fieldLimits, solutionOptions, validateContactPayload } from "../../utils/formValidation";
import { submitContact } from "../../services/contact";

import {
  ArrowRightIcon,
  BuildingIcon,
  LocationIcon,
  MailIcon,
  PhoneIcon,
  UserIcon,
} from "../Icons/Icons";

import "./ContactForm.css";

function ContactForm() {
  const [values, setValues] = useState(emptyContactForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");
  const submitting = useRef(false);
  const formRef = useRef(null);
  const feedbackRef = useRef(null);

  function updateField(event) {
    const { name, value, checked, type } = event.target;
    if (status === "submitting") return;
    setValues((current) => ({
      ...current,
      [name]: type === "checkbox"
        ? (checked ? [...current.solutions, value] : current.solutions.filter((item) => item !== value))
        : value,
    }));
    setErrors((current) => ({ ...current, [name]: undefined }));
    setStatus("idle");
    setMessage("");
  }

  function fieldProps(name) {
    return {
      value: values[name], onChange: updateField,
      disabled: status === "submitting", maxLength: fieldLimits[name],
      "aria-invalid": Boolean(errors[name]),
      "aria-describedby": errors[name] ? name + "-error" : undefined,
    };
  }

  function fieldError(name) {
    return errors[name] ? <p id={name + "-error"} className="contact-form__error">{errors[name]}</p> : null;
  }

  function focusFeedback(nextErrors) {
    requestAnimationFrame(() => {
      const first = Object.keys(nextErrors).find((name) => Object.hasOwn(values, name));
      const control = first && formRef.current?.querySelector('[name="' + first + '"]');
      (control || feedbackRef.current)?.focus();
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (submitting.current) return;
    const result = validateContactPayload(values);
    setErrors(result.errors);
    if (!result.valid) {
      setStatus("error");
      setMessage("Revisa los campos indicados para continuar.");
      focusFeedback(result.errors);
      return;
    }
    // Future Turnstile widget callback supplies a real token; never invent one.
    // Fail closed if someone enables a site key before the widget is implemented.
    if (import.meta.env.VITE_TURNSTILE_SITE_KEY) {
      setStatus("error");
      setMessage("La verificación de seguridad todavía no está disponible. Utiliza otro medio de contacto.");
      focusFeedback({});
      return;
    }
    submitting.current = true;
    setStatus("submitting");
    setMessage("Procesando tu solicitud…");
    try {
      const response = await submitContact({ ...result.data, turnstileToken: "" });
      const nextErrors = {};
      for (const [name, error] of Object.entries(response.errors || {})) {
        if (Object.hasOwn(values, name) && typeof error === "string") nextErrors[name] = error;
      }
      setErrors(nextErrors);
      setStatus(response.success ? "success" : "error");
      setMessage(response.message);
      // A rehearsal is not delivery: preserve values so the user can contact us.
      if (response.success && !response.preview) setValues(emptyContactForm);
      focusFeedback(nextErrors);
    } finally {
      submitting.current = false;
    }
  }

  return (
    <form
      className="contact-form"
      ref={formRef}
      noValidate
      aria-busy={status === "submitting"}
      onSubmit={handleSubmit}
    >
      <div className="contact-form__header">
        <div>
          <span className="contact-form__eyebrow">
            Formulario técnico especializado
          </span>

          <h2 className="contact-form__title">
            Solicitud de cotización
          </h2>

          <p className="contact-form__description">
            Compártenos la información general de tu proyecto para
            preparar una atención más precisa.
          </p>
        </div>

        <span className="contact-form__status">
          Información inicial
        </span>
      </div>

      <div className="contact-form__fields">
        <div className="contact-form__field contact-form__field--full">
          <label htmlFor="name">
            Nombre completo
            <span aria-hidden="true">*</span>
          </label>

          <div className="contact-form__control">
            <UserIcon size={18} />

            <input
              id="name"
              name="name"
              {...fieldProps("name")}
              type="text"
              placeholder="Ej. Arq. Roberto Gómez"
              autoComplete="name"
              required
            />
          </div>
          {fieldError("name")}
        </div>

        <div className="contact-form__field contact-form__field--full">
          <label htmlFor="company">
            Empresa / Constructora
            <small>Opcional</small>
          </label>

          <div className="contact-form__control">
            <BuildingIcon size={18} />

            <input
              id="company"
              name="company"
              {...fieldProps("company")}
              type="text"
              placeholder="Ej. Constructora del Bajío"
              autoComplete="organization"
            />
          </div>
          {fieldError("company")}
        </div>

        <div className="contact-form__field">
          <label htmlFor="phone">
            Teléfono / WhatsApp
            <span aria-hidden="true">*</span>
          </label>

          <div className="contact-form__control">
            <PhoneIcon size={18} />

            <input
              id="phone"
              name="phone"
              {...fieldProps("phone")}
              type="tel"
              placeholder="Ej. 442 123 4567"
              autoComplete="tel"
              required
            />
          </div>
          {fieldError("phone")}
        </div>

        <div className="contact-form__field">
          <label htmlFor="email">
            Correo electrónico
            <span aria-hidden="true">*</span>
          </label>

          <div className="contact-form__control">
            <MailIcon size={18} />

            <input
              id="email"
              name="email"
              {...fieldProps("email")}
              type="email"
              placeholder="correo@ejemplo.com"
              autoComplete="email"
              required
            />
          </div>
          {fieldError("email")}
        </div>

        <div className="contact-form__field">
          <label htmlFor="location">
            Ciudad y estado de la obra
            <span aria-hidden="true">*</span>
          </label>

          <div className="contact-form__control">
            <LocationIcon size={18} />

            <input
              id="location"
              name="location"
              {...fieldProps("location")}
              type="text"
              placeholder="Ej. Querétaro, Qro."
              autoComplete="address-level2"
              required
            />
          </div>
          {fieldError("location")}
        </div>

        <div className="contact-form__field">
          <label htmlFor="projectType">
            Tipo de proyecto
            <span aria-hidden="true">*</span>
          </label>

          <div className="contact-form__control contact-form__control--select">
            <select
              id="projectType"
              name="projectType"
              {...fieldProps("projectType")}
              required
            >
              <option value="" disabled>
                Selecciona una categoría
              </option>

              <option value="residential">
                Residencial
              </option>

              <option value="commercial">
                Comercial
              </option>

              <option value="industrial">
                Industrial
              </option>

              <option value="corporate">
                Corporativo
              </option>

              <option value="other">
                Otro
              </option>
            </select>
          </div>
          {fieldError("projectType")}
        </div>

        <fieldset className="contact-form__field contact-form__field--full contact-form__solutions"
          disabled={status === "submitting"}
          aria-invalid={Boolean(errors.solutions)}
          aria-describedby={errors.solutions ? "solutions-hint solutions-error" : "solutions-hint"}>
          <legend>
            Solución de interés
            <span aria-hidden="true">*</span>
          </legend>

          <span id="solutions-hint" className="contact-form__hint">
            Puedes seleccionar una o varias
          </span>

          <div className="contact-form__solution-grid">
            {solutionOptions.map((solution) => (
              <label
                key={solution}
                className="contact-form__solution-option"
              >
                <input
                  type="checkbox"
                  name="solutions"
                  value={solution}
                  checked={values.solutions.includes(solution)}
                  onChange={updateField}
                  aria-invalid={Boolean(errors.solutions)}
                  aria-describedby={errors.solutions ? "solutions-hint solutions-error" : "solutions-hint"}
                />

                <span className="contact-form__solution-check" />

                <span>{solution}</span>
              </label>
            ))}
          </div>
          {fieldError("solutions")}
        </fieldset>

        <div className="contact-form__field contact-form__field--full">
          <label htmlFor="details">
            Detalles del proyecto
            <span aria-hidden="true">*</span>
          </label>

          <textarea
            id="details"
            name="details"
              {...fieldProps("details")}
            required
            rows="5"
            placeholder="Ej. Dimensiones aproximadas, tipo de construcción, color, número de bajadas pluviales o cualquier otra información relevante."
          />
        </div>
          {fieldError("details")}
      </div>

      <button
        type="submit"
        className="contact-form__submit"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Enviando..." : "Solicitar cotización"}
        <ArrowRightIcon size={18} />
      </button>

      <p ref={feedbackRef} tabIndex={-1} role="status" aria-live="polite" aria-atomic="true"
        className="contact-form__feedback" data-status={status}>{message}</p>

      <p className="contact-form__legal">
        La información proporcionada será utilizada únicamente para
        atender tu solicitud de contacto y cotización.
      </p>
    </form>
  );
}

export default ContactForm;
