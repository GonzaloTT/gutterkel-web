import { Link } from "react-router-dom";

import Hero from "../../components/Hero/Hero";
import SolutionCard from "../../components/SolutionCard/SolutionCard";
import solutions from "../../data/solutions";

import {
  ArrowRightIcon,
  GlobeIcon,
  HiddenFixingIcon,
  MeasureIcon,
  QuoteIcon,
  ShieldIcon,
  WhatsAppIcon,
} from "../../components/Icons/Icons";

import "./Home.css";

function Home() {
  const heroActions = [
    {
      label: "Solicitar cotización",
      to: "/contacto",
      variant: "primary",
      icon: <QuoteIcon />,
    },
    {
      label: "Ver soluciones",
      to: "/soluciones",
      variant: "secondary",
      icon: <ArrowRightIcon />,
      iconPosition: "right",
    },
    {
      label: "WhatsApp rápido",
      href: "#",
      variant: "whatsapp",
      icon: <WhatsAppIcon />,
    },
  ];

  const heroHighlights = [
    {
      title: "Garantía de 7 años",
      description: "Respaldo estructural",
      icon: <ShieldIcon />,
    },
    {
      title: "Fabricación a medida",
      description: "Soluciones para cada proyecto",
      icon: <MeasureIcon />,
    },
    {
      title: "Cobertura nacional",
      description: "Atención en todo México",
      icon: <GlobeIcon />,
    },
    {
      title: "Fijación oculta",
      description: "Acabado limpio y funcional",
      icon: <HiddenFixingIcon />,
    },
  ];

  return (
    <>
      <Hero
        variant="home"
        eyebrow="Ingeniería europea · Fabricación a medida en México"
        title="Soluciones que protegen y transforman tu fachada"
        description="Sistemas de canalización pluvial, protección arquitectónica y acabados fabricados a medida para residencias, desarrollos comerciales e industriales."
        actions={heroActions}
        highlights={heroHighlights}
      />
      <section className="home-solutions section">
        <div className="container">
          <div className="home-solutions__header">
            <div>
              <span className="home-solutions__eyebrow">
                Catálogo técnico especializado
              </span>

              <h2 className="home-solutions__title">
                Soluciones para cada proyecto
              </h2>

              <p className="home-solutions__description">
                Sistemas arquitectónicos diseñados para proteger,
                resolver necesidades técnicas y adaptarse a cada tipo
                de proyecto.
              </p>
            </div>

            <Link
              to="/soluciones"
              className="home-solutions__all-link"
            >
              Explorar todas las líneas
              <ArrowRightIcon size={16} />
            </Link>
          </div>

          <div className="home-solutions__grid">
            {solutions.map((solution) => (
              <SolutionCard
                key={solution.id}
                {...solution}
              />
            ))}
          </div>
        </div>
      </section>
      <section
        id="nosotros"
        className="home-benefits section scroll-target"
      >
        <div className="container">
          <div className="home-benefits__header">
            <span className="home-benefits__eyebrow">
              Estándares industriales de alto nivel
            </span>

            <h2 className="home-benefits__title">
              Por qué arquitectos y constructores eligen Gutterkel
            </h2>

            <p className="home-benefits__description">
              Integramos fabricación especializada, soluciones técnicas
              y atención personalizada para responder a las necesidades
              de cada proyecto arquitectónico.
            </p>
          </div>

          <div className="home-benefits__grid">
            <article className="home-benefit-card">
              <div className="home-benefit-card__icon">
                <span aria-hidden="true">EU</span>
              </div>

              <h3 className="home-benefit-card__title">
                Tecnología europea
              </h3>

              <p className="home-benefit-card__description">
                Aplicamos soluciones y procesos especializados orientados
                a lograr acabados precisos y durables.
              </p>
            </article>

            <article className="home-benefit-card">
              <div className="home-benefit-card__icon">
                <span aria-hidden="true">↔</span>
              </div>

              <h3 className="home-benefit-card__title">
                Fabricación a medida
              </h3>

              <p className="home-benefit-card__description">
                Adaptamos cada sistema a las dimensiones y necesidades
                específicas de cada proyecto.
              </p>
            </article>

            <article className="home-benefit-card">
              <div className="home-benefit-card__icon">
                <span aria-hidden="true">⌂</span>
              </div>

              <h3 className="home-benefit-card__title">
                Soluciones especializadas
              </h3>

              <p className="home-benefit-card__description">
                Integramos soluciones para canalización pluvial,
                protección arquitectónica y acabados técnicos.
              </p>
            </article>

            <article className="home-benefit-card">
              <div className="home-benefit-card__icon">
                <span aria-hidden="true">✓</span>
              </div>

              <h3 className="home-benefit-card__title">
                Instalación profesional
              </h3>

              <p className="home-benefit-card__description">
                Nuestro enfoque prioriza una instalación limpia,
                ordenada y adecuada para cada aplicación.
              </p>
            </article>

            <article className="home-benefit-card">
              <div className="home-benefit-card__icon">
                <span aria-hidden="true">◇</span>
              </div>

              <h3 className="home-benefit-card__title">
                Protección arquitectónica
              </h3>

              <p className="home-benefit-card__description">
                Diseñamos soluciones que ayudan a reducir humedad,
                escurrimientos y deterioro en fachadas.
              </p>
            </article>

            <article className="home-benefit-card">
              <div className="home-benefit-card__icon">
                <span aria-hidden="true">◎</span>
              </div>

              <h3 className="home-benefit-card__title">
                Cobertura nacional
              </h3>

              <p className="home-benefit-card__description">
                Atendemos proyectos en distintas regiones de México
                según las necesidades de cada obra.
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;