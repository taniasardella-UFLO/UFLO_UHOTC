"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

interface GlowingButtonProps {
  label: string;
  onClick?: () => void;
  className?: string;
}

export default function GlowingButton({ label, onClick, className = "" }: GlowingButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`relative group ${className}`}
    >
      {/* Outer Glow / Gradient Border Container */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#8DC63F] via-[#4FB286] to-[#4527A0] p-[2px] opacity-80 group-hover:opacity-100 transition-opacity duration-500 blur-[1px] group-hover:blur-[2px]"></div>
      
      {/* Inner Button Content */}
      <div className="relative flex items-center justify-between w-full h-full bg-[#0B0C10] rounded-[14px] px-6 py-4 shadow-xl">
        <div className="flex items-center gap-3">
          <span className="text-white font-bold tracking-wide text-xs md:text-sm lg:text-base uppercase">{label}</span>
          <ChevronRight className="text-white w-5 h-5 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all" strokeWidth={3} />
        </div>
        
        {/* The 3x3 dots icon from UFLO ref */}
        <div className="grid grid-cols-3 gap-1 ml-6 opacity-60">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 bg-white rounded-full"></div>
          ))}
        </div>
      </div>
    </motion.button>
  );
}
