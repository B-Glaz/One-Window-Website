import { rmSync } from "node:fs";
import { basename, dirname, resolve } from "node:path";

const appDirectory = resolve("App", "Frontend");
const buildDirectory = resolve(appDirectory, ".next");

if (dirname(buildDirectory) !== appDirectory || basename(buildDirectory) !== ".next") {
  throw new Error(`Refusing to clean unexpected build directory: ${buildDirectory}`);
}

rmSync(buildDirectory, { force: true, recursive: true });
console.log(`Cleared Next.js build output: ${buildDirectory}`);
