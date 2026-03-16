import { Link } from "react-router-dom";
import SEOHead from "../components/SEOHead";
import CTA from "../components/CTA";
import { siteConfig } from "../content/site.config";
import { definedTermSetJsonLd } from "../lib/seo";

const WHAT_SUPPORT_COVERS = [
  {
    heading: "Regulatory fit",
    body: "Confirming that your product can legally enter Japan — by category, classification, and import notification requirements — before any distributor approach or shipment is planned.",
  },
  {
    heading: "Labelling compliance",
    body: "Reviewing label content against Japan's Food Labelling Standards Act or relevant category regulations. Labels must be in Japanese and meet specific structural requirements. This is not a cosmetic step — non-compliant labels block customs clearance.",
  },
  {
    heading: "Product category assessment",
    body: "Evaluating whether your product's category, price point, and certification profile are viable in Japan's market at this stage. Some categories require longer preparation or specific certifications before distributor engagement is productive.",
  },
  {
    heading: "Channel fit review",
    body: "Identifying the right distribution path — whether direct importer, category distributor, or retail buyer introduction. Misaligned channel approaches waste time and damage credibility with the correct distribution partner.",
  },
];

const DELIVERABLES = [
  {
    title: "Export Readiness Assessment",
    body: "Structured review of your product's commercial fit for Japan — covering regulatory requirements, pricing, certification gaps, labelling compliance, and category timing.",
  },
  {
    title: "Distributor Selection Report",
    body: "A shortlist of 3–5 qualified Japan-side distribution candidates, pre-screened for category fit, market coverage, and willingness to engage.",
  },
  {
    title: "Trade Show Preparation & Follow-up",
    body: "Pre-show briefing on relevant buyer and distributor profiles, on-the-ground support during show days, and post-show contact follow-up.",
  },
  {
    title: "On-the-ground Coordination",
    body: "Japan-based coordinator available for distributor meetings, relationship maintenance, material delivery, and structured activity reporting.",
  },
];

const ABOUT_TERMS = [
  { term: "Regulatory Fit", description: "Assessment of whether a product meets Japan's import regulations by category, including food safety, cosmetics, and industrial standards." },
  { term: "Labelling Compliance", description: "Verification that product labels meet Japanese law — ingredient lists, allergen callouts, best-before dates, and net weight, all in Japanese." },
  { term: "Channel Fit", description: "Matching the product to the correct Japan distribution path: direct importer, category distributor, or retail buyer introduction." },
  { term: "Export Readiness Assessment", description: "A structured pre-export review covering regulatory, pricing, certification, labelling, and distributor-readiness gaps." },
];

const aboutTermsSchema = definedTermSetJsonLd(
  "Export Support Terminology",
  ABOUT_TERMS,
);

