import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/ui/WhatsAppFloat";
import { Hero } from "@/components/sections/Hero";
import { MarqueeTicker } from "@/components/sections/MarqueeTicker";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { B2BSection } from "@/components/sections/B2BSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { MitosSection } from "@/components/sections/MitosSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { BlogPreviewSection } from "@/components/sections/BlogPreviewSection";
import { CTASection } from "@/components/sections/CTASection";
import { ContactSection } from "@/components/sections/ContactSection";
import {
  getPhysicianSchema,
  getLocalBusinessSchema,
  getWebsiteSchema,
  getOrganizationSchema,
  getFAQSchema,
} from "@/lib/structured-data";

export default function Home() {
  const schemas = [
    getPhysicianSchema(),
    getLocalBusinessSchema(),
    getOrganizationSchema(),
    getWebsiteSchema(),
    getFAQSchema(),
  ];

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <Header />
      <main id="main-content">
        <Hero />
        <MarqueeTicker />
        <AboutSection />
        <ServicesSection />
        <B2BSection />
        <HowItWorksSection />
        <MitosSection />
        <TestimonialsSection />
        <FAQSection />
        <BlogPreviewSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
