import { Link } from "react-router-dom";

import gutterkelLogo from "../../assets/images/branding/gutterkel-logo.jpg";

import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer__brand">
          <img
            src={gutterkelLogo}
            alt="Gutterkel México"
            className="footer__logo"
          />

          <p className="footer__description">
            Soluciones arquitectónicas para canalización pluvial,
            protección de fachadas y sistemas especializados.
          </p>
        </div>

        <div className="footer__column">
          <h2 className="footer__title">Navegación</h2>

          <Link to="/">Inicio</Link>
          <Link to="/soluciones">Soluciones</Link>
          <Link to="/proyectos">Proyectos</Link>
          <Link to="/contacto">Contacto</Link>
        </div>

        <div className="footer__column">
          <h2 className="footer__title">Soluciones</h2>

          <Link to="/soluciones">Canalones pluviales</Link>
          <Link to="/soluciones">Cubre Pretil</Link>
          <Link to="/soluciones">Techos falsos</Link>
          <Link to="/soluciones">Fachadas ventiladas</Link>
        </div>

        <div className="footer__column">
          <h2 className="footer__title">Contacto</h2>

          <a href="tel:+524423209124">
            442 320 9124
          </a>

          <a href="mailto:ventas@gutterkelmexico.com">
            ventas@gutterkelmexico.com
          </a>

          <p>
            Querétaro, México
          </p>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>
          © 2026 Gutterkel México. Todos los derechos reservados.
        </p>

        <Link to="/aviso-de-privacidad">
          Aviso de privacidad
        </Link>
      </div>
    </footer>
  );
}

export default Footer;