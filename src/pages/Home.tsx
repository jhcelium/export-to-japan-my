import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import SEOHead from "../components/SEOHead";
import CTA from "../components/CTA";
import { siteConfig } from "../content/site.config";
import { howToJsonLd, definedTermSetJsonLd } from "../lib/seo";

const HOME_FAQ_JSONLD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are the key steps to export from Malaysia to Japan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The key steps to export from Malaysia to Japan are: (1) product classification and HS code verification, (2) regulatory review by product category, (3) label adaptation to Japanese language standards, (4) documentation alignment including commercial invoice, packing list, and certificate of origin, (5) FTA utilisation assessment under the Malaysia–Japan EPA, (6) distributor and importer of record readiness confirmation, and (7) shipment planning. Each stage must be completed in order to avoid customs delays or distributor rejection.",
      },
    },
    {
      "@type": "Question",
      name: "What are the export compliance and labelling requirements for the Japan market?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Export compliance and labelling for the Japan market requires all consumer product labels to be in Japanese. For food products, the Food Labelling Standards Act mandates ingredient lists, allergen declarations, best-before dates, and net weight in Japanese. Non-compliant labelling will be rejected at customs or by the distributor. Health and supplement products face additional scrutiny on ingredient claims. Documentation accuracy — including certificates of origin and import notifications — must be confirmed before shipment.",
      },
    },
    {
      "@type": "Question",
      name: "Does the Malaysia–Japan FTA reduce tariffs for Malaysian exporters?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Malaysia–Japan Economic Partnership Agreement (MJEPA) provides preferential tariff rates for qualifying Malaysian-origin goods. Exporters must hold a Certificate of Origin (Form MJEPA) issued by MITI or an approved body and satisfy rules of origin criteria. FTA benefits do not apply automatically — products that partially source inputs from third countries may not qualify. Tariffs can still apply for specific commodity codes. Confirming eligibility before pricing distributor proposals is essential.",
      },
    },
  ],
  speakableSpecification: {
    "@type": "SpeakableSpecification",
    cssSelector: ["h1", "dt", "dd"],
  },
};

const STEP_BY_STEP = [
  {
    step: "1",
    title: "Product Classification & HS Verification",
    body: "Confirm the correct HS code for Japan customs. Misclassification causes duty errors and clearance delays.",
  },
  {
    step: "2",
    title: "Regulatory Review",
    body: "Identify applicable Japan import regulations by product category, including food safety, cosmetics, or industrial standards.",
  },
  {
    step: "3",
    title: "Label Adaptation",
    body: "Prepare Japanese-language labels meeting the Food Labelling Standards Act or relevant category requirements.",
  },
  {
    step: "4",
    title: "Documentation Alignment",
    body: "Compile commercial invoice, packing list, certificate of origin, and any category-specific certifications before shipment.",
  },
  {
    step: "5",
    title: "FTA Utilisation Review",
    body: "Assess whether your product qualifies under the Malaysia–Japan EPA and secure the appropriate certificate of origin.",
  },
  {
    step: "6",
    title: "Distributor / Channel Readiness",
    body: "Confirm the importer of record and distributor have the operational capacity to receive and list your product.",
  },
  {
    step: "7",
    title: "Shipment Planning",
    body: "Coordinate incoterms, logistics routing, and customs broker engagement before the first order is placed.",
  },
];

const FAILURE_PATTERNS = [
  {
    issue: "Incorrect labeling",
    detail: "Labels prepared for other markets, missing Japanese-language requirements.",
  },
  {
    issue: "Missing import-side coordination",
    detail: "No confirmed importer of record before shipment planning begins.",
  },
  {
    issue: "No distributor alignment",
    detail: "Outreach started before product readiness was confirmed.",
  },
  {
    issue: "HS misclassification",
    detail: "Wrong product code applied, leading to incorrect duty calculation.",
  },
  {
    issue: "Overestimated FTA savings",
    detail: "FTA benefit assumed without confirming rules of origin compliance.",
  },
  {
    issue: "No follow-up structure",
    detail: "Initial distributor contact made but no plan to maintain the relationship.",
  },
];

