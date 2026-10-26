import { notFound } from "next/navigation";
import { ArrowRight, Check, GraduationCap } from "lucide-react";
import { destinationPages, getDestination } from "../content";
import { Footer } from "../components/footer";
import { ZohoContactForm } from "../components/zoho-contact-form";
import { Navigation } from "../components/navigation";
export function generateStaticParams() {
  return destinationPages.map(({ slug }) => ({
    slug,
  }));
}
export default async function Destination({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}) {
  const { slug } = await params;
  const page = getDestination(slug);
  if (!page) notFound();
  return (
    <main>
      <Navigation />
      <section className="landing-hero section-pad">
        <div className="orb orb-one" />
        <div className="shell landing-grid">
          <div className="landing-copy reveal">
            <p className="eyebrow">{page.kicker}</p>
            <h1>{page.title}</h1>
            <p className="lede">{page.heroText}</p>
            <ul className="benefit-list">
              {page.bullets.map((item) => (
                <li key={item}>
                  <Check size={18} />
                  {item}
                </li>
              ))}
            </ul>
            <a className="text-link" href="#enquire">
              Start your enquiry <ArrowRight size={16} />
            </a>
          </div>
          <div id="enquire" className="glass form-wrap reveal">
            <ZohoContactForm />
          </div>
        </div>
      </section>
      <section className="section-pad strategy-offer">
        <div className="shell strategy-offer-grid">
          <div>
            <p className="eyebrow">Your first clear step</p>
            <h2>Get a free profile evaluation</h2>
            <p>
              Receive practical guidance for your academic background, preferred
              course and intake.
            </p>
          </div>
          <div className="strategy-deliverables">
            <article>
              <strong>01</strong>
              <h3>Profile fit</h3>
              <p>
                Review your background, test status, preferred course and
                intake.
              </p>
            </article>
            <article>
              <strong>02</strong>
              <h3>Initial shortlist</h3>
              <p>
                Identify institution or programme types suited to your profile.
              </p>
            </article>
            <article>
              <strong>03</strong>
              <h3>Cost view</h3>
              <p>
                Understand indicative tuition, living costs and financing
                requirements.
              </p>
            </article>
            <article>
              <strong>04</strong>
              <h3>Next-step plan</h3>
              <p>See deadlines, missing documents and recommended actions.</p>
            </article>
          </div>
          <a className="button button-primary" href="#enquire">
            Get my free profile evaluation <ArrowRight size={17} />
          </a>
        </div>
      </section>
      <section className="section-pad">
        <div className="shell content-narrow reveal">
          <p className="eyebrow">One Window guidance</p>
          <h2>A supported study journey</h2>
          <p>
            With technology and expert guidance, we handle the complexities so
            you can focus on achieving your academic and career goals.
          </p>
          <div className="three-up">
            <article>
              <GraduationCap />
              <h3>Course and university fit</h3>
              <p>
                Start with your academic profile, interests and career goals.
              </p>
            </article>
            <article>
              <Check />
              <h3>Application support</h3>
              <p>
                Get help preparing and managing the steps in your application.
              </p>
            </article>
            <article>
              <ArrowRight />
              <h3>Clear next steps</h3>
              <p>
                Understand what to do next, with guidance from a student
                advisor.
              </p>
            </article>
          </div>
          {page.status === "content-pending" && (
            <p className="content-status">
              Institution- or programme-specific details will be added after
              source verification. No unverified claims are shown in this build.
            </p>
          )}
        </div>
      </section>
      <section className="section-pad tinted">
        <div className="shell final-form-grid reveal">
          <div>
            <p className="eyebrow">Ready to take the next step?</p>
            <h2>Speak to a student advisor.</h2>
            <p>
              Tell us what you’re considering and we’ll help you plan a clearer
              route forward.
            </p>
          </div>
          <a className="button button-primary" href="#enquire">
            Enquire now <ArrowRight size={17} />
          </a>
        </div>
      </section>
      <Footer />
    </main>
  );
}
