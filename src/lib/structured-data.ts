import { SITE, FAQS } from "./constants";

export function getPhysicianSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: SITE.name,
    image: `${SITE.url}${SITE.ogImage}`,
    url: SITE.url,
    telephone: SITE.phone,
    email: SITE.email,
    medicalSpecialty: [
      "Anesthesiology",
      "PainMedicine",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "São Paulo",
      addressRegion: "SP",
      addressCountry: "BR",
    },
    alumniOf: [
      { "@type": "EducationalOrganization", name: "Universidade Potiguar" },
      { "@type": "EducationalOrganization", name: "Universidade de Taubaté (Unitau)" },
      { "@type": "EducationalOrganization", name: "Santa Casa de São Paulo" },
    ],
    sameAs: [SITE.instagram, SITE.linkedin],
  };
}

export function getWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    inLanguage: "pt-BR",
  };
}

export function getFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}
