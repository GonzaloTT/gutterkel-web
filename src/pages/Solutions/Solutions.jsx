import Hero from "../../components/Hero/Hero";

import {
  ArchitectureIcon,
  BuildingIcon,
  DropletIcon,
  RoofIcon,
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

      {/* Próxima etapa: SolutionSection */}
    </>
  );
}

export default Solutions;