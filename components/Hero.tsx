import { site } from "@/lib/site";
import { Phone, Pin, ArrowRight, Sparkle, Shield, Clock } from "./icons";

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
    <section id="inicio" className="relative overflow-hidden bg-white pt-28 pb-20 sm:pt-36 sm:pb-28">
      {/* Fondo claro con tintes suaves */}
      <div className="absolute inset-0 bg-gradient-to-b from-surface/80 via-white to-white" />
      <div className="absolute -right-32 -top-40 h-[34rem] w-[34rem] animate-aurora rounded-full bg-brand/10 blur-3xl" />
      <div className="absolute -left-32 top-20 h-[28rem] w-[28rem] animate-aurora rounded-full bg-accent/10 blur-3xl [animation-delay:4s]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="reveal text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand/15 bg-white px-4 py-1.5 text-xs font-medium text-brand shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            {site.bioShort}
          </span>

          <h1 className="mt-6 font-display text-[2rem] font-extrabold leading-[1.08] tracking-tight text-ink [text-wrap:balance] sm:text-5xl lg:text-[4rem] lg:leading-[1.04]">
            Tu salud merece un{" "}
            <span className="text-gradient">diagnóstico</span>{" "}
            confiable
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted lg:mx-0">
            Ecografía integral y Doppler, holter de ritmo, MAPA, electrocardiograma
            y ecocardiograma. Equipos modernos y especialistas a tu servicio en el
            corazón de Maracay.
          </p>

          <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
            <a
              href="#agendar"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 font-semibold text-white shadow-[0_14px_40px_-12px_rgba(99,166,54,0.7)] transition-all hover:bg-accent-dark hover:shadow-[0_18px_50px_-12px_rgba(99,166,54,0.85)] sm:w-auto"
            >
              Agendar mi cita
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Badges de confianza */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 lg:justify-start">
            {trust.map((t) => {
              const Icon = t.icon;
              return (
                <span key={t.text} className="inline-flex items-center gap-2 text-sm text-muted">
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
                  <div className="font-display text-xl font-bold text-brand">{s.value}</div>
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
