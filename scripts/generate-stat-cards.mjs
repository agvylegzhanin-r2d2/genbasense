import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, '..', 'imgs', 'genbasense_images', 'stat-cards');

const W = 300;
const H = 160;
const PAD_X = 16;
const PAD_TOP = 24;
const VALUE_SIZE = 36;
const LABEL_SIZE = 13;
const LABEL_LINE = 18;
const VALUE_COLOR = '#2d5a27';
const LABEL_COLOR = '#666666';
const BG = '#f7f7f7';
const BORDER = '#e8e8e8';
const RADIUS = 16;

const cards = [
  { value: '8000', label: 'Non-fatal injury cases per year on construction sites and warehouses', file: 'stat-01-injury-cases' },
  { value: '80%', label: 'Of daily wages paid for lost workdays after accidents', file: 'stat-02-lost-wages' },
  { value: '¥10M', label: 'Compensation range for serious injuries', file: 'stat-03-compensation' },
  { value: '223', label: 'Fatal cases in 2025', file: 'stat-04-fatal-cases' },
  { value: '60', label: 'Average days of lost work per injury', file: 'stat-05-lost-work-days' },
  { value: '↑', label: 'Increased insurance', file: 'stat-06-increased-insurance' },
  { value: '¥100-300K', label: 'Machinery idle', file: 'stat-07-machinery-idle' },
];

function wrapLines(text, maxChars) {
  const words = text.split(' ');
  const lines = [];
  let line = '';
  for (const word of words) {
    const next = line ? `${line} ${word}` : word;
    if (next.length > maxChars && line) {
      lines.push(line);
      line = word;
    } else {
      line = next;
    }
  }
  if (line) lines.push(line);
  return lines;
}

function escapeXml(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function cardSvg(value, label) {
  const lines = wrapLines(label, 34);
  const labelStartY = PAD_TOP + VALUE_SIZE + 14;
  const labelSpans = lines
    .map((line, i) => `<tspan x="${W / 2}" dy="${i === 0 ? 0 : LABEL_LINE}">${escapeXml(line)}</tspan>`)
    .join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <rect x="0.5" y="0.5" width="${W - 1}" height="${H - 1}" rx="${RADIUS}" ry="${RADIUS}" fill="${BG}" stroke="${BORDER}" stroke-width="1"/>
  <text x="${W / 2}" y="${PAD_TOP + VALUE_SIZE - 6}" text-anchor="middle" font-family="Segoe UI, system-ui, -apple-system, sans-serif" font-size="${VALUE_SIZE}" font-weight="700" fill="${VALUE_COLOR}">${escapeXml(value)}</text>
  <text x="${W / 2}" y="${labelStartY}" text-anchor="middle" font-family="Segoe UI, system-ui, -apple-system, sans-serif" font-size="${LABEL_SIZE}" fill="${LABEL_COLOR}">
    ${labelSpans}
  </text>
</svg>`;
}

fs.mkdirSync(outDir, { recursive: true });

for (const card of cards) {
  const svg = cardSvg(card.value, card.label);
  const pngPath = path.join(outDir, `${card.file}.png`);
  await sharp(Buffer.from(svg)).png().toFile(pngPath);
  console.log('Wrote', pngPath);
}
