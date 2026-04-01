"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { dummyProducts, Product } from "@/lib/data";
import { Filter, X, ChevronDown, DollarSign, Search } from "lucide-react";

export default function CatalogPage() {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [searchQuery, setSearchQuery] = useState("");
  
  // 1. Determinar productos de la categoría activa para calcular límites reales
  const categoryProducts = dummyProducts.filter(p => 
    activeCategory === "Todos" || p.category?.trim() === activeCategory
  );
  
  // 2. Calcular límites dinámicos (mínimo y máximo real del set actual)
  const currentMin = categoryProducts.length > 0 ? Math.min(...categoryProducts.map(p => p.price)) : 0;
  const currentMax = categoryProducts.length > 0 ? Math.max(...categoryProducts.map(p => p.price)) : 200000;
  
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(200000);
  const [showPriceFilter, setShowPriceFilter] = useState(false);
  
  // 3. Sincronizar el slider cuando cambia la categoría o los datos
  useEffect(() => {
    setMinPrice(currentMin);
    setMaxPrice(currentMax);
  }, [activeCategory, currentMin, currentMax]);
  
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const collectionQuery = params.get("collection");
    if (collectionQuery) {
      setActiveCategory(collectionQuery);
    }
  }, []);

  // Obtenemos solo las categorías válidas de los productos (importadas del CSV)
  const categories = ["Todos", ...Array.from(new Set(dummyProducts.map(p => p.category?.trim()).filter(Boolean)))];

  const filteredProducts = dummyProducts.filter(p => {
    const matchesCategory = activeCategory === "Todos" || p.category?.trim() === activeCategory;
    const matchesMinPrice = p.price >= minPrice;
    const matchesMaxPrice = p.price <= maxPrice;
    const matchesSearch = searchQuery.trim() === "" || p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesMinPrice && matchesMaxPrice && matchesSearch;
  });

  const clearFilters = () => {
    setActiveCategory("Todos");
    // Al resetear categoría, el useEffect ya volverá a poner los precios globales
  };

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

        {/* Integrated Navigation & Filter Section */}
        <div className="mb-20 space-y-8">
          {/* Search bar */}
          <div className="flex justify-center md:justify-start">
            <div className="relative w-full md:max-w-md">
              <input
                type="text"
                placeholder="BUSCAR PRODUCTO..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full glass-premium text-white/90 text-[10px] tracking-[0.3em] uppercase px-6 py-3 rounded-full border border-transparent focus:border-[#d4af37] focus:outline-none transition-all pr-12 shadow-sm"
              />
              <Search size={16} className="absolute right-5 top-1/2 -translate-y-1/2 text-[#d4af37]/60 pointer-events-none" />
            </div>
          </div>

          {/* Categories bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-b border-[#d4af37]/10 pb-8">
            <div className="flex gap-3 overflow-x-auto w-full pb-4 md:pb-0 scrollbar-hide">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2.5 rounded-full text-[9px] md:text-[10px] tracking-[0.2em] uppercase whitespace-nowrap transition-all duration-300 ${activeCategory === category
                    ? "bg-gradient-gold text-[#0d1a19] shadow-[0_0_20px_rgba(212,175,55,0.4)] font-medium"
                    : "glass-premium text-white/70 hover:text-[#d4af37] border border-transparent hover:border-[#d4af37]/30"
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
            
            <div className="flex gap-4 items-center shrink-0">
              <button 
                onClick={() => setShowPriceFilter(!showPriceFilter)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-[10px] tracking-[0.2em] uppercase transition-all duration-300 border ${showPriceFilter ? "bg-[#d4af37]/20 border-[#d4af37] text-[#d4af37]" : "glass-premium text-white/70 border-transparent hover:border-[#d4af37]/30"}`}
              >
                <DollarSign size={12} /> Precio <ChevronDown size={12} className={`transition-transform duration-300 ${showPriceFilter ? "rotate-180" : ""}`} />
              </button>

              {(activeCategory !== "Todos" || minPrice !== Math.min(...dummyProducts.map(p => p.price)) || maxPrice !== Math.max(...dummyProducts.map(p => p.price))) && (
                <button 
                  onClick={clearFilters}
                  className="flex items-center gap-2 text-[#666] hover:text-white transition-colors text-[9px] tracking-widest uppercase shrink-0 border-b border-transparent hover:border-[#d4af37]/50 pb-0.5"
                >
                  <X size={12} /> Limpiar Filtros
                </button>
              )}
            </div>
          </div>

          {/* Integrated Price Slider - Toggleable & Responsive */}
          <motion.div 
            initial={false}
            animate={{ 
              height: showPriceFilter ? "auto" : 0, 
              opacity: showPriceFilter ? 1 : 0,
              marginTop: showPriceFilter ? 32 : 0 
            }}
            className="overflow-hidden"
          >
            <div className="glass-premium rounded-2xl px-6 md:px-10 py-5 border border-[#d4af37]/10 flex flex-col md:flex-row items-center gap-8 md:gap-16">
              <div className="flex flex-col gap-1 min-w-[140px]">
                <span className="text-[9px] tracking-[0.3em] uppercase text-[#d4af37] font-medium">Búsqueda por Precio</span>
                <span className="text-[10px] text-[#888] font-light">Ajusta el rango para filtrar</span>
              </div>
              
              <div className="flex-grow w-full relative h-1 bg-[#1a1a1a] rounded-full my-6 md:my-0">
                {/* Track highlight */}
                <div 
                  className="absolute h-full bg-gradient-to-r from-[#d4af37]/60 to-[#d4af37] rounded-full"
                  style={{ 
                    left: `${((minPrice - currentMin) / (currentMax - currentMin || 1)) * 100}%`, 
                    right: `${100 - ((maxPrice - currentMin) / (currentMax - currentMin || 1)) * 100}%` 
                  }}
                />
                
                {/* Dual Slider Thumbs */}
                <input
                  type="range"
                  min={currentMin}
                  max={currentMax}
                  value={minPrice}
                  onChange={(e) => setMinPrice(Math.min(Number(e.target.value), maxPrice - (currentMax - currentMin) * 0.05))}
                  className="absolute w-full h-1 appearance-none bg-transparent pointer-events-none cursor-pointer z-20 slider-thumb-premium"
                />
                <input
                  type="range"
                  min={currentMin}
                  max={currentMax}
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Math.max(Number(e.target.value), minPrice + (currentMax - currentMin) * 0.05))}
                  className="absolute w-full h-1 appearance-none bg-transparent pointer-events-none cursor-pointer z-20 slider-thumb-premium"
                />
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <div className="flex flex-col items-center">
                  <span className="text-[8px] uppercase tracking-tighter text-[#555] mb-1">Desde</span>
                  <span className="glass-premium px-3 py-1 rounded-lg border border-[#d4af37]/20 text-xs text-white">
                    ${minPrice.toLocaleString()}
                  </span>
                </div>
                <div className="w-2 h-px bg-[#333] mt-4" />
                <div className="flex flex-col items-center">
                  <span className="text-[8px] uppercase tracking-tighter text-[#555] mb-1">Hasta</span>
                  <span className="glass-premium px-3 py-1 rounded-lg border border-[#d4af37]/20 text-xs text-white">
                    ${maxPrice.toLocaleString()}
                  </span>
                </div>
              </div>

              <div className="hidden lg:block text-[#444] text-[9px] tracking-wide uppercase italic ml-4">
                {filteredProducts.length} <span className="opacity-50">Items</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer flex flex-col card-premium rounded-2xl p-4 md:p-5 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(212,175,55,0.08)] transition-all duration-500 h-full"
            >
              <Link href={`/product/${product.slug}`} className="flex-grow flex flex-col outline-none">
                <div className="relative aspect-square overflow-hidden rounded-xl mb-6 bg-[#0a0a0a] border-gradient-gold flex-shrink-0">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    loading="lazy"
                    className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500" />

                  {/* Hover Reveal Button */}
                  <div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out flex justify-center">
                    <div className="bg-[#0c0c0c]/95 text-white px-6 py-2 rounded-full text-[10px] tracking-[0.2em] uppercase border border-[#d4af37]/50 shadow-[0_0_20px_rgba(212,175,55,0.2)]">
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
                href={`https://wa.me/56953237833?text=Hola,%20quiero%20este%20producto:%20${encodeURIComponent(product.name)}`}
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
