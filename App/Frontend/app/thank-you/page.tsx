import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Footer } from "../components/footer";
import { Navigation } from "../components/navigation";
export default function ThankYou() {
  return (
    <main>
      <Navigation />
      <section className="thank-you section-pad">
        <div className="glass thank-you-card">
          <CheckCircle2 size={52} />
          <p className="eyebrow">Enquiry received</p>
          <h1>Thank you. Your next step starts here.</h1>
          <p>
            Our team will review your enquiry and get in touch using the details
            you submitted.
          </p>
          <Link className="button button-primary" href="/">
            Return to homepage
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