export default function About() {
  const title = "About — Export Support from Malaysia to Japan | NeoiDigital";
  const description =
    "NeoiDigital provides export support for companies entering Japan from Malaysia. We cover regulatory fit, labelling compliance, product category assessment, and distributor channel readiness — not only logistics.";

  return (
    <>
      <SEOHead
        path="/about"
        title={title}
        description={description}
        extraJsonLd={[aboutTermsSchema]}
      />

      <main className="max-w-5xl mx-auto px-6 py-16 space-y-16">

        {/* Page header */}
        <section className="max-w-2xl">
          <p className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-4">
            About
          </p>
          <h1 className="text-3xl font-semibold text-neutral-900 leading-tight mb-4">
            Export Support from Malaysia to Japan
          </h1>
          <p data-speakable="lead" className="text-base text-neutral-600 leading-relaxed">
            {siteConfig.primaryIntent}
          </p>
        </section>

        {/* What export support actually covers */}
        <section className="border-t border-neutral-200 pt-10">
          <h2 className="text-xl font-semibold text-neutral-900 mb-4">
            What Export Support Actually Covers
          </h2>
          <div className="max-w-3xl space-y-4 text-sm text-neutral-600 leading-relaxed mb-8">
            <p>
              Export support is not the same as freight forwarding or logistics
              coordination. A shipment can be physically delivered to Japan and
              still fail — because the label was not compliant, the distributor
              was not qualified, the product category required pre-approval, or
              the importer of record was not confirmed before goods were
              dispatched.
            </p>
            <p>
              Effective export support addresses the preparation work that
              determines whether a product can be sold in Japan, not only whether
              it can be shipped there.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
            {WHAT_SUPPORT_COVERS.map((item) => (
              <div key={item.heading} className="border-l-2 border-neutral-900 pl-4">
                <h3 className="text-sm font-semibold text-neutral-900 mb-1">
                  {item.heading}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Who we help */}
        <section className="border-t border-neutral-200 pt-10">
          <h2 className="text-xl font-semibold text-neutral-900 mb-6">
            Who We Help
          </h2>
          <div className="max-w-2xl space-y-4 text-sm text-neutral-700 leading-relaxed">
            <p>
              We work with Malaysian SMEs and exporters who are evaluating Japan
              as a target market or have already decided to enter and need
              structured support.
            </p>
            <p>
              Our typical clients are manufacturers, food producers, health and
              wellness brands, and industrial suppliers who have a product ready
              for export but lack Japan-specific knowledge and local contacts.
            </p>
            <p>
              We also work with ASEAN-based companies seeking the Malaysia–Japan
              trade corridor as their first developed-market entry.
            </p>
          </div>
        </section>

        {/* What we deliver */}
        <section className="border-t border-neutral-200 pt-10">
          <h2 className="text-xl font-semibold text-neutral-900 mb-6">
            What We Deliver
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {DELIVERABLES.map((item) => (
              <div key={item.title} className="border border-neutral-200 p-5">
                <h3 className="text-sm font-semibold text-neutral-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Where we operate */}
        {siteConfig.localPresence && (
          <section className="border-t border-neutral-200 pt-10">
            <h2 className="text-xl font-semibold text-neutral-900 mb-6">
              Where We Operate
            </h2>
            <div className="max-w-2xl space-y-4 text-sm text-neutral-700 leading-relaxed">
              <p>
                Our Japan-side coordinator is based in{" "}
                <strong className="text-neutral-900">Osaka, Japan</strong> — a
                central commercial hub with direct access to Tokyo, Nagoya, and
                key B2B trade channels across western Japan.
              </p>
              <p>
                Osaka provides practical access to Japan's distribution networks
                and serves as a base for meeting distributors, attending trade
                shows, and maintaining ongoing relationships without requiring
                our clients to relocate or establish a Japan entity.
              </p>
              <p>
                Our Malaysia-side coordination is conducted remotely, with
                structured reporting back to your team after each Japan-side
                engagement.
              </p>
            </div>
          </section>
        )}

        {/* Hub link */}
        <section className="border-t border-neutral-200 pt-10">
          <h2 className="text-xl font-semibold text-neutral-900 mb-4">
            Part of NeoiDigital Japan Market Hub
          </h2>
          <p className="text-sm text-neutral-600 mb-5 max-w-xl leading-relaxed">
            This site is part of a broader set of Japan market entry resources
            for Malaysian companies. The hub aggregates tools, guides, and
            consulting pathways across the full export journey.
          </p>
          <a
            href={siteConfig.hubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-neutral-900 text-neutral-900 text-sm px-4 py-2 hover:bg-neutral-900 hover:text-white"
          >
            Visit Japan Market Hub →
          </a>
        </section>

        {/* Internal links */}
        <section className="border-t border-neutral-200 pt-10">
          <div className="flex flex-wrap gap-6 text-sm">
            <Link
              to="/"
              className="text-neutral-700 underline underline-offset-2 hover:text-neutral-900"
            >
              ← Export to Japan overview
            </Link>
            <Link
              to="/faq"
              className="text-neutral-700 underline underline-offset-2 hover:text-neutral-900"
            >
              Common export questions →
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-neutral-200 pt-10">
          <div className="max-w-xl">
            <h2 className="text-xl font-semibold text-neutral-900 mb-3">
              Start with a direct conversation.
            </h2>
            <p className="text-sm text-neutral-500 mb-6 leading-relaxed">
              We review your product and situation before recommending any
              specific service. Tell us what you are working with.
            </p>
            <CTA />
          </div>
        </section>

      </main>
    </>
  );
}
