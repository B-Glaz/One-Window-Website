"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
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
import { SectionJumpNav } from "../../components/section-jump-nav";
import { AdaptiveContentGrid } from "../../components/adaptive-content-grid";
import { ZohoContactForm } from "../../components/zoho-contact-form";
import { usaLandingContent as content } from "../../countries-content/usa-landing";
import styles from "./usa-landing.module.css";

const sectionIcons = [GraduationCap, BookOpen, Landmark];

function renderInlineBold(text: string) {
  const tokens = text.split(/(\*\*.*?\*\*|\[\[size=\d+(?:px|rem)\]\].*?\[\[\/size\]\])/g);

  return tokens.map((part, index) => {
    const bold = part.match(/^\*\*(.*?)\*\*$/);
    const sized = part.match(/^\[\[size=(\d+(?:px|rem))\]\](.*?)\[\[\/size\]\]$/);

    if (bold) return <strong key={index}>{bold[1]}</strong>;
    if (sized) return <span key={index} style={{ fontSize: sized[1] }}>{renderInlineBold(sized[2])}</span>;
    return part;
  });
}

function renderScholarshipText(text: string) {
  return text.split(/\n+/).map((line, index) => {
    const isBullet = line.trimStart().startsWith("- ");
    const content = isBullet ? line.trimStart().slice(2) : line;

    return isBullet ? (
      <ul key={index}><li>{renderInlineBold(content)}</li></ul>
    ) : (
      <p key={index}>{renderInlineBold(content)}</p>
    );
  });
}

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

