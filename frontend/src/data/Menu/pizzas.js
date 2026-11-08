
import americana from "../../assets/Menu/pizzas/americana.png";
import hawaiana from "../../assets/Menu/pizzas/hawaiana.png";
import suprema from "../../assets/Menu/pizzas/suprema.png";
import margarita from "../../assets/Menu/pizzas/margarita.png";
import bbq from "../../assets/Menu/pizzas/bbq.png";
import cuatroQuesos from "../../assets/Menu/pizzas/cuatroQuesos.png";

export const pizzas = [
  {
    id: "americana",
    name: "Americana",
    description: "Pepperoni, mozzarella y salsa de tomate.",
    category: "clasicas",
    image: americana,
    featured: false,
  },
  {
    id: "hawaiana",
    name: "Hawaiana",
    description: "Jamón, piña y queso mozzarella.",
    category: "clasicas",
    image: hawaiana,
    featured: false,
  },
  {
    id: "suprema",
    name: "Suprema",
    description: "Pepperoni, champiñones, pimientos y aceitunas.",
    category: "especiales",
    image: suprema,
    featured: true,
  },
  {
    id: "margarita",
    name: "Margarita",
    description: "Tomate, mozzarella y albahaca fresca.",
    category: "clasicas",
    image: margarita,
    featured: false,
  },
  {
    id: "bbq",
    name: "Pollo BBQ",
    description: "Pollo, cebolla morada y salsa barbacoa.",
    category: "especiales",
    image: bbq,
    featured: false,
  },
  {
    id: "cuatro-quesos",
    name: "Cuatro Quesos",
    description: "Combinación de quesos y hierbas aromáticas.",
    category: "familiares",
    image: cuatroQuesos,
    featured: false,
  },
];
