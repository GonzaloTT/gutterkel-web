import Hero from "../../components/Hero/Hero";

import {
  MeasureIcon,
  ShieldIcon,
} from "../../components/Icons/Icons";

import "./Projects.css";

function Projects() {
  return (
    <>
      <Hero
        variant="internal-split"
        eyebrow="Experiencia, rigor técnico y obras reales"
        title="Ingeniería, experiencia y soluciones hechas para cada proyecto"
        description="En Gutterkel México combinamos soluciones arquitectónicas especializadas con atención técnica para responder a proyectos residenciales, comerciales e industriales."
      >
        <div className="projects-hero__stats">
          <article className="projects-hero-stat projects-hero-stat--primary">
            <div className="projects-hero-stat__content">
              <span className="projects-hero-stat__label">
                Experiencia en proyectos
              </span>

              <strong className="projects-hero-stat__value">
                Soluciones a medida
              </strong>

              <span className="projects-hero-stat__description">
                Aplicaciones adaptadas a cada obra
              </span>
            </div>

            <span className="projects-hero-stat__icon">
              <MeasureIcon size={24} />
            </span>
          </article>

          <article className="projects-hero-stat projects-hero-stat--success">
            <div className="projects-hero-stat__content">
              <span className="projects-hero-stat__label">
                Enfoque técnico
              </span>

              <strong className="projects-hero-stat__value">
                Instalación especializada
              </strong>

              <span className="projects-hero-stat__description">
                Atención profesional en cada etapa
              </span>
            </div>

            <span className="projects-hero-stat__icon">
              <ShieldIcon size={24} />
            </span>
          </article>
        </div>
      </Hero>
    </>
  );
}

export default Projects;