const EXPORT_TERMS = [
  { term: "HS Code", description: "Harmonized System code used to classify traded products at customs. Determines applicable tariff rate and regulatory requirements." },
  { term: "Importer of Record", description: "The licensed entity in Japan responsible for clearing imported goods through customs. Required for every shipment entering Japan." },
  { term: "Certificate of Origin (Form MJEPA)", description: "Document issued by MITI or approved body certifying Malaysian origin for preferential tariff treatment under the Malaysia–Japan EPA." },
  { term: "Food Labelling Standards Act", description: "Japanese law requiring ingredient lists, allergen declarations, best-before dates, and net weight on consumer food labels, all in Japanese." },
  { term: "Malaysia–Japan EPA (MJEPA)", description: "The Malaysia–Japan Economic Partnership Agreement providing preferential tariff rates for qualifying Malaysian-origin goods exported to Japan." },
  { term: "Rules of Origin", description: "Criteria that determine whether a product qualifies as originating from Malaysia for FTA preferential tariff treatment." },
];

const FAQ_PREVIEW = siteConfig.faq.filter((_, i) => [0, 2, 3].includes(i));

const howToSchema = howToJsonLd(
  "How to Export from Malaysia to Japan",
  "A seven-stage export process covering product classification, regulatory review, labelling, documentation, FTA assessment, distributor readiness, and shipment planning.",
  STEP_BY_STEP.map((s) => ({ title: s.title, body: s.body })),
);

const definedTermSchema = definedTermSetJsonLd(
  "Export to Japan Key Terms",
  EXPORT_TERMS,
);

