import type { Metadata } from "next";
import { MaltaLandingPage } from "./landing-page-malta";

export const metadata: Metadata = {
  title: "Malta for Indian Students | One Window",
  description:
    "Plan your Malta education journey with guidance on recognised institutions, eligibility, costs, scholarships, visas, student life and career preparation.",
  openGraph: {
    title: "Study in Malta for Indian Students | One Window",
    description:
      "A practical Malta study guide covering institutions, admissions, costs, visas, student life and career planning.",
    type: "website",
  },
};

export default function MaltaLandingRoute() {
  return <MaltaLandingPage />;
}
