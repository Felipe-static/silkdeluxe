"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 md:px-12 bg-[#050505]">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-24 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-5xl md:text-7xl mb-6 text-white"
          >
            Contacto <span className="text-gradient-gold">Exclusivo</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[#888] font-light max-w-2xl mx-auto text-lg tracking-wide"
          >
            Atención personalizada, discreta y exclusiva. Estamos aquí para guiarte en tu experiencia Silk Deluxe.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
          {[
            {
              icon: <MessageCircle className="w-8 h-8 text-[#d4af37]" />,
              title: "WhatsApp",
              desc: "Asesoría inmediata y privada.",
              action: "Contactar",
              href: "https://wa.me/1234567890"
            },
            {
              icon: <Mail className="w-8 h-8 text-[#d4af37]" />,
              title: "Email",
              desc: "Consultas generales y soporte.",
              action: "Escribir",
              href: "mailto:concierge@silkdeluxe.com"
            },
            {
              icon: <MapPin className="w-8 h-8 text-[#d4af37]" />,
              title: "Boutique",
              desc: "Atención con cita previa.",
              action: "Agendar",
              href: "#"
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="text-center p-12 rounded-3xl glass-premium border-gradient-gold transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(212,175,55,0.1)] flex flex-col items-center group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-[#d4af37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#050505] mb-8 relative z-10 shadow-[0_0_15px_rgba(212,175,55,0.2)] border border-[#d4af37]/20 group-hover:scale-110 transition-transform duration-500">
                {item.icon}
              </div>
              <h3 className="font-serif text-2xl mb-4 text-white relative z-10">{item.title}</h3>
              <p className="text-[#888] font-light leading-relaxed mb-8 flex-grow relative z-10">{item.desc}</p>
              <a
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="text-[10px] tracking-[0.2em] uppercase text-[#d4af37] hover:text-[#fdfbf5] transition-colors border-b border-[#d4af37]/30 hover:border-[#fdfbf5] pb-1 relative z-10"
              >
                {item.action}
              </a>
            </motion.div>
          ))}
        </div>

        {/* FAQ Teaser */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center glass-premium p-16 rounded-3xl border-gradient-gold relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05)_0%,transparent_70%)] pointer-events-none" />
          <h2 className="font-serif text-3xl md:text-4xl mb-6 text-white relative z-10">Preguntas <span className="text-gradient-gold">Frecuentes</span></h2>
          <p className="text-[#888] font-light max-w-2xl mx-auto mb-12 relative z-10 h-auto">
            ¿Tienes dudas sobre envíos, discreción o garantías? Consulta nuestra sección de preguntas frecuentes para obtener respuestas inmediatas.
          </p>
          <button className="relative z-10 inline-flex items-center gap-3 bg-[#d4af37]/10 border border-[#d4af37]/30 text-white px-8 py-4 rounded-full font-medium tracking-[0.2em] uppercase text-xs hover:bg-[#d4af37]/20 transition-all duration-500 shadow-[0_0_30px_rgba(212,175,55,0.1)] hover:shadow-[0_0_40px_rgba(212,175,55,0.2)]">
            Ver FAQ
          </button>
        </motion.div>
      </div>
    </div>
  );
}
