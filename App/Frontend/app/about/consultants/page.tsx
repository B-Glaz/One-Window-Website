import { ReferencePage } from "../../reference-pages";

export default function ConsultantsPage() {
  return (
    <ReferencePage
      eyebrow="Our consultants"
      title="Guidance shaped around your next move."
      intro="Meet a team that turns study-abroad decisions into a clear, considered plan."
      items={[
        ["Listen before we advise", "We start with your goals, context and questions before suggesting a direction."],
        ["Make choices easier to compare", "Understand destinations, programmes, costs and timing in one conversation."],
        ["Stay close to the details", "Get practical support as your shortlist and application plan take shape."],
        ["Keep your future in view", "Every recommendation is connected to the next chapter you want to build."],
      ]}
      quotes={[
        ["The best guidance made the next decision feel possible.", "A One Window student"],
        ["We wanted a clear plan, not a pile of links. That is what we found.", "A One Window parent"],
      ]}
      sections={[
        {
          title: "Our experts",
          body: "One Window conversations are designed to feel personal, informed and useful. The right advisor helps you see the decision clearly without taking it away from you.",
          items: [
            "Destination specialists who understand the practical differences between countries.",
            "Course and application advisors who help you connect ambition to evidence.",
            "Experienced guides who make complex next steps easier to act on.",
          ],
        },
        {
          title: "How our guidance works",
          body: "We combine context, strategy and steady follow-through so your plan can evolve as your goals become clearer.",
          items: [
            "Start with your story, priorities and current profile.",
            "Build a route with realistic options and clear trade-offs.",
            "Stay close to the details through the next stage of the journey.",
          ],
        },
      ]}
    />
  );
}
