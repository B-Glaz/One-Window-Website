import Link from "next/link";
import { ArrowRight, CheckCircle2, GraduationCap, Trophy, Users } from "lucide-react";
import { Footer } from "../../components/footer";
import { Navigation } from "../../components/navigation";
import styles from "../results/results.module.css";

const destinations = ["Boston University", "Northeastern University", "Columbia University", "Arizona State University", "UMass Boston", "New York University"];
const outcomes = [
  ["Boston University", "Entrepreneurship and Innovation", "Profile evaluation, university selection and visa guidance."],
  ["Northeastern University", "MS Mechanical Engineering", "Application planning and interview preparation."],
  ["Columbia University", "Master’s programme", "A focused shortlist built around academic fit."],
  ["Arizona State University", "MS Computer Science", "Support for a future in machine learning and AI."],
  ["UMass Boston", "Graduate programme", "Programme selection with visa support."],
  ["NYU", "Transfer admission", "A clearer transfer plan and next-step timeline."],
];
const people = ["Ashish Saraf", "Ishaan Purey", "Riya Sancheti", "Shivam Sibal", "Prakshi", "Vyshnavi"];

export default function OurSuccessPage() {
  return (
    <main className={styles.page}>
      <Navigation />

      <section className={styles.hero}>
        <div>
          <span className={styles.kicker}>Our success</span>
          <h1>Real journeys.<br /><em>Remarkable</em> next steps.</h1>
          <p>Our students have reached world-class universities and are building successful careers across the globe.</p>
          <span className={styles.orangeRule} />
        </div>
        <div className={styles.heroPlaceholder}>Hero image placeholder<br /><small>Add image URL in content configuration</small></div>
      </section>

      <section className={styles.stats}>
        {[["17+", "Years of experience", GraduationCap], ["13K+", "Student profiles processed", Users], ["98%", "Admissions and visas approved", CheckCircle2], ["$12M", "Successful scholarships", Trophy]].map(([value, label, Icon]) => (
          <article key={label as string}><Icon size={23} /><strong>{value as string}</strong><span>{label as string}</span></article>
        ))}
      </section>

      <section className={`${styles.section} ${styles.difference}`}>
        <div><span className={styles.orangeRule} /><h2>What makes the difference</h2><p>At One Window, students receive personalised, coordinated and expert support, from choosing the right course to settling in abroad.</p><Link href="/#consultation">Our approach <ArrowRight size={16} /></Link></div>
        <div className={styles.widePlaceholder}>Story image placeholder</div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionTitle}><span className={styles.orangeRule} /><h2>Our impact in numbers</h2></div>
        <div className={styles.impact}>{[["13K+", "Students guided worldwide"], ["600+", "Top universities partnered with"], ["35+", "Countries to study in"], ["98%", "Student satisfaction"]].map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}</div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionTitle}><span className={styles.orangeRule} /><h2>Our leadership</h2><p>A team of passionate experts, dedicated to your success.</p></div>
        <div className={styles.leadership}>{[["Arjun Mehta", "Co-founder and CEO"], ["Rhea Sharma", "Co-founder and COO"], ["Kabir Nair", "Co-founder and CTO"]].map(([name, role]) => <article key={name}><div className={styles.personPlaceholder}>Leadership image placeholder</div><div><h3>{name}</h3><p>{role}</p></div></article>)}</div>
      </section>

      <section className={styles.expertBand}><Users size={64} /><div><h2>Our expert consultants</h2><p>Get guidance from experienced study-abroad consultants who understand your goals and know what it takes to get you there.</p></div></section>

      <section className={styles.section}>
        <div className={styles.sectionTitle}><span className={styles.orangeRule} /><h2>Our services</h2></div>
        <div className={styles.services}>{["Profile and pathway strategy", "University shortlisting", "Application management", "Essays and personal statements", "Interview preparation", "Offers, finance and visas"].map((service, index) => <article key={service}><b>{index + 1}</b><span>{service}</span></article>)}</div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionTitle}><span className={styles.orangeRule} /><h2>Where our students are headed</h2><p>Students choose different destinations, courses and futures. The common thread is a clearer plan for what comes next.</p></div>
        <div className={styles.destinationGrid}>{destinations.map((destination) => <article key={destination}><div className={styles.destinationPlaceholder}>Campus image placeholder</div><strong>{destination}</strong></article>)}</div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionTitle}><span className={styles.orangeRule} /><h2>A closer look at student outcomes</h2></div>
        <div className={styles.outcomeTable}><div className={styles.tableHead}><span>University</span><span>Programme</span><span>Student journey / outcome</span></div>{outcomes.map(([university, programme, outcome]) => <div className={styles.tableRow} key={university}><strong>{university}</strong><span>{programme}</span><span>{outcome}</span></div>)}</div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionTitle}><span className={styles.orangeRule} /><h2>The people behind every milestone</h2></div>
        <div className={styles.peopleGrid}>{people.map((person) => <article key={person}><div className={styles.personPlaceholder}>Student image placeholder</div><strong>{person}</strong><small>One Window student</small><p>Found a clearer next step with the right guidance and support.</p></article>)}</div>
      </section>

      <section className={styles.opportunityBand}><div><h2>A world of opportunities awaits our students.</h2><p>From top universities to global career paths, our students are building a future without limits.</p></div><div className={styles.opportunityPlaceholder}>Global opportunity image placeholder</div></section>

      <section className={styles.finalCta}><div><h2>Your next chapter starts here.</h2><p>Get free counselling from our experts and start your study abroad journey today.</p></div><Link className="button button-primary" href="/#consultation">Book a counselling session <ArrowRight size={17} /></Link></section>
      <Footer />
    </main>
  );
}
