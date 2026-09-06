import Hero from "../../components/Hero/Hero";

import "./Home.css";

function Home() {
  const heroActions = [
    {
      label: "Solicitar cotización",
      to: "/contacto",
      variant: "primary",
    },
    {
      label: "Ver soluciones",
      to: "/soluciones",
      variant: "secondary",
    },
    {
      label: "WhatsApp rápido",
      href: "#",
      variant: "whatsapp",
    },
  ];

  const heroHighlights = [
    {
      title: "Garantía de 7 años",
      description: "Respaldo estructural certificado",
    },
    {
      title: "Fabricación in situ",
      description: "Perfilado continuo sin uniones",
    },
    {
      title: "Cobertura nacional",
      description: "Logística directa desde Querétaro",
    },
    {
      title: "Fijación oculta",
      description: "Estética limpia y sin filtraciones",
    },
  ];

  return (
    <>
      <Hero
        variant="home"
        eyebrow="Ingeniería europea · Fabricación a medida en México"
        title="Soluciones que protegen y transforman tu fachada"
        description="Sistemas de canalización pluvial, protección arquitectónica y acabados fabricados a medida para residencias, desarrollos comerciales e industriales."
        actions={heroActions}
        highlights={heroHighlights}
      />

      {/* Próxima sección */}
    </>
  );
}

export default Home;