/**
 * Builds the header/footer logo variants from the background-removed master.
 *
 * The master logo mixes blue ("Multi"), black ("Limp" + "higienização") and a
 * white-filled sofa outlined in navy. A plain invert would flatten the sofa
 * into a white blob, so the light variant is built as an ink matte instead:
 * every dark pixel becomes opaque white, the sofa's white fill becomes
 * transparent and its navy outline survives as a white stroke.
 */
import sharp from "sharp";

const DIR = "./public/images/multilimp";
const SRC = `${DIR}/logo-multilimp-recorte.png`;

/**
 * Box covering the "higienização" subline, measured on the trimmed 545x429
 * master. It stops short of x=477, where the descender of the "p" in "Limp"
 * lives, so only the subline is removed. Kept as fractions so a re-export of
 * the master at another size still lands on the same block.
 */
const SUBLINE = { x0: 0.455, x1: 0.872, y0: 0.898 };

async function dropSubline(buffer) {
  const { data, info } = await sharp(buffer).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const x0 = Math.round(SUBLINE.x0 * info.width);
  const x1 = Math.round(SUBLINE.x1 * info.width);
  const y0 = Math.round(SUBLINE.y0 * info.height);
  for (let y = y0; y < info.height; y += 1) {
    for (let x = x0; x < x1; x += 1) {
      data[(y * info.width + x) * 4 + 3] = 0;
    }
  }
  return sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } })
    .trim({ threshold: 1 })
    .png({ compressionLevel: 9 })
    .toBuffer({ resolveWithObject: true });
}

async function trimmed(input) {
  return sharp(input).trim({ threshold: 1 }).toBuffer({ resolveWithObject: true });
}

// Full-colour cut-out, trimmed — used on light surfaces.
const color = await trimmed(SRC);
await sharp(color.data).png({ compressionLevel: 9 }).toFile(`${DIR}/logo-multilimp-color.png`);
console.log(`logo-multilimp-color.png ${color.info.width}x${color.info.height}`);

const colorCompact = await dropSubline(color.data);
await sharp(colorCompact.data).toFile(`${DIR}/logo-multilimp-color-compacta.png`);
console.log(`logo-multilimp-color-compacta.png ${colorCompact.info.width}x${colorCompact.info.height}`);

// White ink matte — used on the navy header, footer and any dark surface.
const { data, info } = await sharp(SRC)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const px = info.width * info.height;
const out = Buffer.alloc(px * 4);
for (let i = 0; i < px; i += 1) {
  const r = data[i * 4];
  const g = data[i * 4 + 1];
  const b = data[i * 4 + 2];
  const a = data[i * 4 + 3];
  const luma = 0.299 * r + 0.587 * g + 0.114 * b;
  // Anything darker than the paper counts as full ink, so the blue "Multi" and
  // the black "Limp" end up equally white; only the last stop of the ramp is
  // left to soften the glyph edges.
  const ink = Math.min(1, Math.max(0, (255 - luma) / 56));
  out[i * 4] = 255;
  out[i * 4 + 1] = 255;
  out[i * 4 + 2] = 255;
  out[i * 4 + 3] = Math.round(ink * a);
}

const white = await sharp(out, { raw: { width: info.width, height: info.height, channels: 4 } })
  .trim({ threshold: 1 })
  .png({ compressionLevel: 9 })
  .toBuffer({ resolveWithObject: true });

await sharp(white.data).toFile(`${DIR}/logo-multilimp-branca.png`);
console.log(`logo-multilimp-branca.png ${white.info.width}x${white.info.height}`);

// Header/footer variant: the subline is unreadable at bar height, so it goes.
const whiteCompact = await dropSubline(white.data);
await sharp(whiteCompact.data).toFile(`${DIR}/logo-multilimp-branca-compacta.png`);
console.log(`logo-multilimp-branca-compacta.png ${whiteCompact.info.width}x${whiteCompact.info.height}`);
