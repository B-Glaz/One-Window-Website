export type Testimonial = {
  name: string;
  outcome: string;
  summary: string;
  trustLine: string;
  video: string;
};

export const testimonials: readonly Testimonial[] = [
  { name: "Ashish Saraf", outcome: "Boston University · Entrepreneurship & Innovation Management", summary: "With only four months before admission, Ashish received focused profile evaluation, university selection, application and visa guidance that helped him move forward with clarity.", trustLine: "A late start, turned into a Boston University admit", video: "https://youtu.be/UA9wYg2NrVQ?si=f-vmS0Sp6rfeaXya" },
  { name: "Ishaan Purey", outcome: "Northeastern University · MS Mechanical Engineering", summary: "After earlier rejections affected his confidence, Ishaan rebuilt his profile with honest, responsive and personalised guidance, including focused preparation for his visa interview.", trustLine: "From rejection to renewed confidence and Northeastern", video: "https://youtu.be/_yoR9kkPngA?si=D7dIjhEV_BcMSP8G" },
  { name: "Riya Sancheti", outcome: "Columbia University · Master’s degree", summary: "Riya balanced university applications with academics, internships and extracurriculars. One Window helped manage her shortlist, profile and deadlines, leading to five offers from eight applications.", trustLine: "Five offers, including two Ivy League admits", video: "https://youtu.be/4C9iXN3wYpg?si=D5VcMcIqqNgn7zy6" },
  { name: "Shivam Sibal", outcome: "Arizona State University · MS Computer Science", summary: "Shivam received patient, responsive support across university selection, applications, visa booking and mock interviews before choosing ASU for its machine learning and AI curriculum.", trustLine: "A smooth path from shortlisting to ASU", video: "https://youtu.be/IXO5DQy1tbU?si=j7ZNR9tuGOZcGFAi" },
  { name: "Prakshi", outcome: "UMass Boston", summary: "From choosing the right programme and universities to completing the visa process, Prakshi had a team available to explain each step and respond whenever the process felt uncertain.", trustLine: "Supported at every step of the journey to Boston", video: "https://youtu.be/NqQcJIdrm4M?si=NiPduuQ4dY5ZMiaQ" },
  { name: "Vyshnavi", outcome: "New York University · Transfer admission", summary: "Vyshnavi navigated credit-transfer concerns and an uncertain application journey with consistent guidance, ultimately transferring from UMass Boston to NYU for stronger finance and economics exposure.", trustLine: "A complex transfer journey, completed with confidence", video: "https://youtu.be/7mnbQ_u6BbI?si=OOjIuElAKTt234Ox" },
];
