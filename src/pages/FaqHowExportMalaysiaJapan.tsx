import { Link } from "react-router-dom";
import SEOHead from "../components/SEOHead";
import FaqAnswerShell from "../components/FaqAnswerShell";
import { faqAnswerPath } from "../lib/faqRoutes";

const PATH = "/faq/how-do-i-export-from-malaysia-to-japan";

export default function FaqHowExportMalaysiaJapan() {
  const title =
    "How Do I Export from Malaysia to Japan? — Process & Readiness | NeoiDigital";
  const description =
    "Plain-language overview of exporting from Malaysia to Japan: typical process order, readiness checks, category and compliance awareness, common mistakes, and where to go next. Not legal advice.";

  return (
    <>
      <SEOHead path={PATH} title={title} description={description} />

      <FaqAnswerShell
        question="How Do I Export from Malaysia to Japan?"
        showCta
      >
        <p>
          You export from Malaysia to Japan by lining up{" "}
          <strong className="text-neutral-800">product classification</strong>,{" "}
          <strong className="text-neutral-800">Japan-side import rules for your
          category</strong>, <strong className="text-neutral-800">correct
          documentation and labelling</strong>, a{" "}
          <strong className="text-neutral-800">confirmed importer of record</strong>
          , and only then <strong className="text-neutral-800">shipment and
          customs clearance</strong>. This page is practical orientation only —
          it is not legal, tax, or customs advice; always verify requirements
          with qualified advisers and official sources for your product.
        </p>

        <h2 className="text-base font-semibold text-neutral-900 pt-2">
          General export process (typical order)
        </h2>
        <p>
          Most teams work in this sequence: confirm the right HS code and product
          category for Japan; map which regulations and notifications apply;
          adapt labels to Japanese rules where required; align invoices, packing
          lists, and certificates (including origin if you intend to use
          Malaysia–Japan preferential tariffs); confirm who imports and lists the
          product in Japan; then plan logistics and first shipment. Skipping
          steps or reversing order usually causes delays, extra cost, or
          distributor rejection — not because of malice, but because Japan-side
          buyers and customs expect the chain to be complete before goods move.
        </p>

        <h2 className="text-base font-semibold text-neutral-900 pt-2">
          Readiness before you spend on channels
        </h2>
        <p>
          Readiness means knowing whether your pricing, certifications, MOQs,
          and lead times are credible for Japan, and whether your labels and
          claims match what distributors and retailers need. A structured
          readiness check surfaces gaps (e.g. missing Japanese label copy,
          unclear importer, or FTA eligibility not verified) before you invest in
          trade shows or outreach. That keeps your first conversations with
          Japan partners credible.
        </p>

        <h2 className="text-base font-semibold text-neutral-900 pt-2">
          Category and compliance awareness
        </h2>
        <p>
          Requirements differ sharply by category: food, supplements, cosmetics,
          and industrial goods each follow different authorities and rules in
          Japan. Labelling language, additives, and import notifications are
          common focus areas for consumer products. Treat compliance as
          category-specific — what works for one SKU may not transfer to another
          line. When in doubt, scope the category first, then the documents and
          labels, not the other way around.
        </p>

        <h2 className="text-base font-semibold text-neutral-900 pt-2">
          Common mistakes
        </h2>
        <ul className="list-disc pl-5 space-y-1 text-neutral-600">
          <li>Shipping before an importer of record and label strategy are settled.</li>
          <li>Assuming Malaysia–Japan FTA benefits without checking rules of origin and certificates.</li>
          <li>Using English-only or export-market labels where Japanese consumer labels are required.</li>
          <li>HS misclassification leading to wrong duty expectations or clearance friction.</li>
          <li>Leading with marketing spend before product and documentation fit is confirmed.</li>
        </ul>

        <h2 className="text-base font-semibold text-neutral-900 pt-2">
          Related questions
        </h2>
        <ul className="space-y-2">
          <li>
            <Link
              to={faqAnswerPath("key-steps-export-malaysia-to-japan")}
              className="text-neutral-800 underline underline-offset-2 hover:text-neutral-950"
            >
              What are the key steps to export from Malaysia to Japan?
            </Link>
          </li>
          <li>
            <Link
              to={faqAnswerPath("documents-for-japan-import")}
              className="text-neutral-800 underline underline-offset-2 hover:text-neutral-950"
            >
              What documents are required for Japan import?
            </Link>
          </li>
          <li>
            <Link
              to={faqAnswerPath("export-readiness-assessment-contents")}
              className="text-neutral-800 underline underline-offset-2 hover:text-neutral-950"
            >
              What is included in an export readiness assessment?
            </Link>
          </li>
          <li>
            <Link
              to={faqAnswerPath("common-export-compliance-mistakes")}
              className="text-neutral-800 underline underline-offset-2 hover:text-neutral-950"
            >
              What are common export compliance mistakes?
            </Link>
          </li>
        </ul>
      </FaqAnswerShell>
    </>
  );
}
