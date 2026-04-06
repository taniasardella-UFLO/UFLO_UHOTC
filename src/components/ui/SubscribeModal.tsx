"use client";

import { useState, useEffect } from "react";
import { Send, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function SubscribeModal() {
  const [isOpen, setIsOpen] = useState(false);

  // Trigger modal on exit intent or after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000);

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) setIsOpen(true);
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          <motion.div
            initial={{ scale: 0.9, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 20, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-xl overflow-hidden rounded-2xl bg-white p-10 shadow-2xl"
          >
            {/* Background Blob matching the screenshot */}
            <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-gradient-to-br from-[#ff007f] to-[#9d00ff] opacity-90 blur-2xl" />
            
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 z-10 text-gray-400 hover:text-gray-800 transition-colors"
            >
              <X size={24} />
            </button>

            <div className="relative z-10">
              <p className="text-sm text-gray-500 font-medium">Antes de irte, hablemos de futuro...</p>
              <h2 className="mt-2 text-3xl font-light leading-tight text-[#ff007f]">
                Y DESCUBRÍ CÓMO PODEMOS<br /> 
                AYUDARTE A DISEÑAR SOLUCIONES<br /> 
                MIRANDO EL MAÑANA.
              </h2>

              <form className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap" onSubmit={(e) => { e.preventDefault(); setIsOpen(false); }}>
                <input 
                  type="text" 
                  placeholder="Nombre y apellido" 
                  className="flex-1 rounded-full border border-gray-300 px-6 py-3 text-sm text-gray-900 outline-none focus:border-[#ff007f]"
                  required
                />
                <input 
                  type="email" 
                  placeholder="E-mail" 
                  className="flex-1 rounded-full border border-gray-300 px-6 py-3 text-sm text-gray-900 outline-none focus:border-[#ff007f]"
                  required
                />
                <button 
                  type="submit" 
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-[#ff007f] px-8 py-3 text-sm font-semibold text-white transition-transform hover:scale-105 active:scale-95"
                >
                  SUSCRIBITE <Send size={16} />
                </button>
              </form>
            </div>

            {/* Faint watermark text in the background of the modal */}
            <div className="pointer-events-none absolute bottom-4 left-6 z-0 mix-blend-multiply opacity-5">
              <h1 className="text-7xl font-black tracking-tighter text-gray-900">
                FUTURE THINKING
              </h1>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
