export type Product = {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  collection: string;
  features: string[];
  details: string;
  shipping: string;
  warranty: string;
};

export const dummyProducts: Product[] = [
  {
    id: "p1",
    slug: "noir-elegance",
    name: "Noir Elegance",
    description: "Una obra maestra de diseño minimalista. Suave al tacto, silencioso y diseñado para la exploración profunda.",
    price: 120,
    images: [
      "https://images.unsplash.com/photo-1618331835717-801e976710b2?q=80&w=1000&auto=format&fit=crop", // Placeholder abstract dark
      "https://images.unsplash.com/photo-1584589167171-541ce45f1eea?q=80&w=1000&auto=format&fit=crop"
    ],
    category: "Vibradores",
    collection: "The Noir Collection",
    features: ["Silicona médica premium", "10 modos de vibración", "Sumergible IPX7", "Carga magnética"],
    details: "Diseñado en Estocolmo, el Noir Elegance redefine el placer personal con su motor dual ultra-silencioso y ergonomía perfecta.",
    shipping: "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    warranty: "2 años de garantía internacional Silk Deluxe."
  },
  {
    id: "p2",
    slug: "rose-whisper",
    name: "Rose Whisper",
    description: "Delicadeza y potencia en perfecta armonía. Un estimulador focalizado con acabados en oro rosado.",
    price: 95,
    images: [
      "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1599643478524-fb66f70d0026?q=80&w=1000&auto=format&fit=crop"
    ],
    category: "Estimuladores",
    collection: "The Rose Gold Series",
    features: ["Tecnología de ondas sónicas", "Diseño ergonómico", "Batería de larga duración", "Control táctil intuitivo"],
    details: "El Rose Whisper utiliza tecnología de ondas sónicas para una estimulación sin contacto directo, ofreciendo sensaciones profundas y envolventes.",
    shipping: "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    warranty: "2 años de garantía internacional Silk Deluxe."
  },
  {
    id: "p3",
    slug: "obsidian-wand",
    name: "Obsidian Wand",
    description: "Poder absoluto en un diseño escultural. La varita masajeadora reimaginada para el lujo moderno.",
    price: 150,
    images: [
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1000&auto=format&fit=crop"
    ],
    category: "Masajeadores",
    collection: "The Noir Collection",
    features: ["Motor de alta potencia", "Cabezal flexible", "Mango ergonómico", "8 intensidades"],
    details: "Una pieza de arte funcional. El Obsidian Wand ofrece masajes de tejido profundo y estimulación externa con una potencia inigualable.",
    shipping: "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    warranty: "2 años de garantía internacional Silk Deluxe."
  },
  {
    id: "p4",
    slug: "lumiere-drops",
    name: "Lumière Drops",
    description: "Aceite de masaje íntimo con infusión de CBD y notas de sándalo y vainilla.",
    price: 45,
    images: [
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1615397323744-4fd960c156d7?q=80&w=1000&auto=format&fit=crop"
    ],
    category: "Cosmética",
    collection: "Essentials",
    features: ["100% Natural", "Vegano", "Compatible con látex", "Sin parabenos"],
    details: "Una fórmula sedosa que se desliza perfectamente, hidratando la piel mientras eleva la sensibilidad.",
    shipping: "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    warranty: "Garantía de satisfacción de 30 días."
  }
];

export const collections = [
  {
    id: "c1",
    name: "The Noir Collection",
    description: "Elegancia oscura y minimalismo absoluto.",
    image: "https://images.unsplash.com/photo-1618331835717-801e976710b2?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "c2",
    name: "The Rose Gold Series",
    description: "Sofisticación con acentos cálidos y femeninos.",
    image: "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?q=80&w=1000&auto=format&fit=crop"
  }
];
