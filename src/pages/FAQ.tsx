import { Link } from "react-router-dom";
import SEOHead from "../components/SEOHead";
import CTA from "../components/CTA";
import { siteConfig } from "../content/site.config";

// Group FAQ items by index from siteConfig.faq (8 questions total):
// 0 — key steps, 1 — documents, 6 — timeline, 7 — readiness assessment
// 2 — labelling compliance, 5 — common mistakes
// 4 — halal supermarkets
// 3 — FTA tariffs

const GROUP_EXPORT_PROCESS = [0, 1, 6, 7];
const GROUP_COMPLIANCE = [2, 5];
const GROUP_HALAL = [4];
const GROUP_FTA = [3];

function FAQGroup({ indices }: { indices: number[] }) {
  return (
    <dl className="divide-y divide-neutral-200">
      {indices.map((i) => {
        const item = siteConfig.faq[i];
        if (!item) return null;
        return (
          <div key={item.question} className="py-6">
            <dt className="text-sm font-semibold text-neutral-900 mb-2">
              {item.question}
            </dt>
            <dd className="text-sm text-neutral-600 leading-relaxed">
              {item.answer}
            </dd>
          </div>
        );
      })}
    </dl>
  );
}

export default function FAQ() {
  const title =
    "Malaysia to Japan Export FAQ — Requirements, Compliance & FTA | NeoiDigital";
  const description =
    "Answers to common questions about exporting from Malaysia to Japan: import requirements, labelling compliance, halal product considerations, and FTA tariff utilisation.";

  return (
    <>
      <SEOHead path="/faq" title={title} description={description} isFaq={true} />

      <main className="max-w-5xl mx-auto px-6 py-16 space-y-16">

        {/* Page header */}
        <section className="max-w-2xl">
          <p className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-4">
            FAQ
          </p>
          <h1 className="text-3xl font-semibold text-neutral-900 leading-tight mb-4">
            Export to Japan: Frequently Asked Questions
          </h1>
          <p className="text-base text-neutral-600 leading-relaxed mb-4">
            Common questions about exporting from Malaysia to Japan — covering
            export requirements, compliance and labelling, halal product
            considerations, and FTA tariff utilisation.
          </p>
          <Link
            to="/"
            className="text-sm text-neutral-500 underline underline-offset-2 hover:text-neutral-900"
          >
            ← Back to export overview
          </Link>
        </section>

        {/* Group 1: Export Requirements & Process */}
        <section className="border-t border-neutral-200 pt-10">
          <h2 className="text-xl font-semibold text-neutral-900 mb-2">
            Export Requirements & Process
          </h2>
          <p className="text-sm text-neutral-500 mb-6 leading-relaxed max-w-2xl">
            Steps, documents, timelines, and readiness assessment for companies
            exporting from Malaysia to Japan.
          </p>
          <FAQGroup indices={GROUP_EXPORT_PROCESS} />
        </section>

        {/* Group 2: Compliance & Labelling */}
        <section className="border-t border-neutral-200 pt-10">
          <h2 className="text-xl font-semibold text-neutral-900 mb-2">
            Compliance & Labelling
          </h2>
          <p className="text-sm text-neutral-500 mb-6 leading-relaxed max-w-2xl">
            Japan's labelling standards and the most common compliance gaps that
            delay clearance or distributor acceptance.
          </p>
          <FAQGroup indices={GROUP_COMPLIANCE} />
        </section>

        {/* Group 3: Halal Products */}
        <section className="border-t border-neutral-200 pt-10">
          <h2 className="text-xl font-semibold text-neutral-900 mb-2">
            Halal Products and Supermarket Entry
          </h2>
          <p className="text-sm text-neutral-500 mb-6 leading-relaxed max-w-2xl">
            How halal-certified Malaysian products enter Japan's retail and
            specialist channels, and what certification recognition looks like
            in practice.
          </p>
          <FAQGroup indices={GROUP_HALAL} />
        </section>

        {/* Group 4: FTA & Tariff */}
        <section className="border-t border-neutral-200 pt-10">
          <h2 className="text-xl font-semibold text-neutral-900 mb-2">
            FTA & Tariff Considerations
          </h2>
          <p className="text-sm text-neutral-500 mb-6 leading-relaxed max-w-2xl">
            How the Malaysia–Japan Economic Partnership Agreement affects tariffs,
            what qualifies, and where assumptions about FTA savings create risk.
          </p>
          <FAQGroup indices={GROUP_FTA} />
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

        {/* CTA */}
        <section className="border-t border-neutral-200 pt-10">
          <div className="max-w-xl">
            <h2 className="text-xl font-semibold text-neutral-900 mb-3">
              Have a question not answered here?
            </h2>
            <p className="text-sm text-neutral-500 mb-6 leading-relaxed">
              Reach out directly. We respond to all enquiries within one business
              day.
            </p>
            <CTA />
          </div>
        </section>

      </main>
    </>
  );
}
