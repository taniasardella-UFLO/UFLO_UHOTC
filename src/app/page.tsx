/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Globe, Calendar, Users, Award, Droplets, Wind, Mountain, Leaf, Shield, Briefcase, House, GraduationCap, Building2, Microscope, Target, UsersRound, BookOpen, MapPin, Mail, Phone, TriangleAlert } from "lucide-react"
import DynamicButton from "@/components/DynamicButton"

export default function Home() {
  return (
    <main className="relative bg-background text-foreground selection:bg-primary/20">
      <DynamicButton />

      {/* Navigation (v0 original had fixed right nav, replaced by DynamicButton) */}

      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a10]/95 via-[#0a0a10]/80 to-[#0a0a10]/95 mix-blend-multiply z-10" />
          {/* Fallback pattern if image is missing */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
        </div>
        
        <div className="relative z-20 max-w-5xl mx-auto px-6 text-center pt-24">
          <div className="mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse"></span>
              Universidad de Flores
            </span>
          </div>
          
          <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            <span className="block text-balance">UFLO presenta el OTC –</span>
            <span className="block mt-2 text-balance lg:text-5xl text-gray-300">Offshore Technology Conference 2026</span>
          </h1>
          
          <p className="mt-8 text-xl md:text-2xl lg:text-3xl text-gray-400 font-light animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
            <span className="text-pretty text-primary">Vaca Muerta</span>, impacto en la cuenca neuquina
          </p>
          
          <div className="mt-12 flex flex-wrap justify-center gap-6 text-gray-400 text-sm font-medium animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
            <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary"></span>Houston, Texas</span>
            <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary"></span>Mayo 2026</span>
            <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary"></span>Investigación Académica</span>
          </div>
        </div>
      </section>

      <section id="intro" className="min-h-screen py-24 lg:py-32 bg-card">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <span className="inline-block text-sm font-semibold text-primary tracking-wider uppercase mb-4">Introducción</span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold leading-tight">
              Offshore Technology Conference 2026
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              La OTC (Offshore Technology Conference) es el evento técnico más prestigioso del sector energético mundial. Cada año, reúne a la élite de la industria offshore para compartir avances tecnológicos, investigaciones científicas y mejores prácticas en exploración y producción de hidrocarburos.
            </p>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard icon={Globe} title="Alcance Global" desc="El evento más importante de la industria offshore a nivel mundial" />
            <FeatureCard icon={Calendar} title="54 Años de Historia" desc="Desde 1969, reuniendo a líderes de la industria energética" />
            <FeatureCard icon={Users} title="+60,000 Asistentes" desc="Profesionales, académicos e investigadores de todo el mundo" />
            <FeatureCard icon={Award} title="Excelencia Técnica" desc="Papers revisados por pares y presentaciones de vanguardia" />
          </div>
          
          <blockquote className="mt-16 pl-6 border-l-4 border-primary">
            <p className="text-xl md:text-2xl font-light italic text-gray-300">
              "La investigación académica es fundamental para el desarrollo sustentable de la industria energética argentina."
            </p>
            <cite className="mt-4 block text-sm text-primary not-italic">— Equipo de Investigación UFLO</cite>
          </blockquote>
        </div>
      </section>

      <section id="context" className="min-h-screen py-24 lg:py-32 bg-background border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <span className="inline-block text-sm font-semibold text-primary tracking-wider uppercase mb-4">Contexto Geológico y Económico</span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold leading-tight">
              Vaca Muerta: El gigante energético de la Patagonia
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Ubicada en la Cuenca Neuquina, Vaca Muerta representa una de las formaciones de hidrocarburos no convencionales más importantes del mundo. Su desarrollo está transformando la matriz energética argentina y posicionando al país como potencial exportador neto de energía.
            </p>
          </div>
          
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <StatBox number="30k" unit="km² de extensión" desc="Segunda reserva de shale gas mundial" />
            <StatBox number="16B" unit="Barriles de petróleo" desc="Reservas técnicamente recuperables" />
            <StatBox number="308T" unit="Gas natural (TCF)" desc="Potencial de gas no convencional" />
            <StatBox number="2010" unit="Año de descubrimiento" desc="Inicio de la era no convencional" />
          </div>
        </div>
      </section>

      <section id="environmental" className="min-h-screen py-24 lg:py-32 bg-card border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <span className="inline-block text-sm font-semibold text-primary tracking-wider uppercase mb-4">Análisis Ambiental</span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold leading-tight">
              Impacto ambiental: desafíos y soluciones
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              El desarrollo de Vaca Muerta plantea importantes consideraciones ambientales. Nuestro análisis académico examina los principales vectores de impacto y las estrategias de mitigación implementadas por la industria.
            </p>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
            <InsightCard icon={Droplets} title="Uso del Agua" status="En monitoreo" statusColor="text-amber-500 bg-amber-500/10" desc="Análisis del consumo hídrico en procesos de fractura hidráulica y estrategias de reutilización" />
            <InsightCard icon={Wind} title="Emisiones Atmosféricas" status="Atención" statusColor="text-red-500 bg-red-500/10" desc="Monitoreo de gases de efecto invernadero y compuestos orgánicos volátiles" />
            <InsightCard icon={Mountain} title="Sismicidad Inducida" status="En monitoreo" statusColor="text-amber-500 bg-amber-500/10" desc="Estudios geofísicos sobre actividad sísmica asociada a operaciones de fracking" />
            <InsightCard icon={Leaf} title="Biodiversidad" status="Favorable" statusColor="text-primary bg-primary/10" desc="Evaluación de impactos en ecosistemas patagónicos y planes de mitigación" />
          </div>
          
          <div className="mt-16 p-6 rounded-2xl bg-secondary/30 border border-primary/20">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-semibold">Estrategias de Mitigación</h3>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <MitigationItem num="1" text="Tratamiento y reciclaje de agua de retorno (flowback)" />
              <MitigationItem num="2" text="Implementación de sistemas de detección y reparación de fugas (LDAR)" />
              <MitigationItem num="3" text="Monitoreo sísmico en tiempo real con redes de sensores" />
              <MitigationItem num="4" text="Restauración ecológica de áreas afectadas" />
            </ul>
          </div>
        </div>
      </section>

      <section id="social" className="min-h-screen py-24 lg:py-32 bg-background border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <span className="inline-block text-sm font-semibold text-primary tracking-wider uppercase mb-4">Dimensión Social</span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold leading-tight">
              Impacto social: comunidades en transformación
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              El desarrollo de Vaca Muerta ha generado profundas transformaciones sociales en la región. Analizamos tanto las oportunidades de desarrollo como los desafíos que enfrentan las comunidades locales.
            </p>
          </div>
          
          <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <StatBox number="52k+" unit="Empleos directos" desc="+180% desde 2015" icon={Briefcase} />
            <StatBox number="150k+" unit="Empleos indirectos" desc="Cadena de valor regional" icon={UsersRound} />
            <StatBox number="35%" unit="Crecimiento poblacional" desc="Añelo y zona de influencia" icon={House} />
            <StatBox number="12" unit="Centros de formación" desc="Capacitación técnica especializada" icon={GraduationCap} />
          </div>
          
          <div className="mt-16">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Building2 className="text-primary h-6 w-6" /> Comunidades Impactadas
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <CommunityCard title="Añelo" pop="8k → 25k hab." desc="Epicentro del desarrollo. Transformación de pueblo rural a ciudad petrolera." tags={["Infraestructura", "Vivienda"]} />
              <CommunityCard title="Rincón de los Sauces" pop="42k hab." desc="Ciudad con experiencia previa en industria petrolera convencional." tags={["Diversificación", "Empleo"]} />
              <CommunityCard title="Neuquén Capital" pop="350k hab." desc="Centro logístico y de servicios empresariales para toda la cuenca." tags={["Conectividad", "Formación"]} />
            </div>
          </div>
        </div>
      </section>

      <section id="academic" className="min-h-screen py-24 lg:py-32 bg-card border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <span className="inline-block text-sm font-semibold text-primary tracking-wider uppercase mb-4">Contribución Académica</span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold leading-tight">
              El rol de UFLO en la investigación energética
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              La Universidad de Flores aporta rigor científico y perspectiva académica independiente al análisis del desarrollo energético argentino. Nuestro equipo multidisciplinario contribuye con investigación original y formación de profesionales.
            </p>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard icon={Microscope} title="Geociencias Aplicadas" desc="Caracterización de reservorios, modelado geomecánico y análisis." />
            <FeatureCard icon={Target} title="Ingeniería Ambiental" desc="Estudios de impacto, monitoreo de emisiones y remediación." />
            <FeatureCard icon={UsersRound} title="Ciencias Sociales" desc="Análisis de dinámicas comunitarias y políticas públicas energéticas." />
            <FeatureCard icon={BookOpen} title="Economía Energética" desc="Modelado económico, análisis de mercados y proyecciones." />
          </div>

          <div className="mt-16 text-center pt-10 border-t border-white/10">
            <p className="text-gray-400 mb-6 flex items-center justify-center gap-2">
              <TriangleAlert className="h-5 w-5 text-primary" />
              ¿Interesado en colaborar con nuestra investigación?
            </p>
            <button className="px-8 py-4 bg-primary text-black font-semibold rounded-full hover:bg-primary/90 transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-primary/25">
              Contactar al equipo de investigación
            </button>
          </div>
        </div>
      </section>
      
      <footer className="bg-black py-16 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center font-bold text-black border-2 border-primary">U</div>
              <div>
                <span className="font-serif text-xl font-bold block text-white">Universidad de Flores</span>
                <span className="text-sm text-gray-400">Investigación y Desarrollo</span>
              </div>
            </div>
            <p className="text-sm text-gray-500 max-w-sm mt-4">
              Comprometidos con la excelencia académica y la investigación de alto impacto para el desarrollo sustentable.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Enlaces</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:text-primary transition-colors cursor-pointer">Sobre UFLO</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Investigación</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Contacto</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2"><MapPin className="h-4 w-4 shrink-0 mt-0.5 text-primary" /> Pedernera 275, CABA</li>
              <li className="flex items-start gap-2"><Mail className="h-4 w-4 shrink-0 mt-0.5 text-primary" /> investigacion@uflo.edu.ar</li>
              <li className="flex items-start gap-2"><Phone className="h-4 w-4 shrink-0 mt-0.5 text-primary" /> +54 11 4631-1100</li>
            </ul>
          </div>
        </div>
      </footer>
    </main>
  )
}

function FeatureCard({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <div className="group p-6 rounded-2xl bg-secondary/20 border border-white/5 hover:border-primary/50 transition-colors duration-300">
      <div className="mb-4 inline-flex items-center justify-center h-12 w-12 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-black transition-colors">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm">{desc}</p>
    </div>
  )
}

function StatBox({ number, unit, desc, icon: Icon }: any) {
  return (
    <div className="text-center p-6 rounded-2xl bg-secondary/30 border border-white/5 hover:border-primary/30 transition-colors">
      {Icon && <Icon className="mx-auto h-8 w-8 text-primary mb-4 opacity-80" />}
      <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{number}</div>
      <div className="text-sm font-semibold text-white mb-1">{unit}</div>
      <div className="text-xs text-gray-500">{desc}</div>
    </div>
  )
}

function InsightCard({ icon: Icon, title, status, statusColor, desc }: any) {
  return (
    <div className="group p-6 rounded-2xl bg-secondary/20 border border-white/5 hover:border-white/20 transition-all flex gap-4">
      <div className={`shrink-0 h-12 w-12 rounded-xl flex items-center justify-center ${statusColor}`}>
        <Icon className="h-6 w-6" />
      </div>
      <div>
        <div className="flex items-center gap-3 mb-2">
          <h3 className="text-lg font-semibold">{title}</h3>
          <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-full ${statusColor}`}>{status}</span>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  )
}

function MitigationItem({ num, text }: any) {
  return (
    <li className="flex items-start gap-4 p-4 rounded-xl bg-background/50 border border-white/5">
      <span className="shrink-0 h-7 w-7 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold">{num}</span>
      <span className="text-sm text-gray-300 mt-1">{text}</span>
    </li>
  )
}

function CommunityCard({ title, pop, desc, tags }: any) {
  return (
    <div className="p-5 rounded-2xl bg-secondary/20 border border-white/5">
      <div className="flex items-center justify-between mb-3">
        <h4 className="font-semibold text-lg">{title}</h4>
        <span className="text-xs font-semibold bg-primary/20 text-primary px-2.5 py-1 rounded-full">{pop}</span>
      </div>
      <p className="text-sm text-gray-400 mb-4">{desc}</p>
      <div className="flex gap-2 flex-wrap">
        {tags.map((t: string) => (
          <span key={t} className="text-xs bg-black text-gray-300 border border-white/10 px-2 py-1 rounded-md">{t}</span>
        ))}
      </div>
    </div>
  )
}
