import Hero from "../../components/Hero/Hero";

import {
  LinkIcon,
  LocationIcon,
  MeasureIcon,
  ShieldIcon,
  UsersIcon,
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

      <section className="projects-philosophy section">
        <div className="container projects-philosophy__container">
          <div className="projects-philosophy__content">
            <span className="projects-philosophy__eyebrow">
              Nuestra filosofía técnica
            </span>

            <h2 className="projects-philosophy__title">
              Erradicando la vulnerabilidad hidráulica de la arquitectura
            </h2>

            <p className="projects-philosophy__description">
              En Gutterkel México buscamos resolver necesidades de
              canalización pluvial y protección arquitectónica mediante
              soluciones adaptadas a las condiciones reales de cada obra.
            </p>

            <div className="projects-philosophy__statement">
              <strong>
                Soluciones pensadas desde el proyecto, no como un elemento
                añadido al final.
              </strong>

              <p>
                Nuestro enfoque combina evaluación técnica, fabricación
                especializada e integración arquitectónica para lograr
                sistemas funcionales y visualmente coherentes.
              </p>
            </div>

            <div className="projects-philosophy__technical">
              <span className="projects-philosophy__technical-label">
                Enfoque de trabajo
              </span>

              <div className="projects-philosophy__technical-grid">
                <div>
                  <strong>01</strong>
                  <span>Análisis del proyecto</span>
                </div>

                <div>
                  <strong>02</strong>
                  <span>Adaptación de la solución</span>
                </div>

                <div>
                  <strong>03</strong>
                  <span>Integración arquitectónica</span>
                </div>
              </div>
            </div>
          </div>

          <div className="projects-philosophy__cards">
            <article className="projects-philosophy-card">
              <span className="projects-philosophy-card__icon projects-philosophy-card__icon--primary">
                <LocationIcon />
              </span>

              <h3>
                Operación desde Querétaro
              </h3>

              <p>
                Coordinamos proyectos y atención técnica desde nuestra
                operación en Querétaro.
              </p>
            </article>

            <article className="projects-philosophy-card">
              <span className="projects-philosophy-card__icon projects-philosophy-card__icon--success">
                <ShieldIcon />
              </span>

              <h3>
                Atención especializada
              </h3>

              <p>
                Cada proyecto se analiza de acuerdo con sus necesidades
                técnicas y arquitectónicas.
              </p>
            </article>

            <article className="projects-philosophy-card">
              <span className="projects-philosophy-card__icon projects-philosophy-card__icon--primary">
                <LinkIcon />
              </span>

              <h3>
                Soluciones integradas
              </h3>

              <p>
                Buscamos que cada sistema se integre correctamente a la
                construcción y a su diseño.
              </p>
            </article>

            <article className="projects-philosophy-card">
              <span className="projects-philosophy-card__icon projects-philosophy-card__icon--dark">
                <UsersIcon />
              </span>

              <h3>
                Proyectos diversos
              </h3>

              <p>
                Trabajamos con necesidades residenciales, comerciales y
                arquitectónicas de distintos tipos.
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;