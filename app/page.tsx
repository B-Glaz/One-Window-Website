import { ArrowRight, Bot, Landmark } from "lucide-react";
import { CountryOrbit } from "./components/country-orbit";
import { LeadForm } from "./components/lead-form";
import { Footer } from "./components/footer";
import { Navigation } from "./components/navigation";

const services = [
  ["Admissions", "Our admission specialists handle every step of your application, from filling out details to securing your spot at top universities."],
  ["Scholarships", "Our experts are committed to help you with the perfect scholarship. We ensure you get the financial support you need to achieve your goals."],
  ["Education Loans", "Our team helps you secure the best education loans by guiding you through options, terms, and the application process."],
  ["Visas", "Our visa team ensures a smooth process by guiding you through requirements, preparing documentation."],
  ["Profile Building", "Our team helps you build a standout profile, increasing your chances of admission and scholarships at top universities."],
];

const steps = [
  ["01", "Ideal universities using AI", "Supercharge your abroad education journey by creating your profile and get started by shortlisting universities using our state-of-art AI tool."],
  ["02", "Personalized expert advisors", "Experience tailored support and insights that make your path to success with the guidance from our expert advisors with over 15 years of experience."],
  ["03", "One application for all", "With just one form, apply to multiple universities easily and get quick admissions into your dream universities."],
  ["04", "Scholarships & education loan", "Discover opportunities with scholarships and easy education loans, designed to ease your financial burden."],
  ["05", "Effortless visa process", "Streamline visa application process with personalized guidance and reduce the risk of errors and delays."],
  ["06", "Internships & Jobs", "From securing internships during your studies to landing your dream job after graduation, we’re here to ensure your success every step of the way."],
];

const proof = [["16 Years+", "Solid Industry Experience"], ["10K+", "Student Profile Processed"], ["98%", "Admissions & Visas Approved"], ["$ 12 Million", "Successful Scholarships"]];

export default function Home() {
  return <main><Navigation />
    <CountryOrbit />
    <section id="consultation" className="section-pad consultation-section"><div className="shell split-panel glass reveal"><div><p className="eyebrow">Not sure where to begin?</p><h2>Free counselling for you</h2><p>At One Window, our competent counselors can help make your dreams of studying abroad come true. For free counseling speak to us today to sort all your worries about doing undergraduate, postgraduate, Ph.D., and MBA courses to most parts of the world.</p><ul className="check-list"><li>Discuss your goals with a student advisor</li><li>Understand suitable destinations and courses</li><li>Plan the next clear step in your journey</li></ul></div><LeadForm formCode="homepage_consultation" sourcePath="/" title="Book your free consultation" /></div></section>
    <section className="section-pad tinted"><div className="shell"><div className="section-heading reveal"><p className="eyebrow">Powerful academic solutions</p><h2>From vision to victory</h2><p>Tailored support to start your educational journey abroad.</p></div><div className="service-grid">{services.map(([title, text], i) => <article className="service-card reveal" key={title}><span>{String(i + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
    <section className="section-pad"><div className="shell platform-grid reveal"><div className="platform-visual"><div className="platform-window"><span className="window-dot" /><span className="window-dot" /><span className="window-dot" /><div className="search-line">Find the course that fits your future</div><div className="result-lines"><i /><i /><i /></div></div></div><div><p className="eyebrow"><Bot size={15} /> CampusRoot AI Course Finder</p><h2>Make a confident shortlist</h2><p>Supercharge your abroad education journey by creating your profile and get started by shortlisting universities using our state-of-the-art AI tool.</p><a className="button button-primary" href="https://campusroot.com/recommendations">Open AI Course Finder <ArrowRight size={17} /></a><p className="transition-note">You’ll continue to CampusRoot, One Window’s digital study-abroad platform.</p></div></div></section>
    <section className="section-pad process-section"><div className="shell"><div className="section-heading light reveal"><p className="eyebrow">Empowering your study abroad journey</p><h2>A clearer route from ambition to arrival</h2><p>With technology and expert guidance, we handle the complexities so you can focus on achieving your academic and career goals.</p></div><div className="steps-grid">{steps.map(([number,title,text]) => <article className="step-card reveal" key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
    <section className="section-pad"><div className="shell"><div className="section-heading reveal"><p className="eyebrow">Our success story</p><h2>Experience that travels with you</h2></div><div className="proof-grid">{proof.map(([value,label]) => <div className="proof-card glass reveal" key={value}><strong>{value}</strong><span>{label}</span></div>)}</div></div></section>
    <section className="section-pad final-cta"><div className="shell final-cta-inner reveal"><Landmark size={34} /><div><h2>Start with one conversation.</h2><p>Get tailored advice for your study abroad plans.</p></div><a className="button button-light" href="#consultation">Book free counselling <ArrowRight size={17} /></a></div></section><Footer />
  </main>;
}
