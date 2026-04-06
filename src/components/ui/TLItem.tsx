"use client";

import React from "react";
import { motion } from "framer-motion";

interface TLItemProps {
  year: string;
  children: React.ReactNode;
  color: string;
}

export default function TLItem({ year, children, color }: TLItemProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -15 }} 
      whileInView={{ opacity: 1, x: 0 }} 
      viewport={{ once: true }}
      className="flex items-start gap-3 group"
    >
      <div className="flex flex-col items-center shrink-0">
        <div className="w-3 h-3 rounded-full border-2 group-hover:scale-125 transition-transform" style={{ borderColor: color, backgroundColor: `${color}20` }} />
        <div className="w-px h-full min-h-[20px] bg-slate-200" />
      </div>
      <div className="pb-3">
        <span className="font-black text-lg" style={{ color }}>{year}</span>
        <p className="text-slate-600 text-xs mt-0.5 leading-relaxed">{children}</p>
      </div>
    </motion.div>
  );
}
