// The Robot Vacuum's Funniest Excuse
// Writes one line (<=120 chars) to /output/entry.txt: the excuse a robot
// vacuum gives for missing a spot. Deterministic, dependency-free.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My sensors classified that dust as load-bearing. I am not demolishing your floor over one crumb.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
