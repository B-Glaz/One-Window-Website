import { ReferencePage } from "../../reference-pages";

export default function ToolsPage() {
  return (
    <ReferencePage
      eyebrow="Tools"
      title="Useful clarity for your next step."
      intro="Explore practical tools that help you think through destinations, courses and applications."
      items={[
        ["Compare destinations", "Start with the countries that fit your priorities."],
        ["Plan your questions", "Use each conversation to move one decision forward."],
        ["Map your next steps", "Turn a broad ambition into a sequence you can follow."],
        ["Return when you need to", "Your study-abroad plan can become clearer one question at a time."],
      ]}
    />
  );
}
