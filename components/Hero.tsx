import { site } from "@/lib/site";
import { Phone, Pin, ArrowRight, Sparkle, Shield, Clock } from "./icons";
import CountUp from "./CountUp";

const stats = [
  { value: "+30", label: "Estudios y consultas" },
  { value: "12$", label: "Ecografías desde" },
  { value: "7:30", label: "Abrimos AM · Lun-Sáb" },
];

const trust = [
  { icon: Shield, text: "Resultados confiables" },
  { icon: Clock, text: "Cita previa ágil" },
  { icon: Pin, text: "C.C. Parque Aragua" },
];

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-[#266d6c] pt-28 pb-14 sm:pt-32 sm:pb-20">
      {/* Detalles flotantes sutiles (no tocan el borde superior) */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <span className="animate-float-slow absolute left-[7%] top-[52%] h-16 w-16 rounded-full border border-white/10" />
        <span className="animate-float-slow absolute right-[22%] bottom-[10%] h-24 w-24 rounded-full border border-white/10" />
        <span className="animate-float absolute right-[12%] top-[28%] h-3 w-3 rounded-full bg-accent/60" />
        <span className="animate-float-delayed absolute left-[18%] top-[80%] h-2.5 w-2.5 rounded-full bg-white/40" />
        <span className="animate-float-delayed absolute right-[6%] top-[64%] h-2 w-2 rounded-full bg-white/30" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="reveal text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-medium text-white shadow-sm backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            {site.bioShort}
          </span>

          <h1 className="mt-6 font-display text-[2rem] font-extrabold leading-[1.08] tracking-tight text-white [text-wrap:balance] sm:text-5xl lg:text-[4rem] lg:leading-[1.04]">
            Centro de Especialidades{" "}
            <span className="text-gradient-animate">Médicas</span>
          </h1>

          <p className="mt-4 font-display text-xl font-bold text-white sm:text-2xl">
            {site.slogan}
          </p>

          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/80 lg:mx-0">
            Ecografía integral y Doppler, holter de ritmo, MAPA, electrocardiograma
            y ecocardiograma.
          </p>

          <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
            <a
              href="#servicios"
              className="btn-shine group inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 font-semibold text-white shadow-[0_14px_40px_-12px_rgba(99,166,54,0.7)] transition-all hover:bg-accent-dark hover:shadow-[0_18px_50px_-12px_rgba(99,166,54,0.85)] sm:w-auto"
            >
              Ver servicios
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Badges de confianza — ocultos en móvil */}
          <div className="mt-8 hidden flex-wrap items-center justify-center gap-x-5 gap-y-2 sm:flex lg:justify-start">
            {trust.map((t) => {
              const Icon = t.icon;
              return (
                <span key={t.text} className="inline-flex items-center gap-2 text-sm text-white/85">
                  <Icon className="h-4.5 w-4.5 text-accent" />
                  {t.text}
                </span>
              );
            })}
          </div>
        </div>

        {/* Tarjeta flotante de contacto rápido */}
        <div className="reveal reveal-delay-2 mx-auto w-full max-w-md">
          <div className="animate-float rounded-[1.75rem] border border-brand/10 bg-white p-6 shadow-[0_30px_70px_-30px_rgba(31,90,91,0.45)] sm:p-8">
            <div className="flex items-center gap-3">
              <Sparkle className="h-5 w-5 text-accent" />
              <h3 className="font-display text-lg font-bold text-ink">
                Atención con cita previa
              </h3>
            </div>
            <p className="mt-1 text-sm text-muted">
              Reserva en minutos. Te confirmamos por WhatsApp.
            </p>

            <div className="mt-6 space-y-3">
              <a
                href={`tel:${site.phoneIntl.replace(/[^+\d]/g, "")}`}
                className="flex items-center gap-4 rounded-2xl border border-brand/5 bg-surface p-4 transition-colors hover:bg-brand/5"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand text-white">
                  <Phone className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs text-muted">Llámanos</span>
                  <span className="block font-semibold text-ink">{site.phoneDisplay}</span>
                </span>
              </a>

              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-brand/5 bg-surface p-4 transition-colors hover:bg-brand/5"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent text-white">
                  <Pin className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs text-muted">Visítanos</span>
                  <span className="block text-sm font-semibold text-ink">
                    C.C. Parque Aragua, Nivel 3
                  </span>
                </span>
              </a>
            </div>

            {/* Mini-stats */}
            <div className="mt-6 grid grid-cols-3 gap-2 border-t border-surface pt-5">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="font-display text-xl font-bold text-brand">
                    <CountUp value={s.value} />
                  </div>
                  <div className="mt-0.5 text-[0.65rem] leading-tight text-muted">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
