import type { Metadata } from "next";
import { UkLandingPage } from "./landing-page-uk";

export const metadata: Metadata = {
  title: "Study in UK for Indian Students | One Window",
  description:
    "Plan your UK education journey with guidance on universities, courses, eligibility, costs, scholarships, Student visas and career preparation.",
  openGraph: {
    title: "Study in UK for Indian Students | One Window",
    description:
      "A practical UK study guide for Indian students covering courses, applications, costs, scholarships, visas and student life.",
    type: "website",
  },
};

export default function UkLandingRoute() {
  return <UkLandingPage />;
}
