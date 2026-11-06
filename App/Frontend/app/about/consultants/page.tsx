import Link from "next/link";
import { ArrowRight, Compass, Heart, Users } from "lucide-react";
import { Footer } from "../../components/footer";
import { Navigation } from "../../components/navigation";
import styles from "./consultants.module.css";

const consultants = [
  ["Consultant image placeholder", "Senior student advisor", "Clarity for your next decision."],
  ["Consultant image placeholder", "Country and university specialist", "The right fit starts with context."],
  ["Consultant image placeholder", "Student success advisor", "Your success stays at the centre."],
] as const;

const teamMembers = [
  ["Aarav Mehta", "Senior student advisor", "Helps students turn broad goals into a clear destination and course plan."],
  ["Maya Thomas", "Country and university specialist", "Connects ambitions with the countries, universities and pathways that fit."],
  ["Nisha Menon", "Student success advisor", "Keeps applications organised, focused and moving at the right pace."],
  ["Rohan Kapoor", "Admissions strategy advisor", "Brings structure to profiles, deadlines, documents and next steps."],
  ["Ishita Rao", "Career pathway advisor", "Helps students think beyond admission and plan for the future after study."],
  ["Kabir Singh", "Application support advisor", "Makes complex application moments easier to understand and act on."],
  ["Ananya Sharma", "Destination advisor", "Offers practical context on student life, costs and everyday decisions abroad."],
  ["Vihaan Shah", "Course discovery advisor", "Explores course choices with the student’s strengths and direction in view."],
  ["Diya Patel", "Parent and student advisor", "Creates calm, useful conversations for families making a shared decision."],
  ["Arjun Nair", "International education advisor", "Brings the wider picture together, from first question to final plan."],
] as const;

export default function ConsultantsPage() {
  return (
    <main className={styles.page}>
      <Navigation />
      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <span className={styles.kicker}>Our consultants</span>
          <h1>Expert guidance.<br /><em>A global</em> future.</h1>
          <p>Meet the people who make your study abroad plans easier to understand, with thoughtful guidance at every step of your journey.</p>
          <div className={styles.proofRow}>
            <span><Users size={20} />17+ years<br />of experience</span>
            <span><Compass size={20} />Global network<br />of universities</span>
            <span><Heart size={20} />Student-first<br />approach</span>
          </div>
        </div>
        <div className={styles.heroPlaceholder}>Image placeholder<br /><small>Add image URL in content configuration</small></div>
      </section>

      <section className={styles.teamSection}>
        <div className={styles.sectionIntro}>
          <span className={styles.kicker}>Meet our consultants</span>
          <h2>Your personal study abroad team.</h2>
          <p>From career clarity to university selection, our consultants are here to guide you with expertise and care.</p>
          <Link className="button button-secondary" href="/#consultation">Meet the full team <ArrowRight size={17} /></Link>
        </div>
        <div className={styles.teamGrid}>
          {consultants.map(([slot, role, text]) => (
            <article className={styles.personCard} key={role}>
              <div className={styles.personPlaceholder}>{slot}</div>
              <h3>{role}</h3><p>{text}</p>
              <Link href="/#consultation" aria-label={`Talk to a ${role}`}>↗</Link>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.peopleSection}>
        <div className={styles.peopleHeading}><span className={styles.kicker}>Meet the people behind the guidance</span><h2>A team for every next step.</h2><p>Every conversation is backed by a specialist who understands the detail behind your decision.</p></div>
        <div className={styles.peopleGrid}>
          {teamMembers.map(([name, role, bio], index) => (
            <article className={styles.personCard} key={name}>
              <div className={styles.personPlaceholder}>Image placeholder <small>Profile {String(index + 1).padStart(2, "0")}</small></div>
              <h3>{name}</h3><p className={styles.role}>{role}</p><p>{bio}</p>
              <Link href="/#consultation" aria-label={`Talk to ${name}`}>↗</Link>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.quoteSection}>
        <div className={styles.quotePlaceholder}>Student story image placeholder</div>
        <div className={styles.quoteCard}><span className={styles.quoteMark}>“</span><p>One Window made my study abroad journey feel clearer. The consultants helped me understand what was right for me.</p><strong>One Window student</strong><small>Student story placeholder</small></div>
      </section>

      <section className={styles.finalCta}><h2>Your global journey<br /><em>starts here.</em></h2><p>Get expert advice and take the first step towards your international education.</p><Link className="button button-primary" href="/#consultation">Talk to an advisor <ArrowRight size={17} /></Link></section>
      <Footer />
    </main>
  );
}
