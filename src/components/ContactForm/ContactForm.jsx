import {
  ArrowRightIcon,
  BuildingIcon,
  LocationIcon,
  MailIcon,
  PhoneIcon,
  UserIcon,
} from "../Icons/Icons";

import "./ContactForm.css";

const solutionOptions = [
  "Canalón continuo",
  "Cubre Pretil / Goterón",
  "Techos Falsos / Plafones",
  "Fachada Ventilada",
  "Otro",
];

function ContactForm() {
  function handleSubmit(event) {
    event.preventDefault();

    console.log("Envío pendiente de integración");
  }

  return (
    <form
      className="contact-form"
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
              type="text"
              placeholder="Ej. Arq. Roberto Gómez"
              autoComplete="name"
              required
            />
          </div>
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
              type="text"
              placeholder="Ej. Constructora del Bajío"
              autoComplete="organization"
            />
          </div>
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
              type="tel"
              placeholder="Ej. 442 123 4567"
              autoComplete="tel"
              required
            />
          </div>
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
              type="email"
              placeholder="correo@ejemplo.com"
              autoComplete="email"
              required
            />
          </div>
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
              type="text"
              placeholder="Ej. Querétaro, Qro."
              autoComplete="address-level2"
              required
            />
          </div>
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
              defaultValue=""
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
        </div>

        <fieldset className="contact-form__field contact-form__field--full contact-form__solutions">
          <legend>
            Solución de interés
            <span aria-hidden="true">*</span>
          </legend>

          <span className="contact-form__hint">
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
                />

                <span className="contact-form__solution-check" />

                <span>{solution}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <div className="contact-form__field contact-form__field--full">
          <label htmlFor="details">
            Detalles del proyecto
          </label>

          <textarea
            id="details"
            name="details"
            rows="5"
            placeholder="Ej. Dimensiones aproximadas, tipo de construcción, color, número de bajadas pluviales o cualquier otra información relevante."
          />
        </div>
      </div>

      <button
        type="submit"
        className="contact-form__submit"
      >
        Solicitar cotización
        <ArrowRightIcon size={18} />
      </button>

      <p className="contact-form__legal">
        La información proporcionada será utilizada únicamente para
        atender tu solicitud de contacto y cotización.
      </p>
    </form>
  );
}

export default ContactForm;