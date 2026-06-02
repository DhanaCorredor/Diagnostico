import Image from "next/image";
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
            <div className="group relative flex h-full min-h-[24rem] flex-col justify-end overflow-hidden rounded-3xl border border-brand/10 shadow-[0_14px_45px_-20px_rgba(31,90,91,0.45)]">
              <Image
                src="/img/doctor-2.jpg"
                alt="Médico especialista de Diagnóstico Centro de Salud"
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/95 via-brand-dark/55 to-brand-dark/5" />
              <div className="relative p-7 text-white sm:p-8">
                <span className="flex h-13 w-13 items-center justify-center rounded-2xl bg-white/15 backdrop-blur">
                  <Heart className="h-7 w-7" />
                </span>
                <h3 className="mt-5 font-display text-2xl font-bold leading-tight">
                  Salud preventiva al alcance de todos
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/85">
                  Detectar a tiempo lo cambia todo. Ofrecemos estudios de calidad a
                  precios accesibles, con la calidez de quien de verdad se preocupa
                  por ti.
                </p>
                <a
                  href={waLink("Hola, deseo más información sobre sus servicios.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-brand transition-transform hover:scale-105"
                >
                  Conversemos
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </a>
              </div>
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
