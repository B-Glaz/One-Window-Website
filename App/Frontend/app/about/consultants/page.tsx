import Link from "next/link";
import { ArrowRight, Compass, Heart, Users } from "lucide-react";
import { Footer } from "../../components/footer";
import { Navigation } from "../../components/navigation";
import { MediaImage } from "../../components/media-image";
import styles from "./consultants.module.css";

const teamMembers = [
  ["Anurag Jain", "Executive Director", "Builds institutional partnerships and global relationships across international education markets."],
  ["Ankit Jain", "Executive Director", "With 13 years in international education, Ankit focuses on institutional partnerships, global relationships and new approaches to education technology. He also represents One Window at international conferences and industry forums."],
  ["Vanita Jain", "Executive Director", "Supports the leadership team in creating clear, student-first pathways across global destinations."],
  ["Pratiksha Misra", "Growth Partner: Europe", "With 14+ years across international education, institutional strategy and academic programme development, Pratiksha leads European growth, partnerships and education programmes."],
  ["Rakesh", "Manager: Student Outreach", "A British Council-certified International Student Advisor and Visa Expert with 14 years of experience, specialising in UK, Australia and Europe admissions, scholarships and visa refusal case analysis."],
  ["Laxmi Kommu", "Manager: Student Outreach", "A British Council-certified International Student Advisor and Visa Expert with 14 years of experience, specialising in UK, Australia and Europe admissions, scholarships and visa refusal case analysis."],
  ["Sravanthi Gundu", "Manager: Student Outreach", "With 15 years in international education, Sravanthi specialises in USA, Canada and Germany, helping students with admissions strategy, visa interview preparation and pre-departure planning."],
] as const;

const consultantImages: Record<string, string> = {
  "Anurag Jain": "/images/consultants/anurag-jain.webp",
  "Ankit Jain": "/images/consultants/ankit-jain.webp",
  "Vanita Jain": "/images/consultants/vanita-jain.webp",
  "Pratiksha Misra": "/images/consultants/pratiksha-misra.webp",
  Rakesh: "/images/consultants/rakesh.webp",
  "Laxmi Kommu": "/images/consultants/laxmi-kommu.webp",
  "Sravanthi Gundu": "/images/consultants/sravanthi-gundu.webp",
};

export default function ConsultantsPage() {
  return (
    <main className={styles.page}>
      <Navigation />
      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <span className={styles.kicker}>Our Leadership Team</span>
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
          <span className={styles.kicker}>Meet our Leadership Team</span>
          <h2>Your personal study abroad team.</h2>
          <p>From career clarity to university selection, our consultants are here to guide you with expertise and care.</p>
          <Link className="button button-secondary" href="/#consultation">Meet the full team <ArrowRight size={17} /></Link>
        </div>
        <div className={styles.teamGrid}>
          {teamMembers.slice(0, 3).map(([name, role, bio]) => (
            <article className={styles.personCard} key={name}>
              <div className={styles.personPlaceholder} aria-label={`${name} profile picture`}>{consultantImages[name] ? <MediaImage src={consultantImages[name]} alt={`${name} profile picture`} /> : <strong>{name.split(" ").map((part) => part[0]).join("")}</strong>}</div>
              <h3>{name}</h3><p className={styles.role}>{role}</p><p>{bio}</p>
              <Link href="/#consultation" aria-label={`Talk to ${name}`}>↗</Link>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.peopleSection}>
        <div className={styles.peopleHeading}><span className={styles.kicker}>Our Leadership Team</span><h2>A team for every next step.</h2><p>Every conversation is backed by a specialist who understands the detail behind your decision.</p></div>
        <div className={styles.peopleGrid}>
          {teamMembers.map(([name, role, bio], index) => (
            <article className={styles.personCard} key={name}>
              <div className={styles.personPlaceholder} aria-label={`${name} profile picture`}>{consultantImages[name] ? <MediaImage src={consultantImages[name]} alt={`${name} profile picture`} /> : <><strong>{name.split(" ").map((part) => part[0]).join("")}</strong><small>Profile {String(index + 1).padStart(2, "0")}</small></>}</div>
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
