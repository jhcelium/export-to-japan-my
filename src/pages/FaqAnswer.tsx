import { Navigate, useParams } from "react-router-dom";
import SEOHead from "../components/SEOHead";
import FaqAnswerShell from "../components/FaqAnswerShell";
import { getFaqAnswerBySlug } from "../lib/faqRoutes";
import { singleFaqPageJsonLd } from "../lib/seo";

export default function FaqAnswer() {
  const { slug } = useParams<{ slug: string }>();
  const data = slug ? getFaqAnswerBySlug(slug) : null;

  if (!slug || !data) {
    return <Navigate to="/faq" replace />;
  }

  const path = `/faq/${data.slug}`;
  const title = `${data.question} | Export FAQ | NeoiDigital`;
  const description = `${data.preview} Full answer on Malaysia–Japan export requirements, compliance, and readiness.`;

  return (
    <>
      <SEOHead
        path={path}
        title={title}
        description={description}
        extraJsonLd={[singleFaqPageJsonLd(data.question, data.answer)]}
      />

      <FaqAnswerShell question={data.question} showCta>
        <p>{data.answer}</p>
      </FaqAnswerShell>
    </>
  );
}
