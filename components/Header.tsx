"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { site, waLink } from "@/lib/site";
import { Whatsapp } from "./icons";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#agendar", label: "Agendar cita" },
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
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 shadow-[0_4px_24px_-12px_rgba(31,90,91,0.35)] backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8">
        <a href="#inicio" className="flex items-center" aria-label={site.name}>
          <Image
            src={scrolled ? "/logo-color.png" : "/logo-white.png"}
            alt={site.legalName}
            width={210}
            height={56}
            priority
            className="h-9 w-auto sm:h-11"
          />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors ${
                scrolled
                  ? "text-ink/80 hover:text-brand"
                  : "text-white/90 hover:text-white"
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href={waLink("Hola, deseo más información sobre sus servicios.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-accent-dark hover:shadow-lg"
          >
            <Whatsapp className="h-4 w-4" />
            WhatsApp
          </a>
        </nav>

        {/* Botón menú móvil */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menú"
          className={`flex h-10 w-10 items-center justify-center rounded-lg lg:hidden ${
            scrolled ? "text-ink" : "text-white"
          }`}
        >
          <div className="space-y-1.5">
            <span
              className={`block h-0.5 w-6 bg-current transition-transform ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-current transition-opacity ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-current transition-transform ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Menú móvil desplegable */}
      <div
        className={`overflow-hidden bg-white shadow-lg transition-[max-height] duration-300 lg:hidden ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-5 py-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-4 py-3 font-medium text-ink hover:bg-surface"
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
