import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const imgsDir = path.join(__dirname, '..', 'imgs');

const files = [
  'constr sites.png',
  'warehouses.png',
  'logistics centers.png',
  'heavy indusrt.png',
];

/** Circular mask: keep badge inside black ring, drop square white corners. */
async function maskToCircle(file) {
  const input = path.join(imgsDir, file);
  const meta = await sharp(input).metadata();
  const w = meta.width;
  const h = meta.height;
  const r = Math.round(Math.min(w, h) * 0.485);
  const cx = Math.round(w / 2);
  const cy = Math.round(h / 2);

  const mask = Buffer.from(
    `<svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">` +
      `<circle cx="${cx}" cy="${cy}" r="${r}" fill="white"/>` +
      `</svg>`
  );

  const buf = await sharp(input)
    .ensureAlpha()
    .composite([{ input: mask, blend: 'dest-in' }])
    .png({ compressionLevel: 9 })
    .toBuffer();

  await sharp(buf).toFile(input);
  console.log('masked:', file, `${w}x${h} r=${r}`);
}

for (const file of files) {
  await maskToCircle(file);
}
