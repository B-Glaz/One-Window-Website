import type { Metadata } from "next";
import { UsaLandingPage } from "./landing-page-usa";

export const metadata: Metadata = {
  title: "Study in USA for Indian Students | One Window",
  description:
    "Plan your USA education journey with guidance on universities, eligibility, applications, costs, scholarships, F-1 visas and student life.",
  openGraph: {
    title: "Study in USA for Indian Students | One Window",
    description:
      "A practical guide to USA universities, admissions, costs, scholarships, visas and career preparation.",
    type: "website",
  },
};

export default function UsaLandingRoute() {
  return <UsaLandingPage />;
}

