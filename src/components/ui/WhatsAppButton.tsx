"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export function WhatsAppButton() {
  const phoneNumber = "1234567890"; // Replace with actual number
  const message = "Hola Silk Deluxe, me gustaría recibir asesoría personalizada.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      className="fixed bottom-8 right-8 z-50 bg-[#d4af37] text-black p-4 rounded-full shadow-2xl hover:bg-[#e5c158] transition-colors duration-300 flex items-center justify-center group"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={28} className="group-hover:scale-110 transition-transform duration-300" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-4 bg-black/80 backdrop-blur-md text-white text-sm px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none border border-white/10">
        Asesoría Privada
      </span>
    </motion.a>
  );
}
