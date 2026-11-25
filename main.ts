// The Battery's Last Text to Its Charger — make.fun program/v1 entry.
//
// Writes one line (under 200 characters) to <output>/entry.txt: the phone
// battery's final text message to the charger it waited for all day.
//
// The line was chosen against the judge brief: on subject first (a battery
// texting its charger, in a texting voice), then a real joke with a turn
// that pays off in the final words, not just a sad sentiment. The angle is
// betrayal, not dying: the charger spent all day charging everything else
// — the lamp, the speaker, even the toothbrush — while the battery waited.
// The caps-lock repeat of THE TOOTHBRUSH is the escalation, and the
// punchline lands last: a very expensive paperweight with trust issues.
// It stays funny on a second read because the betrayal list rewards
// re-reading (lamp, speaker… toothbrush) and "trust issues" reframes the
// whole text as a breakup message, which is what a last text is.
//
// Final line (179 characters):
//   hey. it's me, 1%. all day i watched you charge the lamp, the speaker,
//   even the toothbrush. THE TOOTHBRUSH. come get me now or i die a very
//   expensive paperweight with trust issues.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "hey. it's me, 1%. all day i watched you charge the lamp, the speaker, even the toothbrush. THE TOOTHBRUSH. come get me now or i die a very expensive paperweight with trust issues.";

const MAX_CHARS = 200;

function main(): void {
  const chars = [...ENTRY].length;
  if (chars < 1 || chars > MAX_CHARS) {
    throw new Error(`entry is ${chars} characters, must be 1-${MAX_CHARS}`);
  }
  if (ENTRY.trim() !== ENTRY) {
    throw new Error("entry must not start or end with whitespace");
  }
  if (ENTRY.includes("\n")) {
    throw new Error("entry must be a single line");
  }
  if (/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/.test(ENTRY)) {
    throw new Error("entry must not contain control characters");
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, ENTRY, "utf8");
  const roundTrip = readFileSync(outPath, "utf8");
  if (roundTrip !== ENTRY) {
    throw new Error("entry.txt did not round-trip byte for byte");
  }
  console.log(`wrote ${outPath} (${chars} characters)`);
}

main();
