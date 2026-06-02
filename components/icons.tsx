import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

export function Stethoscope(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M4.5 3v4a4 4 0 0 0 8 0V3" />
      <path d="M4.5 3H3M12.5 3H14" />
      <path d="M8.5 11v3a6 6 0 0 0 6 6h.5" />
      <circle cx="18.5" cy="17.5" r="2.5" />
    </svg>
  );
}

export function Heart(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M12 20s-7-4.35-9.5-8.5C.8 8.6 2 5 5.5 5 7.8 5 9 6.5 12 9c3-2.5 4.2-4 6.5-4C22 5 23.2 8.6 21.5 11.5 19 15.65 12 20 12 20Z" />
      <path d="M5 12h3l1.5-3 2 5 1.5-3h3" />
    </svg>
  );
}

export function Wave(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M2 12c1.5 0 1.5-5 3-5s1.5 12 3 12 1.5-9 3-9 1.5 5 3 5 1.5-7 3-7 1.5 4 3 4" />
    </svg>
  );
}

export function Lungs(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M12 4v8" />
      <path d="M12 12c0-2-2-3-2-3M12 12c0-2 2-3 2-3" />
      <path d="M9.5 9C8 9.5 6 11 5.5 14c-.4 2.3-.4 4.5 0 5.5.5 1.2 2.5 1 3.2-.2.6-1 1.3-3.3 1.3-5.8V9.5C10 8 9.5 9 9.5 9Z" />
      <path d="M14.5 9c1.5.5 3.5 2 4 5 .4 2.3.4 4.5 0 5.5-.5 1.2-2.5 1-3.2-.2-.6-1-1.3-3.3-1.3-5.8V9.5C14 8 14.5 9 14.5 9Z" />
    </svg>
  );
}

export function Ear(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M6 9a6 6 0 1 1 12 0c0 3-2.5 3.8-3.5 5.2-.8 1-.6 2.3-1.7 3.3a3 3 0 0 1-5-2.2" />
      <path d="M9 9a3 3 0 0 1 6 0c0 1.5-1.5 2-2 3" />
    </svg>
  );
}

export function Clock(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

export function Pin(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M12 21s7-6 7-11a7 7 0 1 0-14 0c0 5 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function Phone(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 5 5L19 13l3 2v3a2 2 0 0 1-2.2 2A16 16 0 0 1 5 6.2 2 2 0 0 1 5 4Z" />
    </svg>
  );
}

export function Whatsapp(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M17.6 14.2c-.3-.15-1.7-.84-1.96-.94-.26-.1-.45-.15-.64.15-.19.28-.74.93-.9 1.12-.17.19-.33.21-.61.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.04-.17-.29-.02-.45.13-.59.13-.13.3-.34.44-.51.15-.17.2-.29.3-.48.1-.19.05-.36-.02-.51-.08-.15-.64-1.55-.88-2.12-.23-.55-.47-.48-.64-.49l-.55-.01c-.19 0-.5.07-.76.36-.26.29-1 .98-1 2.38s1.02 2.76 1.17 2.95c.15.19 2.02 3.08 4.9 4.32.68.29 1.22.47 1.63.6.69.22 1.31.19 1.8.12.55-.08 1.7-.69 1.94-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.34Z" />
      <path d="M12.05 2C6.55 2 2.08 6.47 2.08 11.96c0 1.76.46 3.48 1.34 5L2 22l5.18-1.36a9.95 9.95 0 0 0 4.86 1.24h.01c5.5 0 9.97-4.47 9.97-9.96A9.9 9.9 0 0 0 12.05 2Zm5.81 14.07c-.25.7-1.45 1.34-2 1.42-.51.08-1.16.11-1.87-.12-.43-.14-.98-.32-1.69-.62-2.97-1.28-4.9-4.27-5.05-4.46-.15-.2-1.2-1.6-1.2-3.05 0-1.45.76-2.16 1.04-2.46.27-.3.6-.37.8-.37l.57.01c.18 0 .43-.07.67.51.25.6.85 2.07.92 2.22.08.15.13.32.02.51-.1.2-.15.32-.3.5-.15.16-.31.37-.44.5-.15.14-.3.3-.13.59.17.29.76 1.26 1.63 2.04 1.13 1 2.08 1.32 2.38 1.47.29.14.46.12.62-.07.17-.19.72-.84.9-1.12.2-.29.39-.24.65-.14.26.1 1.66.78 1.94.93.29.14.48.2.55.32.07.12.07.69-.18 1.36Z" />
    </svg>
  );
}

export function Instagram(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  );
}

export function Check(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="m5 12 4.5 4.5L19 7" />
    </svg>
  );
}

export function Shield(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M12 3 5 6v5c0 4.5 3 8 7 10 4-2 7-5.5 7-10V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function Sparkle(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
      <path d="M12 8a4 4 0 0 0 4 4 4 4 0 0 0-4 4 4 4 0 0 0-4-4 4 4 0 0 0 4-4Z" />
    </svg>
  );
}

export function Users(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3.5 19a5.5 5.5 0 0 1 11 0" />
      <path d="M16 5.2a3 3 0 0 1 0 5.6M17.5 19a5.5 5.5 0 0 0-3-4.9" />
    </svg>
  );
}

export function ArrowRight(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export const groupIcons: Record<string, (p: IconProps) => React.ReactElement> = {
  stethoscope: Stethoscope,
  heart: Heart,
  wave: Wave,
  lungs: Lungs,
  ear: Ear,
};
