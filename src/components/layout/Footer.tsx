"use client";

import { motion } from "framer-motion";
import { MapPin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full mt-auto bg-slate-100 rounded-t-[50px] py-12 px-4 md:px-12 lg:px-24 text-center border-t border-slate-200 relative z-20">
      <motion.div initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} className="mx-auto w-20 h-20 bg-[#8DC63F] rounded-full flex items-center justify-center text-white font-serif font-bold text-3xl mb-6 shadow-[0_10px_30px_rgba(141,198,63,0.3)]">
        U
      </motion.div>
      <h2 className="font-serif text-3xl md:text-4xl text-slate-900 font-black mb-2">Contacto / Contact</h2>
      <p className="text-slate-600 mb-8 max-w-lg mx-auto text-sm">Universidad de Flores • Offshore Technology Conference 2026</p>
      <div className="flex justify-center gap-6 text-slate-500 text-xs">
        <span className="flex flex-col items-center gap-1 hover:text-[#8DC63F] transition-colors">
          <MapPin className="h-5 w-5" /> Neuquén, AR
        </span>
        <span className="flex flex-col items-center gap-1 hover:text-[#8DC63F] transition-colors">
          <Mail className="h-5 w-5" /> uflo@rectorado.edu.ar
        </span>
      </div>
      <div className="mt-12 pt-6 border-t border-slate-200 text-slate-400 text-xs">
        © 2026 Universidad de Flores • OTC Houston
      </div>
    </footer>
  );
}
