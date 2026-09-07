import "./ProcessStep.css";

function ProcessStep({
  number,
  title,
  description,
  meta,
  icon,
  tone = "primary",
}) {
  return (
    <article className="process-step">
      <span className="process-step__number">
        {number}
      </span>

      <h3 className="process-step__title">
        {title}
      </h3>

      <p className="process-step__description">
        {description}
      </p>

      {meta && (
        <div
          className={`process-step__meta process-step__meta--${tone}`}
        >
          {icon && (
            <span className="process-step__meta-icon">
              {icon}
            </span>
          )}

          <span>{meta}</span>
        </div>
      )}
    </article>
  );
}

export default ProcessStep;