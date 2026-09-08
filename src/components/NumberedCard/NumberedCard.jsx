import "./NumberedCard.css";

function NumberedCard({
  number,
  title,
  description,
  meta,
  icon,
  tone = "primary",
}) {
  return (
    <article className="numbered-card">
      <span className="numbered-card__number">
        {number}
      </span>

      <h3 className="numbered-card__title">
        {title}
      </h3>

      <p className="numbered-card__description">
        {description}
      </p>

      {meta && (
        <div
          className={`numbered-card__meta numbered-card__meta--${tone}`}
        >
          {icon && (
            <span className="numbered-card__meta-icon">
              {icon}
            </span>
          )}

          <span>{meta}</span>
        </div>
      )}
    </article>
  );
}

export default NumberedCard;