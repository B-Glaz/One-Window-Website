"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  BookOpen,
  BriefcaseBusiness,
  CheckCircle2,
  CircleDollarSign,
  GraduationCap,
  Landmark,
  Phone,
  ShieldCheck,
  X,
} from "lucide-react";
import { Navigation } from "../../components/navigation";
import { Footer } from "../../components/footer";
import { ZohoContactForm } from "../../components/zoho-contact-form";
import { usaLandingContent as content } from "./content";
import styles from "./usa-landing.module.css";

const sectionIcons = [GraduationCap, BookOpen, Landmark];

function SectionHeading({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
}) {
  return (
    <div className={styles.sectionHeading}>
      <p>{eyebrow}</p>
      <h2>{title}</h2>
      {copy ? <div>{copy}</div> : null}
    </div>
  );
}

export function UsaLandingPage() {
  const [formOpen, setFormOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("overview");

  useEffect(() => {
    if (!formOpen) return;
    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setFormOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [formOpen]);

  useEffect(() => {
    const sections = content.navigation
      .map(([, id]) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-22% 0px -68%", threshold: 0 },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <main className={styles.page}>
      <Navigation />

      {/* HERO: Edit hero copy and image in content.ts. */}
      <section className={styles.hero}>
        <div className={styles.canvas}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>{content.hero.eyebrow}</p>
            <h1>{content.hero.title}</h1>
            <p className={styles.heroDescription}>{content.hero.description}</p>
            <div className={styles.heroActions}>
              <button className={styles.primaryButton} onClick={() => setFormOpen(true)} type="button">
                {content.hero.primaryCta} <ArrowRight size={17} />
              </button>
              <a className={styles.phoneLink} href={content.phone.href}>
                <Phone size={16} /> {content.hero.secondaryCta}
              </a>
            </div>
            <div className={styles.heroProof} aria-label="What One Window can help with">
              {content.hero.proofPoints.map((point) => (
                <span key={point}><CheckCircle2 size={16} />{point}</span>
              ))}
            </div>
          </div>
          <div className={styles.heroMedia}>
            <Image
              alt={content.hero.imageAlt}
              fill
              priority
              sizes="(max-width: 720px) calc(100vw - 32px), (max-width: 1200px) calc(100vw - 72px), 1120px"
              src={content.hero.image}
              unoptimized
            />
            <div className={styles.heroBadge}>
              <span>One clear plan</span>
              <strong>Shortlist · Applications · Visa</strong>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION NAVIGATION: Labels and destinations are editable in content.ts. */}
      <nav className={styles.sectionNav} aria-label="USA study guide sections">
        <div>
          {content.navigation.map(([label, id]) => (
            <a
              aria-current={activeSection === id ? "location" : undefined}
              data-active={activeSection === id ? "true" : undefined}
              href={`#${id}`}
              key={id}
            >
              {label}
            </a>
          ))}
        </div>
      </nav>

      {/* OVERVIEW */}
      <section className={styles.section} id="overview">
        <div className={styles.container}>
          <div className={styles.introGrid}>
            <SectionHeading
              eyebrow="Why the USA"
              title="Room to explore. Structure to move forward."
              copy="The U.S. system offers a wide range of institutions and study formats. The opportunity is valuable, but only when your choices are grounded in fit, cost and a realistic admissions plan."
            />
            <div className={styles.introStatement}>
              <strong>One Window helps you turn a large set of options into a focused shortlist based on evidence.</strong>
              <button onClick={() => setFormOpen(true)} type="button">Discuss your profile <ArrowRight size={16} /></button>
            </div>
          </div>
          <div className={styles.highlightGrid}>
            {content.highlights.map(([title, text], index) => {
              const Icon = sectionIcons[index];
              return (
                <article key={title}>
                  <Icon size={22} />
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              );
            })}
          </div>
          <div className={styles.reasonGrid}>
            {content.reasons.map(([title, text]) => (
              <article key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* UNIVERSITIES AND COURSES */}
      <section className={`${styles.section} ${styles.softSection}`} id="universities">
        <div className={styles.container}>
          <SectionHeading
            eyebrow="Universities & courses"
            title="Find the kind of institution where you can do your best work."
            copy={content.universities.intro}
          />
          <div className={styles.universityLayout}>
            <div className={styles.typeGrid}>
              {content.universities.types.map(([title, text]) => (
                <article key={title}>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
            <aside className={styles.fieldPanel}>
              <span>Popular fields to explore</span>
              <div>
                {content.universities.fields.map((field) => <i key={field}>{field}</i>)}
              </div>
              <button onClick={() => setFormOpen(true)} type="button">Find universities that fit your goals <ArrowRight size={16} /></button>
            </aside>
          </div>
        </div>
      </section>

      {/* ELIGIBILITY */}
      <section className={styles.section} id="eligibility">
        <div className={styles.container}>
          <SectionHeading
            eyebrow="Eligibility"
            title="Requirements vary by programme. Prepare the common building blocks early."
            copy="Always verify the official international admissions page for each programme. Test policies, score expectations and document formats can change by university and intake."
          />
          <div className={styles.eligibilityGrid}>
            {content.eligibility.map(([title, text], index) => (
              <article key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <aside className={styles.conversionBand}>
            <div>
              <span>{content.conversion.bandEyebrow}</span>
              <h3>{content.conversion.bandTitle}</h3>
            </div>
            <button onClick={() => setFormOpen(true)} type="button">
              {content.conversion.bandCta} <ArrowRight size={17} />
            </button>
          </aside>
        </div>
      </section>

      {/* ADMISSIONS PROCESS */}
      <section className={`${styles.section} ${styles.navySection}`} id="admissions">
        <div className={styles.container}>
          <SectionHeading
            eyebrow="Application process"
            title="A clear sequence makes a complex application manageable."
            copy="Start early, work backwards from each deadline and keep one reliable record of requirements, documents and decisions."
          />
          <div className={styles.timeline}>
            {content.admissions.map(([number, title, text]) => (
              <article key={number}>
                <span>{number}</span>
                <div><h3>{title}</h3><p>{text}</p></div>
              </article>
            ))}
          </div>
          <button className={styles.lightButton} onClick={() => setFormOpen(true)} type="button">
            Get help with your applications <ArrowRight size={17} />
          </button>
        </div>
      </section>

      {/* COSTS */}
      <section className={styles.section} id="cost">
        <div className={styles.container}>
          <SectionHeading
            eyebrow="Cost of study"
            title="Plan the full cost of attendance, not only tuition."
            copy="These figures are planning references, not quotes. Your actual budget depends on institution, programme, location, housing and lifestyle. Use every university’s published cost of attendance before making a decision."
          />
          <div className={styles.costTable} role="table" aria-label="USA study cost planning reference">
            {content.costs.map(([item, figure, note]) => (
              <div role="row" key={item}>
                <strong role="cell">{item}</strong>
                <span role="cell">{figure}</span>
                <p role="cell">{note}</p>
              </div>
            ))}
          </div>
          <div className={styles.sourceNote}>
            <CircleDollarSign size={20} />
            <p>NCES averages describe U.S. institutions broadly. International tuition and individual university budgets can differ significantly.</p>
            <a href={content.sources[2][1]} target="_blank" rel="noreferrer">View NCES source <ArrowRight size={14} /></a>
          </div>
        </div>
      </section>

      {/* SCHOLARSHIPS */}
      <section className={`${styles.section} ${styles.softSection}`} id="scholarships">
        <div className={styles.container}>
          <SectionHeading
            eyebrow="Scholarships & aid"
            title="Build funding research into your shortlist from the start."
            copy="Funding is competitive and often partial. Admission and financial aid requirements may have different documents and deadlines."
          />
          <div className={styles.scholarshipGrid}>
            {content.scholarships.map(([title, text]) => (
              <article key={title}><CheckCircle2 size={20} /><h3>{title}</h3><p>{text}</p></article>
            ))}
          </div>
          <button className={styles.inlineCta} onClick={() => setFormOpen(true)} type="button">Explore scholarship opportunities <ArrowRight size={16} /></button>
        </div>
      </section>

      {/* VISA AND INTAKES */}
      <section className={styles.section} id="visa">
        <div className={styles.container}>
          <div className={styles.visaLayout}>
            <div>
              <SectionHeading
                eyebrow="Student visa"
                title="The F-1 process starts after an eligible university admits you."
                copy="Requirements, fees and appointment availability can change. Follow the U.S. Department of State, your embassy or consulate, SEVP and your university’s Designated School Official."
              />
              <ol className={styles.visaSteps}>
                {content.visaSteps.map((step) => <li key={step}>{step}</li>)}
              </ol>
              <a className={styles.officialLink} href={content.sources[3][1]} target="_blank" rel="noreferrer">
                Check official student visa guidance <ArrowRight size={15} />
              </a>
            </div>
            <aside className={styles.visaCard}>
              <ShieldCheck size={30} />
              <span>Current official reference</span>
              <strong>The listed F/M visa application fee is US$185.</strong>
              <p>Verify the current visa and SEVIS fees before paying. A visa does not guarantee admission at the port of entry.</p>
            </aside>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.intakeSection}`} id="intakes">
        <div className={styles.container}>
          <SectionHeading eyebrow="Intakes & deadlines" title="Choose the intake that matches your preparation, not only the calendar." />
          <div className={styles.intakeGrid}>
            {content.intakes.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </section>

      {/* STUDENT LIFE */}
      <section className={styles.section} id="student-life">
        <div className={`${styles.container} ${styles.lifeLayout}`}>
          <div className={styles.lifeMedia}>
            <Image
              alt={content.life.imageAlt}
              fill
              sizes="(max-width: 980px) calc(100vw - 40px), 50vw"
              src={content.life.image}
              unoptimized
            />
          </div>
          <div>
            <SectionHeading eyebrow="Student life" title="Plan for the experience around the classroom, too." />
            <div className={styles.lifeList}>
              {content.life.items.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}
            </div>
          </div>
        </div>
      </section>

      {/* CAREERS */}
      <section className={`${styles.section} ${styles.careerSection}`} id="careers">
        <div className={styles.container}>
          <SectionHeading
            eyebrow="Career opportunities"
            title="Understand practical training as regulated authorisation, not a job promise."
            copy="Internships and training after graduation depend on your status, programme, timing and authorisation. Speak with the university DSO before accepting work or training."
          />
          <div className={styles.careerGrid}>
            {content.careers.map(([title, text]) => <article key={title}><BriefcaseBusiness size={21} /><h3>{title}</h3><p>{text}</p></article>)}
          </div>
          <a className={styles.officialLink} href={content.sources[4][1]} target="_blank" rel="noreferrer">Read DHS practical training guidance <ArrowRight size={15} /></a>
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.section} id="faqs">
        <div className={`${styles.container} ${styles.faqLayout}`}>
          <SectionHeading eyebrow="FAQs" title="Questions students and families ask before applying." />
          <div className={styles.faqs}>
            {content.faqs.map(([question, answer]) => (
              <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>
            ))}
          </div>
        </div>
      </section>

      {/* CONSULTATION CTA: The shared Zoho form opens in the modal below. */}
      <section className={styles.consultation} id="usa-consultation">
        <div className={`${styles.container} ${styles.consultationGrid}`}>
          <div>
            <p className={styles.eyebrow}>{content.conversion.formEyebrow}</p>
            <h2>{content.conversion.formTitle}</h2>
            <p>{content.conversion.formDescription}</p>
            <ul className={styles.consultationBenefits}>
              {content.conversion.formBenefits.map((benefit) => (
                <li key={benefit}><CheckCircle2 size={18} />{benefit}</li>
              ))}
            </ul>
            <a className={styles.callCard} href={content.phone.href}><Phone size={20} /><span>Prefer to speak now?<strong>{content.phone.display}</strong></span></a>
          </div>
          <aside className={styles.nextSteps}>
            <span>What happens next</span>
            <ol>
              <li><strong>Share your profile</strong><p>Tell us your course, academic background, budget and preferred intake.</p></li>
              <li><strong>Review your options</strong><p>Discuss universities and pathways that make sense for your goals.</p></li>
              <li><strong>Build your action plan</strong><p>Leave with clearer priorities for applications, funding and visa preparation.</p></li>
            </ol>
            <button className={styles.lightButton} onClick={() => setFormOpen(true)} type="button">Start my USA plan <ArrowRight size={17} /></button>
          </aside>
        </div>
      </section>

      <Footer />
      <aside className={styles.mobileConversionBar} aria-label="USA counselling actions">
        <a href={content.phone.href}><Phone size={17} /> Call</a>
        <button onClick={() => setFormOpen(true)} type="button">{content.conversion.mobileCta} <ArrowRight size={16} /></button>
      </aside>
      {formOpen ? (
        <div className={styles.modalBackdrop} onMouseDown={(event) => {
          if (event.target === event.currentTarget) setFormOpen(false);
        }}>
          <section aria-labelledby="usa-form-title" aria-modal="true" className={styles.formModal} role="dialog">
            <div className={styles.modalHeader}>
              <div>
                <span>USA study guidance</span>
                <h2 id="usa-form-title">Tell us about your study plans.</h2>
              </div>
              <button aria-label="Close enquiry form" autoFocus onClick={() => setFormOpen(false)} type="button"><X size={20} /></button>
            </div>
            <ZohoContactForm country="USA" />
          </section>
        </div>
      ) : null}
    </main>
  );
}

