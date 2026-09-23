import fs from 'node:fs';

const file = process.argv[2] || 'docs/index.html';
const html = fs.readFileSync(file, 'utf8');
const required = [
  '<!doctype html>',
  'name="viewport"',
  'https://cdn.tailwindcss.com',
  'https://unpkg.com/lucide@latest',
  'id="fast-toggle"',
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

for (const match of html.matchAll(/href="(https?:\/\/[^\"]+)"/g)) {
  new URL(match[1].replaceAll('&amp;', '&'));
}

console.log(`OK: ${file} (${html.length} bytes)`);
