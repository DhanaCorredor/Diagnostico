import { promos, waLink } from "@/lib/site";
import { groupIcons, Whatsapp, Sparkle, ArrowRight, Check } from "./icons";
import Reveal from "./Reveal";

export default function Promotions() {
  const featured = promos.find((p) => p.featured);
  const rest = promos.filter((p) => !p.featured);

  return (
    <section
      id="promociones"
      className="relative overflow-hidden bg-surface py-20 sm:py-24"
    >
      {/* Tintes suaves */}
      <div className="absolute -left-24 top-10 h-80 w-80 rounded-full bg-brand/5 blur-3xl" />
      <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-accent/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-sm font-semibold text-accent-dark">
            <Sparkle className="h-4 w-4" />
            Ofertas especiales
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink sm:text-[2.6rem] sm:leading-[1.1]">
            Promociones para cuidarte por menos
          </h2>
          <p className="mt-4 text-muted">
            Combos pensados para tu salud, con precios especiales. Reserva la tuya
            con cita previa.
          </p>
        </Reveal>

        <div className="mt-12 grid items-start gap-5 lg:grid-cols-3">
          {/* Promo destacada */}
          {featured && (
            <Reveal className="lg:row-span-2">
              <FeaturedPromo />
            </Reveal>
          )}

          {/* Resto de promos */}
          {rest.map((p, i) => {
            const Icon = groupIcons[p.icon];
            return (
              <Reveal key={p.id} delay={i * 0.07}>
                <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-brand/10 bg-white shadow-[0_6px_30px_-18px_rgba(31,90,91,0.3)] transition-all hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-24px_rgba(31,90,91,0.4)]">
                  <span className="block h-1 w-full bg-gradient-to-r from-brand to-brand-light" />
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center justify-between">
                      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-brand-light text-white">
                        <Icon className="h-6 w-6" />
                      </span>
                      <span className="rounded-lg bg-brand/10 px-3 py-1 font-display text-lg font-extrabold text-brand">
                        {p.price}
                      </span>
                    </div>
                    <span className="mt-4 text-xs font-semibold uppercase tracking-wider text-accent-dark">
                      {p.category}
                    </span>
                    <p className="mt-1 flex-1 text-sm font-medium leading-snug text-ink">
                      {p.description}
                    </p>
                    <a
                      href={waLink(
                        `Hola, deseo la promoción de ${p.category}: ${p.description} (${p.price})`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center justify-center gap-1.5 rounded-full bg-accent px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
                    >
                      <Whatsapp className="h-4 w-4" />
                      La quiero
                    </a>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FeaturedPromo() {
  const p = promos.find((x) => x.featured)!;
  const Icon = groupIcons[p.icon];
  // Divide la descripción larga ("a + b + c") en una lista de incluidos
  const includes = p.description
    .replace(/\.$/, "")
    .split(" + ")
    .map((s) => s.trim().charAt(0).toUpperCase() + s.trim().slice(1));

  return (
    <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-brand/10 bg-white shadow-[0_20px_50px_-24px_rgba(31,90,91,0.45)]">
      <span className="block h-1.5 w-full bg-gradient-to-r from-accent via-brand-light to-brand" />
      <div className="flex flex-1 flex-col p-7 sm:p-8">
        <span className="absolute right-6 top-7 inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-md">
          <Sparkle className="h-3.5 w-3.5" />
          Más popular
        </span>

        <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-brand-light text-white">
          <Icon className="h-7 w-7" />
        </span>
        <span className="mt-5 text-xs font-semibold uppercase tracking-wider text-accent-dark">
          {p.category}
        </span>
        <h3 className="mt-1 font-display text-3xl font-extrabold text-ink">
          {p.name}
        </h3>

        <ul className="mt-5 space-y-2.5">
          {includes.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm text-ink">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/15">
                <Check className="h-3.5 w-3.5 text-accent-dark" />
              </span>
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-7">
          <div className="flex items-end gap-2">
            <span className="font-display text-5xl font-extrabold text-brand">
              {p.price}
            </span>
            <span className="mb-2 text-sm text-muted">paquete completo</span>
          </div>
          <a
            href={waLink(`Hola, deseo el *${p.name}* (${p.description} — ${p.price})`)}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent py-3.5 font-semibold text-white shadow-[0_14px_40px_-12px_rgba(99,166,54,0.7)] transition-all hover:bg-accent-dark hover:shadow-xl"
          >
            <Whatsapp className="h-5 w-5" />
            Reservar {p.name}
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </div>
  );
}