export default function Home() {
  const title = "Export from Malaysia to Japan — Compliance, Labelling & Readiness | NeoiDigital";
  const description =
    "Structured guide to exporting from Malaysia to Japan: compliance review, labelling requirements, FTA utilisation, and export readiness assessment. Osaka-based coordination.";

  return (
    <>
      <SEOHead
        path="/"
        title={title}
        description={description}
        extraJsonLd={[howToSchema, definedTermSchema]}
      />

      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(HOME_FAQ_JSONLD)}
        </script>
      </Helmet>

      <main className="max-w-5xl mx-auto px-6 py-16 space-y-20">

        {/* A — Hero */}
        <section className="max-w-2xl">
          <p className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-4">
            {siteConfig.domain}
          </p>
          <h1 className="text-3xl font-semibold text-neutral-900 leading-tight mb-4">
            Export to Japan from Malaysia
          </h1>
          <p data-speakable="lead" className="text-sm text-neutral-600 leading-relaxed mb-8">
            NeoiDigital supports companies that export from malaysia to japan
            with structured compliance review, labeling checks, and
            distributor-ready positioning.
          </p>
          <div className="flex flex-wrap gap-3">
            <CTA />
            <a
              href={siteConfig.hubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-neutral-300 text-neutral-700 text-sm font-medium px-6 py-3 hover:border-neutral-600 hover:text-neutral-900"
            >
              Japan Market Hub →
            </a>
          </div>
        </section>

        {/* B — Standard Answer Block */}
        <section className="border-t border-neutral-200 pt-10">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 mb-6">
            What Exporting to Japan Actually Requires
          </h2>
          <p className="text-sm text-neutral-600 leading-relaxed mb-6 max-w-3xl">
            Understanding how to export from malaysia to japan means addressing
            each requirement in the correct sequence. Skipping stages creates
            downstream problems at customs, distributor review, or retailer
            listing.
          </p>
          <ul className="space-y-3 text-sm text-neutral-700 max-w-3xl">
            {[
              "Regulatory alignment before shipment.",
              "Accurate product classification.",
              "Label compliance in Japanese.",
              "Import-side distributor readiness.",
              "Tariff evaluation under Malaysia–Japan FTA.",
              "Document accuracy before first order.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 bg-neutral-900" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* C — Step-by-Step Framework */}
        <section className="border-t border-neutral-200 pt-10">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 mb-4">
            Export to Japan from Malaysia: Step-by-Step
          </h2>
          <p className="text-sm text-neutral-600 leading-relaxed mb-8 max-w-3xl">
            The export to japan from malaysia step by step process covers seven
            distinct stages. Each must be completed in order to avoid clearance
            delays or distributor rejection.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {STEP_BY_STEP.map((item) => (
              <div key={item.step}>
                <p className="text-xs font-semibold text-neutral-400 mb-2">
                  Step {item.step}
                </p>
                <p className="text-sm font-semibold text-neutral-900 mb-1">
                  {item.title}
                </p>
                <p className="text-xs text-neutral-500 leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* D — Compliance & Labeling */}
        <section className="border-t border-neutral-200 pt-10">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 mb-6">
            Export Compliance and Labelling
          </h2>
          <div className="max-w-3xl space-y-4 text-sm text-neutral-600 leading-relaxed">
            <p>
              Japan enforces strict import labeling standards across all consumer
              product categories. For food products, the Food Labelling Standards
              Act requires ingredient lists, allergen declarations, best-before
              dates, and net weight, all in Japanese. Non-Japanese labeling is
              not accepted at point of sale.
            </p>
            <p>
              Understanding export compliance and labelling for japan market
              means preparing accurate product documentation before the first
              shipment — not after a clearance rejection. Label errors are among
              the most frequent causes of delay and distributor friction.
            </p>
            <p>
              Supplements and health food products face additional scrutiny.
              Claims must align with Japanese consumer protection regulations,
              and certain ingredients require pre-import verification.
              Documentation accuracy directly affects whether the importer of
              record can clear goods through customs.
            </p>
            <p>
              Covering malaysia to japan export requirements and regulations
              thoroughly before shipment reduces rework costs and avoids damaged
              distributor relationships on the first order.
            </p>
          </div>
        </section>

        {/* E — FTA & Tariff */}
        <section className="border-t border-neutral-200 pt-10">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 mb-6">
            Malaysia–Japan FTA and Tariff Positioning
          </h2>
          <div className="max-w-3xl space-y-4 text-sm text-neutral-600 leading-relaxed">
            <p>
              The Malaysia–Japan Economic Partnership Agreement (MJEPA) provides
              preferential tariff rates for qualifying Malaysian-origin goods.
              Effective malaysia japan fta utilisation requires a Certificate of
              Origin (Form MJEPA) issued by MITI or an approved issuing
              authority. Without this certificate, standard MFN tariff rates
              apply.
            </p>
            <p>
              FTA benefits do not apply automatically. Your product must satisfy
              rules of origin criteria, which typically require a specified
              percentage of Malaysian value-add or transformation. Products that
              partially source inputs from third countries may not qualify.
            </p>
            <p>
              Tariffs can still apply under the FTA for specific commodity codes
              or where transition periods have not lapsed. Assuming zero tariff
              without verification introduces pricing risk in distributor
              negotiations and customer proposals.
            </p>
          </div>
        </section>

        {/* F — Halal / Category-Specific */}
        <section className="border-t border-neutral-200 pt-10">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 mb-6">
            Halal and Supermarket Entry
          </h2>
          <div className="max-w-3xl space-y-4 text-sm text-neutral-600 leading-relaxed">
            <p>
              Japan's halal market is a specialist niche, not a mainstream retail
              channel. For malaysia japan halal export to japan supermarkets,
              exporters must understand that Japanese supermarkets serve a
              general consumer base and do not universally stock halal-certified
              products. Halal positioning is most effective through specialist
              retailers, Muslim-focused food distributors, or areas with
              established Muslim communities.
            </p>
            <p>
              Halal certification recognition differs across Japanese
              distributors. Some accept JAKIM certification; others require
              certifications from Japan-based bodies such as JHOIA or MHJ.
              Confirming which certification your target distributor recognises
              before labeling investment avoids costly revisions.
            </p>
            <p>
              For general supermarket entry, buyer approval processes are
              category-driven and relationship-dependent. New suppliers typically
              enter through a qualified importer or distributor who manages the
              buyer introduction. Direct approaches to supermarket buyers without
              distributor support rarely succeed.
            </p>
          </div>
        </section>

        {/* G — Failure Patterns */}
        <section className="border-t border-neutral-200 pt-10">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 mb-6">
            Common Export Readiness Gaps
          </h2>
          <p className="text-sm text-neutral-600 leading-relaxed mb-6 max-w-3xl">
            An export readiness assessment for japan market typically uncovers
            the same recurring issues. Addressing them before distributor
            outreach protects the company's credibility and reduces wasted spend.
          </p>
          <ul className="space-y-4 max-w-3xl">
            {FAILURE_PATTERNS.map((item) => (
              <li
                key={item.issue}
                className="flex items-start gap-3 border-l-2 border-neutral-200 pl-4"
              >
                <div>
                  <p className="text-sm font-semibold text-neutral-900">
                    {item.issue}
                  </p>
                  <p className="text-xs text-neutral-500 leading-relaxed mt-0.5">
                    {item.detail}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Regulatory Authority (GEO / E-E-A-T) */}
        <section className="border-t border-neutral-200 pt-10">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 mb-6">
            Regulatory Oversight Framework
          </h2>
          <div className="max-w-3xl space-y-4 text-sm text-neutral-600 leading-relaxed">
            <p>
              On the Japan side, food and consumer product imports are overseen
              by the <strong className="text-neutral-900">Ministry of Health, Labour and Welfare (MHLW)</strong> and
              the <strong className="text-neutral-900">Consumer Affairs Agency (CAA)</strong>. MHLW administers the
              Food Sanitation Act, which governs pre-import notifications, food
              additive limits, and safety testing. CAA enforces the Food
              Labelling Standards Act, which requires all consumer-facing labels
              to be in Japanese with specific formatting for allergens,
              ingredients, and nutritional information.
            </p>
            <p>
              On the Malaysia side, the <strong className="text-neutral-900">Ministry of International Trade and
              Industry (MITI)</strong> oversees export licensing and issues
              Certificates of Origin for FTA tariff claims. The{" "}
              <strong className="text-neutral-900">Royal Malaysian Customs Department (RMCD)</strong> handles
              export customs declarations and HS code validation.
            </p>
            <p>
              Exporters must satisfy requirements on both sides. Japan Customs
              verifies documentation and product classification at the port of
              entry, while MHLW quarantine stations may inspect food products
              before release. Failure at either checkpoint delays the entire
              shipment.
            </p>
          </div>
        </section>

        {/* Key Terms */}
        <section className="border-t border-neutral-200 pt-10">
          <h2 className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-6">
            Key Export Terms
          </h2>
          <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 max-w-3xl">
            {EXPORT_TERMS.map((t) => (
              <div key={t.term}>
                <dt className="text-sm font-semibold text-neutral-900">{t.term}</dt>
                <dd className="text-xs text-neutral-500 leading-relaxed mt-0.5">
                  {t.description}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        {/* H — Coverage Map */}
        <section className="border-t border-neutral-200 pt-10">
          <h2 className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-2">
            Coverage Map
          </h2>
          <p className="text-xs text-neutral-400 mb-6">
            Common search topics this page addresses.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xs font-semibold tracking-wide text-neutral-500 uppercase mb-3">
                Main Keywords
              </h3>
              <ul className="space-y-2">
                {siteConfig.mainKeywords.map((kw) => (
                  <li key={kw} className="text-sm text-neutral-800 font-medium">
                    {kw}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold tracking-wide text-neutral-500 uppercase mb-3">
                Supporting Keywords
              </h3>
              <ul className="space-y-1">
                {siteConfig.supportingKeywords.map((kw) => (
                  <li key={kw} className="text-sm text-neutral-600">
                    {kw}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold tracking-wide text-neutral-500 uppercase mb-3">
                Long-tail Keywords
              </h3>
              <ul className="space-y-1">
                {siteConfig.longTailKeywords.slice(0, 6).map((kw) => (
                  <li key={kw} className="text-sm text-neutral-500">
                    {kw}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* I — FAQ Preview */}
        <section className="border-t border-neutral-200 pt-10">
          <h2 className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-6">
            Common Questions
          </h2>
          <dl className="divide-y divide-neutral-200 max-w-3xl">
            {FAQ_PREVIEW.map((item) => (
              <div key={item.question} className="py-6">
                <dt className="text-sm font-semibold text-neutral-900 mb-2">
                  {item.question}
                </dt>
                <dd className="text-sm text-neutral-600 leading-relaxed">
                  {item.answer}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Internal navigation */}
        <section className="border-t border-neutral-200 pt-10">
          <div className="flex flex-wrap gap-6 text-sm">
            <Link
              to="/faq"
              className="text-neutral-700 underline underline-offset-2 hover:text-neutral-900"
            >
              View all export to Japan FAQ →
            </Link>
            <Link
              to="/about"
              className="text-neutral-700 underline underline-offset-2 hover:text-neutral-900"
            >
              About our approach →
            </Link>
            <a
              href={siteConfig.hubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-700 underline underline-offset-2 hover:text-neutral-900"
            >
              Japan Market Hub →
            </a>
          </div>
        </section>

        {/* J — Final CTA */}
        <section className="border-t border-neutral-200 pt-10">
          <div className="max-w-xl">
            <p className="text-sm text-neutral-600 leading-relaxed mb-6">
              If you are preparing to export to Japan, start with a structured
              readiness review.
            </p>
            <CTA />
          </div>
        </section>

      </main>
    </>
  );
}
