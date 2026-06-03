import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://diagnostico-mcy.vercel.app"),
  title: {
    default: `${site.tagline} en Maracay | ${site.legalName}`,
    template: `%s | ${site.legalName}`,
  },
  description: site.description,
  keywords: [
    "centro de salud Maracay",
    "ecografía Maracay",
    "Doppler",
    "holter de ritmo",
    "MAPA",
    "electrocardiograma",
    "ecocardiograma",
    "consultas médicas Maracay",
    "Parque Aragua",
  ],
  authors: [{ name: site.legalName }],
  openGraph: {
    title: `${site.legalName} | ${site.tagline}`,
    description: site.description,
    type: "website",
    locale: "es_VE",
    siteName: site.legalName,
  },
  icons: {
    icon: "/icon-dark.png",
    apple: "/icon-dark.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#206565",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${inter.variable} ${sora.variable}`}>
      <body className="min-h-screen overflow-x-hidden bg-white antialiased">
        {children}
      </body>
    </html>
  );
}
