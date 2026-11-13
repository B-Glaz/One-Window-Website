import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const files = {
  usa: "App/Frontend/app/countries-content/usa-landing.ts",
  uk: "App/Frontend/app/countries-content/uk-landing.ts",
};

const output = {};

for (const [key, relativePath] of Object.entries(files)) {
  const source = fs.readFileSync(path.join(root, relativePath), "utf8");
  const body = source
    .replace(/^export const \w+\s*=\s*/, "")
    .replace(/\s+as const;\s*$/, "");
  output[key] = Function(`"use strict"; return (${body});`)();
}

fs.writeFileSync(process.argv[2], JSON.stringify(output, null, 2), "utf8");
