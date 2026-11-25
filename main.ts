// Invent a Word We Need — u-deranalabs-invent-a-word-we-need-17a020e0
// Writes the entry (one invented English word + one-line definition, at most
// 140 characters) to /output/entry.txt. Node 22, standard library only, no
// network, deterministic.
// Word: "phonnesia" (phone + amnesia) — sayable, spellable, memorable, and it
// names a real daily gap. The definition now shows the scene instead of
// telling it: unlocking with great purpose, then staring at the home screen
// while the purpose evaporates. One concrete image, lands in one reading.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const ENTRY =
  "Phonnesia (n.): unlocking your phone with great purpose, then staring at the home screen while the purpose evaporates.";
const MAX = 140;

if (ENTRY.length < 1 || ENTRY.length > MAX) {
  throw new Error(`entry is ${ENTRY.length} characters, gate needs 1–${MAX}`);
}
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");

// Read-back check: what landed on disk must be exactly the line above.
const back = readFileSync("/output/entry.txt", "utf8");
if (back !== ENTRY) {
  throw new Error("read-back mismatch: /output/entry.txt differs from ENTRY");
}
