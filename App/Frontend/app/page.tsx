/* eslint-disable @next/next/no-html-link-for-pages */
import { ArrowRight, Bot, Landmark } from "lucide-react";
import { CountryOrbit } from "./components/country-orbit";
import { ZohoContactForm } from "./components/zoho-contact-form";
import { Footer } from "./components/footer";
import { Navigation } from "./components/navigation";
import { StudentTestimonials } from "./components/student-testimonials";
import { articles } from "./blog/blog";
import { consultants, proof, services, steps } from "./home/content";
export default function Home() {
  return (
    <main>
      {/* Primary Navigation and Hero */}
      <Navigation />
      <a
        className="ai-float"
        href="/countries"
        aria-label="Open AI Course Finder"
      >
        <i className="ai-signal" aria-hidden="true" />
        <Bot size={17} />
        <span>AI Course Finder</span>
        <ArrowRight size={15} />
      </a>
      <CountryOrbit />

      {/* Consultant-led guidance */}
      <section className="section-pad consultant-home-section">
        <div className="shell consultant-home-grid">
          <div className="consultant-home-copy reveal">
            <p className="eyebrow">Meet our consultants</p>
            <h2>Your personal study abroad team.</h2>
            <p>
              From course clarity to university selection, get thoughtful guidance
              that keeps your goals and the details in view.
            </p>
            <a className="button button-secondary" href="/about/consultants">
              Meet the full team <ArrowRight size={17} />
            </a>
          </div>
          <div className="consultant-home-cards">
            {consultants.map(([initials, name, role, note]) => (
              <article className="consultant-home-card glass reveal" key={name}>
                <div className="consultant-avatar" aria-hidden="true">{initials}</div>
                <h3>{name}</h3>
                <p className="consultant-role">{role}</p>
                <p>{note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Trust and Accreditation */}
      <section className="strategy-proof">
        <div className="shell strategy-proof-grid">
          {proof.map(([value, label]) => (
            <div className="strategy-proof-item" key={value}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>
      <section
        className="section-pad accreditation-section"
        aria-labelledby="accreditation-heading"
      >
        <div className="shell">
          <div className="section-heading accreditation-heading reveal">
            <p className="eyebrow">Trusted across the world</p>
            <h2 id="accreditation-heading">Accreditations &amp; memberships</h2>
          </div>
          <div className="accreditation-grid reveal">
            <div className="accreditation-card">
              <img src="/OW%20web%20Accredations/AIRC.png" alt="AIRC" />
            </div>
            <div className="accreditation-card">
              <img src="/OW%20web%20Accredations/ICEF.png" alt="ICEF" />
            </div>
            <div className="accreditation-core">
              <img
                src="/OW%20web%20Accredations/17%20Years.png"
                alt="17 years"
              />
            </div>
            <div className="accreditation-card">
              <img src="/OW%20web%20Accredations/NAFSA.png" alt="NAFSA" />
            </div>
            <div className="accreditation-card">
              <img
                src="/OW%20web%20Accredations/USA%20Study%20Destination.png"
                alt="USA Study Destination"
              />
            </div>
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
                A realistic review of your background, test status, course and
                intake.
              </p>
            </article>
            <article>
              <strong>02</strong>
              <h3>Initial shortlist</h3>
              <p>
                A starting group of institutions or programme types suited to
                your profile.
              </p>
            </article>
            <article>
              <strong>03</strong>
              <h3>Cost view</h3>
              <p>
                An indicative view of tuition, living costs and financing
                requirements.
              </p>
            </article>
            <article>
              <strong>04</strong>
              <h3>Next-step plan</h3>
              <p>
                Deadlines, missing documents and recommended actions for your
                next move.
              </p>
            </article>
          </div>
          <a className="button button-primary" href="#consultation">
            Get my free profile evaluation <ArrowRight size={17} />
          </a>
        </div>
      </section>
      {/* Counselling Form */}
      <section id="consultation" className="section-pad consultation-section">
        <div className="shell split-panel glass reveal">
          <div>
            <p className="eyebrow">Not sure where to begin?</p>
            <h2>Free counselling for you</h2>
            <p>
              At One Window, our competent counselors can help make your dreams
              of studying abroad come true. For free counseling speak to us
              today to sort all your worries about doing undergraduate,
              postgraduate, Ph.D., and MBA courses to most parts of the world.
            </p>
            <ul className="check-list">
              <li>Discuss your goals with a student advisor</li>
              <li>Understand suitable destinations and courses</li>
              <li>Plan the next clear step in your journey</li>
            </ul>
          </div>
          <ZohoContactForm />
        </div>
      </section>
      {/* Services and Course Discovery */}
      <section className="section-pad tinted">
        <div className="shell">
          <div className="section-heading reveal">
            <p className="eyebrow">Powerful academic solutions</p>
            <h2>From vision to victory</h2>
            <p>
              Personalised guidance from early planning to enrolment, shaped
              around your strengths, goals and best-fit opportunities.
            </p>
          </div>
          <div className="service-grid">
            {services.map(([title, text], i) => (
              <article className="service-card reveal" key={title}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section-pad">
        <div className="shell platform-grid reveal">
          <div className="platform-visual">
            <div className="platform-window">
              <span className="window-dot" />
              <span className="window-dot" />
              <span className="window-dot" />
              <div className="search-line">
                Find the course that fits your future
              </div>
              <div className="result-lines">
                <i />
                <i />
                <i />
              </div>
            </div>
          </div>
          <div>
            <p className="eyebrow">
              <Bot size={15} /> CampusRoot AI Course Finder
            </p>
            <h2>Make a confident shortlist</h2>
            <p>
              Explore programmes with a clearer view of academic fit, entry
              requirements and career direction, then refine your shortlist
              with an experienced advisor.
            </p>
            <a
              className="button button-primary"
              href="/countries"
            >
              Open AI Course Finder <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>
      {/* Student Journey and Proof */}
      <section className="section-pad process-section">
        <div className="shell">
          <div className="section-heading light reveal">
            <p className="eyebrow">Empowering your study abroad journey</p>
            <h2>Expert support through every admissions decision</h2>
            <p>
              A structured, one-to-one process helps you make informed choices,
              submit stronger applications and move forward with confidence.
            </p>
          </div>
          <div className="steps-grid">
            {steps.map(([number, title, text]) => (
              <article className="step-card reveal" key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section-pad">
        <div className="shell">
          <div className="section-heading reveal">
            <p className="eyebrow">Our success story</p>
            <h2>Why Us?</h2>
          </div>
          <div className="proof-grid">
            {proof.map(([value, label]) => (
              <div className="proof-card glass reveal" key={value}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Supporting Resources */}
      <section className="section-pad homepage-proof">
        <div className="shell">
          <div className="section-heading reveal">
            <p className="eyebrow">Find your next step</p>
            <h2>Useful direction, before the big decision.</h2>
          </div>
          <div className="homepage-proof-grid">
            <a href="/countries">
              <strong>Countries</strong>
              <span>
                Compare destinations and start with the place that fits your
                plans.
              </span>
              <ArrowRight size={18} />
            </a>
            <a href="/countries">
              <strong>Course finder</strong>
              <span>
                Use AI-supported discovery to shape a practical shortlist.
              </span>
              <ArrowRight size={18} />
            </a>
            <a href="/student-stories">
              <strong>Student stories</strong>
              <span>
                See the journeys of students who have taken their next step.
              </span>
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
      <section className="section-pad homepage-testimonials">
        <div className="shell">
          <div className="section-heading reveal">
            <p className="eyebrow">Student voices</p>
            <h2>Guidance that feels personal.</h2>
          </div>
          <StudentTestimonials />
        </div>
      </section>
      <section className="section-pad homepage-journal">
        <div className="shell">
          <div className="section-heading reveal">
            <p className="eyebrow">From the journal</p>
            <h2>Ideas for your next move.</h2>
          </div>
          <div className="journal-grid">
            {articles.slice(0, 3).map((article) => (
              <a
                className="journal-card glass reveal"
                href={`/blog/${article.slug}`}
                key={article.slug}
              >
                <div className="journal-image" />
                <span>{article.tag}</span>
                <h3>{article.title}</h3>
                <ArrowRight size={18} />
              </a>
            ))}
          </div>
        </div>
      </section>
      {/* Final Conversion */}
      <section className="section-pad final-cta">
        <div className="shell final-cta-inner reveal">
          <Landmark size={34} />
          <div>
            <h2>Start with one conversation.</h2>
            <p>Get tailored advice for your study abroad plans.</p>
          </div>
          <a className="button button-light" href="#consultation">
            Book free counselling <ArrowRight size={17} />
          </a>
        </div>
      </section>
      <section className="section-pad careers-home-cta">
        <div className="shell careers-home-cta-inner glass reveal">
          <div>
            <p className="eyebrow">Careers</p>
            <h2>Make the next move matter.</h2>
            <p>Help students turn ambitious plans into clear next steps.</p>
          </div>
          <a className="button button-primary" href="/careers">
            View careers <ArrowRight size={17} />
          </a>
        </div>
      </section>
      <Footer />
    </main>
  );
}
