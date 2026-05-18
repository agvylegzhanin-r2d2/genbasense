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

const OUT_SIZE = 512;
const ZOOM_DEFAULT = 1.14;
const ZOOM_BY_FILE = { 'constr sites.png': 1.34 };

async function maskToCircle(file) {
  const zoom = ZOOM_BY_FILE[file] ?? ZOOM_DEFAULT;
  const input = path.join(imgsDir, file);
  const r = Math.round(OUT_SIZE / 2) - 1;
  const mask = Buffer.from(
    `<svg width="${OUT_SIZE}" height="${OUT_SIZE}" xmlns="http://www.w3.org/2000/svg">` +
      `<circle cx="${OUT_SIZE / 2}" cy="${OUT_SIZE / 2}" r="${r}" fill="white"/>` +
      `</svg>`
  );

  const trimmed = await sharp(input).trim({ threshold: 18 }).toBuffer();
  const zoomed = Math.round(OUT_SIZE * zoom);
  const cropped = await sharp(trimmed)
    .resize(zoomed, zoomed, { fit: 'cover', position: 'center' })
    .extract({
      left: Math.round((zoomed - OUT_SIZE) / 2),
      top: Math.round((zoomed - OUT_SIZE) / 2),
      width: OUT_SIZE,
      height: OUT_SIZE,
    })
    .ensureAlpha()
    .composite([{ input: mask, blend: 'dest-in' }])
    .png({ compressionLevel: 9 })
    .toBuffer();

  await sharp(cropped).toFile(input);
  console.log('processed:', file);
}

for (const file of files) {
  await maskToCircle(file);
}
