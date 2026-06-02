import Image from "next/image";
import { site } from "@/lib/site";
import { Pin, Phone, Instagram } from "./icons";

const navLinks = [
  { href: "#servicios", label: "Servicios" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#agendar", label: "Agendar cita" },
  { href: "#contacto", label: "Contacto" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Image
              src="/logo-white.png"
              alt={site.legalName}
              width={220}
              height={58}
              className="h-12 w-auto"
            />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
              {site.tagline}. Ecografía integral y Doppler, holter de ritmo, MAPA,
              electrocardiograma y ecocardiograma en Maracay.
            </p>
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm text-white/90 transition-colors hover:bg-white/10"
            >
              <Instagram className="h-4 w-4" />
              @{site.instagram}
            </a>
          </div>

          <div>
            <h4 className="font-display font-bold">Navegación</h4>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-white/70 transition-colors hover:text-accent"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold">Contacto</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li className="flex gap-2.5">
                <Pin className="h-5 w-5 shrink-0 text-accent" />
                <span>{site.address}, {site.city}</span>
              </li>
              <li className="flex gap-2.5">
                <Phone className="h-5 w-5 shrink-0 text-accent" />
                <a
                  href={`tel:${site.phoneIntl.replace(/[^+\d]/g, "")}`}
                  className="hover:text-accent"
                >
                  {site.phoneDisplay}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-sm text-white/60 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.legalName}. Todos los derechos
            reservados.
          </p>
          <p>Hecho con cariño para cuidar tu salud 🩺</p>
        </div>
      </div>
    </footer>
  );
}
