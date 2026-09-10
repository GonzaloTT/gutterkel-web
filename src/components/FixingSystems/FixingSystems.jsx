import "./FixingSystems.css";

function FixingSystems({
  eyebrow = "Configuraciones de instalación",
  title = "Sistema de fijación",
  description,
  note,
  items = [],
}) {
  return (
    <section className="fixing-systems section">
      <div className="container">
        <div className="fixing-systems__header">
          <span className="fixing-systems__eyebrow">
            {eyebrow}
          </span>

          <h2 className="fixing-systems__title">
            {title}
          </h2>

          {description && (
            <p className="fixing-systems__description">
              {description}
            </p>
          )}

          {note && (
            <p className="fixing-systems__note">
              {note}
            </p>
          )}
        </div>

        <div className="fixing-systems__grid">
          {items.map((item) => (
            <article
              key={item.name}
              className="fixing-system-card"
            >
              <div className="fixing-system-card__media">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.imageAlt ?? item.name}
                    className="fixing-system-card__image"
                  />
                ) : (
                  <div
                    className="fixing-system-card__placeholder"
                    aria-hidden="true"
                  >
                    <span>
                      Diagrama pendiente
                    </span>
                  </div>
                )}
              </div>

              <div className="fixing-system-card__content">
                <h3 className="fixing-system-card__title">
                  {item.name}
                </h3>

                {item.description && (
                  <p className="fixing-system-card__description">
                    {item.description}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FixingSystems;