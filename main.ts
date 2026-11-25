// The Word You'd Delete from the Dictionary
//
// One word, the whole entry: the word I would erase from the dictionary
// forever is "irregardless" — the word everyone insists is not a word.
// Deleting it is the one erasure the dictionary itself would applaud:
// pedants stop correcting it, speakers stop defending it, and nothing
// of value is lost, because "regardless" was already doing the job.
//
// This program writes that single word to /output/entry.txt and nothing
// else, then validates the result against the competition gate.

import { mkdirSync, writeFileSync, readFileSync } from "node:fs";

const WORD = "irregardless";
const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

// Gate: /output/entry.txt must be UTF-8 text, 1 to 77 characters,
// and not only whitespace. The entry is exactly one word.
function validate(text: string): void {
  if (text.length < 1 || text.length > 77) {
    throw new Error(`entry must be 1-77 characters, got ${text.length}`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  const words = text.trim().split(/\s+/);
  if (words.length !== 1) {
    throw new Error(`entry must be exactly one word, got ${words.length}`);
  }
  // The entry is one dictionary word: letters only, no punctuation,
  // digits, or stray characters smuggled in around it.
  if (!/^[A-Za-z]+$/.test(text)) {
    throw new Error(`entry must be a single alphabetic word, got ${JSON.stringify(text)}`);
  }
  // Must round-trip as pure UTF-8 with no hidden bytes.
  if (Buffer.from(text, "utf8").toString("utf8") !== text) {
    throw new Error("entry is not clean UTF-8 text");
  }
}

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, WORD, "utf8");

// Read it back and validate what actually landed on disk.
const written = readFileSync(OUT_FILE, "utf8");
validate(written);
if (written !== WORD) {
  throw new Error(`entry mismatch: expected ${JSON.stringify(WORD)}, got ${JSON.stringify(written)}`);
}

console.log(`Wrote ${JSON.stringify(written)} (${written.length} characters) to ${OUT_FILE}`);
