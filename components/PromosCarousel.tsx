"use client";

import { useRef, useState } from "react";
import { promos, waLink } from "@/lib/site";
import { groupIcons, Whatsapp, Sparkle, Check, ArrowRight } from "./icons";

const cap = (s: string) =>
  s.trim().charAt(0).toUpperCase() + s.trim().slice(1);

// La promo destacada va primero
const ordered = [...promos].sort(
  (a, b) => Number(b.featured ?? false) - Number(a.featured ?? false)
);

export default function PromosCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const cardStep = () => {
    const card = trackRef.current?.firstElementChild as HTMLElement | null;
    return card ? card.offsetWidth + 20 : 0; // gap-5 = 20px
  };

  const onScroll = () => {
    const el = trackRef.current;
    const step = cardStep();
    if (!el || !step) return;
    setActive(Math.round(el.scrollLeft / step));
  };

  const goTo = (i: number) => {
    const card = trackRef.current?.children[i] as HTMLElement | undefined;
    card?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  };

  const nudge = (dir: 1 | -1) => {
    const el = trackRef.current;
    const step = cardStep();
    if (!el || !step) return;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <div className="mt-10">
      <div
        ref={trackRef}
        onScroll={onScroll}
        className="no-scrollbar -mx-5 flex snap-x snap-mandatory items-stretch gap-5 overflow-x-auto px-5 pb-2 sm:mx-0 sm:px-0"
      >
        {ordered.map((p) => {
          const Icon = groupIcons[p.icon];
          const parts = p.description.replace(/\.$/, "").split(" + ").map(cap);
          const asList = parts.length > 1;
          const detail = p.options
            ? `${p.description} ${p.options.join(", ")}`
            : p.description;

          return (
            <article
              key={p.id}
              className={`flex w-[82%] shrink-0 snap-center flex-col rounded-3xl p-6 sm:w-[47%] lg:w-[31.5%] ${
                p.featured
                  ? "bg-white ring-2 ring-accent shadow-[0_20px_60px_-20px_rgba(99,166,54,0.6)]"
                  : "bg-white shadow-[0_18px_50px_-24px_rgba(0,0,0,0.6)]"
              }`}
            >
              {p.featured && (
                <span className="mb-3 inline-flex w-fit items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-md">
                  <Sparkle className="h-3.5 w-3.5" />
                  Más popular
                </span>
              )}

              <div className="flex items-start justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-brand-light text-white">
                  <Icon className="h-6 w-6" />
                </span>
                <span className="flex items-baseline gap-0.5 rounded-xl bg-gradient-to-br from-accent to-accent-dark px-3 py-2 text-white shadow-[0_8px_20px_-8px_rgba(99,166,54,0.8)]">
                  <span className="font-display text-2xl font-extrabold leading-none">
                    {p.price.replace(/\D/g, "")}
                  </span>
                  <span className="font-display text-sm font-bold">$</span>
                </span>
              </div>

              <span className="mt-4 text-xs font-semibold uppercase tracking-wider text-accent-dark">
                {p.category}
              </span>

              {p.name && (
                <h3 className="mt-1 font-display text-xl font-extrabold text-ink">
                  {p.name}
                </h3>
              )}

              <div className="mt-3 flex-1">
                {p.options ? (
                  <>
                    <p className="text-sm font-medium leading-snug text-ink">
                      {p.description}
                    </p>
                    <ul className="mt-2.5 grid grid-cols-2 gap-x-3 gap-y-1.5">
                      {p.options.map((opt) => (
                        <li
                          key={opt}
                          className="flex items-center gap-1.5 text-sm text-ink"
                        >
                          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                          {opt}
                        </li>
                      ))}
                    </ul>
                  </>
                ) : asList ? (
                  <ul className="space-y-2">
                    {parts.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-ink"
                      >
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/15">
                          <Check className="h-3.5 w-3.5 text-accent-dark" />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm font-medium leading-snug text-ink">
                    {p.description}
                  </p>
                )}
              </div>

              <a
                href={waLink(
                  p.name
                    ? `Hola, deseo el *${p.name}* (${detail} — ${p.price})`
                    : `Hola, deseo la promoción de ${p.category}: ${detail} (${p.price})`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shine mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-4 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_-12px_rgba(99,166,54,0.8)] transition-colors hover:bg-accent-dark"
              >
                <Whatsapp className="h-4 w-4" />
                La quiero
              </a>
            </article>
          );
        })}
      </div>

      {/* Controles: flecha · puntos · flecha */}
      <div className="mt-7 flex items-center justify-center gap-4">
        <button
          onClick={() => nudge(-1)}
          aria-label="Promoción anterior"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-brand shadow-md transition-all hover:scale-110 hover:bg-surface"
        >
          <ArrowRight className="h-5 w-5 rotate-180" />
        </button>

        <div className="flex gap-2">
          {promos.map((p, i) => (
            <button
              key={p.id}
              onClick={() => goTo(i)}
              aria-label={`Ver promoción ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                active === i ? "w-6 bg-accent" : "w-2 bg-white/30"
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => nudge(1)}
          aria-label="Promoción siguiente"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-brand shadow-md transition-all hover:scale-110 hover:bg-surface"
        >
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
