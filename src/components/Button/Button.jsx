import { Link } from "react-router-dom";

import "./Button.css";

function Button({
  children,
  to,
  href,
  variant = "primary",
  icon,
  iconPosition = "left",
  className = "",
  ...props
}) {
  const classes = [
    "button",
    `button--${variant}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {icon && iconPosition === "left" && (
        <span className="button__icon">
          {icon}
        </span>
      )}

      <span className="button__label">
        {children}
      </span>

      {icon && iconPosition === "right" && (
        <span className="button__icon">
          {icon}
        </span>
      )}
    </>
  );

  if (to) {
    return (
      <Link
        to={to}
        className={classes}
        {...props}
      >
        {content}
      </Link>
    );
  }

  return (
    <a
      href={href}
      className={classes}
      {...props}
    >
      {content}
    </a>
  );
}

export default Button;