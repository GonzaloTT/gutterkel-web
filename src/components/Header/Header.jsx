import { useEffect, useRef, useState } from "react";
import { Link, NavLink, matchPath, useLocation } from "react-router-dom";

import solutions from "../../data/solutions";

import gutterkelLogo from "../../assets/images/branding/gutterkel-logo.jpg";

import "./Header.css";

const solutionNavLabels = {
  "canalon-continuo": "Canalón",
  "cubre-pretil": "Cubre Pretil",
  "techos-falsos": "Plafones",
  "sistema-de-anclaje": "Sistema de Anclaje",
  "aislante-termico": "Aislante",
};

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const solutionsRef = useRef(null);
  const solutionsTriggerRef = useRef(null);
  const { pathname } = useLocation();
  const isSolutionsActive = pathname === "/soluciones" || solutions.some(
    (solution) => matchPath(solution.href, pathname),
  );

  useEffect(() => {
    if (!isSolutionsOpen) return undefined;

    const closeOutside = (event) => {
      if (!solutionsRef.current?.contains(event.target)) {
        setIsSolutionsOpen(false);
      }
    };
    const desktopQuery = window.matchMedia("(min-width: 1181px)");
    const closeOnResize = () => setIsSolutionsOpen(false);

    document.addEventListener("pointerdown", closeOutside);
    desktopQuery.addEventListener("change", closeOnResize);
    return () => {
      document.removeEventListener("pointerdown", closeOutside);
      desktopQuery.removeEventListener("change", closeOnResize);
    };
  }, [isSolutionsOpen]);

  const closeSolutions = (restoreFocus = false) => {
    setIsSolutionsOpen(false);
    if (restoreFocus) solutionsTriggerRef.current?.focus();
  };

  const handleSolutionsKeyDown = (event) => {
    if (event.key === "Escape" && isSolutionsOpen) {
      event.preventDefault();
      closeSolutions(true);
      return;
    }

    const isTrigger = event.target === solutionsTriggerRef.current;
    if ((!isSolutionsOpen && !isTrigger) ||
        !["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)) return;

    event.preventDefault();
    setIsSolutionsOpen(true);
    window.requestAnimationFrame(() => {
      const links = [...solutionsRef.current.querySelectorAll(".header__solution-link")];
      const current = links.indexOf(document.activeElement);
      let next = event.key === "ArrowUp" ? current - 1 : current + 1;
      if (event.key === "Home" || (isTrigger && event.key === "ArrowDown")) next = 0;
      if (event.key === "End" || (isTrigger && event.key === "ArrowUp")) next = links.length - 1;
      links[(next + links.length) % links.length]?.focus();
    });
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsSolutionsOpen(false);

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

            <div
              ref={solutionsRef}
              className={`header__solutions ${isSolutionsOpen ? "header__solutions--open" : ""}`}
              onPointerLeave={(event) => {
                if (isSolutionsOpen && event.pointerType !== "touch") {
                  closeSolutions(
                    document.activeElement !== solutionsTriggerRef.current &&
                    solutionsRef.current?.contains(document.activeElement),
                  );
                }
              }}
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) {
                  closeSolutions();
                }
              }}
              onKeyDown={handleSolutionsKeyDown}
            >
              <button
                ref={solutionsTriggerRef}
                id="solutions-trigger"
                type="button"
                className={`header__link header__link--overview header__solutions-trigger ${isSolutionsActive ? "active" : ""}`}
                aria-expanded={isSolutionsOpen}
                aria-haspopup="true"
                aria-controls="solutions-dropdown"
                onClick={() => setIsSolutionsOpen((current) => !current)}
              >
                Soluciones
                <span aria-hidden="true" className="header__solutions-chevron" />
              </button>

              <NavLink
                to="/soluciones"
                end
                className="header__link header__link--overview header__solutions-overview"
                onClick={closeMenu}
              >
                Soluciones
              </NavLink>

              <div
                id="solutions-dropdown"
                className="header__solutions-nav"
                role={isSolutionsOpen ? "menu" : undefined}
                aria-labelledby={isSolutionsOpen ? "solutions-trigger" : undefined}
              >
                {solutions.map((solution) => (
                  <NavLink
                    key={solution.id}
                    to={solution.href}
                    role={isSolutionsOpen ? "menuitem" : undefined}
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
