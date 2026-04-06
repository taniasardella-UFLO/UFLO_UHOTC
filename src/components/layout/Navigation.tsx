"use client";

import { motion } from "framer-motion";

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center px-4 md:px-10 py-3 bg-white/80 backdrop-blur-xl border-b border-slate-200">
      {/* UFLO Logo — Centralized */}
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
        <svg width="80" height="80" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="ufloG" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#8DC63F" />
              <stop offset="100%" stopColor="#1e3a5f" />
            </linearGradient>
          </defs>
          <circle cx="60" cy="60" r="59" fill="url(#ufloG)" />
          <circle cx="60" cy="60" r="55" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
          <text x="60" y="54" textAnchor="middle" dominantBaseline="middle" fill="white" fontWeight="900" fontSize="36" fontFamily="Arial,Helvetica,sans-serif">
            UFLO
          </text>
          <text x="60" y="80" textAnchor="middle" dominantBaseline="middle" fill="rgba(255,255,255,0.95)" fontWeight="700" fontSize="11" fontFamily="Arial,Helvetica,sans-serif" letterSpacing="2.5">
            UNIVERSIDAD
          </text>
        </svg>
      </motion.div>
    </nav>
  );
}
