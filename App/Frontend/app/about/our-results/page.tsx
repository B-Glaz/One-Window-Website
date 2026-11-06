import Link from "next/link";
import { ArrowRight, CheckCircle2, GraduationCap, Trophy, Users } from "lucide-react";
import { Footer } from "../../components/footer";
import { Navigation } from "../../components/navigation";
import styles from "../results/results.module.css";

const destinations = ["Boston University", "Northeastern University", "Columbia University", "Arizona State University", "UMass Boston", "New York University"];
const outcomes = [["Boston University", "Entrepreneurship and Innovation", "Profile evaluation, university selection and visa guidance."], ["Northeastern University", "MS Mechanical Engineering", "Application planning and interview preparation."], ["Columbia University", "Master’s programme", "A focused shortlist built around academic fit."], ["Arizona State University", "MS Computer Science", "Support for a future in machine learning and AI."], ["UMass Boston", "Graduate programme", "Programme selection with visa support."], ["NYU", "Transfer admission", "A clearer transfer plan and next-step timeline."]];
const people = ["Ashish Saraf", "Ishaan Purey", "Riya Sancheti", "Shivam Sibal", "Prakshi", "Vyshnavi"];

export default function OurResultsPage() {
  return <main className={styles.page}>
    <Navigation />
    <section className={styles.hero}><div><span className={styles.kicker}>Our results</span><h1>Real journeys.<br /><em>Remarkable</em> next steps.</h1><p>Our students have reached world-class universities and are building successful careers across the globe.</p><span className={styles.orangeRule} /></div><div className={styles.heroPlaceholder}>Hero image placeholder<br /><small>Add image URL in content configuration</small></div></section>
    <section className={styles.stats}>{[["17+", "Years of experience", GraduationCap], ["13K+", "Student profiles processed", Users], ["98%", "Admissions and visas approved", CheckCircle2], ["$12M", "Successful scholarships", Trophy]].map(([value, label, Icon]) => <article key={label as string}><Icon size={23} /><strong>{value as string}</strong><span>{label as string}</span></article>)}</section>
    <section className={`${styles.section} ${styles.difference}`}><div><span className={styles.orangeRule} /><h2>Where our students are headed</h2><p>Students choose different destinations, courses and futures. The common thread is a clearer plan for what comes next.</p><Link href="/#consultation">Talk to an advisor <ArrowRight size={16} /></Link></div><div className={styles.widePlaceholder}>Destination image placeholder</div></section>
    <section className={styles.section}><div className={styles.destinationGrid}>{destinations.map((destination) => <article key={destination}><div className={styles.destinationPlaceholder}>Campus image placeholder</div><strong>{destination}</strong></article>)}</div></section>
    <section className={styles.section}><div className={styles.sectionTitle}><span className={styles.orangeRule} /><h2>A closer look at student outcomes</h2></div><div className={styles.outcomeTable}><div className={styles.tableHead}><span>University</span><span>Programme</span><span>Student journey / outcome</span></div>{outcomes.map(([university, programme, outcome]) => <div className={styles.tableRow} key={university}><strong>{university}</strong><span>{programme}</span><span>{outcome}</span></div>)}</div></section>
    <section className={styles.section}><div className={styles.sectionTitle}><span className={styles.orangeRule} /><h2>The people behind every milestone</h2></div><div className={styles.peopleGrid}>{people.map((person) => <article key={person}><div className={styles.personPlaceholder}>Student image placeholder</div><strong>{person}</strong><small>One Window student</small><p>Found a clearer next step with the right guidance and support.</p></article>)}</div></section>
    <section className={styles.opportunityBand}><div><h2>A world of opportunities awaits our students.</h2><p>From top universities to global career paths, our students are building a future without limits.</p></div><div className={styles.opportunityPlaceholder}>Global opportunity image placeholder</div></section>
    <section className={styles.finalCta}><div><h2>Your next chapter starts here.</h2><p>Get free counselling from our experts and start your study abroad journey today.</p></div><Link className="button button-primary" href="/#consultation">Book a counselling session <ArrowRight size={17} /></Link></section>
    <Footer />
  </main>;
}
