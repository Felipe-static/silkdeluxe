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
            className="font-serif text-5xl md:text-7xl mb-6"
          >
            Concierge
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 font-light max-w-2xl mx-auto text-lg"
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
              className="text-center p-12 rounded-3xl bg-[#111] border border-white/5 hover:border-[#d4af37]/30 transition-colors duration-500 flex flex-col items-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-black mb-8">
                {item.icon}
              </div>
              <h3 className="font-serif text-2xl mb-4">{item.title}</h3>
              <p className="text-gray-400 font-light leading-relaxed mb-8 flex-grow">{item.desc}</p>
              <a
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="text-sm tracking-widest uppercase text-[#d4af37] hover:text-white transition-colors border-b border-[#d4af37]/30 hover:border-white pb-1"
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
          className="text-center bg-[#111] p-16 rounded-3xl border border-white/5"
        >
          <h2 className="font-serif text-3xl md:text-4xl mb-6">Preguntas Frecuentes</h2>
          <p className="text-gray-400 font-light max-w-2xl mx-auto mb-12">
            ¿Tienes dudas sobre envíos, discreción o garantías? Consulta nuestra sección de preguntas frecuentes para obtener respuestas inmediatas.
          </p>
          <button className="inline-flex items-center gap-3 bg-transparent border border-white/20 text-white px-8 py-4 rounded-full font-medium tracking-widest uppercase text-sm hover:bg-white hover:text-black transition-all duration-500">
            Ver FAQ
          </button>
        </motion.div>
      </div>
    </div>
  );
}
