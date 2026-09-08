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

      <SolutionSection
        id="cubre-pretil"
        eyebrow="Solución 02 · Protección perimetral"
        title="Cubre Pretil y Goterón Avanzado"
        description="Sistema de protección arquitectónica diseñado para remates superiores, pretiles y bordes expuestos, ayudando a controlar escurrimientos y reducir el deterioro visual provocado por humedad y lluvia."
        image={null}
        imagePosition="right"
        features={[
          {
            title: "Protección perimetral",
            description:
              "Ayuda a proteger remates y bordes superiores frente al agua y la humedad.",
            icon: <CheckCircleIcon />,
          },
          {
            title: "Acabado limpio",
            description:
              "Diseñado para integrarse visualmente con fachadas y elementos arquitectónicos.",
            icon: <CheckCircleIcon />,
          },
          {
            title: "Fabricación adaptable",
            description:
              "Puede ajustarse a las dimensiones y características de cada proyecto.",
            icon: <CheckCircleIcon />,
          },
          {
            title: "Fijación discreta",
            description:
              "Configuración pensada para minimizar elementos visibles en el acabado final.",
            icon: <CheckCircleIcon />,
          },
        ]}
        tags={[
          "Residencial",
          "Comercial",
          "Fachadas",
          "Remates arquitectónicos",
        ]}
        action={{
          label: "Cotizar cubre pretil",
          to: "/contacto",
          variant: "primary",
          icon: <QuoteIcon />,
        }}
      />

      <SolutionSection
        id="techos-falsos"
        eyebrow="Solución 03 · Acabados interiores y exteriores"
        title="Sistemas de Techos Falsos y Plafones Metálicos"
        description="Soluciones arquitectónicas para interiores y áreas cubiertas que combinan diseño, durabilidad y facilidad de integración con diferentes tipos de espacios comerciales, corporativos y arquitectónicos."
        image={null}
        imagePosition="left"
        features={[
          {
            title: "Diseño arquitectónico",
            description:
              "Permite crear acabados contemporáneos para interiores y espacios especializados.",
            icon: <CheckCircleIcon />,
          },
          {
            title: "Bajo mantenimiento",
            description:
              "Materiales pensados para conservar una apariencia limpia con mantenimiento reducido.",
            icon: <CheckCircleIcon />,
          },
          {
            title: "Integración técnica",
            description:
              "Compatible con distintas configuraciones de iluminación y servicios del inmueble.",
            icon: <CheckCircleIcon />,
          },
          {
            title: "Aplicación versátil",
            description:
              "Adecuado para oficinas, comercios, áreas corporativas y espacios arquitectónicos.",
            icon: <CheckCircleIcon />,
          },
        ]}
        tags={[
          "Oficinas",
          "Comercial",
          "Corporativo",
          "Interiores",
        ]}
        action={{
          label: "Cotizar techos falsos",
          to: "/contacto",
          variant: "primary",
          icon: <QuoteIcon />,
        }}
      />

      <SolutionSection
        id="fachadas"
        eyebrow="Solución 04 · Envolvente arquitectónica"
        title="Fachadas Ventiladas y Revestimiento Arquitectónico"
        description="Sistema de fachada diseñado para mejorar la protección exterior del inmueble y aportar una imagen arquitectónica moderna, permitiendo integrar diferentes soluciones de revestimiento según las necesidades del proyecto."
        image={null}
        imagePosition="right"
        features={[
          {
            title: "Protección exterior",
            description:
              "Ayuda a proteger la envolvente del inmueble frente a condiciones ambientales.",
            icon: <CheckCircleIcon />,
          },
          {
            title: "Integración arquitectónica",
            description:
              "Permite renovar y modernizar visualmente fachadas residenciales y comerciales.",
            icon: <CheckCircleIcon />,
          },
          {
            title: "Configuración adaptable",
            description:
              "Puede ajustarse a distintas geometrías, acabados y necesidades de diseño.",
            icon: <CheckCircleIcon />,
          },
          {
            title: "Solución técnica",
            description:
              "Pensada para combinar funcionalidad, protección y diseño arquitectónico.",
            icon: <CheckCircleIcon />,
          },
        ]}
        tags={[
          "Comercial",
          "Corporativo",
          "Residencial",
          "Revestimiento",
        ]}
        action={{
          label: "Cotizar fachada ventilada",
          to: "/contacto",
          variant: "primary",
          icon: <QuoteIcon />,
        }}
      />
    </>
  );
}

export default Solutions;