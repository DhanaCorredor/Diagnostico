"use client";

import { useEffect, useState } from "react";
import PromosCarousel from "./PromosCarousel";
import { Sparkle } from "./icons";
import Reveal from "./Reveal";

export default function Promotions() {
  // En móvil se oculta hasta que la persona toca "Promociones" en el menú.
  // En escritorio (lg+) siempre se muestra.
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const check = () => {
      if (window.location.hash === "#promociones") {
        setRevealed(true);
        // Espera a que la sección sea visible para desplazar hasta ella
        window.setTimeout(() => {
          document
            .getElementById("promociones")
            ?.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 70);
      }
    };
    check();
    window.addEventListener("hashchange", check);
    return () => window.removeEventListener("hashchange", check);
  }, []);

  return (
    <section
      id="promociones"
      className={`relative overflow-hidden bg-gradient-to-b from-[#1f5a5b] to-[#16403f] py-14 sm:py-20 lg:block ${
        revealed ? "block" : "hidden"
      }`}
    >
      {/* Tintes que dan profundidad al fondo oscuro */}
      <div className="absolute -left-24 top-6 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-white/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-sm font-semibold text-white shadow-md">
            <Sparkle className="h-4 w-4" />
            Ofertas especiales
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-[2.6rem] sm:leading-[1.1]">
            Promociones para cuidarte por menos
          </h2>
          <p className="mt-4 text-white/75">
            Combos pensados para tu salud, con precios especiales. Desliza y
            reserva la tuya con cita previa.
          </p>
        </Reveal>

        <PromosCarousel />
      </div>
    </section>
  );
}