export function UsaLandingPage({ formPlacement = "top" }: { formPlacement?: "top" | "bottom" }) {
  const [activeSection, setActiveSection] = useState("overview");
  const [showMobileBar, setShowMobileBar] = useState(false);
  const formTarget = formPlacement === "top" ? "#usa-hero-form" : "#usa-enquiry-form";

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
      <Navigation disableThemeToggle={formPlacement === "top"} counsellingHref={formTarget} />

      {/* HERO: Edit hero copy and form labels in content.ts. */}
      {formPlacement === "top" ? <section className={styles.hero}>
        <div className={styles.canvas}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>{content.hero.eyebrow}</p>
            <h1>{content.hero.title}</h1>
            <p className={styles.heroDescription}>{content.hero.description}</p>
            <div className={styles.heroActions}>
              <a className={styles.primaryButton} href={formTarget}>
                {content.hero.primaryCta} <ArrowRight size={17} />
              </a>
              <a className={styles.phoneLink} href={content.phone.href}>
                <Phone size={16} /> {content.hero.secondaryCta}
              </a>
            </div>
          </div>
          {formPlacement === "top" ? <div className={styles.heroForm} id="usa-hero-form">
            <p>{content.hero.formEyebrow}</p>
            <h2>{content.hero.formTitle}</h2>
            <ZohoContactForm country="USA" loading="eager" />
          </div> : null}
        </div>
      </section> : null}

      {/* SECTION NAVIGATION: Labels and destinations are editable in content.ts. */}
      <SectionJumpNav activeSection={activeSection} ariaLabel="USA study guide sections" items={content.navigation} />

      {/* OVERVIEW */}
      <section className={styles.section} id="overview">
        <div className={styles.container}>
          <div className={styles.overviewLead}>
            <Image
              alt={content.hero.imageAlt}
              fill
              sizes="(max-width: 980px) calc(100vw - 32px), 1200px"
              src={content.hero.image}
              unoptimized
            />
            <div className={styles.overviewLeadShade} />
            <div className={styles.overviewLeadCopy}>
              <p className={styles.eyebrow}>USA study guide</p>
              <h2>Why study in the USA?</h2>
              <p>The US higher education system offers flexibility, academic depth and opportunities to combine classroom learning with research, internships and campus experiences.</p>
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
            title="Types of Universities & Courses"
            copy={content.universities.intro}
          />
          <div className={styles.universityLayout}>
            <details className={styles.contentDropdown}>
            <summary>Explore university types <span aria-hidden="true" /></summary>
              <div className={styles.typeGrid}>
              {content.universities.types.map(([title, text]) => (
                <article key={title}>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
              </div>
            </details>
            <aside className={styles.fieldPanel}>
              <span>Popular fields to explore</span>
              <div>
                {content.universities.fields.map((field) => <i key={field}>{field}</i>)}
              </div>
            <a href={formTarget}>Find Universities That Match My Profile <ArrowRight size={16} /></a>
            </aside>
          </div>
        </div>
      </section>

      {/* ELIGIBILITY */}
      <section className={styles.section} id="eligibility">
        <div className={styles.container}>
          <SectionHeading
            eyebrow="Eligibility"
            title="Eligibility"
            copy="Requirements vary by programme and institution. Verify the official admissions page for every course because grades, prerequisites, test policies and document formats can change by intake."
          />
          <details className={styles.contentDropdown}>
            <summary>View eligibility requirements <span aria-hidden="true" /></summary>
            <div className={styles.eligibilityGrid}>
            {content.eligibility.map(([title, text], index) => (
              <article key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
            </div>
          </details>
          <aside className={styles.conversionBand}>
            <div>
              <span>{content.eligibilityCta.eyebrow}</span>
              <h3>{content.eligibilityCta.title}</h3>
            </div>
            <a href={formTarget}>
              {content.eligibilityCta.label} <ArrowRight size={17} />
            </a>
          </aside>
        </div>
      </section>

      {/* ADMISSIONS PROCESS */}
      <section className={`${styles.section} ${styles.navySection}`} id="admissions">
        <div className={styles.container}>
          <SectionHeading
            eyebrow="Application process"
            title="Application process"
            copy="Start early, work backwards from each deadline and maintain one reliable record of requirements, documents and decisions."
          />
          <details className={styles.contentDropdown}>
            <summary>View the application process <span aria-hidden="true" /></summary>
            <div className={styles.timeline}>
              {content.admissions.map(([number, title, text]) => (
                <article key={number}>
                  <span>{number}</span>
                  <div><h3>{title}</h3><p>{text}</p></div>
                </article>
              ))}
            </div>
          </details>
          <a className={styles.lightButton} href={formTarget}>
            Get help with your applications <ArrowRight size={17} />
          </a>
        </div>
      </section>

      {/* COSTS */}
      <section className={styles.section} id="cost">
        <div className={styles.container}>
          <SectionHeading
            eyebrow="Cost of study"
            title="Cost"
            copy="Planning note: These USA figures are references rather than quotes. Use each institution's current published fees and cost-of-attendance guidance before deciding."
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
            title="Find the funding route that fits"
            copy="Funding options vary by study level, provider and intake. Awards remain subject to each provider's eligibility, selection and renewal conditions."
          />
          <details className={styles.contentDropdown}>
            <summary>Explore funding options <span aria-hidden="true" className={styles.contentDropdownToggle} /></summary>
            <div className={styles.scholarshipAdaptiveWrap}>
              <AdaptiveContentGrid
                items={content.scholarships.map(([title, text]) => ({ id: title, title, text }))}
                rowSplits={content.scholarships.map(() => 1)}
                contentDriven
                renderItem={({ title, text }) => (
                  <details className={styles.scholarshipCard}>
                    <summary><span>{title}</span><b aria-hidden="true" /></summary>
                    <div className={styles.scholarshipBody}>
                      <div className={styles.scholarshipText}>{renderScholarshipText(text)}</div>
                      <Link className={styles.scholarshipArticleLink} href="/blog/fulbright-nehru-masters-fellowship-for-indian-students">
                        Read the Fulbright-Nehru Master&apos;s Fellowship guide <ArrowRight size={15} />
                      </Link>
                    </div>
                  </details>
                )}
              />
            </div>
          </details>
          <a className={styles.inlineCta} href={formTarget}>Explore scholarship opportunities <ArrowRight size={16} /></a>
        </div>
      </section>

      {/* VISA AND INTAKES */}
      <section className={styles.section} id="visa">
        <div className={styles.container}>
          <div className={styles.visaLayout}>
            <div>
              <SectionHeading
                eyebrow="Student visa"
                title="Student visa"
                copy="The F-1 process begins after an eligible institution admits you. Requirements, fees and appointment availability can change, so use U.S. government guidance and your university's Designated School Official."
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
          <SectionHeading eyebrow="Intakes and deadlines" title="Intakes and deadlines" />
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
            <SectionHeading eyebrow="Student life" title="Student life" />
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
            title="Career opportunities"
            copy="Practical training is regulated authorisation, not a job promise. Eligibility depends on immigration status, programme, timing and approval."
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
          <SectionHeading eyebrow="Frequently asked questions" title="Frequently asked questions" />
          <div className={styles.faqs}>
            {content.faqs.map(([question, answer]) => (
              <details key={question}><summary>{question}<span aria-hidden="true" /></summary><p>{answer}</p></details>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.softSection}`} aria-labelledby="usa-sources-title">
        <div className={styles.container}>
          <SectionHeading eyebrow="Explore more" title="Official and supporting sources" />
          <div className={styles.sourceLinks}>
            {content.sources.map(([label, href]) => (
              <a href={href} key={href} target="_blank" rel="noreferrer">{label}<ArrowRight size={15} /></a>
            ))}
          </div>
        </div>
      </section>

      {/* CONSULTATION CTA */}
      <section className={styles.consultation} id="usa-consultation">
        <div className={`${styles.container} ${styles.consultationGrid} ${formPlacement === "top" ? styles.singleColumn : ""}`}>
          <div>
            <p className={styles.eyebrow}>{content.finalCta.eyebrow}</p>
            <h2>{content.finalCta.title}</h2>
            <p>{content.finalCta.description}</p>
            <ul className={styles.consultationBenefits}>
              {content.finalCta.benefits.map((benefit) => (
                <li key={benefit}><CheckCircle2 size={18} />{benefit}</li>
              ))}
            </ul>
            <a className={styles.callCard} href={content.phone.href}><Phone size={20} /><span>Prefer to speak now?<strong>{content.phone.display}</strong></span></a>
          </div>
          {formPlacement === "bottom" ? <div className={styles.consultationForm} id="usa-enquiry-form">
            <h3>Tell us about your study plans</h3>
            <ZohoContactForm country="USA" />
          </div> : null}
        </div>
      </section>

      <Footer />
      {showMobileBar ? <aside className={styles.mobileConversionBar} aria-label="USA counselling actions">
        <a href={content.phone.href}><Phone size={17} /> Call</a>
        <a href={formTarget}>{content.mobileCta} <ArrowRight size={16} /></a>
      </aside> : null}
    </main>
  );
}

