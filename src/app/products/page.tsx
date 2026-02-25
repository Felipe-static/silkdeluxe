"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { dummyProducts } from "@/lib/data";
import { Filter } from "lucide-react";

export default function CatalogPage() {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const categories = ["Todos", ...Array.from(new Set(dummyProducts.map(p => p.category)))];

  const filteredProducts = activeCategory === "Todos" 
    ? dummyProducts 
    : dummyProducts.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 md:px-12 bg-[#050505]">
      <div className="container mx-auto">
        {/* Header */}
        <div className="mb-16 text-center md:text-left">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-5xl md:text-6xl mb-6"
          >
            La Colección
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 font-light max-w-2xl text-lg"
          >
            Explora nuestra selección curada de objetos de deseo. 
            Diseñados para el placer, la estética y la discreción.
          </motion.p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6 border-b border-white/10 pb-8">
          <div className="flex gap-4 overflow-x-auto w-full md:w-auto pb-4 md:pb-0 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm tracking-widest uppercase whitespace-nowrap transition-all duration-300 ${
                  activeCategory === category 
                    ? "bg-white text-black" 
                    : "bg-transparent text-gray-400 hover:text-white border border-white/10 hover:border-white/30"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm tracking-widest uppercase">
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
              className="group cursor-pointer flex flex-col"
            >
              <Link href={`/product/${product.slug}`} className="flex-grow">
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl mb-6 bg-[#111]">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                  
                  {/* Hover Reveal Button */}
                  <div className="absolute bottom-0 left-0 w-full p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <div className="bg-black/80 backdrop-blur-md text-white text-center py-3 rounded-xl text-sm tracking-widest uppercase border border-white/10">
                      Ver Detalles
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-serif text-xl mb-1 group-hover:text-[#d4af37] transition-colors">{product.name}</h3>
                    <p className="text-gray-500 text-sm font-light">{product.collection}</p>
                  </div>
                  <p className="text-white tracking-wider">${product.price}</p>
                </div>
              </Link>
              <a
                href={`https://wa.me/1234567890?text=Hola,%20quiero%20este%20producto:%20${encodeURIComponent(product.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-3 border border-white/20 rounded-full text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-colors duration-300 mt-auto"
              >
                Pedir por WhatsApp
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
