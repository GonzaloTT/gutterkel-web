import Hero from "../../components/Hero/Hero";
import SolutionSection from "../../components/SolutionSection/SolutionSection";

import {
  ArchitectureIcon,
  BuildingIcon,
  DropletIcon,
  RoofIcon,
  CheckCircleIcon,
  QuoteIcon,
} from "../../components/Icons/Icons";

import "./Solutions.css";

function Solutions() {
  const solutionLinks = [
    {
      id: "canalones",
      label: "Canalones pluviales",
      icon: <DropletIcon />,
    },
    {
      id: "cubre-pretil",
      label: "Cubre Pretil / Goterón",
      icon: <RoofIcon />,
    },
    {
      id: "techos-falsos",
      label: "Techos Falsos / Plafones",
      icon: <ArchitectureIcon />,
    },
    {
      id: "fachadas",
      label: "Fachadas ventiladas",
      icon: <BuildingIcon />,
    },
  ];

  return (
    <>
      <Hero
        variant="internal"
        eyebrow="Catálogo técnico y sistemas arquitectónicos"
        title="Soluciones diseñadas para proteger, mejorar y transformar tus espacios"
        description="Conoce nuestras soluciones de canalización pluvial, protección arquitectónica, acabados y sistemas especializados diseñados para adaptarse a las necesidades de cada proyecto."
      >
        <nav
          className="solutions-nav"
          aria-label="Soluciones disponibles"
        >
          {solutionLinks.map((solution) => (
            <a
              key={solution.id}
              href={`#${solution.id}`}
              className="solutions-nav__link"
            >
              <span className="solutions-nav__icon">
                {solution.icon}
              </span>

              <span>
                {solution.label}
              </span>
            </a>
          ))}
        </nav>
      </Hero>

      <SolutionSection
        id="canalones"
        eyebrow="Solución 01 · Evacuación pluvial"
        title="Sistemas de Canalón Continuo de Aluminio"
        description="Sistema de canalización pluvial fabricado a medida para adaptarse a las características de cada proyecto, ofreciendo una integración limpia y funcional con la arquitectura."
        image={null}
        imagePosition="left"
        features={[
          {
            title: "Fabricación a medida",
            description:
              "El sistema se adapta a las dimensiones requeridas por cada proyecto.",
            icon: <CheckCircleIcon />,
          },
          {
            title: "Diseño continuo",
            description:
              "Configuración orientada a reducir uniones visibles y mejorar el acabado.",
            icon: <CheckCircleIcon />,
          },
          {
            title: "Integración arquitectónica",
            description:
              "Diseñado para incorporarse de manera discreta a la estructura del inmueble.",
            icon: <CheckCircleIcon />,
          },
          {
            title: "Aplicaciones diversas",
            description:
              "Adecuado para distintos tipos de proyectos residenciales y comerciales.",
            icon: <CheckCircleIcon />,
          },
        ]}
        tags={[
          "Residencial",
          "Comercial",
          "Industrial",
          "Proyectos arquitectónicos",
        ]}
        action={{
          label: "Cotizar canalón continuo",
          to: "/contacto",
          variant: "primary",
          icon: <QuoteIcon />,
        }}
      />
    </>
  );
}

export default Solutions;