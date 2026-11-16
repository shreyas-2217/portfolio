import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Journey from "@/components/Journey";
import Toolkit from "@/components/Toolkit";
import Work from "@/components/Work";
import { site } from "@/data/site";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.fullName,
    jobTitle: "Analytics, Cloud & Applied AI",
    email: `mailto:${site.email}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      addressCountry: "IN",
    },
    alumniOf: "CHRIST (Deemed to be University)",
    sameAs: [site.linkedin, site.github],
  };

  return (
    <>
      <main id="main">
        <Hero />
        <About />
        <Work />
        <Journey />
        <Toolkit />
        <Contact />
      </main>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
