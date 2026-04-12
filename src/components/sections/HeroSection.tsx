"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import BilingualButton from "@/components/ui/BilingualButton";
import MetricCard from "@/components/ui/MetricCard";
import TLItem from "@/components/ui/TLItem";

export default function HeroSection() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative z-10 w-full min-h-[100svh] snap-start md:snap-always flex flex-col items-center justify-center overflow-hidden py-28 px-4 md:px-12 lg:px-20">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 mix-blend-overlay pointer-events-none" />

      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center text-center gap-8">
        
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 backdrop-blur-md px-4 py-2 text-[13px] text-white shadow-xl"
        >
          <span className="h-2 w-2 rounded-full bg-[#f97316] animate-pulse" />
          Horizonte Productivo 2026 • Productive Horizon 2026
        </motion.div>
          
        <motion.h1 initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          className="font-serif text-6xl md:text-8xl lg:text-9xl font-black text-slate-900 leading-[0.85] drop-shadow-sm"
        >
          <span className="block text-transparent bg-clip-text bg-gradient-to-b from-slate-800 to-slate-500">VACA</span>
          <span className="block text-[#8DC63F]">MUERTA</span>
        </motion.h1>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
          className="text-base md:text-lg text-slate-700 font-medium max-w-2xl leading-relaxed bg-white/60 backdrop-blur-xl rounded-2xl px-6 py-4 border border-slate-200 shadow-lg"
        >
          El aporte estratégico desde la academia: sostenibilidad integral.<br/>
          <span className="text-[#8DC63F] italic font-semibold">The strategic contribution from the academic area: integral sustainability.</span>
        </motion.p>

        {/* Bilingual Metrics */}
        <div className="grid grid-cols-3 gap-4 md:gap-8 mt-4 w-full max-w-3xl">
          <MetricCard topEs="Producción" topEn="Production" value={530} suffix="k+" sub="Barriles / Barrels" color="#8DC63F" />
          <MetricCard topEs="Petróleo" topEn="Oil Reserves" value={16} suffix="B" sub="Barriles eq. / BOE" color="#3b82f6" />
          <MetricCard topEs="Gas Natural" topEn="Natural Gas" value={308} suffix="T" sub="TCF" color="#f97316" />
        </div>

        {/* Navigation Buttons */}
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl mt-4"
        >
          <BilingualButton labelEs="Impacto Ambiental" labelEn="Environmental Impact" color="#22c55e" onClick={() => scrollTo("ambiental")} />
          <BilingualButton labelEs="Impacto Social" labelEn="Social Impact" color="#3b82f6" onClick={() => scrollTo("social")} />
          <BilingualButton labelEs="Impacto Educacional I+D" labelEn="Educational Impact R&D" color="#f59e0b" onClick={() => scrollTo("educacional")} />
        </motion.div>

        {/* TIMELINE */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.8 }}
          className="w-full max-w-3xl mt-6 bg-white/80 backdrop-blur-xl rounded-3xl border border-slate-200 p-6 max-h-[35vh] overflow-y-auto no-scrollbar shadow-xl"
        >
          <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8DC63F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            Línea de Tiempo / Timeline
          </h3>
          <div className="space-y-4">
            <TLItem year="2013" color="#8DC63F">EIA confirma reservas globales / EIA confirms global reserves</TLItem>
            <TLItem year="2016" color="#3b82f6">Impacto territorial en Añelo / Territorial impact on Añelo</TLItem>
            <TLItem year="2019" color="#f97316">Planificación macroeconómica / Macroeconomic planning</TLItem>
            <TLItem year="2021" color="#22c55e">Sustentabilidad y modelado hídrico / Sustainability & water modeling</TLItem>
            <TLItem year="2024" color="#a855f7">Geomecánica de vanguardia / Advanced geomechanics</TLItem>
            <TLItem year="2026" color="#ef4444">Superpozos: récord histórico / Superwells: historic record</TLItem>
          </div>
        </motion.div>
      </div>

      <button onClick={() => scrollTo("ambiental")} className="absolute bottom-6 left-1/2 -translate-x-1/2 text-slate-400 hover:text-slate-800 transition-colors animate-bounce">
        <ChevronDown className="h-8 w-8" />
      </button>
    </section>
  );
}
