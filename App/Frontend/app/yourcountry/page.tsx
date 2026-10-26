import type { Metadata } from "next";
import { Footer } from "../components/footer";
import { Navigation } from "../components/navigation";
import { Selcon } from "./selcon";

export const metadata: Metadata = {
  title: "Choose Your Study Destination | One Window",
  description:
    "Choose a study destination and explore your next steps with One Window.",
};

export default function YourCountryPage() {
  return (
    <main className="your-country-page">
      <Navigation />

      <div className="your-country-atmosphere" aria-hidden="true">
        <span className="your-country-orb your-country-orb-one" />
        <span className="your-country-orb your-country-orb-two" />
        <span className="your-country-star your-country-star-one" />
        <span className="your-country-star your-country-star-two" />
        <span className="your-country-star your-country-star-three" />
      </div>

      <section className="your-country-hero">
        <div className="your-country-intro">
          <p className="eyebrow">Choose your next chapter</p>
          <h1>
            Book free counselling{" "}
            <span>session</span>
          </h1>
        </div>

        <Selcon />
      </section>

      <Footer />
    </main>
  );
}
