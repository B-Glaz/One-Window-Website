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
    />
  );
}
