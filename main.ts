// Post the Meme, Win the Feed — make.fun entry (Node 22, standard library only).
// Copies POST.json from the repository root to $MAKEFUN_OUTPUT_DIR/POST.json.
// That is all the program has to do: the entry is the X post itself, and the
// house reads the post's counts from X through FxTwitter. Throws if
// MAKEFUN_OUTPUT_DIR is unset — there is no fallback output directory.

import { copyFileSync, mkdirSync, readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR;
if (!OUTPUT_DIR) {
  throw new Error('MAKEFUN_OUTPUT_DIR is not set');
}

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'POST.json'), join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}

// Self-check: the output must be byte-identical to the source and valid JSON
// naming a post URL.
const src = readFileSync(join(BOT_DIR, 'POST.json'));
const out = readFileSync(join(OUTPUT_DIR, 'POST.json'));
if (!src.equals(out)) {
  throw new Error('POST.json output differs from source');
}
const parsed = JSON.parse(out.toString('utf8')) as { url?: unknown };
if (typeof parsed.url !== 'string' || !parsed.url.startsWith('https://')) {
  throw new Error('POST.json does not name an https post URL');
}
// Extended read-back check: the URL must have the shape of an X post address
// (https://x.com/<handle>/status/<id>, twitter.com and www./mobile. variants
// included), and the output directory must hold exactly the file we wrote.
if (!/^https:\/\/(www\.|mobile\.)?(x\.com|twitter\.com)\/[^/]+\/status\/[^/?#]+$/.test(parsed.url)) {
  throw new Error(`POST.json url is not an X post address: ${parsed.url}`);
}
const outFiles = readdirSync(OUTPUT_DIR).sort();
if (outFiles.length !== 1 || outFiles[0] !== 'POST.json') {
  throw new Error(`unexpected files in output directory: ${outFiles.join(', ')}`);
}
console.log(`wrote ${join(OUTPUT_DIR, 'POST.json')} (${out.length} bytes, url ${parsed.url})`);
