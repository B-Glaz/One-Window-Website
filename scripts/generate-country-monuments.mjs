import { mkdir, readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import sharp from "sharp";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const out = join(root, "public", "monuments");
const premium = join(root, "public", "monuments-premium");

const sourceBySlug = {
  usa: join(root, "public", "monument-usa.webp"),
  uk: join(premium, "monument-uk.png"),
  australia: join(root, "public", "monument-australia.webp"),
  ireland: join(premium, "monument-ireland.png"),
  singapore: join(premium, "monument-singapore.png"),
  france: join(premium, "monument-france.png"),
  italy: join(premium, "monument-italy.png"),
  germany: join(root, "public", "monument-germany.webp"),
  canada: join(premium, "monument-canada.png"),
  dubai: join(premium, "monument-dubai.png"),
  netherlands: join(premium, "monument-netherlands.png"),
  "new-zealand": join(premium, "monument-new-zealand.png"),
  spain: join(premium, "monument-spain.png"),
  switzerland: join(premium, "monument-switzerland.png"),
  "hong-kong": join(premium, "monument-hong-kong.png"),
  sweden: join(premium, "monument-sweden.png"),
};

const labelBySlug = {
  usa: "the United States", uk: "the United Kingdom", australia: "Australia",
  ireland: "Ireland", singapore: "Singapore", france: "France", italy: "Italy",
  germany: "Germany", canada: "Canada", dubai: "Dubai", netherlands: "the Netherlands",
  "new-zealand": "New Zealand", spain: "Spain", switzerland: "Switzerland",
  "hong-kong": "Hong Kong", sweden: "Sweden",
};

await mkdir(out, { recursive: true });

for (const [slug, source] of Object.entries(sourceBySlug)) {
  const sourceBytes = await readFile(source);
  const image = sharp(sourceBytes);
  const metadata = await image.metadata();
  const png = await image.png().toBuffer();
  const encoded = png.toString("base64");
  const { width, height } = metadata;
  const label = labelBySlug[slug];
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" role="img" aria-labelledby="title desc">
  <title id="title">${label} landmark</title>
  <desc id="desc">Premium dimensional landmark artwork representing ${label}, isolated on a transparent background.</desc>
  <image width="${width}" height="${height}" preserveAspectRatio="xMidYMid meet" href="data:image/png;base64,${encoded}"/>
</svg>\n`;
  await writeFile(join(out, `monument-${slug}.svg`), svg, "utf8");
}

console.log(`Packaged ${Object.keys(sourceBySlug).length} premium transparent monument SVGs in ${out}`);
