import Link from "next/link";
import { ArrowRight, CheckCircle2, GraduationCap, Trophy, Users } from "lucide-react";
import { Footer } from "../../components/footer";
import { Navigation } from "../../components/navigation";
import styles from "../results/results.module.css";

const leadership = [["Arjun Mehta", "Co-founder and CEO"], ["Rhea Sharma", "Co-founder and COO"], ["Kabir Nair", "Co-founder and CTO"]];
const services = ["Profile and pathway strategy", "University shortlisting", "Application management", "Essays and personal statements", "Interview preparation", "Offers, finance and visas"];
const stories = [["Ananya Sharma", "UK", "One Window made my study abroad dream feel possible. Today, I am studying at a university that fits me."], ["Rohan Patel", "USA", "Their guidance was there from applications to visa. Highly recommend the support."], ["Diya Mehta", "Canada", "Professional, supportive and always there when the next decision felt difficult."]];

export default function OurStoryPage() {
  return <main className={styles.page}>
    <Navigation />
    <section className={styles.hero}><div><span className={styles.kicker}>Our story</span><h1>A clearer path<br />to your <em>next chapter.</em></h1><p>Expert study-abroad guidance to help you find the right university, in the right country, and build the future you dream of.</p><Link className="button button-primary" href="/#consultation">Start your journey <ArrowRight size={17} /></Link></div><div className={styles.heroPlaceholder}>Hero image placeholder<br /><small>Add image URL in content configuration</small></div></section>
    <section className={styles.stats}>{[["17+", "Years of experience", GraduationCap], ["13K+", "Student profiles processed", Users], ["98%", "Admissions and visas approved", CheckCircle2], ["$12M", "Successful scholarships", Trophy]].map(([value, label, Icon]) => <article key={label as string}><Icon size={23} /><strong>{value as string}</strong><span>{label as string}</span></article>)}</section>
    <section className={`${styles.section} ${styles.difference}`}><div><span className={styles.orangeRule} /><h2>What makes the difference</h2><p>At One Window, you get personalised, coordinated and expert support, from choosing the right course to settling in abroad.</p><Link href="/#consultation">Our approach <ArrowRight size={16} /></Link></div><div className={styles.widePlaceholder}>Story image placeholder</div></section>
    <section className={styles.section}><div className={styles.sectionTitle}><span className={styles.orangeRule} /><h2>Our impact in numbers</h2></div><div className={styles.impact}>{[["13K+", "Students guided worldwide"], ["600+", "Top universities partnered with"], ["35+", "Countries to study in"], ["98%", "Student satisfaction"]].map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}</div></section>
    <section className={styles.section}><div className={styles.sectionTitle}><span className={styles.orangeRule} /><h2>Our leadership</h2><p>A team of passionate experts, dedicated to your success.</p></div><div className={styles.leadership}>{leadership.map(([name, role]) => <article key={name}><div className={styles.personPlaceholder}>Leadership image placeholder</div><div><h3>{name}</h3><p>{role}</p></div></article>)}</div></section>
    <section className={styles.expertBand}><Users size={64} /><div><h2>Our expert consultants</h2><p>Get guidance from experienced study-abroad consultants who understand your goals and know what it takes to get you there.</p></div></section>
    <section className={styles.section}><div className={styles.sectionTitle}><span className={styles.orangeRule} /><h2>Our services</h2></div><div className={styles.services}>{services.map((service, index) => <article key={service}><b>{index + 1}</b><span>{service}</span></article>)}</div></section>
    <section className={styles.section}><div className={styles.sectionTitle}><span className={styles.orangeRule} /><h2>Student stories</h2><p>Real journeys. Real dreams, realised.</p></div><div className={styles.stories}>{stories.map(([name, country, quote]) => <article key={name}><div className={styles.avatarPlaceholder}>Student image placeholder</div><p>“{quote}”</p><strong>{name}</strong><small>{country}</small></article>)}</div></section>
    <section className={styles.finalCta}><div><h2>Ready to take the next step?</h2><p>Get free counselling from our experts and start your study abroad journey today.</p></div><Link className="button button-primary" href="/#consultation">Book a counselling session <ArrowRight size={17} /></Link></section>
    <Footer />
  </main>;
}
