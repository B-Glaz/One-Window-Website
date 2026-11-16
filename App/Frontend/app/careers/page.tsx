import { Sparkles } from "lucide-react";
import { Footer } from "../components/footer";
import { Navigation } from "../components/navigation";
import { CareerForm } from "./career-form";

export default function CareersPage() {
  return (
    <main className="careers-page">
      <Navigation />
      <section className="careers-form-section shell" id="career-form">
        <div className="careers-form-copy">
          <p className="eyebrow">Join the team</p>
          <h1>Tell us where you can make a difference.</h1>
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
