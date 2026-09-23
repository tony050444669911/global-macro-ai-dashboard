import fs from 'node:fs';

const file = process.argv[2] || 'docs/index.html';
const html = fs.readFileSync(file, 'utf8');
const required = [
  '<!doctype html>',
  'name="viewport"',
  'https://cdn.tailwindcss.com',
  'https://unpkg.com/lucide@latest',
  'id="fast-toggle"',
  'id="glossary-dialog"',
  'id="glossary-open"',
  'id="term-ask"',
  'aria-live="polite"',
  'data-term=',
  'detail-block',
  'Macro Expectation Gap',
  'AI Frontier Track',
  'Active Narrative Tracker',
  'Macro & Tech Mental Model'
];

const missing = required.filter((needle) => !html.includes(needle));
if (missing.length) {
  console.error(`Missing required markers: ${missing.join(', ')}`);
  process.exit(1);
}

const termKeys = [...html.matchAll(/data-term="([^"]+)"/g)].map((match) => match[1]);
const uniqueTermKeys = [...new Set(termKeys)];
if (uniqueTermKeys.length < 6 || uniqueTermKeys.length > 10) {
  console.error(`Expected 6–10 glossary terms, found ${uniqueTermKeys.length}`);
  process.exit(1);
}

for (const key of uniqueTermKeys) {
  if (!html.includes(`'${key}':`) && !html.includes(`"${key}":`)) {
    console.error(`Glossary trigger has no embedded definition: ${key}`);
    process.exit(1);
  }
}

for (const match of html.matchAll(/href="(https?:\/\/[^\"]+)"/g)) {
  new URL(match[1].replaceAll('&amp;', '&'));
}

console.log(`OK: ${file} (${html.length} bytes)`);
