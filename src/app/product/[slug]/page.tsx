"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { dummyProducts } from "@/lib/data";
import { MessageCircle, ChevronRight, ShieldCheck, Truck, RefreshCcw } from "lucide-react";

export default function ProductPage() {
  const params = useParams();
  const slug = params.slug as string;
  const product = dummyProducts.find((p) => p.slug === slug);

  const [activeImage, setActiveImage] = useState(0);
  const [activeTab, setActiveTab] = useState("detalles");

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#050505]">
        <h1 className="font-serif text-4xl text-white">Producto no encontrado</h1>
      </div>
    );
  }

  const whatsappMessage = `Hola, quiero este producto: ${product.name}`;
  const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 md:px-12 bg-[#050505]">
      <div className="container mx-auto max-w-7xl">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm tracking-widest uppercase text-gray-500 mb-12">
          <a href="/" className="hover:text-white transition-colors">Inicio</a>
          <ChevronRight size={14} />
          <a href="/products" className="hover:text-white transition-colors">Catálogo</a>
          <ChevronRight size={14} />
          <span className="text-[#d4af37]">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Image Gallery */}
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-[#111]"
            >
              <Image
                src={product.images[activeImage]}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
            </motion.div>
            
            <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`relative w-24 h-32 rounded-xl overflow-hidden flex-shrink-0 transition-all duration-300 ${
                    activeImage === idx ? "ring-2 ring-[#d4af37] opacity-100" : "opacity-50 hover:opacity-80"
                  }`}
                >
                  <Image src={img} alt={`${product.name} ${idx + 1}`} fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-[#d4af37] text-sm tracking-widest uppercase mb-4">{product.collection}</p>
              <h1 className="font-serif text-5xl md:text-6xl mb-6">{product.name}</h1>
              <p className="text-3xl font-light tracking-wider mb-8">${product.price}</p>
              
              <p className="text-gray-400 text-lg font-light leading-relaxed mb-12">
                {product.description}
              </p>

              {/* CTA */}
              <div className="mb-16">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-3 bg-white text-black py-5 rounded-full font-medium tracking-widest uppercase text-sm hover:bg-[#d4af37] hover:text-white transition-all duration-500 group"
                >
                  <MessageCircle size={20} className="group-hover:scale-110 transition-transform" />
                  Pedir por WhatsApp
                </a>
                <p className="text-center text-gray-500 text-xs tracking-widest uppercase mt-4">
                  Asesoría privada y discreta garantizada
                </p>
              </div>

              {/* Tabs */}
              <div className="border-t border-white/10 pt-8">
                <div className="flex gap-8 mb-8 border-b border-white/10 pb-4">
                  {["detalles", "envíos", "garantía"].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`text-sm tracking-widest uppercase transition-colors duration-300 ${
                        activeTab === tab ? "text-[#d4af37] font-medium" : "text-gray-500 hover:text-white"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="text-gray-400 font-light leading-relaxed"
                  >
                    {activeTab === "detalles" && (
                      <div>
                        <p className="mb-6">{product.details}</p>
                        <ul className="space-y-3">
                          {product.features.map((feature, i) => (
                            <li key={i} className="flex items-center gap-3">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {activeTab === "envíos" && (
                      <div className="flex items-start gap-4">
                        <Truck className="w-6 h-6 text-[#d4af37] flex-shrink-0 mt-1" />
                        <p>{product.shipping}</p>
                      </div>
                    )}

                    {activeTab === "garantía" && (
                      <div className="flex items-start gap-4">
                        <ShieldCheck className="w-6 h-6 text-[#d4af37] flex-shrink-0 mt-1" />
                        <p>{product.warranty}</p>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
