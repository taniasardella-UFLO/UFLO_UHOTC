"use client";
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  TreePine, Droplets, Wind, Shield, HeartPulse, Brain, 
  House, UsersRound, BookOpen, MapPin, Mail, 
  ThermometerSun, Recycle, AlertTriangle, ChevronDown, CheckCircle2,
  Microscope, Stethoscope, HardHat
} from "lucide-react";

import BilingualButton from "@/components/BilingualButton";
import AnimatedCounter from "@/components/AnimatedCounter";

export default function Home() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ container: containerRef });

  const mapRotate = useTransform(scrollYProgress, [0, 1], [0, -45]);
  const mapScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 1.5]);
  const mapY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const mapOpacity = useTransform(scrollYProgress, [0, 0.8, 1], [0.8, 0.4, 0.1]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main ref={containerRef} className="relative bg-[#f8fafc] text-slate-900 selection:bg-[#8DC63F]/30 h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth w-full overflow-x-hidden">

      {/* ═══════ FIXED TOP BAR ═══════ */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center px-4 md:px-10 py-3 bg-white/80 backdrop-blur-xl border-b border-slate-200">
        {/* UFLO Logo — Centralized */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <svg width="80" height="80" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            <defs><linearGradient id="ufloG" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#8DC63F"/><stop offset="100%" stopColor="#1e3a5f"/></linearGradient></defs>
            <circle cx="60" cy="60" r="59" fill="url(#ufloG)"/>
            <circle cx="60" cy="60" r="55" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
            <text x="60" y="54" textAnchor="middle" dominantBaseline="middle" fill="white" fontWeight="900" fontSize="36" fontFamily="Arial,Helvetica,sans-serif">UFLO</text>
            <text x="60" y="80" textAnchor="middle" dominantBaseline="middle" fill="rgba(255,255,255,0.95)" fontWeight="700" fontSize="11" fontFamily="Arial,Helvetica,sans-serif" letterSpacing="2.5">UNIVERSIDAD</text>
          </svg>
        </motion.div>
      </nav>

      {/* ═══════ GLOBAL BACKGROUND: 3D MAP ═══════ */}
      <motion.div 
        style={{ rotate: mapRotate, scale: mapScale, y: mapY, opacity: 0.25 }}
        className="fixed inset-0 z-0 origin-center pointer-events-none filter saturate-50 brightness-110"
      >
        <Image src="/images/vaca-muerta-super-3d.png" alt="Vaca Muerta 3D" fill className="object-cover object-center" priority quality={100} />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-transparent opacity-60" />
      </motion.div>

      {/* =======================================================================
          SECCIÓN 1: HERO CENTRAL + MÉTRICAS BILINGÜE
          ======================================================================= */}
      <section id="hero" className="relative z-10 w-full min-h-[100svh] snap-start snap-always flex flex-col items-center justify-center overflow-hidden py-28 px-4 md:px-12 lg:px-20">
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
            <span className="text-[#8DC63F] italic font-semibold">The strategic contribution from academia: integral sustainability.</span>
          </motion.p>

          {/* Bilingual Metrics — each a unique color */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 mt-4 w-full max-w-3xl">
            <MetricCard topEs="Producción" topEn="Production" value={530} suffix="k+" sub="Barriles / Barrels" color="#8DC63F" />
            <MetricCard topEs="Petróleo" topEn="Oil Reserves" value={16} suffix="B" sub="Barriles eq. / BOE" color="#3b82f6" />
            <MetricCard topEs="Gas Natural" topEn="Natural Gas" value={308} suffix="T" sub="TCF" color="#f97316" />
          </div>

          {/* Navigation Buttons — Each a different color, animating ES/EN */}
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl mt-4"
          >
            <BilingualButton labelEs="Impacto Ambiental" labelEn="Environmental Impact" color="#22c55e" onClick={() => scrollTo("ambiental")} />
            <BilingualButton labelEs="Impacto Social" labelEn="Social Impact" color="#3b82f6" onClick={() => scrollTo("social")} />
            <BilingualButton labelEs="Impacto Educacional I+D" labelEn="Educational Impact R&D" color="#f59e0b" onClick={() => scrollTo("educacional")} />
          </motion.div>

          {/* ═══ TIMELINE: Evolución Vaca Muerta ═══ */}
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

        <a href="#ambiental" className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 hover:text-white transition-colors animate-bounce">
          <ChevronDown className="h-8 w-8" />
        </a>
      </section>

      {/* =======================================================================
          SECCIÓN 2: IMPACTO AMBIENTAL (ES | EN)
          ======================================================================= */}
      <section id="ambiental" className="relative z-10 w-full min-h-[100svh] snap-start snap-always flex flex-col justify-center bg-white/40 backdrop-blur-sm py-20 px-4 md:px-8 lg:px-16">
        <SectionHeader tagEs="Pilar 1: Sostenibilidad" tagEn="Pillar 1: Sustainability" titleEs="Impacto Ambiental" titleEn="Environmental Impact" color="#22c55e" icon={<Microscope className="w-4 h-4"/>} field="Ciencias Naturales / Natural Sciences" />

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-0 mt-8">
          {/* ESPAÑOL */}
          <div className="border-r-0 lg:border-r border-white/10 pr-0 lg:pr-8 space-y-4">
            <LangLabel lang="ES" color="#22c55e" />
            <InfoCard icon={TreePine} title="Ecosistemas y Biodiversidad" color="#22c55e">
              La expansión de la infraestructura genera fragmentación del hábitat, modificación de la cobertura vegetal, desplazamiento de fauna nativa y simplificación de comunidades biológicas. Estos procesos afectan ecosistemas áridos como el monte y ambientes ribereños, comprometiendo la conectividad ecológica.
            </InfoCard>
            <InfoCard icon={Droplets} title="Recursos Hídricos" color="#22c55e">
              El uso intensivo de agua para fractura hidráulica, el riesgo de contaminación de acuíferos, la generación de efluentes y creciente presión sobre cuencas locales constituyen variables críticas tanto para ecosistemas como para las comunidades.
            </InfoCard>
            <InfoCard icon={Wind} title="Emisiones y Calidad del Aire" color="#22c55e">
              Las operaciones generan emisiones por quema, venteo de gas, tránsito de maquinaria pesada y compuestos orgánicos volátiles. Impactan calidad del aire local y contribuyen al cambio climático a escala global.
            </InfoCard>
            <InfoCard icon={Recycle} title="Gestión de Residuos y Gobernanza" color="#22c55e">
              Sólidos industriales, lodos de perforación y residuos asimilables a urbanos requieren sistemas rigurosos de gestión, tratamiento y disposición final. Se necesita fortalecer los sistemas de monitoreo con bioindicadores.
            </InfoCard>
          </div>

          {/* ENGLISH */}
          <div className="pl-0 lg:pl-8 space-y-4 mt-8 lg:mt-0">
            <LangLabel lang="EN" color="#22c55e" />
            <InfoCard icon={TreePine} title="Ecosystems & Biodiversity" color="#166534">
              Infrastructure expansion generates habitat fragmentation, native fauna displacement, and biological community simplification. These processes affect arid ecosystems and riparian environments, compromising ecological connectivity and ecosystem services.
            </InfoCard>
            <InfoCard icon={Droplets} title="Water Resources" color="#166534">
              Intensive water use for hydraulic fracturing, aquifer contamination risk, effluent generation, and increasing pressure on local basins constitute critical variables for both ecosystems and communities.
            </InfoCard>
            <InfoCard icon={Wind} title="Emissions & Air Quality" color="#166534">
              Operations generate emissions from flaring, gas venting, heavy machinery transit, and volatile organic compounds. They impact local air quality and contribute to global climate change.
            </InfoCard>
            <InfoCard icon={Recycle} title="Waste Management & Governance" color="#166534">
              Industrial solids, drilling muds, and urban-like waste require rigorous management, treatment, and final disposal systems. Monitoring systems with bioindicators must be strengthened.
            </InfoCard>
          </div>
        </div>
      </section>

      {/* =======================================================================
          SECCIÓN 3: IMPACTO SOCIAL (ES | EN)
          ======================================================================= */}
      <section id="social" className="relative z-10 w-full min-h-[100svh] snap-start snap-always flex flex-col justify-center bg-slate-50/60 backdrop-blur-md border-t border-slate-100 py-20 px-4 md:px-8 lg:px-16">
        <SectionHeader tagEs="Pilar 2: Factor Humano" tagEn="Pillar 2: Human Factor" titleEs="Impacto Social" titleEn="Social Impact" color="#3b82f6" icon={<Stethoscope className="w-4 h-4"/>} field="Psicología Laboral / Occupational Psychology" />

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-0 mt-8">
          {/* ESPAÑOL */}
          <div className="border-r-0 lg:border-r border-white/10 pr-0 lg:pr-8 space-y-4">
            <LangLabel lang="ES" color="#3b82f6" />
            <InfoCard icon={Brain} title="Habilidades Blandas (Soft Skills)" color="#3b82f6">
              Resulta un desafío en culturas de masculinidad hegemónica que inhiben la expresión emocional y mantienen jerarquías rígidas. Se propone trabajar la inteligencia emocional, el liderazgo, la gestión del tiempo y la motivación en mandos medios y supervisores.
            </InfoCard>
            <InfoCard icon={HeartPulse} title="Prevención y Salud Psicológica" color="#3b82f6">
              Programa interdisciplinario en tres niveles: Prevención Primaria (inducción psicosocial, manejo financiero), Secundaria (detección de consumos problemáticos y ludopatía digital), y Terciaria (protocolos de derivación, eliminación del estigma).
            </InfoCard>
            <InfoCard icon={House} title="Relocalización Familiar" color="#3b82f6">
              Acompañar los procesos de inserción de la fuerza laboral cuando se trasladan a la zona. El éxito de la movilidad requiere adaptación efectiva del entorno familiar al nuevo contexto regional de Añelo.
            </InfoCard>
          </div>

          {/* ENGLISH */}
          <div className="pl-0 lg:pl-8 space-y-4 mt-8 lg:mt-0">
            <LangLabel lang="EN" color="#3b82f6" />
            <InfoCard icon={Brain} title="Soft Skills Development" color="#1e3a5f">
              A significant challenge in hegemonic masculinity cultures that inhibit emotional expression and maintain rigid hierarchies. The proposal is to develop emotional intelligence, leadership, time management and motivation in middle management and supervisors.
            </InfoCard>
            <InfoCard icon={HeartPulse} title="Prevention & Psychological Health" color="#1e3a5f">
              Interdisciplinary program in three levels: Primary Prevention (psychosocial induction, financial management), Secondary (detection of problematic consumption and digital gambling), and Tertiary (referral protocols, stigma elimination).
            </InfoCard>
            <InfoCard icon={House} title="Family Relocation" color="#1e3a5f">
              Supporting the workforce and their families through the insertion process when relocating to the area. Mobility success requires effective adaptation of the family unit to Añelo's new regional context.
            </InfoCard>
          </div>
        </div>
      </section>

      {/* =======================================================================
          SECCIÓN 4: IMPACTO EDUCACIONAL I+D (ES | EN) + FOOTER
          ======================================================================= */}
      <section id="educacional" className="relative z-10 w-full min-h-[100svh] snap-start snap-always flex flex-col pt-20 bg-white/90 backdrop-blur-lg border-t border-slate-100 justify-between">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-16 mb-10">
          <SectionHeader tagEs="Pilar 3: Estrategia" tagEn="Pillar 3: Strategy" titleEs="Impacto Educacional I+D" titleEn="Educational Impact R&D" color="#f59e0b" icon={<HardHat className="w-4 h-4"/>} field="Seguridad e Higiene / Industrial Safety" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 mt-8">
            {/* ESPAÑOL */}
            <div className="border-r-0 lg:border-r border-white/10 pr-0 lg:pr-8 space-y-4">
              <LangLabel lang="ES" color="#f59e0b" />
              <InfoCard icon={CheckCircle2} title="Cultura Organizacional y Formación" color="#f59e0b">
                Las dinámicas corporativas de hiper-agotamiento deben desarticularse. Talleres regulares de gestión emocional y prevención de consumos problemáticos ayudan a redefinir los entornos de seguridad e higiene.
              </InfoCard>
              <InfoCard icon={CheckCircle2} title="Sinergia Científica (I+D)" color="#f59e0b">
                Líneas de investigación conjuntas con CONICET. Estudios longitudinales que miden el nivel de estrés por los diagramas de turnos en la Cuenca Neuquina, generando evidencia científica sólida.
              </InfoCard>
              <InfoCard icon={CheckCircle2} title="Alianza Público-Privada" color="#f59e0b">
                Articulación con operadoras y sindicatos para cruzar variables macroeconómicas con bienestar. Transformar la investigación en protocolos unificados (Best Practices) avalados por la academia.
              </InfoCard>
            </div>

            {/* ENGLISH */}
            <div className="pl-0 lg:pl-8 space-y-4 mt-8 lg:mt-0">
              <LangLabel lang="EN" color="#f59e0b" />
              <InfoCard icon={CheckCircle2} title="Organizational Culture & Training" color="#92400e">
                Corporate hyper-exhaustion dynamics must be dismantled. Regular emotional management workshops and problematic consumption prevention help redefine safety and hygiene environments.
              </InfoCard>
              <InfoCard icon={CheckCircle2} title="Scientific Synergy (R&D)" color="#92400e">
                Joint research lines with CONICET. Longitudinal studies measuring stress levels from shift schedules in the Neuquén Basin, generating solid scientific evidence.
              </InfoCard>
              <InfoCard icon={CheckCircle2} title="Public-Private Partnerships" color="#92400e">
                Articulation with operators and unions to cross macroeconomic variables with wellbeing. Transforming research into unified protocols (Best Practices) endorsed by academia.
              </InfoCard>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="w-full mt-auto bg-slate-100 rounded-t-[50px] py-12 px-4 md:px-12 lg:px-24 text-center border-t border-slate-200 relative z-20">
          <motion.div initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} className="mx-auto w-20 h-20 bg-[#8DC63F] rounded-full flex items-center justify-center text-white font-serif font-bold text-3xl mb-6 shadow-[0_10px_30px_rgba(141,198,63,0.3)]">
            U
          </motion.div>
          <h2 className="font-serif text-3xl md:text-4xl text-slate-900 font-black mb-2">Contacto / Contact</h2>
          <p className="text-slate-600 mb-8 max-w-lg mx-auto text-sm">Universidad de Flores • Offshore Technology Conference 2026</p>
          <div className="flex justify-center gap-6 text-slate-500 text-xs">
            <span className="flex flex-col items-center gap-1 hover:text-[#8DC63F] transition-colors"><MapPin className="h-5 w-5" /> Neuquén, AR</span>
            <span className="flex flex-col items-center gap-1 hover:text-[#8DC63F] transition-colors"><Mail className="h-5 w-5" /> uflo@rectorado.edu.ar</span>
          </div>
          <div className="mt-12 pt-6 border-t border-slate-200 text-slate-400 text-xs">© 2026 Universidad de Flores • OTC Houston</div>
        </footer>
      </section>

    </main>
  );
}

/* ═══════════════════ MICRO COMPONENTS ═══════════════════ */

function MetricCard({ topEs, topEn, value, suffix, sub, color }: any) {
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

function SectionHeader({ tagEs, tagEn, titleEs, titleEn, color, icon, field }: any) {
  return (
    <div className="text-center max-w-4xl mx-auto">
      <div className="inline-flex flex-wrap items-center justify-center gap-2 mb-3">
        <span className="text-xs font-bold tracking-widest uppercase px-4 py-1 rounded-full" style={{ color, backgroundColor: `${color}15`, border: `1px solid ${color}30` }}>{tagEs} / {tagEn}</span>
        <span className="text-xs font-bold px-4 py-1 rounded-full flex items-center gap-1" style={{ color, backgroundColor: `${color}10`, border: `1px solid ${color}20` }}>
          {icon} {field}
        </span>
      </div>
      <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-slate-900">
        {titleEs} <span className="text-slate-300 font-light">/</span> <span style={{ color }}>{titleEn}</span>
      </h2>
    </div>
  );
}

function LangLabel({ lang, color }: { lang: string; color: string }) {
  return (
    <div className="flex items-center gap-2 mb-2">
      <div className="w-8 h-[2px] rounded-full" style={{ backgroundColor: color }} />
      <span className="text-xs font-black tracking-[0.3em] uppercase" style={{ color }}>{lang === "ES" ? "🇦🇷 Español" : "🇺🇸 English"}</span>
      <div className="flex-1 h-[1px] bg-slate-200" />
    </div>
  );
}

function InfoCard({ icon: Icon, title, children, color }: any) {
  return (
    <div className="bg-white/70 backdrop-blur-sm border border-slate-200 rounded-2xl p-5 hover:bg-white transition-all group shadow-sm hover:shadow-md" style={{ borderLeftWidth: 3, borderLeftColor: color }}>
      <div className="flex items-center gap-3 mb-3">
        <div className="h-10 w-10 rounded-xl flex items-center justify-center border border-white/10" style={{ backgroundColor: `${color}15` }}>
          <Icon className="h-5 w-5" style={{ color }} />
        </div>
        <h4 className="font-bold text-slate-900 text-base leading-tight">{title}</h4>
      </div>
      <p className="text-slate-600 text-sm leading-relaxed">{children}</p>
    </div>
  );
}

function TLItem({ year, children, color }: any) {
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

