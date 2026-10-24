import fs from "node:fs";
import path from "node:path";

const source = "C:/Digital Manager/CODE/OW Website/OW Scrape/onewindow_blogs.csv";
const target = path.resolve("app/blog/blog.ts");
const csv = fs.readFileSync(source, "utf8");
const rows = [];
let row = [], cell = "", quoted = false;
for (let i = 0; i < csv.length; i += 1) {
  const char = csv[i], next = csv[i + 1];
  if (quoted && char === '"' && next === '"') { cell += '"'; i += 1; continue; }
  if (char === '"') { quoted = !quoted; continue; }
  if (!quoted && char === ",") { row.push(cell); cell = ""; continue; }
  if (!quoted && (char === "\n" || char === "\r")) { if (char === "\r" && next === "\n") i += 1; row.push(cell); rows.push(row); row = []; cell = ""; continue; }
  cell += char;
}
if (cell || row.length) { row.push(cell); rows.push(row); }
const [header, ...records] = rows;
const index = Object.fromEntries(header.map((key, position) => [key, position]));
const slugify = (title) => title.toLowerCase().normalize("NFKD").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const isHeading = (line, next) => line.length > 18 && line.length < 125 && !/[.!:,;]$/.test(line) && Boolean(next) && next.length > 35 && !/^\d+[.)]/.test(line);
const clean = (value) => value.replace(/\r/g, "").trim();
const classify = (title) => /visa/i.test(title) ? "Visa" : /scholar|loan/i.test(title) ? "Funding" : /exam|ielts|gre|gmat/i.test(title) ? "Exams" : /finance|accommodation|homesick|friend|cultur|instagram/i.test(title) ? "Life abroad" : /university|admission|sop|backlog|gap|dentistry|law|mba|master/i.test(title) ? "Admissions" : "Destinations";
const articles = records.filter((record) => record.length >= header.length).map((record, serial) => {
  const title = clean(record[index.title]).replace(/^Value:\s*\d+,\s*/i, "");
  const lines = clean(record[index.content]).split(/\n+/).map(clean).filter(Boolean);
  const sections = [];
  let current = { heading: "The guide", paragraphs: [], bullets: [] };
  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i];
    if (isHeading(line, lines[i + 1])) { if (current.paragraphs.length || current.bullets.length) sections.push(current); current = { heading: line, paragraphs: [], bullets: [] }; continue; }
    if (/^\d+[.)]\s/.test(line) || /^[-•]\s/.test(line)) current.bullets.push(line.replace(/^(?:\d+[.)]|[-•])\s*/, ""));
    else current.paragraphs.push(line);
  }
  if (current.paragraphs.length || current.bullets.length) sections.push(current);
  const intro = sections[0]?.paragraphs?.slice(0, 3).join(" ") || lines.slice(0, 3).join(" ");
  if (sections[0]?.paragraphs?.length) sections[0].paragraphs = sections[0].paragraphs.slice(3);
  return { slug: `${slugify(title)}-${serial + 1}`, title, tag: classify(title), published: "One Window archive", sourceUrl: clean(record[index.url]), imageUrl: clean(record[index.thumbnail_url]), intro, sections: sections.filter((section) => section.paragraphs.length || section.bullets.length) };
});
const output = `import { manualArticles } from "./manual-articles";\n\nexport type BlogArticle = { slug: string; title: string; tag: string; published: string; sourceUrl: string; imageUrl: string; intro: string; sections: Array<{ heading: string; paragraphs?: string[]; bullets?: string[] }> };\n\nconst importedArticles: BlogArticle[] = ${JSON.stringify(articles, null, 2)};\nexport const articles: BlogArticle[] = [...importedArticles, ...manualArticles];\nexport const articleBySlug = Object.fromEntries(articles.map((article) => [article.slug, article]));\n`;
fs.writeFileSync(target, output);
console.log(`Imported ${articles.length} blog articles`);
