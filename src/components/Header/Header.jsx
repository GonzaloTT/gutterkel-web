import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import "./Header.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  
  return (
    <header className="header">
      <div className="container header__container">
        <Link
          to="/"
          className="header__brand"
          aria-label="Ir al inicio de Gutterkel México"
          onClick={closeMenu}
        >
          <img
            src="/images/branding/gutterkel-logo.png"
            alt="Gutterkel México"
            className="header__logo"
          />
        </Link>

        <button
          type="button"
          className="header__menu-button"
          aria-label={
            isMenuOpen
              ? "Cerrar menú"
              : "Abrir menú"
          }
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          onClick={() => {
            setIsMenuOpen((current) => !current);
          }}
        >
          <span />
          <span />
          <span />
        </button>

        <div
          className={`header__mobile-panel ${
            isMenuOpen
              ? "header__mobile-panel--open"
              : ""
          }`}
        >
          <nav
            id="primary-navigation"
            className="header__nav"
            aria-label="Navegación principal"
          >
            <NavLink
              to="/"
              className="header__link"
              onClick={closeMenu}
            >
              Inicio
            </NavLink>

            <NavLink
              to="/soluciones"
              className="header__link"
              onClick={closeMenu}
            >
              Soluciones
            </NavLink>

            <NavLink
              to="/proyectos"
              className="header__link"
              onClick={closeMenu}
            >
              Proyectos
            </NavLink>

            <Link
              to="/#nosotros"
              className="header__link"
              onClick={closeMenu}
            >
              Nosotros
            </Link>

            <NavLink
              to="/contacto"
              className="header__link"
              onClick={closeMenu}
            >
              Contacto
            </NavLink>
          </nav>

          <Link
            to="/contacto"
            className="header__cta"
            onClick={closeMenu}
          >
            Solicitar cotización
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;