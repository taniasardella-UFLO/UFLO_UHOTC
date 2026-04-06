import { Stethoscope, Brain, HeartPulse, House } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import LangLabel from "@/components/ui/LangLabel";
import InfoCard from "@/components/ui/InfoCard";

export default function SocialSection() {
  return (
    <section id="social" className="relative z-10 w-full min-h-[100svh] snap-start snap-always flex flex-col justify-center bg-slate-50/60 backdrop-blur-md border-t border-slate-100 py-20 px-4 md:px-8 lg:px-16">
      <SectionHeader tagEs="Pilar 2: Factor Humano" tagEn="Pillar 2: Human Factor" titleEs="Impacto Social" titleEn="Social Impact" color="#3b82f6" icon={<Stethoscope className="w-4 h-4" />} field="Psicología Laboral / Occupational Psychology" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-0 mt-8">
        {/* ESPAÑOL */}
        <div className="border-r-0 lg:border-r border-slate-200 pr-0 lg:pr-8 space-y-4">
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
            Supporting the workforce and their families through the insertion process when relocating to the area. Mobility success requires effective adaptation of the family unit to Añelo&apos;s new regional context.
          </InfoCard>
        </div>
      </div>
    </section>
  );
}
