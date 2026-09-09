import "./FAQ.css";

function FAQ({
  eyebrow,
  title,
  description,
  items = [],
}) {
  return (
    <section className="faq section">
      <div className="container">
        <div className="faq__header">
          {eyebrow && (
            <span className="faq__eyebrow">
              {eyebrow}
            </span>
          )}

          <h2 className="faq__title">
            {title}
          </h2>

          {description && (
            <p className="faq__description">
              {description}
            </p>
          )}
        </div>

        <div className="faq__grid">
          {items.map((item, index) => (
            <article
              key={item.question}
              className="faq-card"
            >
              <span className="faq-card__number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="faq-card__content">
                <h3 className="faq-card__question">
                  {item.question}
                </h3>

                <p className="faq-card__answer">
                  {item.answer}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;