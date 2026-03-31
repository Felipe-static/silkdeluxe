"use client";

import React, { useEffect } from "react";
import { useCart } from "@/context/CartContext";
import { motion, AnimatePresence } from "framer-motion";
import { X, Trash2, Plus, Minus, ShoppingBag, MessageCircle } from "lucide-react";
import Image from "next/image";

export function CartDrawer() {
  const { isCartOpen, closeCart, cartItems, removeFromCart, updateQuantity, totalPrice } = useCart();

  // Close when pressing the Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeCart();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [closeCart]);

  // Prevent scrolling when the cart is open
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isCartOpen]);

  const handleCheckout = () => {
    if (cartItems.length === 0) return;

    let message = "Hola! Quiero realizar la siguiente compra:%0A%0A";
    cartItems.forEach((item) => {
      message += `- ${item.quantity}x ${item.name} ($${item.price.toLocaleString()})%0A`;
    });
    message += `%0ATotal: $${totalPrice.toLocaleString()}%0A`;
    message += "Quedo atento(a) a las instrucciones de pago.";

    const whatsappUrl = `https://wa.me/56953237833?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Default Dark Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Drawer Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 w-full md:w-[450px] bg-[#0A0A0A] border-l border-[#d4af37]/20 shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-[#1a1a1a]">
              <div className="flex items-center gap-3 text-white">
                <ShoppingBag size={20} className="text-[#d4af37]" />
                <h2 className="font-serif text-xl uppercase tracking-widest">Mi Carrito</h2>
              </div>
              <button
                onClick={closeCart}
                className="text-[#888] hover:text-[#d4af37] transition-colors p-2"
                aria-label="Cerrar Carrito"
              >
                <X size={20} />
              </button>
            </div>

            {/* Cart Items List */}
            <div className="flex-grow overflow-y-auto p-6 scrollbar-hide space-y-6">
              {cartItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-[#888] gap-4">
                  <ShoppingBag size={48} className="opacity-20" />
                  <p className="font-light tracking-wide">Tu carrito está vacío</p>
                  <button
                    onClick={closeCart}
                    className="text-[#d4af37] text-xs uppercase tracking-[0.2em] hover:text-white transition-colors mt-2"
                  >
                    Seguir comprando
                  </button>
                </div>
              ) : (
                cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    {/* Item Image */}
                    <div className="relative w-20 h-24 bg-[#111] rounded-lg border border-[#1a1a1a] flex-shrink-0 overflow-hidden">
                      <Image
                        src={item.images[0]}
                        alt={item.name}
                        fill
                        unoptimized
                        className="object-cover"
                      />
                    </div>
                    {/* Item Details */}
                    <div className="flex flex-col flex-grow justify-between py-1">
                      <div>
                        <div className="flex justify-between items-start">
                          <h3 className="text-white font-serif tracking-wide text-sm pr-4 line-clamp-2">
                            {item.name}
                          </h3>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-[#888] hover:text-red-500 transition-colors"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                        <p className="text-[#d4af37] mt-1 text-xs tracking-widest">
                          ${item.price.toLocaleString()}
                        </p>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-4 mt-2">
                        <div className="flex items-center border border-[#1a1a1a] rounded-full overflow-hidden">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="px-2 py-1 bg-transparent text-[#888] hover:text-white transition-colors"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="text-white text-xs px-2 w-6 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="px-2 py-1 bg-transparent text-[#888] hover:text-white transition-colors"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                        <span className="text-[#888] text-[10px] uppercase font-light tracking-widest">
                          Subtotal: ${(item.price * item.quantity).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer / Checkout */}
            {cartItems.length > 0 && (
              <div className="p-6 border-t border-[#1a1a1a] bg-[#0d0d0d]">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-white text-sm uppercase tracking-widest font-light mt-1">
                    Total
                  </span>
                  <span className="text-2xl font-serif text-[#d4af37]">
                    ${totalPrice.toLocaleString()}
                  </span>
                </div>
                <button
                  onClick={handleCheckout}
                  className="w-full flex items-center justify-center gap-3 bg-gradient-gold text-[#0A0A0A] py-4 rounded-xl font-medium uppercase tracking-[0.2em] text-xs hover:scale-[1.02] transition-transform duration-300 shadow-[0_0_20px_rgba(212,175,55,0.2)]"
                >
                  <MessageCircle size={18} /> Confirmar vía WhatsApp
                </button>
                <p className="text-[#888] text-[9px] text-center mt-4 tracking-wider uppercase">
                  Pago y detalles de entrega se coordinan por chat.
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
