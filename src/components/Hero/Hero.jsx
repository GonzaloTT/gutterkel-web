import { useEffect, useState } from "react";

import Button from "../Button/Button";

import "./Hero.css";

function Hero({
  variant = "internal",
  eyebrow,
  title,
  description,
  image,
  slides = [],
  actions = [],
  highlights = [],
  children,
}) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isCarouselPaused, setIsCarouselPaused] = useState(false);

  const hasCarousel =
    variant === "home" &&
    slides.length > 0;

  const supportsBackgroundImage =
    variant === "home" ||
    variant === "solution-detail";

  const hasBackground =
    Boolean(image) || hasCarousel;

  const heroClasses = [
    "hero",
    `hero--${variant}`,
    hasCarousel ? "hero--has-carousel" : "",
    !hasBackground ? "hero--placeholder" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const heroStyle =
    supportsBackgroundImage &&
    image &&
    !hasCarousel
      ? {
          "--hero-background-image": `url("${image}")`,
        }
      : undefined;

  useEffect(() => {
    if (!hasCarousel || slides.length <= 1) {
      return undefined;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion || isCarouselPaused) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setActiveSlide((current) =>
        (current + 1) % slides.length
      );
    }, 6000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [
    hasCarousel,
    slides.length,
    isCarouselPaused,
  ]);

  const showPreviousSlide = () => {
    setActiveSlide((current) =>
      current === 0
        ? slides.length - 1
        : current - 1
    );
  };

  const showNextSlide = () => {
    setActiveSlide((current) =>
      (current + 1) % slides.length
    );
  };

  return (
    <section
      className={heroClasses}
      style={heroStyle}
      onMouseEnter={
        hasCarousel
          ? () => setIsCarouselPaused(true)
          : undefined
      }
      onMouseLeave={
        hasCarousel
          ? () => setIsCarouselPaused(false)
          : undefined
      }
    >
      {hasCarousel && (
        <div
          className="hero__carousel"
          aria-hidden="true"
        >
          {slides.map((slide, index) => (
            <div
              key={`${slide.image}-${index}`}
              className={`hero__carousel-slide ${
                index === activeSlide
                  ? "hero__carousel-slide--active"
                  : ""
              }`}
              style={{
                backgroundImage: `url("${slide.image}")`,
                backgroundPosition:
                  slide.position ?? "center center",
              }}
            />
          ))}

          <div className="hero__carousel-overlay" />
        </div>
      )}

      {supportsBackgroundImage && !hasBackground && (
        <div
          className="hero__background-placeholder"
          aria-hidden="true"
        >
          <span>Imagen pendiente</span>
        </div>
      )}

      <div className="container hero__container">
        <div className="hero__content">
          {eyebrow && (
            <span className="hero__eyebrow">
              {eyebrow}
            </span>
          )}

          <h1 className="hero__title">
            {title}
          </h1>

          {description && (
            <p className="hero__description">
              {description}
            </p>
          )}

          {actions.length > 0 && (
            <div className="hero__actions">
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

        {hasCarousel && slides.length > 1 && (
          <div
            className="hero__carousel-controls"
            aria-label="Controles del carrusel"
          >
            <button
              type="button"
              className="hero__carousel-arrow"
              aria-label="Imagen anterior"
              onClick={showPreviousSlide}
            >
              ‹
            </button>

            <div className="hero__carousel-dots">
              {slides.map((slide, index) => (
                <button
                  key={`dot-${slide.image}-${index}`}
                  type="button"
                  className={`hero__carousel-dot ${
                    index === activeSlide
                      ? "hero__carousel-dot--active"
                      : ""
                  }`}
                  aria-label={`Mostrar imagen ${index + 1}`}
                  aria-current={
                    index === activeSlide
                      ? "true"
                      : undefined
                  }
                  onClick={() => setActiveSlide(index)}
                />
              ))}
            </div>

            <button
              type="button"
              className="hero__carousel-arrow"
              aria-label="Imagen siguiente"
              onClick={showNextSlide}
            >
              ›
            </button>
          </div>
        )}

        {children && (
          <div className="hero__extra">
            {children}
          </div>
        )}

        {highlights.length > 0 && (
          <div className="hero__highlights">
            {highlights.map((item) => (
              <article
                key={item.title}
                className="hero__highlight"
              >
                {item.icon && (
                  <span className="hero__highlight-icon">
                    {item.icon}
                  </span>
                )}

                <div className="hero__highlight-content">
                  <strong className="hero__highlight-title">
                    {item.title}
                  </strong>

                  {item.description && (
                    <span className="hero__highlight-description">
                      {item.description}
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Hero;