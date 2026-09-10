import {
  CheckCircleIcon,
} from "../Icons/Icons";

import "./SolutionFeatures.css";

function SolutionFeatures({
  eyebrow = "Características",
  title = "Características principales",
  description,
  items = [],
}) {
  return (
    <section className="solution-features section">
      <div className="container">
        <div className="solution-features__header">
          <span className="solution-features__eyebrow">
            {eyebrow}
          </span>

          <h2 className="solution-features__title">
            {title}
          </h2>

          {description && (
            <p className="solution-features__description">
              {description}
            </p>
          )}
        </div>

        <div className="solution-features__grid">
          {items.map((item) => (
            <article
              key={item.title}
              className="solution-feature-card"
            >
              <span className="solution-feature-card__icon">
                <CheckCircleIcon size={20} />
              </span>

              <h3 className="solution-feature-card__title">
                {item.title}
              </h3>

              <p className="solution-feature-card__description">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SolutionFeatures;