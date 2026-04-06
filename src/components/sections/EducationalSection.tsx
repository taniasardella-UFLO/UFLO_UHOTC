import { HardHat, CheckCircle2 } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import LangLabel from "@/components/ui/LangLabel";
import InfoCard from "@/components/ui/InfoCard";

export default function EducationalSection() {
  return (
    <section id="educacional" className="relative z-10 w-full min-h-[100svh] snap-start md:snap-always flex flex-col pt-20 bg-white/90 backdrop-blur-lg border-t border-slate-100 justify-between">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-16 mb-10">
        <SectionHeader tagEs="Pilar 3: Estrategia" tagEn="Pillar 3: Strategy" titleEs="Impacto Educacional I+D" titleEn="Educational Impact R&D" color="#f59e0b" icon={<HardHat className="w-4 h-4" />} field="Seguridad e Higiene / Industrial Safety" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 mt-8">
          {/* ESPAÑOL */}
          <div className="border-r-0 lg:border-r border-slate-200 pr-0 lg:pr-8 space-y-4">
            <LangLabel lang="ES" color="#f59e0b" />
            
            <p className="text-slate-600 text-sm mb-4 leading-relaxed font-medium">
              Para que las intervenciones en el ámbito social, laboral y ambiental sean escalables y efectivas, la Academia no puede operar en aislamiento. Se propone a continuación la conformación de un ecosistema de innovación aplicada, centrado en el desarrollo de estos factores interrelacionados:
            </p>

            <InfoCard icon={CheckCircle2} title="Sinergia Científico-Académica" color="#f59e0b">
              Es imperativo estructurar líneas de investigación conjuntas con otras universidades, centros de investigación y diversos espacios del ámbito científico. El objetivo es llevar a cabo estudios longitudinales que midan el impacto de los diagramas de turnos, el aislamiento y el nivel de estrés en la Cuenca Neuquina, generando evidencia científica y datos rigurosos sobre el comportamiento organizacional en este ecosistema particular.
            </InfoCard>
            <InfoCard icon={CheckCircle2} title="Alianzas Estratégicas Público-Privadas" color="#f59e0b">
              El abordaje de las problemáticas sociales, ambientales y laborales debe darse a través de una articulación transversal. La universidad tiene que integrar sus investigaciones en conjunto con el ámbito legislativo y gubernamental para la formulación de políticas, y a su vez con el sector privado. Trabajar en conjunto es lo que permitirá consolidar un esquema sostenible que logre la integración de la alta productividad en la Cuenca Neuquina, garantizando al mismo tiempo el bienestar y el trabajo sostenible.
            </InfoCard>
            <InfoCard icon={CheckCircle2} title="Transferencia Tecnológica y Mejores Prácticas" color="#f59e0b">
              La meta de esta red de I+D es la transformación de las investigaciones en acciones concretas. Al generar evidencia científica a través de un abordaje interdisciplinario, se apoya el proceso con una mirada integradora desde la Academia. El propósito es contribuir a las mejoras operativas mediante la adopción de mejores prácticas basadas en evidencia, asegurando así que el bienestar integral sostenga la viabilidad del proyecto a largo plazo.
            </InfoCard>
          </div>

          {/* ENGLISH */}
          <div className="pl-0 lg:pl-8 space-y-4 mt-8 lg:mt-0">
            <LangLabel lang="EN" color="#f59e0b" />
            
            <p className="text-slate-600 text-sm mb-4 leading-relaxed font-medium">
              For interventions in the social, labor, and environmental fields to be scalable and effective, Academia cannot operate in isolation. We propose the formation of an applied innovation ecosystem below, focused on the development of these interrelated factors:
            </p>

            <InfoCard icon={CheckCircle2} title="Scientific-Academic Synergy" color="#92400e">
              It is imperative to structure joint research lines with other universities, research centers, and various scientific spaces. The objective is to conduct longitudinal studies measuring the impact of shift schedules, isolation, and stress levels in the Neuquén Basin, generating scientific evidence and rigorous data on organizational behavior in this particular ecosystem.
            </InfoCard>
            <InfoCard icon={CheckCircle2} title="Public-Private Strategic Alliances" color="#92400e">
              Addressing social, environmental, and labor issues requires transverse articulation. The university must integrate its research with legislative and governmental sectors for policymaking, alongside the private sector. Working together will consolidate a sustainable framework integrating high productivity in the Neuquén Basin while ensuring wellbeing and sustainable work.
            </InfoCard>
            <InfoCard icon={CheckCircle2} title="Tech Transfer & Best Practices" color="#92400e">
              The goal of this R&D network is transforming research into concrete actions. By generating scientific evidence through an interdisciplinary approach, the process is supported with an integrative perspective from Academia. The purpose is to contribute to operational improvements by adopting evidence-based best practices, thus ensuring that integral wellbeing sustains the project&apos;s long-term viability.
            </InfoCard>
          </div>
        </div>
      </div>
    </section>
  );
}
