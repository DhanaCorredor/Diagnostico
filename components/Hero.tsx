import Image from "next/image";
import { site, waLink } from "@/lib/site";
import { Whatsapp, Phone, ArrowRight, Shield, Clock, Pin } from "./icons";

const stats = [
  { value: "+30", label: "Estudios y consultas" },
  { value: "12$", label: "Ecografías desde" },
  { value: "7:30", label: "Abrimos · Lun-Sáb" },
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

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
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
            <a
              href={waLink("Hola, deseo agendar una cita.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-brand/20 bg-white px-7 py-3.5 font-semibold text-brand transition-all hover:border-brand/40 hover:bg-brand/5 sm:w-auto"
            >
              <Whatsapp className="h-5 w-5 text-accent" />
              {site.phoneDisplay}
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

          {/* Mini-stats */}
          <div className="mx-auto mt-8 grid max-w-md grid-cols-3 divide-x divide-brand/10 rounded-2xl border border-brand/10 bg-white/70 py-4 lg:mx-0">
            {stats.map((s) => (
              <div key={s.label} className="px-2 text-center">
                <div className="font-display text-xl font-bold text-brand sm:text-2xl">{s.value}</div>
                <div className="mt-0.5 text-[0.65rem] leading-tight text-muted">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Imagen de especialista con tarjeta flotante */}
        <div className="reveal reveal-delay-2 mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative">
            <div className="absolute -inset-3 -z-10 rounded-[2.25rem] bg-gradient-to-br from-brand/20 via-brand-light/10 to-accent/20 blur-2xl" />

            <div className="animate-float relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-brand/10 shadow-[0_30px_70px_-30px_rgba(31,90,91,0.5)]">
              <Image
                src="/img/doctor-4.jpg"
                alt="Especialista de Diagnóstico Centro de Salud con estetoscopio"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/35 via-transparent to-transparent" />

              {/* Badge superior */}
              <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-brand shadow-md backdrop-blur">
                <Shield className="h-3.5 w-3.5 text-accent" />
                Especialistas
              </span>

              {/* Tarjeta de contacto flotante sobre la foto */}
              <div className="absolute inset-x-3 bottom-3 flex items-center justify-between gap-3 rounded-2xl border border-white/50 bg-white/90 p-3 shadow-lg backdrop-blur">
                <div className="min-w-0">
                  <p className="flex items-center gap-1.5 text-[0.7rem] font-medium text-muted">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
                    </span>
                    Cita previa · {site.city.split(",")[0]}
                  </p>
                  <p className="truncate font-display text-base font-bold text-ink">
                    {site.phoneDisplay}
                  </p>
                </div>
                <a
                  href={waLink("Hola, deseo agendar una cita.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Agendar por WhatsApp"
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent text-white shadow-md transition-colors hover:bg-accent-dark"
                >
                  <Whatsapp className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Mini-tarjeta flotante lateral */}
            <div className="absolute -left-4 top-10 hidden rounded-2xl border border-brand/10 bg-white px-4 py-3 shadow-xl sm:block">
              <div className="flex items-center gap-2.5">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <Phone className="h-4.5 w-4.5" />
                </span>
                <div>
                  <p className="text-[0.65rem] text-muted">Atención</p>
                  <p className="text-sm font-bold text-ink">Lun a Sáb</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
