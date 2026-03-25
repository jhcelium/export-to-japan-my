import { siteConfig } from "../content/site.config";

/**
 * URL slugs for FAQ answer assets — order must match siteConfig.faq indices
 * for the active export-to-japan preset.
 */
export const FAQ_ANSWER_SLUGS = [
  "key-steps-export-malaysia-to-japan",
  "documents-for-japan-import",
  "japan-label-compliance",
  "malaysia-japan-fta-tariffs",
  "halal-supermarket-entry-japan",
  "common-export-compliance-mistakes",
  "export-preparation-timeline",
  "export-readiness-assessment-contents",
] as const;

export type FaqAnswerSlug = (typeof FAQ_ANSWER_SLUGS)[number];

if (import.meta.env.DEV && siteConfig.faq.length !== FAQ_ANSWER_SLUGS.length) {
  console.warn(
    "[faqRoutes] siteConfig.faq length does not match FAQ_ANSWER_SLUGS — update slugs or config.",
  );
}

export function answerPreview(answer: string, maxLen = 160): string {
  const t = answer.trim();
  if (t.length <= maxLen) return t;
  const cut = t.slice(0, maxLen);
  const lastSpace = cut.lastIndexOf(" ");
  const base = lastSpace > 60 ? cut.slice(0, lastSpace) : cut;
  return `${base.trim()}…`;
}

export function getFaqAnswerBySlug(slug: string): {
  slug: FaqAnswerSlug;
  index: number;
  question: string;
  answer: string;
  preview: string;
} | null {
  const i = (FAQ_ANSWER_SLUGS as readonly string[]).indexOf(slug);
  if (i < 0) return null;
  const item = siteConfig.faq[i];
  if (!item) return null;
  return {
    slug: slug as FaqAnswerSlug,
    index: i,
    question: item.question,
    answer: item.answer,
    preview: answerPreview(item.answer),
  };
}

export function faqAnswerPath(slug: FaqAnswerSlug): string {
  return `/faq/${slug}`;
}
