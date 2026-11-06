import { ReferencePage } from "../../reference-pages";

export default function DoItYourselfPage() {
  return (
    <ReferencePage
      eyebrow="Do it yourself"
      title="Make the first move with confidence."
      intro="A focused starting point for students and families who want to explore before they speak with an advisor."
      items={[
        ["Understand the route", "Learn what to look for before choosing a destination or programme."],
        ["Check the details", "Keep requirements, costs and timelines visible as you compare options."],
        ["Build your shortlist", "Collect the choices that feel right for your goals."],
        ["Ask for help when ready", "Bring your shortlist to One Window for a more personal next step."],
      ]}
    />
  );
}
