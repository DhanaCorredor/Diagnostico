"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Shield, Sparkle, Users, Clock } from "./icons";

const reasons = [
  {
    icon: Shield,
    img: "/reason-resultados.jpg",
    title: "Resultados confiables",
    text: "Estudios precisos e informados por especialistas, para que tomes decisiones con tranquilidad.",
  },
  {
    icon: Sparkle,
    img: "/reason-equipos.jpg",
    title: "Equipos modernos",
    text: "Tecnología actualizada en ecografía, Doppler y estudios cardíacos.",
  },
  {
    icon: Users,
    img: "/reason-cercana.jpg",
    title: "Atención cercana",
    text: "Un equipo humano que te acompaña y te explica cada paso.",
  },
  {
    icon: Clock,
    img: "/reason-cita.jpg",
    title: "Cita previa ágil",
    text: "Reserva por WhatsApp y evita esperas. Confirmación en minutos.",
  },
];

export default function ReasonsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const onScroll = () => {
    const el = trackRef.current;
    const card = el?.firstElementChild as HTMLElement | null;
    if (!el || !card) return;
    const step = card.offsetWidth + 20; // gap-5 = 20px
    setActive(Math.round(el.scrollLeft / step));
  };

  const goTo = (i: number) => {
    const card = trackRef.current?.children[i] as HTMLElement | undefined;
    card?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  };

  return (
    <div className="mt-14">
      <div
        ref={trackRef}
        onScroll={onScroll}
        className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-2 sm:mx-0 sm:px-0 lg:grid lg:grid-cols-4 lg:overflow-visible"
      >
        {reasons.map((r) => {
          const Icon = r.icon;
          return (
            <article
              key={r.title}
              className="group flex w-[78%] shrink-0 snap-center flex-col overflow-hidden rounded-3xl border border-surface bg-white shadow-[0_10px_40px_-20px_rgba(31,90,91,0.3)] transition-all hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-22px_rgba(31,90,91,0.4)] sm:w-[46%] lg:w-auto"
            >
              <div className="relative h-44 w-full overflow-hidden">
                <Image
                  src={r.img}
                  alt={r.title}
                  fill
                  sizes="(max-width: 640px) 80vw, (max-width: 1024px) 46vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/75 via-brand-dark/15 to-transparent" />
                <span className="absolute bottom-3 left-3 flex h-12 w-12 items-center justify-center rounded-xl bg-white/95 text-brand shadow-md backdrop-blur">
                  <Icon className="h-6 w-6" />
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-lg font-bold text-ink">
                  {r.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{r.text}</p>
              </div>
            </article>
          );
        })}
      </div>

      {/* Puntos de navegación (móvil y tablet) */}
      <div className="mt-6 flex justify-center gap-2 lg:hidden">
        {reasons.map((r, i) => (
          <button
            key={r.title}
            onClick={() => goTo(i)}
            aria-label={`Ver: ${r.title}`}
            className={`h-2 rounded-full transition-all ${
              active === i ? "w-6 bg-brand" : "w-2 bg-brand/25"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
