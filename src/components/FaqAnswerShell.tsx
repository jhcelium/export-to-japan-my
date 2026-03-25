import { Link } from "react-router-dom";
import CTA from "./CTA";
import { siteConfig } from "../content/site.config";

type Props = {
  question: string;
  children: React.ReactNode;
  showCta?: boolean;
};

/**
 * Reusable layout for FAQ answer pages: breadcrumb, H1, body region, hub + index links.
 */
export default function FaqAnswerShell({
  question,
  children,
  showCta = false,
}: Props) {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16 space-y-10">
      <nav className="text-xs text-neutral-500" aria-label="Breadcrumb">
        <Link to="/" className="hover:text-neutral-900">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link to="/faq" className="hover:text-neutral-900">
          FAQ
        </Link>
        <span className="mx-2">/</span>
        <span className="text-neutral-400">Answer</span>
      </nav>

      <header>
        <p className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-3">
          Export FAQ
        </p>
        <h1 className="text-2xl font-semibold text-neutral-900 leading-tight">
          {question}
        </h1>
      </header>

      <article className="border-t border-neutral-200 pt-8">
        <div
          data-speakable="answer"
          className="text-sm text-neutral-600 leading-relaxed space-y-4"
        >
          {children}
        </div>
      </article>

      <footer className="border-t border-neutral-200 pt-8 space-y-6 text-sm">
        <div className="flex flex-wrap gap-6">
          <Link
            to="/faq"
            className="text-neutral-700 underline underline-offset-2 hover:text-neutral-900"
          >
            ← All FAQ topics
          </Link>
          <Link
            to="/"
            className="text-neutral-700 underline underline-offset-2 hover:text-neutral-900"
          >
            Export overview
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

        {showCta && (
          <div className="pt-4">
            <p className="text-sm text-neutral-500 mb-4 leading-relaxed">
              Need a structured readiness review for your product? Start via the
              hub or the button below.
            </p>
            <CTA />
          </div>
        )}
      </footer>
    </main>
  );
}
