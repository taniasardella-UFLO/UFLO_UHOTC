"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";

interface MetricCardProps {
  topEs: string;
  topEn: string;
  value: number;
  suffix?: string;
  sub: string;
  color: string;
}

export default function MetricCard({ topEs, topEn, value, suffix = "", sub, color }: MetricCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, y: -4 }}
      className="relative bg-white/80 backdrop-blur-md rounded-2xl p-4 md:p-5 border border-slate-200 shadow-xl text-center overflow-hidden group cursor-default"
      style={{ borderTopWidth: 4, borderTopColor: color }}
    >
      {/* Animated glow background */}
      <motion.div
        animate={{ opacity: [0.02, 0.08, 0.02] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{ background: `radial-gradient(ellipse at center top, ${color}30, transparent 70%)` }}
      />
      <p className="relative text-slate-500 text-[10px] md:text-xs uppercase tracking-wider mb-1 font-bold">{topEs} / {topEn}</p>
      <div className="relative text-3xl md:text-5xl font-black" style={{ color }}>
        <AnimatedCounter value={value} suffix={suffix} />
      </div>
      <p className="relative text-xs font-bold mt-1 text-slate-600">{sub}</p>
    </motion.div>
  );
}
