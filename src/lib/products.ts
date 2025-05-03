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
  // Estándar
  {
    id: "soporte-celular-tablet",
    name: "Soporte modular para celular y tablet",
    description:
      "Fabricado 100% con filamento reciclado. Diseño ergonómico y compacto, adaptable a celulares y tablets de hasta 12 pulgadas. Color: gris reciclado con vetas naturales. Hecho de 2 botellas plásticas recicladas.",
    image: "/soporte-celular-tablet.png",
    customizable: false,
    price: "$6.990",
    tags: ["estándar", "reciclado"],
  },
  {
    id: "organizadores-hexagonales",
    name: "Set de organizadores hexagonales apilables",
    description:
      "Conjunto de 3 organizadores impresos en 3D, ideales para oficina o hogar. Filamento reciclado negro o verde oscuro. Apilables, unión por imanes. Grabado: 'hecho con plástico reciclado'.",
    image: "/organizadores-hexagonales.png",
    customizable: false,
    price: "$9.990",
    tags: ["estándar", "reciclado"],
  },
  // Personalizables
  {
    id: "llavero-personalizado",
    name: "Llavero personalizado",
    description:
      "Personaliza con nombre o iniciales (máx. 10 caracteres). Formas: corazón, hexágono, círculo, estrella. Colores: negro, verde musgo, gris claro. Opción de frase ecológica en reverso.",
    image: "/llavero-personalizado.png",
    customizable: true,
    price: "$3.990",
    tags: ["personalizable", "llavero"],
    variants: {
      shapes: ["corazón", "hexágono", "círculo", "estrella"],
      colors: ["negro", "verde musgo", "gris claro"],
      ecoPhrases: ["Yo reciclo", "Circular Life"],
    },
  },
  {
    id: "macetero-autoriego",
    name: "Macetero auto-riego personalizado",
    description:
      "Color base: verde, terracota, gris. Patrón grabado: hojas, ondas, geométrico. Agrega nombre o frase breve (máx. 15 caracteres). Capacidad: 1 litro, sistema de reserva de agua. 100% reciclado.",
    image: "/macetero-autoriego.png",
    customizable: true,
    price: "$12.990",
    tags: ["personalizable", "macetero"],
    variants: {
      colors: ["verde", "terracota", "gris"],
      patterns: ["hojas", "ondas", "geométrico"],
    },
  }
];
