import { Stethoscope, Brain, HeartPulse, House, Activity } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import LangLabel from "@/components/ui/LangLabel";
import InfoCard from "@/components/ui/InfoCard";

export default function SocialSection() {
  return (
    <section id="social" className="relative z-10 w-full min-h-[100svh] snap-start md:snap-always flex flex-col justify-center bg-slate-50/60 backdrop-blur-md border-t border-slate-100 py-20 px-4 md:px-8 lg:px-16">
      <SectionHeader tagEs="Pilar 2: Factor Humano" tagEn="Pillar 2: Human Factor" titleEs="Impacto Social" titleEn="Social Impact" color="#3b82f6" icon={<Stethoscope className="w-4 h-4" />} field="Psicología Laboral / Occupational Psychology" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-0 mt-8">
        {/* ESPAÑOL */}
        <div className="border-r-0 lg:border-r border-slate-200 pr-0 lg:pr-8 space-y-4">
          <LangLabel lang="ES" color="#3b82f6" />
          <InfoCard icon={Brain} title="Habilidades Blandas (Soft Skills)" color="#3b82f6">
            La prevalencia de estructuras jerárquicas rígidas y modelos de masculinidad hegemónica en el sector energético constituye una barrera crítica para la seguridad psicológica, al inhibir la expresión emocional y el reporte preventivo frente a la prioridad de la continuidad operativa. Para mitigar este impacto, es fundamental el fortalecimiento de competencias transversales en mandos medios y supervisores, tales como la gestión de conflictos, la toma de decisiones en momentos de alto estrés y la comunicación asertiva. Este desarrollo de habilidades blandas permite transitar hacia un liderazgo adaptativo, capaz de gestionar equipos con mayor flexibilidad y de transformar la dinámica de mando en un canal eficiente para la prevención de incidentes críticos.
          </InfoCard>
          <InfoCard icon={HeartPulse} title="Prevención y Salud Psicológica" color="#3b82f6">
            La intersección entre regímenes de rotación exigentes, el distanciamiento afectivo y la disponibilidad de liquidez económica en zonas fronterizas configura un escenario de alta vulnerabilidad psicosocial, facilitando la emergencia de conductas de riesgo como la ludopatía digital y los consumos problemáticos como respuesta al estrés crónico. Es relevante la implementación de programas interdisciplinarios articulados en tres niveles: una prevención primaria que incluya inducción psicosocial y manejo de activos financieros; una fase secundaria enfocada en la detección temprana y la capacitación de líderes en señales de alerta; y un nivel terciario que active protocolos de derivación y escucha confidencial orientados a la eliminación del estigma sobre la salud mental en el ámbito laboral.
          </InfoCard>
          <InfoCard icon={House} title="Relocalización Familiar" color="#3b82f6">
            La movilidad del talento suele gestionarse bajo una lógica estrictamente logística, omitiendo que la adaptación y estabilidad del núcleo familiar son los factores determinantes para la retención del personal calificado. El crecimiento acelerado de los enclaves industriales impacta directamente en el bienestar de la familia relocalizada, por lo cual las pautas de ayuda deben enfocarse en facilitar el arraigo a través de la integración con la comunidad local y el fortalecimiento de los vínculos a distancia. Un acompañamiento estratégico en este ámbito asegura que la transición territorial no derive en desarraigo, preservando la continuidad del profesional mediante la contención de su entorno primario.
          </InfoCard>
          <InfoCard icon={Activity} title="Gestión de la Carga Cognitiva y Recuperación" color="#3b82f6">
            La naturaleza estratégica de la operación energética demanda niveles de vigilancia y atención sostenida que agotan la reserva cognitiva de los colaboradores, lo cual, sumado a la alteración de los ciclos circadianos por turnos rotativos, incrementa el riesgo de fatiga crónica y errores operativos. El abordaje de esta problemática implica la gestión de turnos bajo criterios de recuperación biológica y el fomento de la resiliencia colectiva, permitiendo que el personal mantenga una capacidad óptima para la toma de decisiones. Estas pautas de recuperación son esenciales para salvaguardar la integridad psicofísica del trabajador y garantizar la sostenibilidad de los procesos de alta complejidad.
          </InfoCard>
        </div>

        {/* ENGLISH */}
        <div className="pl-0 lg:pl-8 space-y-4 mt-8 lg:mt-0">
          <LangLabel lang="EN" color="#3b82f6" />
          <InfoCard icon={Brain} title="Soft Skills Development" color="#1e3a5f">
            The prevalence of rigid hierarchical structures and hegemonic masculinity models in the energy sector constitutes a critical barrier to psychological safety, inhibiting emotional expression and preventive reporting against the priority of operational continuity. To mitigate this impact, it is essential to strengthen cross-cutting competencies in middle management and supervisors, such as conflict management, decision-making under high stress, and assertive communication. This soft skills development enables a transition toward adaptive leadership, capable of managing teams with greater flexibility and transforming the command dynamic into an efficient channel for the prevention of critical incidents.
          </InfoCard>
          <InfoCard icon={HeartPulse} title="Prevention &amp; Psychological Health" color="#1e3a5f">
            The intersection between demanding rotation regimes, emotional distancing, and the availability of economic liquidity in border zones configures a scenario of high psychosocial vulnerability, facilitating the emergence of risk behaviors such as digital gambling and problematic consumption as a response to chronic stress. The implementation of interdisciplinary programs articulated at three levels is relevant: primary prevention including psychosocial induction and financial asset management; a secondary phase focused on early detection and training leaders in warning signs; and a tertiary level that activates referral and confidential listening protocols aimed at eliminating the stigma surrounding mental health in the workplace.
          </InfoCard>
          <InfoCard icon={House} title="Family Relocation" color="#1e3a5f">
            Talent mobility is usually managed under a strictly logistical approach, overlooking that the adaptation and stability of the family unit are the determining factors for qualified personnel retention. The accelerated growth of industrial enclaves directly impacts the well-being of the relocated family, which is why support guidelines should focus on facilitating rootedness through integration with the local community and strengthening long-distance bonds. Strategic support in this area ensures that the territorial transition does not lead to uprooting, preserving the professional&apos;s continuity through the containment of their primary environment.
          </InfoCard>
          <InfoCard icon={Activity} title="Cognitive Load Management &amp; Recovery" color="#1e3a5f">
            The strategic nature of energy operations demands sustained levels of vigilance and attention that deplete the cognitive reserve of workers, which, combined with the disruption of circadian cycles due to rotating shifts, increases the risk of chronic fatigue and operational errors. Addressing this issue involves shift management based on biological recovery criteria and fostering collective resilience, allowing personnel to maintain optimal decision-making capacity. These recovery guidelines are essential to safeguard the psychophysical integrity of workers and ensure the sustainability of highly complex processes.
          </InfoCard>
        </div>
      </div>
    </section>
  );
}
