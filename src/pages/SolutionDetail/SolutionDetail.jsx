import { Link, useParams } from "react-router-dom";

import Hero from "../../components/Hero/Hero";
import solutionDetails from "../../data/solutionDetails";

import "./SolutionDetail.css";

function SolutionDetail() {
  const { slug } = useParams();

  const solution = solutionDetails[slug];

  if (!solution) {
    return (
      <main className="solution-detail-error">
        <div className="container">
          <span className="solution-detail-error__eyebrow">
            Solución no encontrada
          </span>

          <h1>
            La solución que buscas no está disponible.
          </h1>

          <p>
            Revisa nuestras soluciones disponibles para encontrar la
            información que necesitas.
          </p>

          <Link to="/soluciones">
            Volver a soluciones
          </Link>
        </div>
      </main>
    );
  }

  return (
    <>
      <Hero
        variant="internal"
        eyebrow={solution.category}
        title={solution.title}
        description={solution.description}
      />

      <section className="solution-detail-placeholder section">
        <div className="container">
          <span>
            Contenido técnico de la solución pendiente
          </span>
        </div>
      </section>
    </>
  );
}

export default SolutionDetail;