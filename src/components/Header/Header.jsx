import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import solutions from "../../data/solutions";

import gutterkelLogo from "../../assets/images/branding/gutterkel-logo.jpg";

import "./Header.css";

const solutionNavLabels = {
  "canalon-continuo": "Canalón",
  "cubre-pretil": "Cubre Pretil",
  "techos-falsos": "Plafones",
  "fachada-ventilada": "Fachada",
  "aislante-termico": "Aislante",
};

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);

    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen((current) => !current);
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
            src={gutterkelLogo}
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
              end
              className="header__link"
              onClick={closeMenu}
            >
              Inicio
            </NavLink>

            <NavLink
              to="/soluciones"
              end
              className="header__link header__link--overview"
              onClick={closeMenu}
            >
              Soluciones
            </NavLink>

            <div className="header__solutions-nav">
              {solutions.map((solution) => (
                <NavLink
                  key={solution.id}
                  to={solution.href}
                  className="header__link header__solution-link"
                  onClick={closeMenu}
                >
                  {
                    solutionNavLabels[
                      solution.id
                    ] ?? solution.title
                  }
                </NavLink>
              ))}
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