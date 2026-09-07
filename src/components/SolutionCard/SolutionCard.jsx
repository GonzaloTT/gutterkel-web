import { Link } from "react-router-dom";

import { ArrowRightIcon } from "../Icons/Icons";

import "./SolutionCard.css";

function SolutionCard({
  title,
  category,
  description,
  benefit,
  image,
  href,
}) {
  return (
    <article className="solution-card">
      <div className="solution-card__media">
        {image ? (
          <img
            src={image}
            alt=""
            className="solution-card__image"
          />
        ) : (
          <div
            className="solution-card__placeholder"
            aria-hidden="true"
          >
            <span>Imagen pendiente</span>
          </div>
        )}

        {category && (
          <span className="solution-card__category">
            {category}
          </span>
        )}
      </div>

      <div className="solution-card__content">
        <h3 className="solution-card__title">
          {title}
        </h3>

        <p className="solution-card__description">
          {description}
        </p>

        {benefit && (
          <p className="solution-card__benefit">
            {benefit}
          </p>
        )}

        <Link
          to={href}
          className="solution-card__link"
        >
          Conocer solución
          <ArrowRightIcon size={16} />
        </Link>
      </div>
    </article>
  );
}

export default SolutionCard;