import Hero from "../../components/Hero/Hero";
import ContactForm from "../../components/ContactForm/ContactForm";

import {
  LocationIcon,
  MailIcon,
  PhoneIcon,
  WhatsAppIcon,
} from "../../components/Icons/Icons";

import "./Contact.css";

function Contact() {
  return (
    <>
      <Hero
        variant="internal-split"
        eyebrow="Cotización rápida · Atención directa"
        title="Cuéntanos sobre tu proyecto"
        description="Solicita información o una cotización para encontrar la solución más adecuada para tu obra."
      >
        <div className="contact-hero__message">
          <p>
            Comparte las características generales de tu proyecto y
            nuestro equipo podrá orientarte sobre las soluciones
            disponibles.
          </p>

          <span>
            Atención para proyectos residenciales, comerciales e
            industriales.
          </span>
        </div>
      </Hero>

      <section className="contact-main section">
        <div className="container contact-main__grid">
          <div className="contact-main__form">
            <ContactForm />
          </div>

          <aside className="contact-main__sidebar">
            <article className="contact-card contact-card--whatsapp">
              <div className="contact-card__header">
                <span className="contact-card__icon contact-card__icon--whatsapp">
                  <WhatsAppIcon size={22} />
                </span>

                <div>
                  <span className="contact-card__eyebrow">
                    Atención directa
                  </span>

                  <h2 className="contact-card__title">
                    WhatsApp
                  </h2>
                </div>
              </div>

              <p className="contact-card__value">
                442 320 9124
              </p>

              <p className="contact-card__description">
                Escríbenos para compartir información de tu proyecto o resolver
                dudas iniciales.
              </p>

              <a
                href="#"
                className="contact-card__action contact-card__action--whatsapp"
              >
                <WhatsAppIcon size={17} />

                Abrir WhatsApp
              </a>
            </article>

            <article className="contact-card">
              <div className="contact-card__header">
                <span className="contact-card__icon contact-card__icon--primary">
                  <PhoneIcon size={21} />
                </span>

                <div>
                  <span className="contact-card__eyebrow">
                    Contacto telefónico
                  </span>

                  <h2 className="contact-card__title">
                    Habla con nuestro equipo
                  </h2>
                </div>
              </div>

              <p className="contact-card__value">
                442 320 9124
              </p>

              <p className="contact-card__description">
                Comunícate directamente con nuestro equipo para recibir
                orientación sobre tu proyecto.
              </p>

              <a
                href="tel:+524423209124"
                className="contact-card__action contact-card__action--dark"
              >
                <PhoneIcon size={16} />

                Llamar ahora
              </a>
            </article>

            <article className="contact-card">
              <div className="contact-card__header">
                <span className="contact-card__icon contact-card__icon--neutral">
                  <MailIcon size={21} />
                </span>

                <div>
                  <span className="contact-card__eyebrow">
                    Proyectos y ventas
                  </span>

                  <h2 className="contact-card__title">
                    Correo electrónico
                  </h2>
                </div>
              </div>

              <a
                href="mailto:ventas@gutterkelmexico.com"
                className="contact-card__email"
              >
                ventas@gutterkelmexico.com
              </a>

              <p className="contact-card__description">
                También puedes enviarnos la información general de tu proyecto
                directamente por correo.
              </p>
            </article>

            <article className="contact-location">
              <div className="contact-location__header">
                <span className="contact-card__icon contact-card__icon--success">
                  <LocationIcon size={21} />
                </span>

                <div>
                  <span className="contact-card__eyebrow">
                    Ubicación
                  </span>

                  <h2 className="contact-card__title">
                    Querétaro, México
                  </h2>
                </div>
              </div>

              <p className="contact-location__address">
                Santa Bárbara, El Pueblito, Querétaro.
              </p>

              <div className="contact-location__map">
                <div className="contact-location__map-placeholder">
                  <LocationIcon size={30} />

                  <span>
                    Mapa pendiente de integración
                  </span>
                </div>
              </div>

              <a
                href="#"
                className="contact-location__maps-link"
              >
                Ver en Google Maps
              </a>
            </article>
          </aside>
        </div>
      </section>
    </>
  );
}

export default Contact;