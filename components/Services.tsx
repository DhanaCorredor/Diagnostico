"use client";

import { useState } from "react";
import { serviceGroups, waLink } from "@/lib/site";
import { groupIcons, Whatsapp, Check } from "./icons";
import Reveal from "./Reveal";

export default function Services() {
  const [active, setActive] = useState(serviceGroups[0].id);
  const group = serviceGroups.find((g) => g.id === active)!;
  const Icon = groupIcons[group.icon];

  return (
    <section id="servicios" className="bg-surface py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">
            Nuestros servicios
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
            Estudios y consultas con precios claros
          </h2>
          <p className="mt-4 text-muted">
            Selecciona una categoría para ver el detalle. Todos los precios están
            expresados en dólares (USD).
          </p>
        </Reveal>

        {/* Pestañas — fila con scroll en móvil, centradas en escritorio */}
        <div className="no-scrollbar -mx-5 mt-10 flex gap-2.5 overflow-x-auto px-5 pb-1 sm:mx-0 sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0">
          {serviceGroups.map((g) => {
            const GIcon = groupIcons[g.icon];
            const on = g.id === active;
            return (
              <button
                key={g.id}
                onClick={() => setActive(g.id)}
                className={`inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                  on
                    ? "bg-brand text-white shadow-md"
                    : "bg-white text-ink/70 hover:bg-white hover:text-brand hover:shadow-sm"
                }`}
              >
                <GIcon className="h-4.5 w-4.5" />
                {g.title}
              </button>
            );
          })}
        </div>

        {/* Contenido de la categoría */}
        <div key={active} className="reveal mt-10">
          <div className="rounded-3xl bg-white p-6 shadow-[0_10px_40px_-20px_rgba(31,90,91,0.3)] sm:p-10">
            <div className="mb-8 flex items-center gap-4">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-brand-light text-white">
                <Icon className="h-7 w-7" />
              </span>
              <div>
                <h3 className="font-display text-2xl font-bold text-ink">
                  {group.title}
                </h3>
                <p className="text-sm text-muted">
                  {group.subgroups
                    ? "Distintas modalidades disponibles"
                    : `${group.items.length} ${
                        group.items.length === 1 ? "servicio" : "servicios"
                      } disponibles`}
                </p>
              </div>
            </div>

            {/* Servicios simples */}
            {group.items.length > 0 && (
              <div className="grid gap-3 sm:grid-cols-2">
                {group.items.map((s) => (
                  <ServiceRow key={s.name} {...s} />
                ))}
              </div>
            )}

            {/* Subgrupos (Ecografía) */}
            {group.subgroups && (
              <div className="space-y-8">
                {group.subgroups.map((sub) => (
                  <div key={sub.title}>
                    <div className="mb-3 flex items-center gap-3">
                      <h4 className="font-display font-bold text-brand">
                        {sub.title}
                      </h4>
                      {sub.price && (
                        <span className="rounded-full bg-accent/15 px-3 py-0.5 text-sm font-bold text-accent-dark">
                          {sub.price}
                        </span>
                      )}
                      <span className="h-px flex-1 bg-surface" />
                    </div>
                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                      {sub.items.map((s) => (
                        <ServiceRow
                          key={s.name}
                          {...s}
                          price={s.price ?? sub.price}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* CTA */}
            <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl bg-gradient-to-r from-brand to-brand-light p-6 sm:flex-row">
              <div className="text-center sm:text-left">
                <p className="font-display text-lg font-bold text-white">
                  ¿Listo para tu {group.title.toLowerCase()}?
                </p>
                <p className="text-sm text-white/80">
                  Agenda tu cita hoy mismo, te atendemos con gusto.
                </p>
              </div>
              <a
                href={waLink(
                  `Hola, deseo información sobre: ${group.title}.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-brand transition-transform hover:scale-105"
              >
                <Whatsapp className="h-5 w-5" />
                Consultar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceRow({
  name,
  price,
  note,
}: {
  name: string;
  price?: string;
  note?: string;
}) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-xl border border-surface bg-white px-4 py-3 transition-colors hover:border-brand/20 hover:bg-surface/40">
      <span className="flex items-start gap-2.5">
        <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
        <span>
          <span className="block text-sm font-medium leading-snug text-ink">
            {name}
          </span>
          {note && (
            <span className="text-xs italic text-muted">{note}</span>
          )}
        </span>
      </span>
      {price && (
        <span className="shrink-0 rounded-lg bg-brand/10 px-2.5 py-1 text-sm font-bold text-brand">
          {price}
        </span>
      )}
    </div>
  );
}
