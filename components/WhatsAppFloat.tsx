import { waLink } from "@/lib/site";
import { Whatsapp } from "./icons";

export default function WhatsAppFloat() {
  return (
    <a
      href={waLink("Hola, deseo agendar una cita.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="animate-pulse-ring fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-white shadow-xl transition-transform duration-300 hover:scale-110 hover:bg-accent-dark"
    >
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-40" />
      <Whatsapp className="relative h-7 w-7" />
    </a>
  );
}
