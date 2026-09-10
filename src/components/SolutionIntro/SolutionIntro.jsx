import "./SolutionIntro.css";

function SolutionIntro({
  eyebrow,
  title,
  description,
  image,
  imageAlt = "",
}) {
  return (
    <section className="solution-intro section">
      <div className="container solution-intro__grid">
        <div className="solution-intro__content">
          {eyebrow && (
            <span className="solution-intro__eyebrow">
              {eyebrow}
            </span>
          )}

          <h2 className="solution-intro__title">
            {title}
          </h2>

          <p className="solution-intro__description">
            {description}
          </p>
        </div>

        <div className="solution-intro__media">
          {image ? (
            <img
              src={image}
              alt={imageAlt}
              className="solution-intro__image"
            />
          ) : (
            <div
              className="solution-intro__placeholder"
              aria-hidden="true"
            >
              <span>Imagen pendiente</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default SolutionIntro;