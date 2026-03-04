"use client";

import Link from "next/link";
import { Instagram, Twitter, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-[#d4af37]/20 pt-24 pb-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="font-serif text-3xl tracking-[0.2em] uppercase text-white mb-6">
              Silk <span className="text-[#d4af37]">Deluxe</span>
            </h2>
            <p className="text-[#888] max-w-sm leading-relaxed font-light">
              Lujo moderno y estilo para quienes buscan lo extraordinario.
              Creamos ideas en éxito.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xs tracking-[0.2em] uppercase text-white mb-6 font-medium">
              Explorar
            </h3>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-[#888] hover:text-[#d4af37] transition-colors text-sm font-light">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-[#888] hover:text-[#d4af37] transition-colors text-sm font-light">
                  Catálogo
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#888] hover:text-[#d4af37] transition-colors text-sm font-light">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="text-xs tracking-[0.2em] uppercase text-white mb-6 font-medium">
              Newsletter
            </h3>
            <p className="text-[#888] text-sm mb-4 font-light">
              Suscríbete para recibir acceso a nuevas colecciones y promociones.
            </p>
            <form className="flex gap-2 mb-8" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Tu email"
                className="bg-transparent border-b border-[#888]/30 text-white px-2 py-2 w-full focus:outline-none focus:border-[#d4af37] transition-colors text-sm font-light placeholder:text-[#888]/50"
              />
              <button type="submit" className="text-[#d4af37] hover:text-white transition-colors text-xs tracking-[0.2em] uppercase">
                Unirse
              </button>
            </form>

            <h3 className="text-xs tracking-[0.2em] uppercase text-white mb-6 font-medium">
              Contacto
            </h3>
            <ul className="space-y-4">
              <li>
                <a href="mailto:contacto@silkdeluxe.com" className="text-[#888] hover:text-[#d4af37] transition-colors text-sm font-light flex items-center gap-3">
                  <Mail size={16} />
                  contacto@silkdeluxe.com
                </a>
              </li>
              <li className="flex gap-5 mt-6">
                <a href="#" className="text-[#888] hover:text-[#d4af37] transition-colors">
                  <Instagram size={20} strokeWidth={1.5} />
                </a>
                <a href="#" className="text-[#888] hover:text-[#d4af37] transition-colors">
                  <Twitter size={20} strokeWidth={1.5} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-[#1a1a1a] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#888] text-xs tracking-[0.2em] uppercase">
            &copy; {new Date().getFullYear()} SILK DELUXE. TODOS LOS DERECHOS RESERVADOS.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-[#888] hover:text-[#d4af37] text-xs tracking-[0.2em] uppercase transition-colors">
              PRIVACIDAD
            </Link>
            <Link href="/terms" className="text-[#888] hover:text-[#d4af37] text-xs tracking-[0.2em] uppercase transition-colors">
              TÉRMINOS
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
