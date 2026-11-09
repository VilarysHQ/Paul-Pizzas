import comboFamiliar from "../../assets/Promotions/combos/comboFamiliar.png";
import comboClasico from "../../assets/Promotions/combos/comboClasico.png";

export const promotions = [
  {
    id: "familiar",
    title: "Combos",
    highlight: "especiales",
    description: "Más sabor, más porciones y momentos para compartir.",
    badge: "Combo Familiar",
    detail: "Pizza especial + Inca Kola + papas + postre",
    price: null,
    image: comboFamiliar,
    imageAlt:
      "Pizza especial con Inca Kola, papas fritas y postre de chocolate",
  },
  {
    id: "clasico",
    title: "Tu pizza",
    highlight: "favorita",
    description: "Una combinación para disfrutar en compañía.",
    badge: "Combo Clásico",
    detail: "Pizza de pepperoni + jugo de naranja + postre",
    price: null,
    image: comboClasico,
    imageAlt:
      "Pizza de pepperoni con jugo de naranja y postre de chocolate",
  },
];
