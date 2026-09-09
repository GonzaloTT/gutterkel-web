import Button from "../Button/Button";

import {
  QuoteIcon,
} from "../Icons/Icons";

import "./MobileProfiler.css";

function MobileProfiler({
  eyebrow = "Fabricación especializada",
  title = "Perfiladora móvil",
  subtitle,
  description,
  image,
  imageAlt = "Perfiladora móvil",
}) {
  return (
    <section className="mobile-profiler section">
      <div className="container mobile-profiler__grid">
        <div className="mobile-profiler__media">
          {image ? (
            <img
              src={image}
              alt={imageAlt}
              className="mobile-profiler__image"
            />
          ) : (
            <div
              className="mobile-profiler__placeholder"
              aria-hidden="true"
            >
              <span>
                Imagen de perfiladora pendiente
              </span>
            </div>
          )}
        </div>

        <div className="mobile-profiler__content">
          <span className="mobile-profiler__eyebrow">
            {eyebrow}
          </span>

          <h2 className="mobile-profiler__title">
            {title}
          </h2>

          {subtitle && (
            <p className="mobile-profiler__subtitle">
              {subtitle}
            </p>
          )}

          <p className="mobile-profiler__description">
            {description}
          </p>

          <div className="mobile-profiler__action">
            <Button
              to="/contacto"
              variant="primary"
              icon={<QuoteIcon />}
            >
              Solicitar cotización
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MobileProfiler;