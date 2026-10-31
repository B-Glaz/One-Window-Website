"use client";

import { useEffect, useLayoutEffect, useState } from "react";
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
} from "lucide-react";
import { Navigation } from "../../components/navigation";
import { Footer } from "../../components/footer";
import { ZohoContactForm } from "../../components/zoho-contact-form";
import { ukLandingContent as content } from "./content";
import styles from "./uk-landing.module.css";

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

export function UkLandingPage() {
  const [activeSection, setActiveSection] = useState("overview");
  const [showMobileBar, setShowMobileBar] = useState(false);

  useLayoutEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", "light");
    return () => {
      root.setAttribute("data-theme", localStorage.getItem("ow-theme") === "dark" ? "dark" : "light");
    };
  }, []);

  useEffect(() => {
    const update = () => {
      const hero = document.querySelector<HTMLElement>(`.${styles.hero}`);
      setShowMobileBar(Boolean(hero && hero.getBoundingClientRect().bottom < 80));
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

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
      <Navigation disableThemeToggle counsellingHref="#uk-hero-form" />

      {/* HERO: Edit hero copy and form labels in content.ts. */}
      <section className={styles.hero}>
        <div className={styles.canvas}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>{content.hero.eyebrow}</p>
            <h1>{content.hero.title}</h1>
            <p className={styles.heroDescription}>{content.hero.description}</p>
            <div className={styles.heroActions}>
              <a className={styles.primaryButton} href="#uk-hero-form">
                {content.hero.primaryCta} <ArrowRight size={17} />
              </a>
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
          <div className={styles.heroForm} id="uk-hero-form">
            <p>{content.hero.formEyebrow}</p>
            <h2>{content.hero.formTitle}</h2>
            <ZohoContactForm country="UK" loading="eager" />
          </div>
        </div>
      </section>

      {/* COUNTRY HERO: Keep immediately after the form-first hero. */}
      <section className={styles.countryHero} aria-label="Explore studying in the UK">
        <div className={styles.countryCanvas}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>{content.hero.eyebrow}</p>
            <h2>{content.hero.title}</h2>
            <p className={styles.heroDescription}>{content.hero.description}</p>
            <div className={styles.heroActions}>
              <a className={styles.primaryButton} href="#uk-hero-form">
                {content.hero.primaryCta} <ArrowRight size={17} />
              </a>
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
          <div className={styles.countryMedia}>
            <Image
              alt={content.hero.imageAlt}
              fill
              priority
              sizes="(max-width: 980px) calc(100vw - 32px), 560px"
              src={content.hero.image}
              unoptimized
            />
            <div className={styles.countryBadge}>
              <span>One clear plan</span>
              <strong>Shortlist · Applications · Visa</strong>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION NAVIGATION: Labels and destinations are editable in content.ts. */}
      <nav className={styles.sectionNav} aria-label="UK study guide sections">
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
              eyebrow="Why the UK"
              title="Room to explore. Structure to move forward."
              copy="The UK offers research universities, specialist schools and focused degrees across diverse student cities. Choose courses by academic fit, total cost and the support available for your goals."
            />
            <div className={styles.introStatement}>
              <strong>One Window helps you turn a large set of options into a focused shortlist based on evidence.</strong>
              <a href="#uk-enquiry-form">Discuss your profile <ArrowRight size={16} /></a>
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
              <a href="#uk-enquiry-form">Find universities that fit your goals <ArrowRight size={16} /></a>
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
            <a href="#uk-enquiry-form">
              {content.conversion.bandCta} <ArrowRight size={17} />
            </a>
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
          <a className={styles.lightButton} href="#uk-enquiry-form">
            Get help with your applications <ArrowRight size={17} />
          </a>
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
          <div className={styles.costTable} role="table" aria-label="UK study cost planning reference">
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
            <p>These are planning estimates. Check each university’s current international fees and the official visa maintenance requirement before deciding.</p>
            <a href={content.sources[1][1]} target="_blank" rel="noreferrer">Check official visa costs <ArrowRight size={14} /></a>
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
          <a className={styles.inlineCta} href="#uk-enquiry-form">Explore scholarship opportunities <ArrowRight size={16} /></a>
        </div>
      </section>

      {/* VISA AND INTAKES */}
      <section className={styles.section} id="visa">
        <div className={styles.container}>
          <div className={styles.visaLayout}>
            <div>
              <SectionHeading
                eyebrow="Student visa"
                title="Your Student visa application starts with a confirmed offer and CAS."
                copy="Visa rules, fees and processing times can change. Check the UK government guidance and your university’s international student team before applying."
              />
              <ol className={styles.visaSteps}>
                {content.visaSteps.map((step) => <li key={step}>{step}</li>)}
              </ol>
              <a className={styles.officialLink} href={content.sources[1][1]} target="_blank" rel="noreferrer">
                Check official student visa guidance <ArrowRight size={15} />
              </a>
            </div>
            <aside className={styles.visaCard}>
              <ShieldCheck size={30} />
              <span>Current official reference</span>
              <strong>Check the current Student visa fee and health surcharge.</strong>
              <p>Confirm the latest amounts and financial evidence rules on GOV.UK before you submit your application.</p>
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
            title="Understand work options before you make a study decision."
            copy="Student work limits, placements and post study routes depend on your course and immigration status. Check current rules with your university before accepting a role."
          />
          <div className={styles.careerGrid}>
            {content.careers.map(([title, text]) => <article key={title}><BriefcaseBusiness size={21} /><h3>{title}</h3><p>{text}</p></article>)}
          </div>
          <a className={styles.officialLink} href={content.sources[1][1]} target="_blank" rel="noreferrer">Read official UK Student visa guidance <ArrowRight size={15} /></a>
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

      {/* CONSULTATION CTA */}
      <section className={styles.consultation} id="uk-consultation">
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
          <div className={styles.consultationForm} id="uk-enquiry-form">
            <h3>Tell us about your study plans</h3>
            <ZohoContactForm country="UK" />
          </div>
        </div>
      </section>

      <Footer />
      {showMobileBar ? <aside className={styles.mobileConversionBar} aria-label="UK counselling actions">
        <a href={content.phone.href}><Phone size={17} /> Call</a>
        <a href="#uk-enquiry-form">{content.conversion.mobileCta} <ArrowRight size={16} /></a>
      </aside> : null}
    </main>
  );
}

