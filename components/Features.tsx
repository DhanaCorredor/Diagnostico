import Reveal from "./Reveal";
import ReasonsCarousel from "./ReasonsCarousel";
import { Heart, ArrowRight } from "./icons";
import { waLink } from "@/lib/site";

export default function Features() {
  return (
    <section id="nosotros" className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-brand/10 px-4 py-1.5 text-sm font-semibold text-brand">
            ¿Por qué elegirnos?
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink sm:text-[2.6rem] sm:leading-[1.1]">
            Cuidamos tu salud con compromiso y precisión
          </h2>
          <p className="mt-4 text-muted">
            En Diagnóstico Centro de Salud combinamos tecnología, experiencia y un
            trato humano para ofrecerte la mejor atención.
          </p>
        </Reveal>

        {/* Carrusel de razones */}
        <ReasonsCarousel />

        {/* Banner destacado */}
        <Reveal className="mt-12">
          <div className="relative flex flex-col items-start gap-6 overflow-hidden rounded-3xl border border-brand/10 bg-gradient-to-br from-brand/8 via-white to-accent/8 p-8 shadow-[0_10px_40px_-22px_rgba(31,90,91,0.3)] sm:flex-row sm:items-center sm:justify-between sm:p-10">
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent/10 blur-2xl" />
            <div className="relative max-w-xl">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-brand-light text-white shadow-md">
                <Heart className="h-7 w-7" />
              </span>
              <h3 className="mt-5 font-display text-2xl font-bold leading-tight text-ink">
                Salud preventiva al alcance de todos
              </h3>
              <p className="mt-3 text-muted">
                Detectar a tiempo lo cambia todo. Por eso ofrecemos estudios de
                calidad a precios accesibles, con la calidez de quien de verdad se
                preocupa por ti.
              </p>
            </div>
            <a
              href={waLink("Hola, deseo más información sobre sus servicios.")}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex shrink-0 items-center gap-2 rounded-full bg-brand px-6 py-3 font-semibold text-white transition-all hover:scale-105 hover:bg-brand-dark"
            >
              Conversemos
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
