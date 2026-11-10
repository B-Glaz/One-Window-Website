import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  BookOpen,
  Compass,
  GraduationCap,
  HeartHandshake,
  Layers3,
  Sparkles,
} from "lucide-react";
import { Footer } from "../components/footer";
import { Navigation } from "../components/navigation";
import { CareerForm } from "./career-form";

const contributionAreas = [
  {
    icon: HeartHandshake,
    number: "01",
    title: "Student guidance",
    description:
      "Help students and families turn complex choices into a clear, considered next step.",
  },
  {
    icon: BookOpen,
    number: "02",
    title: "Content and communication",
    description:
      "Make international education information easier to understand, compare and act on.",
  },
  {
    icon: Layers3,
    number: "03",
    title: "Operations and technology",
    description:
      "Build the systems and experiences that keep every student journey moving smoothly.",
  },
];

const applicationSteps = [
  ["01", "Introduce yourself", "Share your experience, strengths and the kind of work you want to do."],
  ["02", "Show your perspective", "Tell us how your skills could improve the experience of students and families."],
  ["03", "Start a conversation", "Our team will get in touch when your profile aligns with a relevant opportunity."],
];

export default function CareersPage() {
  return (
    <main className="careers-page">
      <Navigation />
      <section className="careers-hero">
        <div className="shell careers-hero-grid">
          <div className="careers-hero-copy">
            <p className="eyebrow">Careers at One Window</p>
            <h1>Build work that helps students <span>move forward.</span></h1>
            <p className="careers-lede">
              Help students find the right destination, make confident decisions,
              and move closer to the future they imagine.
            </p>
            <div className="careers-hero-actions">
              <Link className="button button-primary" href="#career-form">
                Introduce yourself <ArrowRight size={17} />
              </Link>
              <Link className="careers-text-link" href="#career-opportunities">
                See where you can contribute <ArrowDown size={16} />
              </Link>
            </div>
          </div>

          <div className="careers-orbit" aria-hidden="true">
            <div className="careers-orbit-ring careers-orbit-ring-one" />
            <div className="careers-orbit-ring careers-orbit-ring-two" />
            <div className="careers-orbit-core">
              <Compass size={34} />
              <strong>Make clarity<br />possible.</strong>
            </div>
            <div className="careers-orbit-note careers-orbit-note-one">
              <GraduationCap size={18} /><span>Students first</span>
            </div>
            <div className="careers-orbit-note careers-orbit-note-two">
              <Sparkles size={18} /><span>Thoughtful guidance</span>
            </div>
          </div>
        </div>
      </section>

      <section className="careers-opportunities shell" id="career-opportunities">
        <div className="careers-section-heading">
          <div>
            <p className="eyebrow">Where you can contribute</p>
            <h2>Different strengths.<br />One shared purpose.</h2>
          </div>
          <p>
            One Window brings together guidance, communication and operational
            thinking around one goal: helping students make better-informed choices.
          </p>
        </div>
        <div className="careers-area-grid">
          {contributionAreas.map(({ icon: Icon, number, title, description }) => (
            <article className="careers-area-card" key={title}>
              <div><span>{number}</span><Icon size={22} /></div>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="careers-process">
        <div className="shell careers-process-grid">
          <div className="careers-process-intro">
            <p className="eyebrow">Your first step</p>
            <h2>A thoughtful introduction is enough to begin.</h2>
            <p>
              You do not need to fit into a predefined box. Tell us what you do well,
              what you care about and where you believe you can add value.
            </p>
          </div>
          <ol className="careers-steps">
            {applicationSteps.map(([number, title, description]) => (
              <li key={number}>
                <span>{number}</span>
                <div><h3>{title}</h3><p>{description}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="careers-form-section shell" id="career-form">
        <div className="careers-form-copy">
          <p className="eyebrow">Join the team</p>
          <h2>Tell us where you can make a difference.</h2>
          <p>
            Share your details and our team will be in touch when there is a strong fit.
          </p>
          <div className="careers-form-prompt">
            <Sparkles size={18} />
            <span>Be specific about your experience and the contribution you want to make.</span>
          </div>
        </div>
        <div className="careers-form-card"><CareerForm /></div>
      </section>
      <Footer />
    </main>
  );
}
