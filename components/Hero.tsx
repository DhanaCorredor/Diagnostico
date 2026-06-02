import { site, waLink } from "@/lib/site";
import { Whatsapp, Phone, Pin, ArrowRight, Sparkle } from "./icons";

const stats = [
  { value: "+30", label: "Estudios y consultas" },
  { value: "20$", label: "Ecografías desde" },
  { value: "100%", label: "Atención profesional" },
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-brand-dark pt-28 pb-20 sm:pt-32 sm:pb-28"
    >
      {/* Fondo decorativo */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand to-brand-light" />
      <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
      <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-brand-light/40 blur-3xl" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="reveal text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-medium text-white/90 backdrop-blur">
            <Sparkle className="h-4 w-4 text-accent" />
            {site.tagline}
          </span>

          <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Tu salud merece un{" "}
            <span className="relative whitespace-nowrap">
              <span className="relative z-10">diagnóstico</span>
              <span className="absolute bottom-1 left-0 z-0 h-3 w-full bg-accent/60" />
            </span>{" "}
            confiable
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/85 lg:mx-0">
            Ecografía integral y Doppler, holter de ritmo, MAPA,
            electrocardiograma y ecocardiograma. Equipos modernos y especialistas
            a tu servicio en el corazón de Maracay.
          </p>

          <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
            <a
              href="#agendar"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 font-semibold text-white shadow-lg transition-all hover:bg-accent-dark hover:shadow-xl sm:w-auto"
            >
              Agendar mi cita
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={waLink("Hola, deseo agendar una cita.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 font-semibold text-white backdrop-blur transition-all hover:bg-white/20 sm:w-auto"
            >
              <Whatsapp className="h-5 w-5" />
              {site.phoneDisplay}
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 lg:justify-start">
            {stats.map((s) => (
              <div key={s.label} className="text-center lg:text-left">
                <div className="font-display text-2xl font-bold text-white">
                  {s.value}
                </div>
                <div className="text-xs text-white/70">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Tarjeta flotante de contacto rápido */}
        <div className="reveal reveal-delay-2 mx-auto w-full max-w-md">
          <div className="rounded-3xl border border-white/15 bg-white/95 p-6 shadow-2xl backdrop-blur sm:p-8">
            <h3 className="font-display text-lg font-bold text-ink">
              Atención con cita previa
            </h3>
            <p className="mt-1 text-sm text-muted">
              Reserva en minutos. Te confirmamos por WhatsApp.
            </p>

            <div className="mt-6 space-y-4">
              <a
                href={`tel:${site.phoneIntl.replace(/[^+\d]/g, "")}`}
                className="flex items-center gap-4 rounded-2xl bg-surface p-4 transition-colors hover:bg-brand/5"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand text-white">
                  <Phone className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs text-muted">Llámanos</span>
                  <span className="block font-semibold text-ink">
                    {site.phoneDisplay}
                  </span>
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

            <a
              href="#agendar"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-brand py-3.5 font-semibold text-white transition-colors hover:bg-brand-dark"
            >
              Solicitar cita ahora
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Onda inferior */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className="h-[60px] w-full"
        >
          <path
            d="M0,40 C360,90 720,0 1080,30 C1260,45 1380,55 1440,50 L1440,80 L0,80 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
