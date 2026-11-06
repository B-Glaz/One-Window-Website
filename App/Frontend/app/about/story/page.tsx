import { ReferencePage } from "../../reference-pages";

export default function StoryPage() {
  return (
    <ReferencePage
      eyebrow="Our story"
      title="One window for the whole decision."
      intro="We built One Window to make studying abroad feel less fragmented and more human."
      items={[
        ["Start with the student", "The right answer begins with the person, not a generic destination list."],
        ["Connect the moving parts", "Course, country, cost and career should be considered together."],
        ["Keep advice useful", "Clear language and practical next steps matter at every stage."],
        ["Build for what comes next", "The goal is not just an application, but a future you can see yourself in."],
      ]}
    />
  );
}
