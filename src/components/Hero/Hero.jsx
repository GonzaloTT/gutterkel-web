import Button from "../Button/Button";

import "./Hero.css";

function Hero({
  variant = "internal",
  eyebrow,
  title,
  description,
  image,
  actions = [],
  highlights = [],
  children,
}) {
  const heroClasses = [
    "hero",
    `hero--${variant}`,
    !image ? "hero--placeholder" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const heroStyle =
    variant === "home" && image
      ? {
          "--hero-background-image": `url("${image}")`,
        }
      : undefined;

  return (
    <section
      className={heroClasses}
      style={heroStyle}
    >
      {variant === "home" && !image && (
        <div
          className="hero__background-placeholder"
          aria-hidden="true"
        >
          <span>Imagen pendiente</span>
        </div>
      )}

      <div className="container hero__container">
        <div className="hero__content">
          {eyebrow && (
            <span className="hero__eyebrow">
              {eyebrow}
            </span>
          )}

          <h1 className="hero__title">
            {title}
          </h1>

          {description && (
            <p className="hero__description">
              {description}
            </p>
          )}

          {actions.length > 0 && (
            <div className="hero__actions">
              {actions.map((action) => (
                <Button
                  key={action.label}
                  to={action.to}
                  href={action.href}
                  variant={action.variant}
                  icon={action.icon}
                  iconPosition={action.iconPosition}
                  target={action.target}
                  rel={action.rel}
                >
                  {action.label}
                </Button>
              ))}
            </div>
          )}
        </div>

        {children && (
          <div className="hero__extra">
            {children}
          </div>
        )}

        {highlights.length > 0 && (
          <div className="hero__highlights">
            {highlights.map((item) => (
              <article
                key={item.title}
                className="hero__highlight"
              >
                {item.icon && (
                  <span className="hero__highlight-icon">
                    {item.icon}
                  </span>
                )}

                <div className="hero__highlight-content">
                  <strong className="hero__highlight-title">
                    {item.title}
                  </strong>

                  {item.description && (
                    <span className="hero__highlight-description">
                      {item.description}
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Hero;