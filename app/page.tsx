import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Services from "@/components/Services";
import Appointment from "@/components/Appointment";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { site } from "@/lib/site";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: site.legalName,
    description: site.description,
    telephone: site.phoneIntl,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address,
      addressLocality: "Maracay",
      addressRegion: "Aragua",
      addressCountry: "VE",
    },
    openingHours: ["Mo-Sa 07:30-17:30"],
    sameAs: [site.instagramUrl],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <Hero />
        <Features />
        <Services />
        <Appointment />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
