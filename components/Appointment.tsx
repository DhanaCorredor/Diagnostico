"use client";

import { useState } from "react";
import { serviceGroups, site, waLink } from "@/lib/site";
import { Whatsapp, Check, ArrowRight } from "./icons";
import Reveal from "./Reveal";

const benefits = [
  "Confirmación rápida por WhatsApp",
  "Sin filas ni esperas innecesarias",
  "Elige el día y la hora que prefieras",
  "Atención por especialistas",
];

export default function Appointment() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    notes: "",
  });

  const update =
    (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = [
      "*Solicitud de cita — Diagnóstico Centro de Salud*",
      "",
      `*Nombre:* ${form.name}`,
      form.phone && `*Teléfono:* ${form.phone}`,
      `*Servicio:* ${form.service}`,
      form.date && `*Fecha preferida:* ${form.date}`,
      form.time && `*Hora preferida:* ${form.time}`,
      form.notes && `*Notas:* ${form.notes}`,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(waLink(msg), "_blank", "noopener,noreferrer");
    setSent(true);
  };

  const minDate = new Date().toISOString().split("T")[0];

  return (
    <section id="agendar" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-stretch gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Lado informativo */}
          <Reveal className="flex">
            <div className="relative flex w-full flex-col justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-brand-dark via-brand to-brand-light p-8 text-white sm:p-10">
              <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-accent/20 blur-2xl" />
              <span className="relative text-sm font-semibold uppercase tracking-wider text-accent">
                Agenda en línea
              </span>
              <h2 className="relative mt-3 font-display text-3xl font-bold sm:text-4xl">
                Reserva tu cita sin complicaciones
              </h2>
              <p className="relative mt-4 text-white/85">
                Completa el formulario y te enviaremos directo a WhatsApp con tus
                datos listos. Nosotros confirmamos tu horario.
              </p>
              <ul className="relative mt-8 space-y-3">
                {benefits.map((b) => (
                  <li key={b} className="flex items-center gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent">
                      <Check className="h-4 w-4 text-white" />
                    </span>
                    <span className="text-sm text-white/90">{b}</span>
                  </li>
                ))}
              </ul>
              <div className="relative mt-8 rounded-2xl bg-white/10 p-4 backdrop-blur">
                <p className="text-xs text-white/70">¿Prefieres llamar?</p>
                <p className="font-display text-xl font-bold">
                  {site.phoneDisplay}
                </p>
              </div>
            </div>
          </Reveal>

          {/* Formulario */}
          <Reveal delay={0.1} className="flex">
            <div className="w-full rounded-3xl border border-surface bg-white p-6 shadow-[0_10px_40px_-20px_rgba(31,90,91,0.3)] sm:p-9">
              {sent ? (
                <div className="flex h-full flex-col items-center justify-center py-10 text-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/15">
                    <Check className="h-9 w-9 text-accent" />
                  </span>
                  <h3 className="mt-5 font-display text-2xl font-bold text-ink">
                    ¡Casi listo!
                  </h3>
                  <p className="mt-2 max-w-sm text-muted">
                    Se abrió WhatsApp con tu solicitud. Solo presiona enviar y te
                    confirmamos tu cita lo antes posible.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-6 text-sm font-semibold text-brand hover:underline"
                  >
                    Hacer otra solicitud
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="font-display text-xl font-bold text-ink">
                    Datos para tu cita
                  </h3>

                  <Field label="Nombre y apellido" required>
                    <input
                      required
                      value={form.name}
                      onChange={update("name")}
                      placeholder="Ej. María Pérez"
                      className={inputCls}
                    />
                  </Field>

                  <Field label="Teléfono / WhatsApp">
                    <input
                      value={form.phone}
                      onChange={update("phone")}
                      placeholder="Ej. 0414-1234567"
                      inputMode="tel"
                      className={inputCls}
                    />
                  </Field>

                  <Field label="Servicio que deseas" required>
                    <select
                      required
                      value={form.service}
                      onChange={update("service")}
                      className={`${inputCls} ${
                        form.service ? "text-ink" : "text-muted"
                      }`}
                    >
                      <option value="">Selecciona un servicio…</option>
                      {serviceGroups.map((g) => (
                        <optgroup key={g.id} label={g.title}>
                          {g.items.map((i) => (
                            <option key={i.name} value={`${g.title} — ${i.name}`}>
                              {i.name} {i.price ? `(${i.price})` : ""}
                            </option>
                          ))}
                          {g.subgroups?.map((s) =>
                            s.items.map((i) => (
                              <option
                                key={`${s.title}-${i.name}`}
                                value={`${g.title} ${s.title} — ${i.name}`}
                              >
                                {s.title}: {i.name}{" "}
                                {(i.price ?? s.price) ? `(${i.price ?? s.price})` : ""}
                              </option>
                            ))
                          )}
                        </optgroup>
                      ))}
                    </select>
                  </Field>

                  <div className="grid grid-cols-2 gap-4">
                    <Field label="Fecha preferida">
                      <input
                        type="date"
                        min={minDate}
                        value={form.date}
                        onChange={update("date")}
                        className={inputCls}
                      />
                    </Field>
                    <Field label="Hora preferida">
                      <input
                        type="time"
                        value={form.time}
                        onChange={update("time")}
                        className={inputCls}
                      />
                    </Field>
                  </div>

                  <Field label="Notas (opcional)">
                    <textarea
                      value={form.notes}
                      onChange={update("notes")}
                      rows={3}
                      placeholder="Cuéntanos brevemente el motivo o alguna indicación."
                      className={`${inputCls} resize-none`}
                    />
                  </Field>

                  <button
                    type="submit"
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent py-3.5 font-semibold text-white shadow-lg transition-all hover:bg-accent-dark hover:shadow-xl"
                  >
                    <Whatsapp className="h-5 w-5" />
                    Enviar solicitud por WhatsApp
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </button>
                  <p className="text-center text-xs text-muted">
                    Te redirigimos a WhatsApp con tus datos ya escritos.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const inputCls =
  "w-full rounded-xl border border-surface bg-surface/40 px-4 py-3 text-base text-ink outline-none transition-colors placeholder:text-muted/70 focus:border-brand focus:bg-white focus:ring-2 focus:ring-brand/20 sm:text-sm";

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-ink">
        {label}
        {required && <span className="text-accent"> *</span>}
      </span>
      {children}
    </label>
  );
}
