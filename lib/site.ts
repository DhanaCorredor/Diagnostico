// Datos centrales del sitio — DIAGNÓSTICO Centro de Salud
// Editar aquí actualiza toda la página.

export const site = {
  name: "DIAGNÓSTICO",
  legalName: "Diagnóstico Centro de Salud",
  tagline: "Centro de Especialidades Médicas",
  description:
    "Ecografía integral y Doppler, holter de ritmo, MAPA, electrocardiograma y ecocardiograma. Atención médica confiable en Maracay.",
  phoneDisplay: "0412-9160186",
  phoneIntl: "+58 412-9160186",
  whatsapp: "584129160186", // formato internacional sin signos para wa.me
  instagram: "diagnostico.mcy",
  instagramUrl: "https://www.instagram.com/diagnostico.mcy",
  address: "C.C. Parque Aragua, Nivel 3, Pasillo Av. Bolívar 3-13",
  city: "Maracay, Estado Aragua, Venezuela",
  mapsUrl: "https://maps.google.com/?q=Centro+Comercial+Parque+Aragua+Maracay",
  mapsEmbed:
    "https://www.google.com/maps?q=Centro%20Comercial%20Parque%20Aragua%20Maracay&output=embed",
  hours: [
    { day: "Lunes a Viernes", time: "7:30 AM – 5:30 PM" },
    { day: "Sábado", time: "7:30 AM – 5:30 PM" },
    { day: "Domingo", time: "Cerrado" },
  ],
  bioShort: "Especialistas en Ecografía y estudios Cardíacos no invasivos",
};

export function waLink(message?: string) {
  const base = `https://wa.me/${site.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

// ---- Catálogo de servicios ----

export type Service = { name: string; price?: string; note?: string };
export type ServiceGroup = {
  id: string;
  title: string;
  icon: string; // clave de ícono
  highlight?: string; // precio destacado del grupo
  items: Service[];
  subgroups?: { title: string; price?: string; items: Service[] }[];
};

export const serviceGroups: ServiceGroup[] = [
  {
    id: "consultas",
    title: "Consultas Médicas",
    icon: "stethoscope",
    items: [
      { name: "Cardiología + Electro", price: "30$" },
      { name: "Medicina Interna + Electro", price: "35$" },
      { name: "Cirugía General + Eco", price: "35$" },
      { name: "Ginecología + Rastreo Ecográfico", price: "35$" },
      { name: "Traumatología", price: "35$" },
      { name: "Psicología", price: "30$" },
      { name: "Neumonología", price: "30$" },
      { name: "Gastroenterología + Rastreo Ecográfico", price: "40$" },
      { name: "Otorrinolaringología + Video Otoscopia", price: "40$" },
      { name: "Dermatología", price: "35$" },
      { name: "Venereología", price: "40$" },
    ],
  },
  {
    id: "cardiacos",
    title: "Estudios Cardíacos",
    icon: "heart",
    items: [
      { name: "Ecocardiograma", price: "30$" },
      { name: "Holter de Ritmo", price: "25$", note: "incluye baterías" },
      { name: "MAPA", price: "20$", note: "incluye baterías" },
      { name: "Electrocardiograma", price: "8$" },
      { name: "Electrocardiograma Informado", price: "15$" },
    ],
  },
  {
    id: "ecografia",
    title: "Ecografía",
    icon: "wave",
    items: [],
    subgroups: [
      {
        title: "Convencional",
        price: "12$",
        items: [
          { name: "Abdominal" },
          { name: "Pélvico" },
          { name: "Renal" },
          { name: "Testicular" },
          { name: "Partes Blandas" },
          { name: "Mamario" },
          { name: "Prostático" },
          { name: "Tiroideo" },
        ],
      },
      {
        title: "Doppler",
        price: "20$",
        items: [
          { name: "Carotídeo" },
          { name: "Hepático" },
          { name: "Renal" },
          { name: "Testicular" },
          { name: "Partes Blandas" },
          { name: "Mamario" },
          { name: "Prostático" },
          { name: "Tiroideo" },
        ],
      },
      {
        title: "Transvaginal",
        items: [
          { name: "Ecografía Transvaginal", price: "15$" },
          { name: "Doppler Pélvico", price: "20$" },
        ],
      },
      {
        title: "Doppler Arterial y Venoso",
        items: [
          { name: "De un miembro", price: "25$" },
          { name: "De ambos miembros", price: "35$" },
        ],
      },
      {
        title: "Ecografías Especiales",
        items: [{ name: "Músculo-Esquelético", price: "20$" }],
      },
    ],
  },
  {
    id: "neumologicos",
    title: "Estudios Neumológicos",
    icon: "lungs",
    items: [{ name: "Espirometría", price: "25$" }],
  },
  {
    id: "otorrino",
    title: "Estudios Otorrinolaringológicos",
    icon: "ear",
    items: [{ name: "Endoscopia Nasal", price: "50$", note: "informada" }],
  },
];

// ---- Promociones ----

export type Promo = {
  id: string;
  category: string;
  icon: string; // clave de groupIcons
  name?: string; // nombre destacado (ej. "Plan Mujer")
  description: string;
  price: string;
  featured?: boolean;
};

export const promos: Promo[] = [
  {
    id: "plan-mujer",
    category: "Ginecología",
    icon: "wave",
    name: "Plan Mujer",
    description:
      "Consulta ginecológica + exploración mamaria + rastreo ecográfico pélvico o transvaginal + citología procesada + despistaje de VPH.",
    price: "45$",
    featured: true,
  },
  {
    id: "card-holter-mapa",
    category: "Cardiología",
    icon: "heart",
    description: "Holter de Ritmo + MAPA (incluye baterías).",
    price: "30$",
  },
  {
    id: "dos-ecografias",
    category: "Ecografías",
    icon: "wave",
    description: "Dos ecografías convencionales.",
    price: "20$",
  },
  {
    id: "doppler-ambos",
    category: "Ecografías",
    icon: "wave",
    description: "Eco Doppler arterial y venoso de ambos miembros.",
    price: "35$",
  },
  {
    id: "neumo-espiro",
    category: "Neumonología",
    icon: "lungs",
    description: "Valoración o consulta + Espirometría.",
    price: "50$",
  },
];

// Lista plana para el selector del formulario de citas
export const allServiceNames: string[] = [
  ...serviceGroups.flatMap((g) => [
    ...g.items.map((i) => `${g.title} — ${i.name}`),
    ...(g.subgroups?.flatMap((s) =>
      s.items.map((i) => `${g.title} ${s.title} — ${i.name}`)
    ) ?? []),
  ]),
];
