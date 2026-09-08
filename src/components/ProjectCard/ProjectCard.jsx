import { Link } from "react-router-dom";

import { ArrowRightIcon, LocationIcon } from "../Icons/Icons";

import "./ProjectCard.css";

function ProjectCard({
  slug,
  title,
  category,
  location,
  description,
  image,
}) {
  return (
    <article className="project-card">
      <div className="project-card__media">
        {image ? (
          <img
            src={image}
            alt={title}
            className="project-card__image"
          />
        ) : (
          <div
            className="project-card__placeholder"
            aria-hidden="true"
          >
            <span>Imagen pendiente</span>
          </div>
        )}

        <span className="project-card__category">
          {category}
        </span>
      </div>

      <div className="project-card__content">
        <div className="project-card__location">
          <LocationIcon size={15} />
          <span>{location}</span>
        </div>

        <h3 className="project-card__title">
          {title}
        </h3>

        <p className="project-card__description">
          {description}
        </p>

        <Link
          to={`/proyectos/${slug}`}
          className="project-card__link"
        >
          Ver detalle del proyecto
          <ArrowRightIcon size={16} />
        </Link>
      </div>
    </article>
  );
}

export default ProjectCard;