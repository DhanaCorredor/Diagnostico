const items = [
  "Ecografía Integral",
  "Doppler Color",
  "Holter de Ritmo",
  "MAPA",
  "Ecocardiograma",
  "Electrocardiograma",
  "Espirometría",
  "Plan Mujer",
  "Cardiología",
  "Ginecología",
  "Endoscopia Nasal",
  "Consultas Especializadas",
];

export default function Marquee() {
  const loop = [...items, ...items];
  return (
    <div className="border-y border-surface bg-white py-5">
      <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex shrink-0 animate-marquee items-center gap-3 pr-3">
          {loop.map((item, i) => (
            <Pill key={i} text={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Pill({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-surface px-5 py-2 text-sm font-medium text-brand">
      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
      {text}
    </span>
  );
}
