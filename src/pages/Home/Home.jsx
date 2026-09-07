import Hero from "../../components/Hero/Hero";

import {
  ArrowRightIcon,
  GlobeIcon,
  HiddenFixingIcon,
  MeasureIcon,
  QuoteIcon,
  ShieldIcon,
  WhatsAppIcon,
} from "../../components/Icons/Icons";

import "./Home.css";

function Home() {
  const heroActions = [
    {
      label: "Solicitar cotización",
      to: "/contacto",
      variant: "primary",
      icon: <QuoteIcon />,
    },
    {
      label: "Ver soluciones",
      to: "/soluciones",
      variant: "secondary",
      icon: <ArrowRightIcon />,
      iconPosition: "right",
    },
    {
      label: "WhatsApp rápido",
      href: "#",
      variant: "whatsapp",
      icon: <WhatsAppIcon />,
    },
  ];

  const heroHighlights = [
    {
      title: "Garantía de 7 años",
      description: "Respaldo estructural",
      icon: <ShieldIcon />,
    },
    {
      title: "Fabricación a medida",
      description: "Soluciones para cada proyecto",
      icon: <MeasureIcon />,
    },
    {
      title: "Cobertura nacional",
      description: "Atención en todo México",
      icon: <GlobeIcon />,
    },
    {
      title: "Fijación oculta",
      description: "Acabado limpio y funcional",
      icon: <HiddenFixingIcon />,
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
    </>
  );
}

export default Home;