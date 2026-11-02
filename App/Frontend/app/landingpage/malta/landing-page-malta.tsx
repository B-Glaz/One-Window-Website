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
import { Footer } from "../../components/footer";
import { Navigation } from "../../components/navigation";
import { ZohoContactForm } from "../../components/zoho-contact-form";
import { maltaLandingContent as content } from "./content";
import styles from "../usa/usa-landing.module.css";
import theme from "./malta-landing.module.css";

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

export function MaltaLandingPage() {
  const [activeSection, setActiveSection] = useState("overview");
  const [showMobileBar, setShowMobileBar] = useState(false);

  useLayoutEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", "light");
    return () => {
      root.setAttribute(
        "data-theme",
        localStorage.getItem("ow-theme") === "dark" ? "dark" : "light",
      );
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
    <main className={`${styles.page} ${theme.maltaPage}`}>
      <Navigation disableThemeToggle counsellingHref="#malta-hero-form" />

      <section className={`${styles.hero} ${theme.hero}`}>
        <div className={`${styles.canvas} ${theme.heroCanvas}`}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>{content.hero.eyebrow}</p>
            <h1>{content.hero.title}</h1>
            <p className={styles.heroDescription}>{content.hero.description}</p>
            <div className={styles.heroActions}>
              <a className={styles.primaryButton} href="#malta-hero-form">
                {content.hero.primaryCta} <ArrowRight size={17} />
              </a>
              <a className={styles.phoneLink} href={content.phone.href}>
                <Phone size={16} /> {content.hero.secondaryCta}
              </a>
            </div>
            <div
              className={styles.heroProof}
              aria-label="What One Window can help with"
            >
              {content.hero.proofPoints.map((point) => (
                <span key={point}>
                  <CheckCircle2 size={16} />
                  {point}
                </span>
              ))}
            </div>
          </div>
          <div className={`${styles.heroForm} ${theme.heroForm}`} id="malta-hero-form">
            <p>{content.hero.formEyebrow}</p>
            <h2>{content.hero.formTitle}</h2>
            <ZohoContactForm country="Malta" loading="eager" />
          </div>
        </div>
      </section>

      <section
        className={`${styles.previousHero} ${theme.imageHero}`}
        aria-label="Explore studying in Malta"
      >
        <div className={styles.previousCanvas}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>Mediterranean study, planned clearly</p>
            <h2>Malta can be a strong fit, when the course and budget are real.</h2>
            <p className={styles.heroDescription}>
              Compare recognition, outcomes, total cost and permit rules before
              choosing an institution.
            </p>
            <div className={styles.heroActions}>
              <a className={styles.primaryButton} href="#malta-enquiry-form">
                Get my Malta profile check <ArrowRight size={17} />
              </a>
            </div>
          </div>
          <div className={`${styles.previousMedia} ${theme.previousMedia}`}>
            <Image
              alt={content.hero.imageAlt}
              fill
              priority
              sizes="(max-width: 980px) calc(100vw - 32px), 560px"
              src={content.hero.image}
              unoptimized
            />
            <div className={styles.previousBadge}>
              <span>One clear plan</span>
              <strong>Recognition, budget, visa</strong>
            </div>
          </div>
        </div>
      </section>

      <nav className={styles.sectionNav} aria-label="Malta study guide sections">
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

      <section className={styles.section} id="overview">
        <div className={styles.container}>
          <div className={styles.introGrid}>
            <SectionHeading
              eyebrow="Why Malta"
              title={content.overview.title}
              copy={content.overview.copy}
            />
            <div className={styles.introStatement}>
              <strong>{content.overview.statement}</strong>
              <a href="#malta-enquiry-form">
                Discuss your profile <ArrowRight size={16} />
              </a>
            </div>
          </div>
          <div className={`${styles.highlightGrid} ${theme.highlightGrid}`}>
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
          <div className={`${styles.reasonGrid} ${theme.reasonGrid}`}>
            {content.reasons.map(([title, text]) => (
              <article key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className={`${styles.section} ${styles.softSection} ${theme.softSection}`}
        id="universities"
      >
        <div className={styles.container}>
          <SectionHeading
            eyebrow="Institutions & courses"
            title="Four kinds of places to study. Choose by how you learn."
            copy={content.universities.intro}
          />
          <div className={styles.universityLayout}>
            <div className={`${styles.typeGrid} ${theme.typeGrid}`}>
              {content.universities.types.map(([title, text]) => (
                <article key={title}>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
            <aside className={`${styles.fieldPanel} ${theme.fieldPanel}`}>
              <span>Popular fields to explore</span>
              <div>
                {content.universities.fields.map((field) => (
                  <i key={field}>{field}</i>
                ))}
              </div>
              <a href="#malta-enquiry-form">
                Find recognised courses that fit <ArrowRight size={16} />
              </a>
            </aside>
          </div>
        </div>
      </section>

      <section className={styles.section} id="eligibility">
        <div className={styles.container}>
          <SectionHeading
            eyebrow="Eligibility"
            title="Check the course, qualification level and documents together."
            copy="Requirements differ by provider and programme. Get a written assessment instead of relying on forwarded cut offs or generic score claims."
          />
          <div className={`${styles.eligibilityGrid} ${theme.eligibilityGrid}`}>
            {content.eligibility.map(([title, text], index) => (
              <article key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <aside className={`${styles.conversionBand} ${theme.conversionBand}`}>
            <div>
              <span>{content.eligibilityCta.eyebrow}</span>
              <h3>{content.eligibilityCta.title}</h3>
            </div>
            <a href="#malta-enquiry-form">
              {content.eligibilityCta.label} <ArrowRight size={17} />
            </a>
          </aside>
        </div>
      </section>

      <section
        className={`${styles.section} ${styles.navySection} ${theme.navySection}`}
        id="admissions"
      >
        <div className={styles.container}>
          <SectionHeading
            eyebrow="Application process"
            title="From ‘maybe Malta’ to a verified application in eight steps."
            copy="Work backwards from the course start date and keep one reliable record of recognition, documents, payments and deadlines."
          />
          <div className={styles.timeline}>
            {content.admissions.map(([number, title, text]) => (
              <article key={number}>
                <span>{number}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
          <a className={styles.lightButton} href="#malta-enquiry-form">
            Get help with your Malta application <ArrowRight size={17} />
          </a>
        </div>
      </section>

      <section className={styles.section} id="cost">
        <div className={styles.container}>
          <SectionHeading
            eyebrow="Tuition & living costs"
            title="Build the budget from the complete year, not the headline fee."
            copy="These figures are planning references, not quotes. Confirm tuition on the programme page and use your offer letter before making a payment."
          />
          <div className={styles.costTable} role="table" aria-label="Malta study cost planning reference">
            {content.costs.map(([item, figure, note]) => (
              <div role="row" key={item}>
                <strong role="cell">{item}</strong>
                <span role="cell">{figure}</span>
                <p role="cell">{note}</p>
              </div>
            ))}
          </div>
          <div className={`${styles.sourceNote} ${theme.sourceNote}`}>
            <CircleDollarSign size={20} />
            <p>
              Living cost guides use different methods. Plan with a cautious
              buffer for deposits, flights, insurance, setup costs and emergencies.
            </p>
            <a href={content.sources.livingCosts} target="_blank" rel="noreferrer">
              View official cost guide <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      <section
        className={`${styles.section} ${styles.softSection} ${theme.softSection}`}
        id="scholarships"
      >
        <div className={styles.container}>
          <SectionHeading
            eyebrow="Scholarships & funding"
            title="Build a plan that still works if no scholarship or job appears."
            copy="Funding is limited and eligibility changes by scheme. Confirm every award directly with the institution or official provider."
          />
          <div className={`${styles.scholarshipGrid} ${theme.scholarshipGrid}`}>
            {content.scholarships.map(([title, text]) => (
              <article key={title}>
                <CheckCircle2 size={20} />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <a className={styles.inlineCta} href="#malta-enquiry-form">
            Review my Malta budget <ArrowRight size={16} />
          </a>
          <a
            className={styles.officialLink}
            href={content.sources.getQualified}
            target="_blank"
            rel="noreferrer"
          >
            Check Get Qualified eligibility <ArrowRight size={15} />
          </a>
        </div>
      </section>

      <section className={styles.section} id="visa">
        <div className={styles.container}>
          <div className={styles.visaLayout}>
            <div>
              <SectionHeading
                eyebrow="Student visa"
                title="The D visa gets you to Malta. Residence steps continue after arrival."
                copy="Rules, fees and document checklists change. Use Identità’s current guidance and ensure your course details match every application document."
              />
              <ol className={styles.visaSteps}>
                {content.visaSteps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
              <a
                className={styles.officialLink}
                href={content.sources.visa}
                target="_blank"
                rel="noreferrer"
              >
                Check official visa guidance <ArrowRight size={15} />
              </a>
            </div>
            <aside className={`${styles.visaCard} ${theme.visaCard}`}>
              <ShieldCheck size={30} />
              <span>Before you pay</span>
              <strong>Verify the provider and the exact programme.</strong>
              <p>
                Check the licence, programme accreditation and MQF level in the
                official MFHEA register, not only the institution’s marketing page.
              </p>
              <a href={content.sources.register} target="_blank" rel="noreferrer">
                Open the MFHEA register <ArrowRight size={14} />
              </a>
            </aside>
          </div>
        </div>
      </section>

      <section
        className={`${styles.section} ${styles.intakeSection} ${theme.intakeSection}`}
        id="intakes"
      >
        <div className={styles.container}>
          <SectionHeading
            eyebrow="Intakes & timeline"
            title="Choose the intake that gives you enough time to prepare properly."
          />
          <div className={`${styles.intakeGrid} ${theme.intakeGrid}`}>
            {content.intakes.map(([title, text]) => (
              <article key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section} id="student-life">
        <div className={`${styles.container} ${styles.lifeLayout}`}>
          <div className={`${styles.lifeMedia} ${theme.lifeMedia}`}>
            <Image
              alt={content.life.imageAlt}
              fill
              sizes="(max-width: 980px) calc(100vw - 40px), 50vw"
              src={content.life.image}
              unoptimized
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="Student life"
              title="Beach on Saturday. Lectures on Monday. Plan for both."
            />
            <div className={styles.lifeList}>
              {content.life.items.map(([title, text]) => (
                <article key={title}>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className={`${styles.section} ${styles.careerSection} ${theme.careerSection}`}
        id="careers"
      >
        <div className={styles.container}>
          <SectionHeading
            eyebrow="Career opportunities"
            title="Use the data as context, not as a job promise."
            copy="Malta’s labour market is small. Course relevance, practical skills, networking and employer sponsorship all affect what happens next."
          />
          <div className={`${styles.careerGrid} ${theme.careerGrid}`}>
            {content.careers.map(([title, text]) => (
              <article key={title}>
                <BriefcaseBusiness size={21} />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <a
            className={styles.officialLink}
            href={content.sources.jobs}
            target="_blank"
            rel="noreferrer"
          >
            Review official labour market data <ArrowRight size={15} />
          </a>
        </div>
      </section>

      <section className={styles.section} id="faqs">
        <div className={`${styles.container} ${styles.faqLayout}`}>
          <SectionHeading
            eyebrow="FAQs"
            title="Questions students and families ask before choosing Malta."
          />
          <div className={styles.faqs}>
            {content.faqs.map(([question, answer]) => (
              <details key={question}>
                <summary>
                  {question}
                  <span>+</span>
                </summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section
        className={`${styles.consultation} ${theme.consultation}`}
        id="malta-consultation"
      >
        <div className={`${styles.container} ${styles.consultationGrid}`}>
          <div>
            <p className={styles.eyebrow}>{content.finalCta.eyebrow}</p>
            <h2>{content.finalCta.title}</h2>
            <p>{content.finalCta.description}</p>
            <ul className={styles.consultationBenefits}>
              {content.finalCta.benefits.map((benefit) => (
                <li key={benefit}>
                  <CheckCircle2 size={18} />
                  {benefit}
                </li>
              ))}
            </ul>
            <a className={styles.callCard} href={content.phone.href}>
              <Phone size={20} />
              <span>
                Prefer to speak now?
                <strong>{content.phone.display}</strong>
              </span>
            </a>
          </div>
          <div className={`${styles.consultationForm} ${theme.consultationForm}`} id="malta-enquiry-form">
            <h3>Tell us about your Malta study plans</h3>
            <ZohoContactForm country="Malta" />
          </div>
        </div>
      </section>

      <Footer />

      {showMobileBar ? (
        <aside
          className={`${styles.mobileConversionBar} ${theme.mobileConversionBar}`}
          aria-label="Malta counselling actions"
        >
          <a href={content.phone.href}>
            <Phone size={17} /> Call
          </a>
          <a href="#malta-enquiry-form">
            {content.mobileCta} <ArrowRight size={16} />
          </a>
        </aside>
      ) : null}
    </main>
  );
}
