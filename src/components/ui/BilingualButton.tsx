"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

interface BilingualButtonProps {
  labelEs: string;
  labelEn: string;
  color: string;
  onClick?: () => void;
}

export default function BilingualButton({ labelEs, labelEn, color, onClick }: BilingualButtonProps) {
  const [isEnglish, setIsEnglish] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => setIsEnglish((prev) => !prev), 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.button
      whileHover={{ scale: 1.06, y: -3 }}
      whileTap={{ scale: 0.96 }}
      onClick={onClick}
      className="relative group w-full"
    >
      {/* Outer Glow — animated pulse */}
      <motion.div
        animate={{ opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 rounded-2xl p-[2px] group-hover:opacity-100 transition-opacity duration-500 blur-[2px] group-hover:blur-[3px]"
        style={{ background: `linear-gradient(135deg, ${color}, ${color}88, transparent)` }}
      />

      {/* Inner Content — taller, more space for text */}
      <div className="relative flex flex-col w-full h-full rounded-[14px] px-5 py-5 shadow-xl" style={{ backgroundColor: `${color}18`, borderColor: `${color}40`, borderWidth: 1 }}>
        
        {/* Animated Label — tall enough for 2-line names */}
        <div className="relative h-[60px] w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={isEnglish ? "en" : "es"}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col justify-center h-[60px]"
            >
              <span className="text-slate-900 font-black text-base md:text-lg leading-snug">
                {isEnglish ? labelEn : labelEs}
              </span>
              <span className="text-[10px] font-bold tracking-widest uppercase mt-1" style={{ color }}>
                {isEnglish ? "🇺🇸 English" : "🇦🇷 Español"}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom row with arrow and dots */}
        <div className="flex items-center justify-between mt-2 pt-2 border-t" style={{ borderColor: `${color}30` }}>
          <div className="grid grid-cols-3 gap-1 opacity-40">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: color }} />
            ))}
          </div>
          <ChevronRight className="w-5 h-5 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all" style={{ color }} strokeWidth={3} />
        </div>
      </div>
    </motion.button>
  );
}
