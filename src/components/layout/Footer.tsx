"use client";

import { motion } from "framer-motion";
import { MapPin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full snap-end bg-slate-800 rounded-t-[50px] py-12 px-4 md:px-12 lg:px-24 text-center border-t border-[#8DC63F]/50 shadow-[0_-20px_60px_rgba(141,198,63,0.25)] relative z-20">
      <motion.div initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} className="mx-auto w-20 h-20 bg-[#8DC63F] rounded-full flex items-center justify-center text-white font-serif font-bold text-3xl mb-6 shadow-[0_0_35px_rgba(141,198,63,0.5)] border border-[#8DC63F]">
        U
      </motion.div>
      <h2 className="font-serif text-3xl md:text-4xl text-white font-black mb-2 drop-shadow-md">Contacto / Contact</h2>
      <p className="text-[#8DC63F] font-bold md:text-lg mb-2 drop-shadow-[0_0_8px_rgba(141,198,63,0.5)]">Conecta con el Equipo de Investigación UFLO</p>
      <p className="text-slate-300 mb-8 max-w-lg mx-auto text-sm">Universidad de Flores • Offshore Technology Conference 2026</p>
      <div className="flex justify-center gap-6 text-slate-400 text-xs">
        <span className="flex flex-col items-center gap-1 hover:text-[#8DC63F] transition-colors">
          <MapPin className="h-5 w-5" /> Neuquén, AR
        </span>
        <span className="flex flex-col items-center gap-1 hover:text-[#8DC63F] transition-colors">
          <Mail className="h-5 w-5" /> uflo@rectorado.edu.ar
        </span>
      </div>
      <div className="mt-12 pt-6 border-t border-white/10 text-slate-500 text-xs">
        © 2026 Universidad de Flores • OTC Houston
      </div>
    </footer>
  );
}
