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
    />
  );
}
