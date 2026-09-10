import "./FacadeElements.css";

function FacadeElements({
  eyebrow = "Composición del sistema",
  title = "Elementos de una fachada ventilada",
  description,
  image,
  imageAlt = "Esquema de fachada ventilada",
  items = [],
}) {
  return (
    <section className="facade-elements section">
      <div className="container">
        <div className="facade-elements__header">
          <span className="facade-elements__eyebrow">
            {eyebrow}
          </span>

          <h2 className="facade-elements__title">
            {title}
          </h2>

          {description && (
            <p className="facade-elements__description">
              {description}
            </p>
          )}
        </div>

        <div className="facade-elements__layout">
          <div className="facade-elements__media">
            {image ? (
              <img
                src={image}
                alt={imageAlt}
                className="facade-elements__image"
              />
            ) : (
              <div
                className="facade-elements__placeholder"
                aria-hidden="true"
              >
                <span>
                  Esquema técnico pendiente
                </span>
              </div>
            )}
          </div>

          <div className="facade-elements__list">
            {items.map((item, index) => (
              <article
                key={item.name}
                className="facade-element"
              >
                <span className="facade-element__number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="facade-element__content">
                  <h3 className="facade-element__title">
                    {item.name}
                  </h3>

                  <p className="facade-element__description">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FacadeElements;