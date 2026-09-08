import Button from "../Button/Button";
import { CheckCircleIcon } from "../Icons/Icons";

import "./SolutionSection.css";

function SolutionSection({
  id,
  eyebrow,
  title,
  description,
  image,
  imageAlt = "",
  imagePosition = "left",
  features = [],
  tags = [],
  note,
  action,
}) {
  const classes = [
    "solution-section",
    `solution-section--image-${imagePosition}`,
  ].join(" ");

  return (
    <section
      id={id}
      className={`${classes} scroll-target`}
    >
      <div className="container solution-section__container">
        <div className="solution-section__media">
          {image ? (
            <img
              src={image}
              alt={imageAlt}
              className="solution-section__image"
            />
          ) : (
            <div
              className="solution-section__placeholder"
              aria-hidden="true"
            >
              <span>Imagen pendiente</span>
            </div>
          )}
        </div>

        <div className="solution-section__content">
          {eyebrow && (
            <span className="solution-section__eyebrow">
              {eyebrow}
            </span>
          )}

          <h2 className="solution-section__title">
            {title}
          </h2>

          <p className="solution-section__description">
            {description}
          </p>

          {features.length > 0 && (
            <div className="solution-section__features">
              {features.map((feature) => (
                <article
                  key={feature.title}
                  className="solution-section__feature"
                >
                  <span className="solution-section__feature-icon">
                    {feature.icon ?? (
                      <CheckCircleIcon size={18} />
                    )}
                  </span>

                  <div>
                    <h3 className="solution-section__feature-title">
                      {feature.title}
                    </h3>

                    {feature.description && (
                      <p className="solution-section__feature-description">
                        {feature.description}
                      </p>
                    )}
                  </div>
                </article>
              ))}
            </div>
          )}

          {tags.length > 0 && (
            <div className="solution-section__tags">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="solution-section__tag"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {note && (
            <div className="solution-section__note">
              {note}
            </div>
          )}

          {action && (
            <div className="solution-section__action">
              <Button
                to={action.to}
                href={action.href}
                variant={action.variant ?? "primary"}
                icon={action.icon}
                iconPosition={action.iconPosition}
              >
                {action.label}
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default SolutionSection;