import Link from "next/link";
import { Footer } from "../components/footer";
import { Navigation } from "../components/navigation";
import { CareerForm } from "./career-form";

export default function CareersPage() {
  return (
    <main className="careers-page">
      <Navigation />
      <section className="careers-hero shell">
        <p className="eyebrow">Careers at One Window</p>
        <h1>Build the next chapter with us.</h1>
        <p className="careers-lede">
          Help students find the right destination, make confident decisions,
          and move closer to the future they imagine.
        </p>
        <Link className="button button-primary" href="#career-form">
          Explore opportunities
        </Link>
      </section>
      <section className="careers-form-section shell" id="career-form">
        <div className="careers-form-copy">
          <p className="eyebrow">Join the team</p>
          <h2>Tell us where you can make a difference.</h2>
          <p>Share your details and our team will be in touch when there is a strong fit.</p>
        </div>
        <CareerForm />
      </section>
      <Footer />
    </main>
  );
}
