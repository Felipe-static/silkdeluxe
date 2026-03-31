"use client";

export const runtime = 'edge';

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { dummyProducts, Product } from "@/lib/data";
import { MessageCircle, ChevronRight, ShieldCheck, Truck, RefreshCcw, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function ProductPage() {
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);
  const params = useParams();
  const slug = params.slug as string;

  const [product, setProduct] = useState<Product | null>(null);
  const [activeImage, setActiveImage] = useState(0);
  const [activeTab, setActiveTab] = useState("detalles");

  useEffect(() => {
    const baseProduct = dummyProducts.find((p) => p.slug === slug);
    if (!baseProduct) return;
    setProduct(baseProduct);
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#050505]">
        <h1 className="font-serif text-4xl text-white">Producto no encontrado</h1>
      </div>
    );
  }

  const whatsappMessage = `Hola, quiero este producto: ${product.name}`;
  const whatsappUrl = `https://wa.me/56953237833?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 md:px-12 bg-[#050505]">
      <div className="container mx-auto max-w-7xl">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm tracking-widest uppercase text-[#888] mb-12">
          <a href="/" className="hover:text-[#d4af37] transition-colors">Inicio</a>
          <ChevronRight size={14} />
          <a href="/products" className="hover:text-[#d4af37] transition-colors">Catálogo</a>
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
              className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-[#111] border border-[#1a1a1a]"
            >
              <Image
                src={product.images[activeImage]}
                alt={product.name}
                fill
                unoptimized
                className="object-cover"
                priority
              />
            </motion.div>

            <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`relative w-24 h-32 rounded-xl overflow-hidden flex-shrink-0 transition-all duration-300 ${activeImage === idx ? "ring-2 ring-[#d4af37] opacity-100" : "opacity-50 hover:opacity-80"
                    }`}
                >
                  <Image src={img} alt={`${product.name} ${idx + 1}`} fill unoptimized className="object-cover" />
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

              <p className="text-[#888] text-lg font-light leading-relaxed mb-12">
                {product.description}
              </p>

              {/* CTA */}
              <div className="mb-16 flex flex-col sm:flex-row gap-4">
                <a
                  href={`https://wa.me/56953237833?text=Hola,%20quiero%20este%20producto:%20${encodeURIComponent(product.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-3 bg-transparent border border-[#d4af37]/30 text-white py-5 rounded-full font-medium tracking-widest uppercase text-sm hover:border-[#d4af37] hover:bg-[#d4af37]/10 transition-all duration-300"
                >
                  <MessageCircle size={20} className="group-hover:scale-110 transition-transform" />
                  Pedir
                </a>
                <button
                  onClick={() => {
                    addToCart(product);
                    setIsAdded(true);
                    setTimeout(() => setIsAdded(false), 2000);
                  }}
                  className={`flex-1 flex items-center justify-center gap-3 bg-gradient-gold text-[#0A0A0A] py-5 rounded-full font-medium tracking-[0.2em] uppercase text-sm hover:scale-[1.02] transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.2)] ${isAdded ? "opacity-80 scale-[0.98]" : ""}`}
                >
                  <ShoppingBag size={20} />
                  {isAdded ? "Añadido al Carrito" : "Agregar al Carrito"}
                </button>
              </div>
              <p className="text-center text-[#888] text-xs tracking-widest uppercase mt-4">
                Asesoría privada y discreta garantizada
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

