import Hero from "../../components/Hero/Hero";
import NumberedCard from "../../components/NumberedCard/NumberedCard";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import CTASection from "../../components/CTASection/CTASection";

import projects from "../../data/projects";

import {
  ArchitectureIcon,
  GlobeIcon,
  LinkIcon,
  LocationIcon,
  MeasureIcon,
  PhoneIcon,
  QuoteIcon,
  ShieldIcon,
  ToolsIcon,
  UsersIcon,
  WhatsAppIcon,
} from "../../components/Icons/Icons";

import "./Projects.css";

function Projects() {
  const trustReasons = [
    {
      number: "01",
      title: "Soluciones especializadas",
      description:
        "Integramos sistemas diseñados para responder a necesidades arquitectónicas y técnicas específicas.",
      meta: "Experiencia técnica",
      icon: <ToolsIcon />,
      tone: "primary",
    },
    {
      number: "02",
      title: "Atención técnica",
      description:
        "Acompañamos cada proyecto con orientación especializada desde la evaluación hasta la instalación.",
      meta: "Acompañamiento profesional",
      icon: <UsersIcon />,
      tone: "success",
    },
    {
      number: "03",
      title: "Integración arquitectónica",
      description:
        "Buscamos que cada solución funcione correctamente sin comprometer la estética del proyecto.",
      meta: "Diseño y funcionalidad",
      icon: <ArchitectureIcon />,
      tone: "dark",
    },
    {
      number: "04",
      title: "Cobertura de proyectos",
      description:
        "Atendemos proyectos residenciales, comerciales e industriales según sus necesidades específicas.",
      meta: "Atención nacional",
      icon: <GlobeIcon />,
      tone: "success",
    },
  ];

  const projectsCtaActions = [
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

              <h3>Operación desde Querétaro</h3>

              <p>
                Coordinamos proyectos y atención técnica desde nuestra
                operación en Querétaro.
              </p>
            </article>

            <article className="projects-philosophy-card">
              <span className="projects-philosophy-card__icon projects-philosophy-card__icon--success">
                <ShieldIcon />
              </span>

              <h3>Atención especializada</h3>

              <p>
                Cada proyecto se analiza de acuerdo con sus necesidades
                técnicas y arquitectónicas.
              </p>
            </article>

            <article className="projects-philosophy-card">
              <span className="projects-philosophy-card__icon projects-philosophy-card__icon--primary">
                <LinkIcon />
              </span>

              <h3>Soluciones integradas</h3>

              <p>
                Buscamos que cada sistema se integre correctamente a la
                construcción y a su diseño.
              </p>
            </article>

            <article className="projects-philosophy-card">
              <span className="projects-philosophy-card__icon projects-philosophy-card__icon--dark">
                <UsersIcon />
              </span>

              <h3>Proyectos diversos</h3>

              <p>
                Trabajamos con necesidades residenciales, comerciales y
                arquitectónicas de distintos tipos.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="projects-gallery section">
        <div className="container">
          <div className="projects-gallery__header">
            <div>
              <span className="projects-gallery__eyebrow">
                Portafolio de ejecución
              </span>

              <h2 className="projects-gallery__title">
                Obras realizadas
              </h2>

              <p className="projects-gallery__description">
                Una selección visual de proyectos y aplicaciones desarrolladas
                con distintas soluciones arquitectónicas.
              </p>
            </div>

            <div className="projects-gallery__filters">
              <button
                type="button"
                className="projects-gallery__filter projects-gallery__filter--active"
              >
                Todos
              </button>

              <button
                type="button"
                className="projects-gallery__filter"
              >
                Residencial
              </button>

              <button
                type="button"
                className="projects-gallery__filter"
              >
                Comercial
              </button>

              <button
                type="button"
                className="projects-gallery__filter"
              >
                Industrial
              </button>

              <button
                type="button"
                className="projects-gallery__filter"
              >
                Fachadas
              </button>
            </div>
          </div>

          <div className="projects-gallery__grid">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                {...project}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="projects-trust section">
        <div className="container">
          <div className="projects-trust__header">
            <span className="projects-trust__eyebrow">
              Diferenciadores constructivos
            </span>

            <h2 className="projects-trust__title">
              Por qué elegir Gutterkel México
            </h2>

            <p className="projects-trust__description">
              Combinamos soluciones técnicas, atención especializada e
              integración arquitectónica para responder a las necesidades de
              cada proyecto.
            </p>
          </div>

          <div className="projects-trust__grid">
            {trustReasons.map((reason) => (
              <NumberedCard
                key={reason.number}
                {...reason}
              />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Atención personalizada"
        title="¿Tienes un proyecto en mente?"
        description="Cuéntanos qué necesitas y te ayudaremos a encontrar la solución más adecuada para tu proyecto. Nuestro equipo puede orientarte desde la evaluación inicial hasta la implementación."
        actions={projectsCtaActions}
      />
    </>
  );
}

export default Projects;