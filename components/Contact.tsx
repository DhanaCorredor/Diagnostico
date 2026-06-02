import { site, waLink } from "@/lib/site";
import { Pin, Phone, Clock, Instagram, Whatsapp } from "./icons";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contacto" className="bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">
            Contáctanos
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
            Estamos para atenderte
          </h2>
          <p className="mt-4 text-muted">
            Visítanos en el Centro Comercial Parque Aragua o escríbenos. Con gusto
            resolvemos tus dudas.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.2fr]">
          {/* Tarjetas de info */}
          <Reveal className="space-y-4">
            <InfoCard
              icon={<Pin className="h-6 w-6" />}
              title="Ubicación"
              accent
            >
              <p className="text-sm text-muted">{site.address}</p>
              <p className="text-sm text-muted">{site.city}</p>
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-sm font-semibold text-brand hover:underline"
              >
                Ver en Google Maps →
              </a>
            </InfoCard>

            <InfoCard icon={<Phone className="h-6 w-6" />} title="Teléfono / Citas">
              <a
                href={`tel:${site.phoneIntl.replace(/[^+\d]/g, "")}`}
                className="text-lg font-bold text-ink hover:text-brand"
              >
                {site.phoneDisplay}
              </a>
            </InfoCard>

            <InfoCard icon={<Clock className="h-6 w-6" />} title="Horario de atención">
              <ul className="space-y-1.5">
                {site.hours.map((h) => (
                  <li
                    key={h.day}
                    className="flex items-center justify-between text-sm"
                  >
                    <span className="text-muted">{h.day}</span>
                    <span className="font-semibold text-ink">{h.time}</span>
                  </li>
                ))}
              </ul>
            </InfoCard>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={waLink("Hola, deseo más información.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 font-semibold text-white transition-colors hover:bg-accent-dark"
              >
                <Whatsapp className="h-5 w-5" />
                WhatsApp
              </a>
              <a
                href={site.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-brand/20 bg-white px-5 py-3 font-semibold text-brand transition-colors hover:bg-brand/5"
              >
                <Instagram className="h-5 w-5" />
                @{site.instagram}
              </a>
            </div>
          </Reveal>

          {/* Mapa */}
          <Reveal delay={0.1}>
            <div className="h-full min-h-[420px] overflow-hidden rounded-3xl border border-white bg-white shadow-[0_10px_40px_-20px_rgba(31,90,91,0.3)]">
              <iframe
                title="Ubicación Diagnóstico Centro de Salud"
                src={site.mapsEmbed}
                className="h-full w-full"
                style={{ border: 0, minHeight: 420 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function InfoCard({
  icon,
  title,
  accent,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  accent?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-[0_4px_24px_-12px_rgba(31,90,91,0.15)]">
      <div className="flex items-start gap-4">
        <span
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-white ${
            accent ? "bg-accent" : "bg-brand"
          }`}
        >
          {icon}
        </span>
        <div className="flex-1">
          <h3 className="font-display font-bold text-ink">{title}</h3>
          <div className="mt-1.5">{children}</div>
        </div>
      </div>
    </div>
  );
}
