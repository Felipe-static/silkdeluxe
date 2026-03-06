"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ShoppingBag, Sparkles } from "lucide-react";
import { dummyProducts, Product } from "@/lib/data";
import Image from "next/image";

export default function Home() {
  const [productsWithImages, setProductsWithImages] = useState<Product[]>([]);

  useEffect(() => {
    // Solo mostramos los 4 primeros en la portada
    const featured = dummyProducts.slice(0, 4);

    // Para cada producto, llamar a la API para buscar sus imágenes
    const fetchImages = async () => {
      const updated = await Promise.all(featured.map(async (p) => {
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

  return (
    <div className="flex flex-col min-h-screen bg-[#050505]">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#050505]">
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/80 via-[#050505]/40 to-[#050505]/95 z-10" />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 text-center px-6 max-w-5xl mx-auto flex flex-col items-center mt-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            <h1 className="font-serif text-5xl md:text-7xl lg:text-9xl mb-6 text-white tracking-widest uppercase flex flex-col items-center gap-2">
              <span className="text-2xl md:text-4xl tracking-[0.3em] font-light text-white/50 mb-2">Bienvenido a</span>
              <span>Silk <span className="text-gradient-gold">Deluxe</span></span>
            </h1>
            <p className="font-sans text-white/80 text-base md:text-xl font-light tracking-[0.2em] uppercase mb-12 text-balance leading-relaxed">
              Boutique Erótica Premium <br />
              <span className="text-xs md:text-sm tracking-[0.3em] text-[#d4af37] mt-6 block border-t border-[#d4af37]/20 pt-6 max-w-md mx-auto">Lujo, Sofisticación y Discreción Absoluta</span>
            </p>
          </motion.div>
          <motion.a
            href="/products"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="group relative glass-premium px-10 py-5 rounded-full flex items-center gap-4 text-xs tracking-[0.2em] uppercase text-white hover:bg-[#d4af37]/10 transition-all duration-500 shadow-[0_0_40px_rgba(0,0,0,0.8)]"
          >
            <span className="relative z-10 font-medium">Explorar Colección Privada</span>
            <ArrowRight size={16} className="relative z-10 group-hover:translate-x-1 transition-transform text-[#d4af37]" />
          </motion.a>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        >
          <span className="text-[#d4af37]/70 text-[10px] tracking-[0.3em] uppercase">Descubrir</span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-[#d4af37]/60 to-transparent" />
        </motion.div>
      </section>

      {/* Featured Products */}
      <section className="py-32 px-6 md:px-12 bg-[#050505] relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-[#d4af37]/30 to-transparent" />
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 border-b border-[#d4af37]/20 pb-8 pt-12">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-4 text-white">Selección <span className="text-gradient-gold">Silk</span></h2>
              <p className="text-[#888] font-light tracking-wide text-lg">Las piezas más exclusivas de nuestra colección privada.</p>
            </div>
            <Link href="/products" className="text-white hover:text-[#d4af37] transition-all duration-300 flex items-center gap-3 text-xs tracking-[0.2em] uppercase pb-2 group">
              Explorar Catálogo <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {productsWithImages.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group flex flex-col h-full glass-premium rounded-2xl p-4 md:p-5 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(212,175,55,0.08)] backdrop-blur-md"
              >
                <Link href={`/product/${product.slug}`} className="flex-grow block mb-6 outline-none">
                  <div className="relative aspect-square overflow-hidden rounded-xl mb-6 bg-[#0a0a0a] border-gradient-gold">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500" />

                    {/* Quick view overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <span className="text-white border border-[#d4af37]/50 bg-[#050505]/60 backdrop-blur-md px-6 py-3 rounded-full text-[10px] tracking-[0.2em] uppercase shadow-[0_0_20px_rgba(212,175,55,0.2)]">Descubrir</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <p className="text-[#888] text-[10px] font-light tracking-[0.3em] uppercase">{product.category}</p>
                    <h3 className="font-serif text-xl text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#fdfbf5] group-hover:to-[#d4af37] transition-all duration-500">{product.name}</h3>
                    <span className="text-[#d4af37] font-light tracking-widest text-lg">${product.price}</span>
                  </div>
                </Link>

                <a
                  href={`https://wa.me/56995294014?text=Hola%20Silk%20Deluxe,%20quiero%20pedir%20este%20producto:%20${encodeURIComponent(product.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-4 rounded-full text-[10px] tracking-[0.2em] uppercase text-white hover:text-white border border-[#1a1a1a] group-hover:border-transparent group-hover:bg-[#d4af37]/10 transition-all duration-500 mt-auto flex items-center justify-center gap-2 group/btn relative overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-[#d4af37]/10 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000" />
                  <ShoppingBag size={14} className="text-[#888] group-hover/btn:text-[#d4af37] transition-colors" /> Pedir por WhatsApp
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 md:px-12 bg-[#050505] relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-px bg-gradient-to-r from-transparent via-[#d4af37]/50 to-transparent shadow-[0_0_20px_rgba(212,175,55,0.8)]" />
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-[#050505] via-[#d4af37]/10 to-[#050505] rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto relative z-10 text-center max-w-4xl glass-premium rounded-3xl p-10 md:p-20">
          <Sparkles className="w-10 h-10 text-[#d4af37] mx-auto mb-8 opacity-80" />
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 text-white leading-tight">Private <span className="text-gradient-gold">Concierge</span></h2>
          <p className="text-white/70 text-base md:text-lg font-light mb-12 leading-relaxed tracking-wide max-w-2xl mx-auto">
            Disfruta de una asesoría confidencial y exclusiva. Nuestro equipo está a tu disposición para guiarte en tu elección y satisfacer tus gustos más refinados.
          </p>

          <a
            href="/contact"
            className="inline-flex items-center gap-4 bg-[#d4af37]/10 border border-[#d4af37]/30 text-white px-10 py-5 rounded-full font-medium tracking-[0.2em] uppercase text-xs hover:bg-[#d4af37]/20 transition-all duration-500 hover:shadow-[0_0_30px_rgba(212,175,55,0.2)] group"
          >
            Contactar Asesor Exclusivo
            <ArrowRight size={16} className="text-[#d4af37] group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>
    </div>
  );
}
