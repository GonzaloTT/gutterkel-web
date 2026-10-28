import canalonImage from "../assets/images/solutions/canalon/card-canalon.png";
import cubrePretilImage from "../assets/images/solutions/cubre-pretil/card-cubre-pretil.png";
import techosFalsosImage from "../assets/images/solutions/techos-falsos/card-techos-falsos.png";
import fachadaVentiladaImage from "../assets/images/solutions/fachada-ventilada/card-fachada-ventilada.png";

const solutions = [
  {
    id: "canalon-continuo",
    slug: "canalon-continuo",
    title: "Canalón continuo",
    category: "Evacuación pluvial",
    description:
      "Sistema de canalización pluvial fabricado a medida para adaptarse a las características de cada proyecto.",
    benefit:
      "Solución continua, limpia y adaptable a distintos tipos de construcción.",
    image: canalonImage,
    href: "/soluciones/canalon-continuo",
  },

  {
    id: "cubre-pretil",
    slug: "cubre-pretil",
    title: "Cubre Pretil / Goterón",
    category: "Protección arquitectónica",
    description:
      "Sistema diseñado para proteger remates, pretiles y bordes expuestos frente al agua y los escurrimientos.",
    benefit:
      "Protección funcional integrada al diseño arquitectónico.",
    image: cubrePretilImage,
    href: "/soluciones/cubre-pretil",
  },

  {
    id: "techos-falsos",
    slug: "techos-falsos",
    title: "Techos Falsos / Plafones",
    category: "Acabados arquitectónicos",
    description:
      "Soluciones para interiores y áreas cubiertas que combinan diseño, funcionalidad e integración técnica.",
    benefit:
      "Acabados adaptables para espacios comerciales, corporativos y arquitectónicos.",
    image: techosFalsosImage,
    href: "/soluciones/techos-falsos",
  },

  {
    id: "sistema-de-anclaje",
    slug: "sistema-de-anclaje",
    title: "Sistema de Anclaje",
    category: "Envolvente arquitectónica",
    description:
      "Sistema de revestimiento exterior orientado a mejorar la protección y la integración visual del inmueble.",
    benefit:
      "Solución arquitectónica para protección exterior y renovación de fachadas.",
    image: fachadaVentiladaImage,
    href: "/soluciones/sistema-de-anclaje",
  },

];

export default solutions;