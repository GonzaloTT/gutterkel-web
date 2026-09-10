import "./SolutionAdvantages.css";

function SolutionAdvantages({
  eyebrow = "Ventajas únicas",
  title = "Ventajas de la solución",
  description,
  items = [],
}) {
  return (
    <section className="solution-advantages section">
      <div className="container">
        <div className="solution-advantages__header">
          <span className="solution-advantages__eyebrow">
            {eyebrow}
          </span>

          <h2 className="solution-advantages__title">
            {title}
          </h2>

          {description && (
            <p className="solution-advantages__description">
              {description}
            </p>
          )}
        </div>

        <div className="solution-advantages__grid">
          {items.map((item, index) => (
            <article
              key={item.title}
              className="solution-advantage-card"
            >
              <span className="solution-advantage-card__number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="solution-advantage-card__title">
                {item.title}
              </h3>

              <p className="solution-advantage-card__description">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SolutionAdvantages;