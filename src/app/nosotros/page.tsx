"use client";

import { motion } from "framer-motion";
import { Sparkles, Heart, MapPin, Clock, Instagram } from "lucide-react";

export default function NosotrosPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 md:px-12 bg-[#050505] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-px bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent shadow-[0_0_20px_rgba(212,175,55,0.4)]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-[#d4af37]/30 to-transparent" />
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#050505] via-[#d4af37]/10 to-[#050505] rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Sparkles className="w-8 h-8 text-[#d4af37] mx-auto mb-6 opacity-80" />
          <h1 className="font-serif text-5xl md:text-7xl mb-6 text-white tracking-widest uppercase">
            Sobre <span className="text-gradient-gold">Nosotros</span>
          </h1>
          <p className="text-[#d4af37] tracking-[0.3em] text-xs md:text-sm uppercase font-light">
            Bienestar Íntimo Sin Tabúes
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-premium rounded-3xl p-8 md:p-16 relative"
        >
          <div className="space-y-8 text-[#e5e5e5] font-light text-lg md:text-xl leading-relaxed tracking-wide text-justify font-sans">
            <p>
              Silk Deluxe nace desde la unión de dos miradas complementarias dentro del área de la salud, con un propósito claro: abordar el bienestar íntimo desde un enfoque informado, cercano y sin tabúes.
            </p>
            <p>
              La marca combina criterio técnico con una experiencia más humana, entendiendo que el autocuidado no es solo físico, sino también emocional y personal.
            </p>
            <p>
              Silk Deluxe no se enfoca únicamente en la mujer, sino en todas las personas que buscan explorar, conocerse y mejorar su bienestar íntimo, ya sea de forma individual o en pareja. Muchas veces, estos procesos se viven con desinformación o pudor, por lo que la marca propone un espacio seguro, donde la orientación y la confianza son parte central de la experiencia.
            </p>
            <p className="text-white font-medium border-t border-[#d4af37]/20 pt-8 mt-12 text-justify">
              Más que vender productos, Silk Deluxe busca acompañar desde el conocimiento, promoviendo el autoconocimiento, la conexión personal y una sexualidad vivida de manera más consciente y libre.
            </p>
          </div>
          <div className="mt-16 pt-12 border-t border-[#d4af37]/20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-[#e5e5e5]">
            <div className="flex flex-col items-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#d4af37]/10 flex items-center justify-center border border-[#d4af37]/30 shadow-[0_0_15px_rgba(212,175,55,0.2)] hover:scale-110 transition-transform duration-300">
                <MapPin className="w-5 h-5 text-[#d4af37]" />
              </div>
              <div>
                <h3 className="font-serif text-[#d4af37] text-xl mb-2 tracking-wide uppercase">Visítanos</h3>
                <p className="text-sm md:text-base opacity-80 font-light">Puerto Condor 1801</p>
                <p className="text-sm md:text-base opacity-80 font-light">Puerto Montt, Los Lagos</p>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#d4af37]/10 flex items-center justify-center border border-[#d4af37]/30 shadow-[0_0_15px_rgba(212,175,55,0.2)] hover:scale-110 transition-transform duration-300">
                <Clock className="w-5 h-5 text-[#d4af37]" />
              </div>
              <div>
                <h3 className="font-serif text-[#d4af37] text-xl mb-2 tracking-wide uppercase">Horario</h3>
                <p className="text-sm md:text-base opacity-80 font-light">Lunes a Viernes</p>
                <p className="text-sm md:text-base opacity-80 font-light">11:00 a 19:00 hrs</p>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#d4af37]/10 flex items-center justify-center border border-[#d4af37]/30 shadow-[0_0_15px_rgba(212,175,55,0.2)] hover:scale-110 transition-transform duration-300">
                <Instagram className="w-5 h-5 text-[#d4af37]" />
              </div>
              <div>
                <h3 className="font-serif text-[#d4af37] text-xl mb-2 tracking-wide uppercase">Síguenos</h3>
                <a 
                  href="https://www.instagram.com/silkdeluxe.spa/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm md:text-base opacity-80 hover:text-[#d4af37] hover:opacity-100 transition-all duration-300 font-light flex items-center justify-center gap-2 group"
                >
                  <span className="relative pb-1">
                    @silkdeluxe.spa
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#d4af37] transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-16 flex justify-center">
            <Heart className="text-[#d4af37] opacity-60 w-8 h-8 animate-pulse" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
