"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { dummyProducts, Product } from "@/lib/data";
import { Filter } from "lucide-react";

export default function CatalogPage() {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [productsWithImages, setProductsWithImages] = useState<Product[]>([]);
  const categories = ["Todos", ...Array.from(new Set(dummyProducts.map(p => p.category)))];

  useEffect(() => {
    const fetchImages = async () => {
      const updated = await Promise.all(dummyProducts.map(async (p) => {
        try {
          const res = await fetch(`/api/images/${p.slug}`);
          if (res.ok) {
            const data = await res.json();
            return { ...p, images: data.images.length > 0 ? data.images : ["/placeholder.svg"] };
          }
        } catch (e) {
          console.error("Failed to load images for", p.slug);
        }
        return { ...p, images: ["/placeholder.svg"] }; // Fallback
      }));
      setProductsWithImages(updated);
    };

    fetchImages();
  }, []);

  const filteredProducts = activeCategory === "Todos"
    ? productsWithImages
    : productsWithImages.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 md:px-12 bg-[#050505]">
      <div className="container mx-auto">
        {/* Header */}
        <div className="mb-16 text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-5xl md:text-7xl mb-6 text-white"
          >
            La <span className="text-gradient-gold">Colección</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[#888] font-light max-w-2xl text-lg tracking-wide"
          >
            Explora nuestra selección curada de objetos de deseo.
            Diseñados para el placer, la estética y la discreción.
          </motion.p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6 border-b border-[#d4af37]/20 pb-8">
          <div className="flex gap-4 overflow-x-auto w-full md:w-auto pb-4 md:pb-0 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full text-[10px] tracking-[0.2em] uppercase whitespace-nowrap transition-all duration-300 ${activeCategory === category
                  ? "bg-gradient-gold text-[#0d1a19] shadow-[0_0_20px_rgba(212,175,55,0.4)] font-medium"
                  : "glass-premium text-white hover:text-[#d4af37] border border-transparent hover:border-[#d4af37]/30"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

          <button className="flex items-center gap-2 text-[#888] hover:text-[#d4af37] transition-colors text-xs tracking-widest uppercase">
            <Filter size={16} /> Filtrar
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer flex flex-col glass-premium rounded-2xl p-4 md:p-5 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(212,175,55,0.08)] transition-all duration-500 backdrop-blur-md h-full"
            >
              <Link href={`/product/${product.slug}`} className="flex-grow flex flex-col outline-none">
                <div className="relative aspect-[3/4] overflow-hidden rounded-xl mb-6 bg-[#0a0a0a] border-gradient-gold flex-shrink-0">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500" />

                  {/* Hover Reveal Button */}
                  <div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out flex justify-center">
                    <div className="bg-[#050505]/60 backdrop-blur-md text-white px-6 py-2 rounded-full text-[10px] tracking-[0.2em] uppercase border border-[#d4af37]/50 shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                      Ver Detalles
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2 mb-4 flex-grow justify-start">
                  <p className="text-[#888] text-[10px] font-light tracking-[0.3em] uppercase">{product.collection || product.category}</p>
                  <h3 className="font-serif text-xl text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#fdfbf5] group-hover:to-[#d4af37] transition-all duration-500">{product.name}</h3>
                  <p className="text-[#d4af37] tracking-widest text-lg font-light mt-auto">${product.price}</p>
                </div>
              </Link>
              <a
                href={`https://wa.me/1234567890?text=Hola,%20quiero%20este%20producto:%20${encodeURIComponent(product.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-4 rounded-full text-[10px] tracking-[0.2em] uppercase text-white hover:text-white border border-[#1a1a1a] group-hover:border-transparent group-hover:bg-[#d4af37]/10 transition-all duration-500 mt-auto flex items-center justify-center gap-2 group/btn relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-[#d4af37]/10 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000" />
                Pedir por WhatsApp
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
