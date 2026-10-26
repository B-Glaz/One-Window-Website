import { ReferencePage } from "../reference-pages";
export default function EventsPage() {
  return (
    <ReferencePage
      eyebrow="One Window events"
      title="Conversations that move plans forward."
      intro="Join destination sessions, application conversations and practical workshops designed to help you make your next study-abroad decision with more confidence."
      items={[
        [
          "Destination sessions",
          "Meet the questions, opportunities and practical realities behind popular study destinations.",
        ],
        [
          "Application workshops",
          "Build a stronger plan around documents, deadlines and programme fit.",
        ],
        [
          "Student conversations",
          "Hear useful perspectives from people who have already taken the next step.",
        ],
        [
          "Partner briefings",
          "Bring institutions and students together around meaningful academic choices.",
        ],
      ]}
    />
  );
}
