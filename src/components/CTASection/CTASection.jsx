import Button from "../Button/Button";

import "./CTASection.css";

function CTASection({
  eyebrow,
  title,
  description,
  actions = [],
  variant = "default",
}) {
  return (
    <section className={`cta-section cta-section--${variant}`}>
      <div className="container">
        <div className="cta-section__panel">
          <div className="cta-section__content">
            {eyebrow && (
              <span className="cta-section__eyebrow">
                {eyebrow}
              </span>
            )}

            <h2 className="cta-section__title">
              {title}
            </h2>

            {description && (
              <p className="cta-section__description">
                {description}
              </p>
            )}
          </div>

          {actions.length > 0 && (
            <div className="cta-section__actions">
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
      </div>
    </section>
  );
}

export default CTASection;