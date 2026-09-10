import { Link, useParams } from "react-router-dom";

import CTASection from "../../components/CTASection/CTASection";
import Hero from "../../components/Hero/Hero";
import SolutionAdvantages from "../../components/SolutionAdvantages/SolutionAdvantages";
import SolutionFeatures from "../../components/SolutionFeatures/SolutionFeatures";
import SolutionIntro from "../../components/SolutionIntro/SolutionIntro";
import MobileProfiler from "../../components/MobileProfiler/MobileProfiler";
import GutterParts from "../../components/GutterParts/GutterParts";
import FixingSystems from "../../components/FixingSystems/FixingSystems";
import FacadeElements from "../../components/FacadeElements/FacadeElements";

import solutionDetails from "../../data/solutionDetails";

import {
  PhoneIcon,
  QuoteIcon,
  WhatsAppIcon,
} from "../../components/Icons/Icons";

import "./SolutionDetail.css";

function SolutionDetail() {
  const { slug } = useParams();

  const solution = solutionDetails[slug];

  if (!solution) {
    return (
      <main className="solution-detail-error">
        <div className="container">
          <span className="solution-detail-error__eyebrow">
            Solución no encontrada
          </span>

          <h1>
            La solución que buscas no está disponible.
          </h1>

          <p>
            Revisa nuestras soluciones disponibles para encontrar la
            información que necesitas.
          </p>

          <Link
            to="/soluciones"
            className="solution-detail-error__link"
          >
            Volver a soluciones
          </Link>
        </div>
      </main>
    );
  }

  const solutionCtaActions = [
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
        variant="solution-detail"
        eyebrow={solution.category}
        title={solution.title}
        description={solution.description}
        image={solution.heroImage}
      />

      {solution.intro && (
        <SolutionIntro
          {...solution.intro}
          imageAlt={solution.title}
        />
      )}

      {solution.features && (
        <SolutionFeatures
          title="Características principales"
          description="Aspectos que definen el funcionamiento y la aplicación de esta solución."
          items={solution.features}
        />
      )}

      {solution.advantages && (
        <SolutionAdvantages
          title="Ventajas únicas"
          description="Beneficios que aporta esta solución dentro de distintos tipos de proyecto."
          items={solution.advantages}
        />
      )}

      {solution.facadeElements && (
        <FacadeElements
            {...solution.facadeElements}
        />
      )}

      {solution.mobileProfiler && (
        <MobileProfiler
            {...solution.mobileProfiler}
        />
      )}

      {solution.gutterParts && (
        <GutterParts
            {...solution.gutterParts}
        />
      )}

      {solution.fixingSystems && (
        <FixingSystems
            {...solution.fixingSystems}
        />
      )}

      <CTASection
        eyebrow="Atención personalizada"
        title="¿Esta solución se adapta a tu proyecto?"
        description="Cuéntanos las características de tu obra y nuestro equipo podrá orientarte sobre la mejor forma de integrar esta solución."
        actions={solutionCtaActions}
      />
    </>
  );
}

export default SolutionDetail;