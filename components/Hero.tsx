import { site, waLink } from "@/lib/site";
import { Whatsapp, Phone, Pin, ArrowRight, Sparkle, Shield, Clock, Check } from "./icons";

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
    <section id="inicio" className="relative overflow-hidden bg-brand-dark pt-28 pb-24 sm:pt-36 sm:pb-32">
      {/* Aurora animada */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand to-brand-light" />
      <div className="absolute -right-32 -top-32 h-[34rem] w-[34rem] animate-aurora rounded-full bg-accent/25 blur-3xl" />
      <div className="absolute -bottom-40 -left-24 h-[32rem] w-[32rem] animate-aurora rounded-full bg-brand-light/50 blur-3xl [animation-delay:3s]" />
      <div className="absolute left-1/2 top-1/3 h-72 w-72 animate-aurora rounded-full bg-accent/10 blur-3xl [animation-delay:6s]" />
      <div className="grain absolute inset-0 opacity-60" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="reveal text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-medium text-white/90 backdrop-blur">
            <span className="flex h-2 w-2 items-center justify-center">
              <span className="absolute h-2 w-2 animate-ping rounded-full bg-accent" />
              <span className="h-2 w-2 rounded-full bg-accent" />
            </span>
            {site.bioShort}
          </span>

          <h1 className="mt-6 font-display text-[2rem] font-extrabold leading-[1.08] tracking-tight text-white [text-wrap:balance] sm:text-5xl lg:text-[4rem] lg:leading-[1.05]">
            Tu salud merece un{" "}
            <span className="text-gradient">diagnóstico</span>{" "}
            confiable
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/85 lg:mx-0">
            Ecografía integral y Doppler, holter de ritmo, MAPA, electrocardiograma
            y ecocardiograma. Equipos modernos y especialistas a tu servicio en el
            corazón de Maracay.
          </p>

          <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
            <a
              href="#agendar"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 font-semibold text-white shadow-[0_12px_40px_-12px_rgba(99,166,54,0.8)] transition-all hover:bg-accent-dark hover:shadow-[0_16px_50px_-12px_rgba(99,166,54,0.9)] sm:w-auto"
            >
              Agendar mi cita
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={waLink("Hola, deseo agendar una cita.")}
              target="_blank"
              rel="noopener noreferrer"
              className="glass inline-flex w-full items-center justify-center gap-2 rounded-full px-7 py-3.5 font-semibold text-white transition-all hover:bg-white/20 sm:w-auto"
            >
              <Whatsapp className="h-5 w-5" />
              {site.phoneDisplay}
            </a>
          </div>

          {/* Badges de confianza */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 lg:justify-start">
            {trust.map((t) => {
              const Icon = t.icon;
              return (
                <span key={t.text} className="inline-flex items-center gap-2 text-sm text-white/80">
                  <Icon className="h-4.5 w-4.5 text-accent" />
                  {t.text}
                </span>
              );
            })}
          </div>
        </div>

        {/* Tarjeta flotante de contacto rápido */}
        <div className="reveal reveal-delay-2 mx-auto w-full max-w-md">
          <div className="animate-float rounded-[1.75rem] border border-white/15 bg-white/95 p-6 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.5)] backdrop-blur sm:p-8">
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
                className="flex items-center gap-4 rounded-2xl bg-surface p-4 transition-colors hover:bg-brand/5"
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
                className="flex items-center gap-4 rounded-2xl bg-surface p-4 transition-colors hover:bg-brand/5"
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

            <a
              href="#agendar"
              className="group mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand to-brand-light py-3.5 font-semibold text-white transition-all hover:shadow-lg"
            >
              Solicitar cita ahora
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <p className="mt-3 flex items-center justify-center gap-1.5 text-xs text-muted">
              <Check className="h-3.5 w-3.5 text-accent" />
              Sin filas · Confirmación inmediata
            </p>
          </div>
        </div>
      </div>

      {/* Onda inferior */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="h-[60px] w-full">
          <path
            d="M0,40 C360,90 720,0 1080,30 C1260,45 1380,55 1440,50 L1440,80 L0,80 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
