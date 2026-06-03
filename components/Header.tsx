"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { site, waLink } from "@/lib/site";
import { Whatsapp } from "./icons";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#promociones", label: "Promociones" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#contacto", label: "Contacto" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`animate-header-down fixed inset-x-0 top-0 z-50 bg-[#266d6c] transition-shadow duration-300 ${
        scrolled ? "shadow-[0_10px_30px_-12px_rgba(0,0,0,0.55)]" : ""
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8">
        <a
          href="#inicio"
          className="group flex items-center"
          aria-label={site.legalName}
        >
          <Image
            src="/logo-white.png"
            alt={site.legalName}
            width={260}
            height={49}
            priority
            className="h-9 w-auto transition-transform duration-300 group-hover:scale-105 sm:h-10"
          />
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="nav-link rounded-full px-4 py-2 text-sm font-medium text-white/80 transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
          <a
            href={waLink("Hola, deseo más información sobre sus servicios.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shine ml-3 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_24px_-8px_rgba(99,166,54,0.7)] transition-all hover:scale-105 hover:bg-accent-dark"
          >
            <Whatsapp className="h-4 w-4" />
            WhatsApp
          </a>
        </nav>

        {/* Botón menú móvil */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menú"
          className="flex h-10 w-10 items-center justify-center rounded-lg text-white lg:hidden"
        >
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-6 bg-current transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-6 bg-current transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-6 bg-current transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </div>

      {/* Menú móvil */}
      <div
        className={`overflow-hidden border-t border-white/10 bg-[#266d6c] shadow-lg transition-[max-height] duration-300 lg:hidden ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-5 py-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-4 py-3 font-medium text-white/90 transition-colors hover:bg-white/10"
            >
              {l.label}
            </a>
          ))}
          <a
            href={waLink("Hola, deseo más información sobre sus servicios.")}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 font-semibold text-white"
          >
            <Whatsapp className="h-5 w-5" />
            Escríbenos por WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
