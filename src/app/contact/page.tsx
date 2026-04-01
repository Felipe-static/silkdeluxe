"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MessageCircle, MapPin, ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "¿Cómo garantizan la privacidad y discreción en los envíos?",
    answer: "Tu privacidad es nuestra prioridad. Todos nuestros pedidos se preparan en empaques sobrios, elegantes y completamente privados. El paquete es 100% personalizado, seguro y discreto para garantizar tu total tranquilidad desde nuestra boutique hasta tus manos."
  },
  {
    question: "¿Cuáles son los métodos de pago aceptados?",
    answer: "Para brindarte una atención exclusiva, actualmente gestionamos nuestras compras de manera personalizada a través de WhatsApp, aceptando transferencias bancarias directas. Próximamente integraremos nuevas formas de pago para tu mayor comodidad."
  },
  {
    question: "¿Cuál es el tiempo estimado de entrega?",
    answer: "Cada experiencia Silk Deluxe se prepara con la máxima dedicación y cuidado. El tiempo estimado de entrega a cualquier punto del país es de 2 a 5 días hábiles, procurando siempre un envío rápido y seguro."
  },
  {
    question: "¿Cuentan con políticas de cambios o devoluciones?",
    answer: "Sí, la calidad es nuestro compromiso, por lo que respaldamos las devoluciones por productos con defectos de fábrica. Sin embargo, por estrictos motivos de higiene y salud, no aceptamos cambios o devoluciones si el producto ha sido utilizado o su sello de seguridad original fue roto."
  }
];

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showFaqs, setShowFaqs] = useState(false);

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
              href: "https://wa.me/56953237833"
            },
            {
              icon: <Mail className="w-8 h-8 text-[#d4af37]" />,
              title: "Email",
              desc: "Consultas generales y soporte.",
              action: "Escribir",
              href: "mailto:silkdeluxe.spa@gmail.com"
            },
            {
              icon: <MapPin className="w-8 h-8 text-[#d4af37]" />,
              title: "Boutique",
              desc: "Atención con cita previa.",
              action: "Agendar",
              href: "https://wa.me/56953237833"
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

        {/* FAQ Teaser & Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-premium p-8 md:p-16 rounded-3xl border-gradient-gold relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05)_0%,transparent_70%)] pointer-events-none" />

          <div className="text-center mb-8 relative z-10">
            <h2 className="font-serif text-3xl md:text-4xl mb-6 text-white">Preguntas <span className="text-gradient-gold">Frecuentes</span></h2>
            <p className="text-[#888] font-light max-w-2xl mx-auto mb-8 h-auto">
              ¿Tienes dudas sobre envíos, discreción o garantías? Consulta nuestra sección de preguntas frecuentes para obtener respuestas inmediatas.
            </p>

            {!showFaqs && (
              <button
                onClick={() => setShowFaqs(true)}
                className="inline-flex items-center gap-3 bg-[#d4af37]/10 border border-[#d4af37]/30 text-white px-8 py-4 rounded-full font-medium tracking-[0.2em] uppercase text-xs hover:bg-[#d4af37]/20 transition-all duration-500 shadow-[0_0_30px_rgba(212,175,55,0.1)] hover:shadow-[0_0_40px_rgba(212,175,55,0.2)]"
              >
                Ver FAQ
              </button>
            )}
          </div>

          <AnimatePresence>
            {showFaqs && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="relative z-10 max-w-3xl mx-auto space-y-4"
              >
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="border border-[#d4af37]/20 rounded-2xl bg-[#050505]/50 overflow-hidden backdrop-blur-sm transition-colors hover:border-[#d4af37]/40"
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none"
                    >
                      <span className="font-serif text-lg text-white">{faq.question}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-[#d4af37] transition-transform duration-300 flex-shrink-0 ${openFaq === index ? "rotate-180" : ""}`}
                      />
                    </button>
                    <AnimatePresence>
                      {openFaq === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="px-6 pb-5 pt-0 text-[#888] font-light leading-relaxed">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
