import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Navigation } from "./components/navigation";
import { Footer } from "./components/footer";
export function ReferencePage({
  eyebrow,
  title,
  intro,
  items,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  items: Array<[string, string]>;
}) {
  return (
    <main>
      <Navigation />
      <section className="institution-hero">
        <div className="shell content-narrow">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="institution-intro">{intro}</p>
          <Link className="button button-primary" href="/#consultation">
            Talk to One Window <ArrowRight size={17} />
          </Link>
        </div>
      </section>
      <section className="section-pad institution-section">
        <div className="shell">
          <div className="institution-card-grid">
            {items.map(([heading, text], index) => (
              <article className="institution-card" key={heading}>
                <strong>{String(index + 1).padStart(2, "0")}</strong>
                <h3>{heading}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section-pad tinted">
        <div className="shell final-cta-inner">
          <CheckCircle2 size={34} />
          <div>
            <h2>Start with one conversation.</h2>
            <p>
              Bring your question, and we’ll help you find the right next step.
            </p>
          </div>
          <Link className="button button-primary" href="/#consultation">
            Book free counselling <ArrowRight size={17} />
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
