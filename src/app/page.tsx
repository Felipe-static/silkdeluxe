"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Shield, Star, Heart, Sparkles } from "lucide-react";
import { dummyProducts, collections } from "@/lib/data";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#030303]">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-[#030303] z-10" />
          <Image
            src="https://images.unsplash.com/photo-1618331835717-801e976710b2?q=80&w=2000&auto=format&fit=crop"
            alt="Silk Deluxe Hero"
            fill
            className="object-cover opacity-60 scale-105 animate-slow-zoom"
            priority
          />
        </div>

        <div className="relative z-20 text-center px-6 max-w-5xl mx-auto mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-6 flex justify-center"
          >
            <span className="text-[#d4af37] tracking-[0.3em] text-xs uppercase font-medium border border-[#d4af37]/30 px-4 py-1.5 rounded-full backdrop-blur-sm">
              Boutique Erótica Premium
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight mb-6 text-white leading-[1.1]"
          >
            Redefine tu placer <br />
            <span className="text-[#d4af37] italic font-light">con elegancia</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-gray-300 text-lg md:text-xl font-light tracking-wide mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Descubre una colección curada de objetos de deseo. 
            Diseño minimalista, tecnología silenciosa y sofisticación absoluta para tu bienestar íntimo.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <a
              href="https://wa.me/1234567890?text=Hola%20Silk%20Deluxe,%20me%20gustaría%20recibir%20asesoría%20personalizada."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#d4af37] text-black px-8 py-4 rounded-full font-medium tracking-widest uppercase text-sm hover:bg-white transition-all duration-500 group w-full sm:w-auto"
            >
              Contactar Asesoría
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <Link
              href="#collections"
              className="inline-flex items-center justify-center gap-3 bg-transparent border border-white/20 text-white px-8 py-4 rounded-full font-medium tracking-widest uppercase text-sm hover:bg-white/5 transition-all duration-500 w-full sm:w-auto"
            >
              Explorar Catálogo
            </Link>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        >
          <span className="text-white/50 text-xs tracking-[0.2em] uppercase">Descubrir</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent" />
        </motion.div>
      </section>

      {/* Philosophy / Benefits */}
      <section id="philosophy" className="py-32 px-6 md:px-12 bg-[#030303] relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-[#d4af37]/50 to-transparent" />
        
        <div className="container mx-auto max-w-6xl mt-12">
          <div className="text-center mb-24">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 text-white">La Experiencia <span className="italic text-[#d4af37]">Silk</span></h2>
            <p className="text-gray-400 font-light max-w-2xl mx-auto text-lg leading-relaxed">
              Redefinimos el bienestar íntimo a través del diseño escultural, la privacidad absoluta y un servicio de concierge personalizado.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
            {[
              {
                icon: <Shield className="w-6 h-6 text-[#d4af37]" strokeWidth={1.5} />,
                title: "Discreción Absoluta",
                desc: "Envíos anónimos, facturación neutra y empaques sin logotipos. Tu privacidad es nuestro mayor lujo."
              },
              {
                icon: <Sparkles className="w-6 h-6 text-[#d4af37]" strokeWidth={1.5} />,
                title: "Calidad Premium",
                desc: "Materiales biocompatibles, silicona médica sedosa y motores ultra-silenciosos de ingeniería europea."
              },
              {
                icon: <Heart className="w-6 h-6 text-[#d4af37]" strokeWidth={1.5} />,
                title: "Concierge Privado",
                desc: "Asesoría personalizada vía WhatsApp para ayudarte a elegir la pieza perfecta para ti o tu pareja."
              }
            ].map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-white/10 bg-white/5 mb-8 group-hover:border-[#d4af37]/50 group-hover:bg-[#d4af37]/10 transition-all duration-500">
                  {benefit.icon}
                </div>
                <h3 className="font-serif text-2xl mb-4 text-white">{benefit.title}</h3>
                <p className="text-gray-400 font-light leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Collections Banner */}
      <section id="collections" className="py-24 px-6 md:px-12 bg-[#050505]">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10">
            {collections.map((collection, index) => (
              <motion.div
                key={collection.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative h-[50vh] md:h-[70vh] rounded-2xl overflow-hidden group cursor-pointer"
              >
                <Image
                  src={collection.image}
                  alt={collection.name}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-70 group-hover:opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="absolute inset-0 border border-white/10 rounded-2xl m-4 pointer-events-none transition-colors duration-500 group-hover:border-white/20" />
                
                <div className="absolute bottom-0 left-0 p-10 md:p-14 w-full">
                  <span className="text-[#d4af37] text-xs tracking-[0.2em] uppercase mb-4 block">Colección</span>
                  <h3 className="font-serif text-3xl md:text-5xl mb-4 text-white">{collection.name}</h3>
                  <p className="text-gray-300 font-light mb-8 max-w-md text-sm md:text-base">{collection.description}</p>
                  <Link
                    href={`/collections/${collection.id}`}
                    className="inline-flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-white group-hover:text-[#d4af37] transition-colors"
                  >
                    Explorar <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-300" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-32 px-6 md:px-12 bg-[#030303]">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 border-b border-white/10 pb-8">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-4 text-white">Selección <span className="italic text-[#d4af37]">Exclusiva</span></h2>
              <p className="text-gray-400 font-light tracking-wide text-lg">Nuestras piezas más codiciadas, diseñadas para el placer.</p>
            </div>
            <Link href="/products" className="text-white hover:text-[#d4af37] transition-colors flex items-center gap-3 text-xs tracking-[0.2em] uppercase pb-2">
              Ver todo el catálogo <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {dummyProducts.slice(0, 4).map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group flex flex-col h-full"
              >
                <Link href={`/product/${product.slug}`} className="flex-grow block mb-6">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-xl mb-6 bg-[#0a0a0a]">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                    
                    {/* Quick view overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
                      <span className="text-white border border-white/30 px-6 py-2 rounded-full text-xs tracking-[0.2em] uppercase">Ver Detalles</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-serif text-2xl text-white group-hover:text-[#d4af37] transition-colors">{product.name}</h3>
                    <span className="text-white font-light tracking-wider">${product.price}</span>
                  </div>
                  <p className="text-gray-500 text-sm font-light tracking-wide uppercase">{product.category}</p>
                </Link>

                <a
                  href={`https://wa.me/1234567890?text=Hola%20Silk%20Deluxe,%20quiero%20pedir%20este%20producto:%20${encodeURIComponent(product.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-4 border border-white/20 rounded-full text-xs tracking-[0.2em] uppercase text-white hover:bg-[#d4af37] hover:border-[#d4af37] hover:text-black transition-all duration-500 mt-auto flex items-center justify-center gap-2"
                >
                  Pedir por WhatsApp
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-6 md:px-12 bg-[#050505] relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#d4af37]/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#b76e79]/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="text-center mb-24">
            <span className="text-[#d4af37] text-xs tracking-[0.2em] uppercase mb-4 block">Testimonios</span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 text-white">Voces de la <span className="italic text-[#d4af37]">Experiencia</span></h2>
            <p className="text-gray-400 font-light max-w-2xl mx-auto text-lg">
              Lo que dicen quienes ya han descubierto el estándar Silk Deluxe.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {[
              {
                quote: "La atención del concierge fue impecable. Me ayudaron a elegir la pieza perfecta con total discreción y profesionalismo. El empaque es una obra de arte en sí mismo.",
                author: "M. V.",
                role: "Cliente Privado"
              },
              {
                quote: "Buscaba algo elegante que no desentonara en mi mesa de noche. El diseño de la colección Noir superó mis expectativas. Silencioso, potente y estéticamente perfecto.",
                author: "A. R.",
                role: "Cliente Privado"
              }
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                className="p-10 md:p-14 rounded-2xl bg-[#0a0a0a] border border-white/5 relative group hover:border-white/10 transition-colors duration-500"
              >
                <div className="text-[#d4af37] text-8xl font-serif absolute top-4 left-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500 leading-none">"</div>
                <p className="text-gray-300 font-light leading-relaxed mb-10 relative z-10 italic text-lg">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-full bg-[#111] border border-white/10 flex items-center justify-center text-sm font-serif text-[#d4af37]">
                    {testimonial.author.split(' ')[0][0]}
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm tracking-wider">{testimonial.author}</p>
                    <p className="text-gray-500 text-xs tracking-[0.2em] uppercase mt-1">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 md:px-12 bg-[#030303] relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#d4af37]/20 to-transparent rounded-full blur-[100px]" />
        </div>
        
        <div className="container mx-auto relative z-10 text-center max-w-3xl">
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-8 text-white leading-tight">¿Buscas algo <span className="italic text-[#d4af37]">específico?</span></h2>
          <p className="text-gray-300 text-lg md:text-xl font-light mb-12 leading-relaxed">
            Nuestro equipo de concierge está disponible para brindarte asesoría privada y discreta. 
            Encuentra la pieza perfecta que se adapte a tus deseos.
          </p>
          
          <a
            href="https://wa.me/1234567890?text=Hola%20Silk%20Deluxe,%20me%20gustaría%20recibir%20asesoría%20personalizada."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 bg-white text-black px-10 py-5 rounded-full font-medium tracking-[0.2em] uppercase text-sm hover:bg-[#d4af37] hover:text-white transition-all duration-500 hover:scale-105 shadow-[0_0_40px_rgba(212,175,55,0.1)] hover:shadow-[0_0_60px_rgba(212,175,55,0.2)]"
          >
            Contactar Concierge
            <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </div>
  );
}
