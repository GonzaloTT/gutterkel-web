import Hero from "../../components/Hero/Hero";
import SolutionCard from "../../components/SolutionCard/SolutionCard";
import CTASection from "../../components/CTASection/CTASection";

import solutions from "../../data/solutions";

import {
  PhoneIcon,
  QuoteIcon,
  WhatsAppIcon,
} from "../../components/Icons/Icons";

import "./Solutions.css";

function Solutions() {
  const solutionsCtaActions = [
    {
      label: "Solicitar cotización",
      to: "/contacto",
      variant: "primary",
      icon: <QuoteIcon />,
    },
    {
      label: "Contactar por WhatsApp",
      href: "#",
      variant: "whatsapp",
      icon: <WhatsAppIcon />,
    },
    {
      label: "Llamar ahora",
      href: "tel:+524423209124",
      variant: "secondary",
      icon: <PhoneIcon />,
    },
  ];

  return (
    <>
      <Hero
        variant="internal"
        eyebrow="Catálogo técnico y sistemas arquitectónicos"
        title="Soluciones diseñadas para proteger, mejorar y transformar tus espacios"
        description="Explora nuestras soluciones especializadas para canalización pluvial, protección arquitectónica, acabados, fachadas y aislamiento."
      />

      <section className="solutions-catalog section">
        <div className="container">
          <div className="solutions-catalog__header">
            <span className="solutions-catalog__eyebrow">
              Soluciones especializadas
            </span>

            <h2 className="solutions-catalog__title">
              Encuentra la solución adecuada para tu proyecto
            </h2>

            <p className="solutions-catalog__description">
              Cada sistema cuenta con características, aplicaciones y
              ventajas específicas. Consulta el detalle de cada solución
              para conocer cómo puede integrarse a tu proyecto.
            </p>
          </div>

          <div className="solutions-catalog__grid">
            {solutions.map((solution) => (
              <SolutionCard
                key={solution.id}
                {...solution}
              />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Atención personalizada"
        title="¿Tienes un proyecto en mente?"
        description="Cuéntanos qué necesitas y te ayudaremos a identificar la solución más adecuada para tu proyecto."
        actions={solutionsCtaActions}
      />
    </>
  );
}

export default Solutions;