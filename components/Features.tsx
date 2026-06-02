import Reveal from "./Reveal";
import { Shield, Sparkle, Users, Clock, Heart, ArrowRight } from "./icons";
import { waLink } from "@/lib/site";

const features = [
  {
    icon: Shield,
    title: "Resultados confiables",
    text: "Estudios precisos e informados por especialistas, para que tomes decisiones con tranquilidad.",
  },
  {
    icon: Sparkle,
    title: "Equipos modernos",
    text: "Tecnología actualizada en ecografía, Doppler y estudios cardíacos.",
  },
  {
    icon: Users,
    title: "Atención cercana",
    text: "Un equipo humano que te acompaña en cada paso.",
  },
  {
    icon: Clock,
    title: "Cita previa ágil",
    text: "Reserva por WhatsApp y evita esperas. Confirmación en minutos.",
  },
];

export default function Features() {
  return (
    <section id="nosotros" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-brand/10 px-4 py-1.5 text-sm font-semibold text-brand">
            ¿Por qué elegirnos?
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink sm:text-[2.6rem] sm:leading-[1.1]">
            Cuidamos tu salud con compromiso y precisión
          </h2>
          <p className="mt-4 text-muted">
            En Diagnóstico Centro de Salud combinamos tecnología, experiencia y un
            trato humano para ofrecerte la mejor atención.
          </p>
        </Reveal>

        {/* Bento grid */}
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {/* Tarjeta destacada */}
          <Reveal className="lg:row-span-2">
            <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-brand/10 bg-gradient-to-br from-brand/8 via-white to-accent/8 p-8 shadow-[0_10px_40px_-22px_rgba(31,90,91,0.3)]">
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent/10 blur-2xl" />
              <div className="relative">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-brand-light text-white shadow-md">
                  <Heart className="h-7 w-7" />
                </span>
                <h3 className="mt-6 font-display text-2xl font-bold leading-tight text-ink">
                  Salud preventiva al alcance de todos
                </h3>
                <p className="mt-3 text-muted">
                  Detectar a tiempo lo cambia todo. Por eso ofrecemos estudios de
                  calidad a precios accesibles, con la calidez de quien de verdad
                  se preocupa por ti.
                </p>
              </div>
              <a
                href={waLink("Hola, deseo más información sobre sus servicios.")}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-brand px-6 py-3 font-semibold text-white transition-all hover:bg-brand-dark hover:scale-105"
              >
                Conversemos
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </Reveal>

          {/* Tarjetas de features */}
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <Reveal key={f.title} delay={i * 0.07}>
                <div className="group h-full rounded-3xl border border-surface bg-white p-7 shadow-[0_4px_24px_-14px_rgba(31,90,91,0.2)] transition-all hover:-translate-y-1.5 hover:border-brand/20 hover:shadow-[0_24px_50px_-22px_rgba(31,90,91,0.4)]">
                  <span className="flex h-13 w-13 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-brand-light p-3 text-white transition-transform group-hover:scale-110 group-hover:rotate-3">
                    <Icon className="h-7 w-7" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-ink">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{f.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
