import { SITE, FAQS, SERVICES, BLOG_POSTS, TESTIMONIALS } from "./constants";

/**
 * Schema.org Physician (rich snippet para médicos no Google)
 * https://schema.org/Physician
 */
export function getPhysicianSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    "@id": `${SITE.url}/#physician`,
    name: SITE.name,
    givenName: "Carla",
    familyName: "Costa",
    honorificPrefix: "Dra.",
    jobTitle: "Médica Anestesiologista",
    image: `${SITE.url}/images/hero/carla-hero.jpg`,
    logo: `${SITE.url}/images/logo/logo-carla.png`,
    url: SITE.url,
    telephone: SITE.phone,
    email: SITE.email,
    description: SITE.description,
    medicalSpecialty: [
      "Anesthesiology",
      "PainMedicine",
    ],
    identifier: {
      "@type": "PropertyValue",
      propertyID: "CRM",
      value: SITE.crm,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "São Paulo",
      addressRegion: "SP",
      addressCountry: "BR",
    },
    areaServed: [
      { "@type": "City", name: "São Paulo" },
      { "@type": "State", name: "São Paulo" },
    ],
    alumniOf: [
      { "@type": "EducationalOrganization", name: "Universidade Potiguar" },
      { "@type": "EducationalOrganization", name: "Universidade de Taubaté (Unitau)" },
      { "@type": "EducationalOrganization", name: "Santa Casa de São Paulo" },
    ],
    knowsAbout: [
      "Anestesia Ambulatorial",
      "Sedação Consciente",
      "Medicina da Dor",
      "Anestesia Dermatológica",
      "Anestesia Odontológica",
      "Cirurgia Plástica",
      "Bucomaxilofacial",
      "Avaliação Pré-anestésica",
    ],
    availableService: SERVICES.map((s) => ({
      "@type": "MedicalProcedure",
      name: s.title,
      description: s.short,
      url: `${SITE.url}/servicos/${s.slug}`,
    })),
    sameAs: [SITE.instagram, SITE.linkedin].filter(Boolean),
  };
}

/**
 * LocalBusiness — melhora Google Maps/Local Pack
 */
export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": `${SITE.url}/#business`,
    name: SITE.name,
    image: `${SITE.url}/images/hero/carla-hero.jpg`,
    logo: `${SITE.url}/images/logo/logo-carla.png`,
    url: SITE.url,
    telephone: SITE.phone,
    email: SITE.email,
    priceRange: "$$",
    description: SITE.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: "São Paulo",
      addressRegion: "SP",
      addressCountry: "BR",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "19:00",
      },
    ],
    sameAs: [SITE.instagram, SITE.linkedin].filter(Boolean),
  };
}

/**
 * Website com SearchAction (habilita sitelinks search box no Google)
 */
export function getWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    name: SITE.name,
    alternateName: "Dra. Carla Anestesista",
    url: SITE.url,
    description: SITE.description,
    inLanguage: "pt-BR",
    publisher: {
      "@id": `${SITE.url}/#physician`,
    },
  };
}

/**
 * Organization (complementa Physician com perspectiva corporativa)
 */
export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE.url}/#organization`,
    name: SITE.name,
    url: SITE.url,
    logo: {
      "@type": "ImageObject",
      url: `${SITE.url}/images/logo/logo-carla.png`,
      width: 512,
      height: 512,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: SITE.phone,
      email: SITE.email,
      contactType: "customer service",
      availableLanguage: "Portuguese",
      areaServed: "BR",
    },
    sameAs: [SITE.instagram, SITE.linkedin].filter(Boolean),
  };
}

/**
 * FAQ Schema para rich results
 */
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

/**
 * BreadcrumbList — ajuda Google a mostrar caminho de navegação
 */
export function getBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * MedicalProcedure — para cada serviço individual
 */
export function getServiceSchema(slug: string) {
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return null;

  return {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: service.title,
    description: service.description,
    image: service.image.startsWith("http") ? service.image : `${SITE.url}${service.image}`,
    url: `${SITE.url}/servicos/${service.slug}`,
    procedureType: "https://schema.org/SurgicalProcedure",
    performer: {
      "@id": `${SITE.url}/#physician`,
    },
    bodyLocation: "Variable",
    preparation: "Avaliação pré-anestésica obrigatória",
  };
}

/**
 * BlogPosting — para posts individuais
 */
export function getBlogPostingSchema(slug: string) {
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return null;

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: post.date,
    dateModified: post.date,
    url: `${SITE.url}/blog/${post.slug}`,
    author: {
      "@id": `${SITE.url}/#physician`,
    },
    publisher: {
      "@id": `${SITE.url}/#organization`,
    },
    articleSection: post.category,
    timeRequired: post.readTime,
    inLanguage: "pt-BR",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE.url}/blog/${post.slug}`,
    },
  };
}

/**
 * Review / AggregateRating — prova social nos resultados
 */
export function getAggregateRatingSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AggregateRating",
    itemReviewed: { "@id": `${SITE.url}/#physician` },
    ratingValue: "5",
    reviewCount: TESTIMONIALS.length,
    bestRating: "5",
    worstRating: "5",
  };
}
