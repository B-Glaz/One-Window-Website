import { ReferencePage } from "../reference-pages";
export default function AboutPage() {
  return (
    <ReferencePage
      eyebrow="About One Window"
      title="A clearer way to study abroad."
      intro="One Window brings thoughtful guidance and useful technology together so students can make informed decisions about their next chapter."
      items={[
        [
          "Start with the whole picture",
          "Look beyond a single university or deadline and understand how your course, destination and future connect.",
        ],
        [
          "Guidance that stays practical",
          "Turn complex choices into clear conversations, useful comparisons and next steps you can act on.",
        ],
        [
          "A bridge to opportunity",
          "Explore destinations, programmes and support with a team that keeps your goals at the centre.",
        ],
        [
          "Built for the next decision",
          "Whether you are just beginning or ready to apply, start with the question that matters most to you.",
        ],
      ]}
      stats={[["17+", "Years of student guidance"], ["16", "Study destinations in our country network"], ["750+", "Student stories across destinations"], ["1", "Window for the whole decision"]]}
      sections={[
        {
          title: "What makes the difference?",
          body: "Study-abroad decisions rarely fit into one conversation. One Window brings destination insight, course thinking, application planning and practical support into one connected experience.",
          items: [
            "A wider view of your options before you commit to one route.",
            "Guidance that connects your academic profile with your longer-term plans.",
            "A clear next step after every conversation, comparison or shortlist.",
          ],
        },
        {
          title: "The people behind the window",
          body: "Our work is shaped by people who understand the decisions students and families are making, from the first question to the final application step.",
          items: [
            "Country and course specialists who keep advice practical.",
            "Application-focused advisors who help turn information into action.",
            "A connected team that keeps the student journey in view.",
          ],
        },
      ]}
    />
  );
}
