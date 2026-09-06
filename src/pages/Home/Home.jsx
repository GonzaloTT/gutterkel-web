import { Link } from "react-router-dom";

function Home() {
  return (
    <main>
      <div className="container">
        <h1>Gutterkel México</h1>

        <Link to="/soluciones">
          Soluciones
        </Link>

        <Link to="/proyectos">
          Proyectos
        </Link>

        <Link to="/contacto">
          Contacto
        </Link>
      </div>
    </main>
  );
}

export default Home;