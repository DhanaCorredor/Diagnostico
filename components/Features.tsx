import Reveal from "./Reveal";
import { Shield, Sparkle, Users, Clock } from "./icons";

const features = [
  {
    icon: Shield,
    title: "Resultados confiables",
    text: "Estudios precisos e informados por especialistas, para que tomes decisiones con tranquilidad.",
  },
  {
    icon: Sparkle,
    title: "Equipos modernos",
    text: "Tecnología actualizada en ecografía, Doppler y estudios cardíacos para diagnósticos de calidad.",
  },
  {
    icon: Users,
    title: "Atención cercana",
    text: "Un equipo humano que te acompaña antes, durante y después de cada estudio o consulta.",
  },
  {
    icon: Clock,
    title: "Cita previa ágil",
    text: "Reserva por WhatsApp y evita esperas. Te confirmamos tu horario en minutos.",
  },
];

export default function Features() {
  return (
    <section id="nosotros" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">
            ¿Por qué elegirnos?
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
            Cuidamos tu salud con compromiso y precisión
          </h2>
          <p className="mt-4 text-muted">
            En Diagnóstico Centro de Salud combinamos tecnología, experiencia y
            un trato humano para ofrecerte la mejor atención.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <Reveal key={f.title} delay={i * 0.08}>
                <div className="group h-full rounded-2xl border border-surface bg-white p-7 shadow-[0_4px_24px_-12px_rgba(31,90,91,0.15)] transition-all hover:-translate-y-1 hover:border-brand/20 hover:shadow-[0_18px_40px_-18px_rgba(31,90,91,0.35)]">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-brand-light text-white transition-transform group-hover:scale-105">
                    <Icon className="h-7 w-7" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-ink">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {f.text}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
