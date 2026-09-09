import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import solutions from "../../data/solutions";

import {
  ChevronDownIcon,
} from "../Icons/Icons";

import "./Header.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsSolutionsOpen(false);

    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen((current) => {
      const nextState = !current;

      if (!nextState) {
        setIsSolutionsOpen(false);
      }

      return nextState;
    });
  };

  const toggleSolutions = () => {
    setIsSolutionsOpen((current) => !current);
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
          onClick={toggleMenu}
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

            <div className="header__nav-item header__nav-item--dropdown" onMouseEnter={() => setIsSolutionsOpen(true)} onMouseLeave={() => setIsSolutionsOpen(false)} >
              <div className="header__solutions-trigger">
                <NavLink
                  to="/soluciones"
                  className="header__link header__solutions-link"
                  onClick={closeMenu}
                >
                  Soluciones
                </NavLink>

                <button
                  type="button"
                  className="header__dropdown-toggle"
                  aria-label={
                    isSolutionsOpen
                      ? "Ocultar soluciones"
                      : "Mostrar soluciones"
                  }
                  aria-expanded={isSolutionsOpen}
                  aria-controls="solutions-dropdown"
                  onClick={toggleSolutions}
                >
                  <ChevronDownIcon size={14} />
                </button>
              </div>

              <div
                id="solutions-dropdown"
                className={`header__dropdown ${
                  isSolutionsOpen
                    ? "header__dropdown--open"
                    : ""
                }`}
              >
                <NavLink
                  to="/soluciones"
                  className="header__dropdown-link header__dropdown-link--all"
                  onClick={closeMenu}
                >
                  Ver todas las soluciones
                </NavLink>

                {solutions.map((solution) => (
                  <NavLink
                    key={solution.id}
                    to={solution.href}
                    className="header__dropdown-link"
                    onClick={closeMenu}
                  >
                    <span className="header__dropdown-category">
                      {solution.category}
                    </span>

                    <span className="header__dropdown-title">
                      {solution.title}
                    </span>
                  </NavLink>
                ))}
              </div>
            </div>

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