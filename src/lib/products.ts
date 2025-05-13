// Listado centralizado de productos EcoFilament
export type Product = {
  id: string;
  name: string;
  description: string;
  image: string;
  customizable: boolean;
  price?: string;
  tags?: string[];
  variants?: {
    shapes?: string[];
    colors?: string[];
    ecoPhrases?: string[];
    patterns?: string[];
  };
  cta?: {
    label: string;
    link: string;
  };
};

export const products: Product[] = [
  // Standard
  {
    id: "soporte-celular-tablet",
    name: "Modular Stand for Phone & Tablet",
    description:
      "Made 100% from recycled filament. Ergonomic and compact design, fits phones and tablets up to 12 inches. Color: recycled gray with natural streaks. Made from 2 recycled plastic bottles.",
    image: "/soporte-celular-tablet.jpg",
    customizable: false,
    price: "$6.990",
    tags: ["standard", "recycled"],
  },
  {
    id: "organizadores-hexagonales",
    name: "Stackable Hexagonal Organizers Set",
    description:
      "Set of 3 organizers 3D printed, perfect for office or home. Recycled black or dark green filament. Stackable, magnetic connection. Engraved: 'made with recycled plastic'.",
    image: "/organizadores-hexagonales.jpg",
    customizable: false,
    price: "$9.990",
    tags: ["standard", "recycled"],
  },
  // Customizable
  {
    id: "llavero-personalizado",
    name: "Custom Keychain",
    description:
      "Add your name or initials (max. 10 characters). Shapes: heart, hexagon, circle, star. Colors: black, moss green, light gray. Option for eco phrase on the back.",
    image: "/llavero-personalizado.jpg",
    customizable: true,
    price: "$3.990",
    tags: ["customizable", "keychain"],
    variants: {
      shapes: ["heart", "hexagon", "circle", "star"],
      colors: ["black", "moss green", "light gray"],
      ecoPhrases: ["I recycle", "Circular Life"],
    },
  },
  {
    id: "macetero-autoriego",
    name: "Self-Watering Planter",
    description:
      "Base colors: green, terracotta, gray. Engraved pattern: leaves, waves, geometric. Add a name or short phrase (max. 15 characters). Capacity: 1 liter, water reservoir system. 100% recycled.",
    image: "/macetero-autoriego.jpg",
    customizable: true,
    price: "$12.990",
    tags: ["customizable", "planter"],
    variants: {
      colors: ["green", "terracotta", "gray"],
      patterns: ["leaves", "waves", "geometric"],
    },
  }
];
