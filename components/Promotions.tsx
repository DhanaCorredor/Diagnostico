import { promos, waLink } from "@/lib/site";
import { groupIcons, Whatsapp, Sparkle, ArrowRight } from "./icons";
import Reveal from "./Reveal";

export default function Promotions() {
  const featured = promos.find((p) => p.featured);
  const rest = promos.filter((p) => !p.featured);

  return (
    <section
      id="promociones"
      className="relative overflow-hidden bg-brand-dark py-20 sm:py-24"
    >
      {/* Fondo decorativo */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand to-brand-light" />
      <div className="absolute -left-24 top-10 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur">
            <Sparkle className="h-4 w-4 text-accent" />
            Ofertas especiales
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl">
            Promociones para cuidarte por menos
          </h2>
          <p className="mt-4 text-white/80">
            Combos pensados para tu salud, con precios especiales. Reserva la tuya
            con cita previa.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
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
                <div className="group flex h-full items-start gap-4 rounded-2xl border border-white/15 bg-white/95 p-6 shadow-xl transition-transform hover:-translate-y-1">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-brand-light text-white">
                    <Icon className="h-6 w-6" />
                  </span>
                  <div className="flex-1">
                    <span className="text-xs font-semibold uppercase tracking-wider text-accent-dark">
                      {p.category}
                    </span>
                    <p className="mt-1 text-sm font-medium leading-snug text-ink">
                      {p.description}
                    </p>
                    <div className="mt-3 flex items-center justify-between">
                      <span className="font-display text-2xl font-extrabold text-brand">
                        {p.price}
                      </span>
                      <a
                        href={waLink(
                          `Hola, deseo la promoción de ${p.category}: ${p.description} (${p.price})`
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
                      >
                        <Whatsapp className="h-4 w-4" />
                        La quiero
                      </a>
                    </div>
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
  return (
    <div className="relative flex h-full flex-col overflow-hidden rounded-3xl bg-white p-7 shadow-2xl sm:p-8">
      <span className="absolute right-5 top-5 rounded-full bg-accent/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent-dark">
        Más popular
      </span>
      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-accent-dark text-white">
        <Icon className="h-7 w-7" />
      </span>
      <span className="mt-5 text-xs font-semibold uppercase tracking-wider text-brand">
        {p.category}
      </span>
      <h3 className="mt-1 font-display text-3xl font-extrabold text-ink">
        {p.name}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-muted">{p.description}</p>

      <div className="mt-auto pt-6">
        <div className="flex items-end gap-2">
          <span className="font-display text-5xl font-extrabold text-brand">
            {p.price}
          </span>
          <span className="mb-2 text-sm text-muted">paquete completo</span>
        </div>
        <a
          href={waLink(
            `Hola, deseo el *${p.name}* (${p.description} — ${p.price})`
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent py-3.5 font-semibold text-white shadow-lg transition-all hover:bg-accent-dark hover:shadow-xl"
        >
          <Whatsapp className="h-5 w-5" />
          Reservar {p.name}
          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  );
}
