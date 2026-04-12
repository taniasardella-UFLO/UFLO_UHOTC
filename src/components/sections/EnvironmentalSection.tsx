import { Microscope, TreePine, Droplets, Wind, Recycle } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import LangLabel from "@/components/ui/LangLabel";
import InfoCard from "@/components/ui/InfoCard";

export default function EnvironmentalSection() {
  return (
    <section id="ambiental" className="relative z-10 w-full min-h-[100svh] snap-start md:snap-always flex flex-col justify-center bg-white/40 backdrop-blur-sm py-20 px-4 md:px-8 lg:px-16">
      <SectionHeader tagEs="Pilar 1: Sostenibilidad" tagEn="Pillar 1: Sustainability" titleEs="Impacto Ambiental" titleEn="Environmental Impact" color="#22c55e" icon={<Microscope className="w-4 h-4" />} field="Ciencias Naturales / Natural Sciences" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-0 mt-8">
        {/* ESPAÑOL */}
        <div className="border-r-0 lg:border-r border-slate-200 pr-0 lg:pr-8 space-y-4">
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
            The infrastructure expansion generates habitat fragmentation, native fauna displacement, and biological community simplification. These processes affect arid ecosystems and riparian environments, compromising ecological connectivity and ecosystem services.
          </InfoCard>
          <InfoCard icon={Droplets} title="Water Resources" color="#166534">
            Intensive water use for hydraulic fracturing, aquifer contamination and pollution risk, effluent generation, and increasing pressure on local basins constitute critical variables for both ecosystems and communities.
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
  );
}
