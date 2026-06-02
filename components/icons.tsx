import type { SVGProps } from "react";
import {
  Stethoscope,
  HeartPulse,
  Activity,
  Wind,
  Ear,
  Clock,
  MapPin,
  Phone,
  Check,
  ShieldCheck,
  Sparkles,
  Users,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";

// Re-exporta los iconos de Lucide con los nombres usados en el proyecto
export { Stethoscope, Ear, Clock, Phone, Check, Users, ArrowRight };
export const Heart = HeartPulse;
export const Wave = Activity;
export const Lungs = Wind;
export const Pin = MapPin;
export const Shield = ShieldCheck;
export const Sparkle = Sparkles;

// Iconos de marca: Lucide ya no los incluye, se mantienen como SVG propios.
export function Instagram(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Whatsapp(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M17.6 14.2c-.3-.15-1.7-.84-1.96-.94-.26-.1-.45-.15-.64.15-.19.28-.74.93-.9 1.12-.17.19-.33.21-.61.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.04-.17-.29-.02-.45.13-.59.13-.13.3-.34.44-.51.15-.17.2-.29.3-.48.1-.19.05-.36-.02-.51-.08-.15-.64-1.55-.88-2.12-.23-.55-.47-.48-.64-.49l-.55-.01c-.19 0-.5.07-.76.36-.26.29-1 .98-1 2.38s1.02 2.76 1.17 2.95c.15.19 2.02 3.08 4.9 4.32.68.29 1.22.47 1.63.6.69.22 1.31.19 1.8.12.55-.08 1.7-.69 1.94-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.34Z" />
      <path d="M12.05 2C6.55 2 2.08 6.47 2.08 11.96c0 1.76.46 3.48 1.34 5L2 22l5.18-1.36a9.95 9.95 0 0 0 4.86 1.24h.01c5.5 0 9.97-4.47 9.97-9.96A9.9 9.9 0 0 0 12.05 2Zm5.81 14.07c-.25.7-1.45 1.34-2 1.42-.51.08-1.16.11-1.87-.12-.43-.14-.98-.32-1.69-.62-2.97-1.28-4.9-4.27-5.05-4.46-.15-.2-1.2-1.6-1.2-3.05 0-1.45.76-2.16 1.04-2.46.27-.3.6-.37.8-.37l.57.01c.18 0 .43-.07.67.51.25.6.85 2.07.92 2.22.08.15.13.32.02.51-.1.2-.15.32-.3.5-.15.16-.31.37-.44.5-.15.14-.3.3-.13.59.17.29.76 1.26 1.63 2.04 1.13 1 2.08 1.32 2.38 1.47.29.14.46.12.62-.07.17-.19.72-.84.9-1.12.2-.29.39-.24.65-.14.26.1 1.66.78 1.94.93.29.14.48.2.55.32.07.12.07.69-.18 1.36Z" />
    </svg>
  );
}

// Iconos por categoría de servicio
export const groupIcons: Record<string, LucideIcon> = {
  stethoscope: Stethoscope,
  heart: HeartPulse,
  wave: Activity,
  lungs: Wind,
  ear: Ear,
};
