import { ReferencePage } from "../../reference-pages";

export default function ResultsPage() {
  return (
    <ReferencePage
      eyebrow="Our results"
      title="Progress you can understand."
      intro="A better study-abroad journey is measured in clearer decisions, stronger applications and confident next steps."
      items={[
        ["A complete picture", "Bring destination, course, budget and timing into the same decision."],
        ["A stronger shortlist", "Move forward with options that fit your ambitions and profile."],
        ["A calmer process", "Know what needs attention next, without losing the thread."],
        ["A future-facing plan", "Choose a path that makes sense beyond the first offer."],
      ]}
      stats={[["17+", "Years of experience"], ["13K+", "Student profiles processed"], ["98%", "Admissions and visas approved"], ["$12M", "Successful scholarships"]]}
      quotes={[
        ["The process became easier to understand, one step at a time.", "A One Window student"],
        ["We always knew what the next action was.", "A One Window parent"],
      ]}
      sections={[
        {
          title: "A track record built around decisions",
          body: "The outcome is not just an offer. It is a better-informed student, a more intentional shortlist and a route that still makes sense when the excitement settles.",
          items: [
            "Profile conversations that identify the strongest next move.",
            "Shortlists built around fit, not just reputation.",
            "Application planning that keeps deadlines and documents visible.",
          ],
        },
        {
          title: "The moments that matter",
          body: "Every result begins earlier than the result itself. We focus on the small decisions that compound into a stronger application and a calmer experience.",
          items: [
            "Choosing a course direction with enough room to grow.",
            "Understanding the cost and commitment before applying.",
            "Knowing what to do next when a decision feels uncertain.",
          ],
        },
      ]}
    />
  );
}
