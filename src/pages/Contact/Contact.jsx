import Hero from "../../components/Hero/Hero";
import ContactForm from "../../components/ContactForm/ContactForm";

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
            <div className="contact-main__placeholder">
              <span>Contacto directo</span>
              <p>
                WhatsApp, teléfono, correo y ubicación.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

export default Contact;