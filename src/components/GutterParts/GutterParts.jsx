import "./GutterParts.css";

function GutterParts({
  eyebrow = "Componentes del sistema",
  title = "Partes del canalón",
  description,
  items = [],
}) {
  return (
    <section className="gutter-parts section">
      <div className="container">
        <div className="gutter-parts__header">
          <span className="gutter-parts__eyebrow">
            {eyebrow}
          </span>

          <h2 className="gutter-parts__title">
            {title}
          </h2>

          {description && (
            <p className="gutter-parts__description">
              {description}
            </p>
          )}
        </div>

        <div className="gutter-parts__grid">
          {items.map((item) => (
            <article
              key={item.name}
              className="gutter-part-card"
            >
              <div className="gutter-part-card__media">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.imageAlt ?? item.name}
                    className="gutter-part-card__image"
                  />
                ) : (
                  <div
                    className="gutter-part-card__placeholder"
                    aria-hidden="true"
                  >
                    <span>
                      Imagen pendiente
                    </span>
                  </div>
                )}
              </div>

              <div className="gutter-part-card__content">
                <h3 className="gutter-part-card__title">
                  {item.name}
                </h3>

                <p className="gutter-part-card__description">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GutterParts;