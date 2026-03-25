import { siteConfig } from "../content/site.config";

const SITE_URL = `https://${siteConfig.domain}`;
const DATE_PUBLISHED = "2026-03-02";
const DATE_MODIFIED = "2026-03-16";

export function canonicalUrl(path: string): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${clean}`;
}

export function pageTitle(subtitle?: string): string {
  if (!subtitle) return `Export from Malaysia to Japan | ${siteConfig.siteName}`;
  return `${subtitle} | ${siteConfig.siteName}`;
}

function speakable(cssSelectors: string[]) {
  return {
    "@type": "SpeakableSpecification",
    cssSelector: cssSelectors,
  };
}

const PUBLISHER_REF = {
  "@type": "Organization",
  name: siteConfig.company,
  url: SITE_URL,
};

export function orgJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.company,
    legalName: "ネオインスパイア株式会社",
    url: SITE_URL,
    description: siteConfig.primaryIntent,
    inLanguage: "en",
    areaServed: [
      { "@type": "Country", name: "Malaysia" },
      { "@type": "Country", name: "Japan" },
    ],
    knowsAbout: [
      "Export from Malaysia to Japan",
      "Japan import regulations",
      "Japan product labelling compliance",
      "Malaysia–Japan FTA utilisation",
      "Japan distributor identification",
      "Halal product export to Japan",
      "Export readiness assessment",
      "Japan B2B market entry",
    ],
    ...(siteConfig.localPresence && {
      address: {
        "@type": "PostalAddress",
        addressLocality: "Osaka",
        addressRegion: "Osaka",
        addressCountry: "JP",
      },
    }),
  };
}

export function webSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.siteName,
    url: SITE_URL,
    description: siteConfig.primaryIntent,
    inLanguage: "en",
    publisher: PUBLISHER_REF,
    about: {
      "@type": "Thing",
      name: "Exporting from Malaysia to Japan",
      description:
        "Structured guidance covering compliance, labelling, FTA utilisation, and distributor readiness for Malaysian companies exporting to Japan.",
    },
    speakableSpecification: speakable(["h1", "[data-speakable='lead']"]),
  };
}

export function webPageJsonLd(path: string, name: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url: canonicalUrl(path),
    inLanguage: "en",
    datePublished: DATE_PUBLISHED,
    dateModified: DATE_MODIFIED,
    publisher: PUBLISHER_REF,
    isPartOf: {
      "@type": "WebSite",
      url: SITE_URL,
    },
    speakableSpecification: speakable(["h1", "[data-speakable='lead']"]),
  };
}

export function faqPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: siteConfig.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
    speakableSpecification: speakable(["h1", "dt", "dd"]),
  };
}

/** One Q&A — for /faq/:slug answer assets */
export function singleFaqPageJsonLd(question: string, answer: string) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: question,
        acceptedAnswer: {
          "@type": "Answer",
          text: answer,
        },
      },
    ],
    speakableSpecification: speakable(["h1", "[data-speakable='answer']"]),
  };
}

export function howToJsonLd(
  name: string,
  description: string,
  steps: { title: string; body: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    step: steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.title,
      text: s.body,
    })),
  };
}

export function definedTermSetJsonLd(
  name: string,
  terms: { term: string; description: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    name,
    hasDefinedTerm: terms.map((t) => ({
      "@type": "DefinedTerm",
      name: t.term,
      description: t.description,
    })),
  };
}

export { DATE_PUBLISHED, DATE_MODIFIED };
