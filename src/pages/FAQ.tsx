import { Link } from "react-router-dom";
import SEOHead from "../components/SEOHead";
import CTA from "../components/CTA";
import { siteConfig } from "../content/site.config";
import {
  FAQ_ANSWER_SLUGS,
  answerPreview,
  faqAnswerPath,
} from "../lib/faqRoutes";

const GROUP_EXPORT_PROCESS = [0, 1, 6, 7];
const GROUP_COMPLIANCE = [2, 5];
const GROUP_HALAL = [4];
const GROUP_FTA = [3];

function FaqHubCard({ index }: { index: number }) {
  const item = siteConfig.faq[index];
  const slug = FAQ_ANSWER_SLUGS[index];
  if (!item || !slug) return null;
  const preview = answerPreview(item.answer, 200);
  return (
    <li className="border border-neutral-200 p-5">
      <h3 className="text-sm font-semibold text-neutral-900 mb-2 leading-snug">
        <Link
          to={faqAnswerPath(slug)}
          className="hover:underline underline-offset-2"
        >
          {item.question}
        </Link>
      </h3>
      <p className="text-xs text-neutral-500 leading-relaxed mb-3">{preview}</p>
      <Link
        to={faqAnswerPath(slug)}
        className="text-xs font-medium text-neutral-700 hover:text-neutral-900"
      >
        Read full answer →
      </Link>
    </li>
  );
}

function FaqHubGroup({
  title,
  intro,
  indices,
}: {
  title: string;
  intro: string;
  indices: number[];
}) {
  return (
    <section className="border-t border-neutral-200 pt-10">
      <h2 className="text-xl font-semibold text-neutral-900 mb-2">{title}</h2>
      <p className="text-sm text-neutral-500 mb-6 leading-relaxed max-w-2xl">
        {intro}
      </p>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {indices.map((i) => (
          <FaqHubCard key={FAQ_ANSWER_SLUGS[i]} index={i} />
        ))}
      </ul>
    </section>
  );
}

export default function FAQ() {
  const title =
    "Export to Japan FAQ Hub — Malaysia Export, Compliance & Readiness | NeoiDigital";
  const description =
    "Practical FAQ hub for exporting from Malaysia to Japan: import documents, labelling, FTA tariffs, halal retail, compliance gaps, timelines, and export readiness — with full answer pages for each topic.";

  return (
    <>
      <SEOHead path="/faq" title={title} description={description} isFaq={true} />

      <main className="max-w-5xl mx-auto px-6 py-16 space-y-12">

        <section className="max-w-3xl">
          <p className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-4">
            FAQ hub
          </p>
          <h1 className="text-3xl font-semibold text-neutral-900 leading-tight mb-4">
            Malaysia → Japan export questions
          </h1>
          <p data-speakable="lead" className="text-base text-neutral-600 leading-relaxed mb-4">
            This hub answers practical questions on the export process,
            compliance and labelling for Japan, tariff positioning under the
            Malaysia–Japan agreement, and export readiness — each topic opens as
            a dedicated answer page you can share or bookmark.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <Link
              to="/"
              className="text-neutral-700 underline underline-offset-2 hover:text-neutral-900"
            >
              ← Home — export overview
            </Link>
            <a
              href={siteConfig.hubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-700 underline underline-offset-2 hover:text-neutral-900"
            >
              NeoiDigital Japan Market Hub →
            </a>
          </div>
        </section>

        <FaqHubGroup
          title="Export process & readiness"
          intro="Steps, paperwork, how long preparation takes, and what a readiness assessment covers."
          indices={GROUP_EXPORT_PROCESS}
        />

        <FaqHubGroup
          title="Compliance & labelling"
          intro="Japan label rules and frequent compliance mistakes that block clearance or distributor acceptance."
          indices={GROUP_COMPLIANCE}
        />

        <FaqHubGroup
          title="Halal & retail channels"
          intro="How halal products from Malaysia reach Japanese supermarkets and specialist channels."
          indices={GROUP_HALAL}
        />

        <FaqHubGroup
          title="FTA & tariffs"
          intro="When preferential tariffs apply, certificates, and common misconceptions — general guidance, not legal advice."
          indices={GROUP_FTA}
        />

        <section className="border-t border-neutral-200 pt-10">
          <div className="max-w-xl">
            <h2 className="text-lg font-semibold text-neutral-900 mb-2">
              Next step
            </h2>
            <p className="text-sm text-neutral-500 mb-5 leading-relaxed">
              If your situation is not covered here, use the hub for qualification
              or request a short export readiness conversation.
            </p>
            <CTA />
          </div>
        </section>
      </main>
    </>
  );
}
