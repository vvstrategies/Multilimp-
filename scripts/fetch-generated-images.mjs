/**
 * Pulls the generated artwork down from the image service and writes it into
 * public/images/multilimp at the sizes the components ask for. Re-run it only
 * when the source URLs below are refreshed — they are signed and expire.
 *
 * Replacing a photo means bumping the number in its file name. Browsers cache
 * the Next image optimizer output under the source URL and do not revalidate it
 * for an <img>, so reusing the name leaves the old photo on screen.
 */
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const OUT = "./public/images/multilimp";

const JOBS = [
  // [url, relative output path, format, width]
  ["https://pikaso.cdnpk.net/private/production/5657409244/render.png?token=exp=1791590400~hmac=483643482b11b962f48e8667e9ef565ab9a1e2180de357263b9306420263bb74", "servicos/sofas-e-estofados-2.webp", "webp", 1200],
  ["https://pikaso.cdnpk.net/private/production/5657409217/render.png?token=exp=1791590400~hmac=d0e95796fef52fdd60b9fd35937d01eece163a05a2e36c042a46618e99147329", "servicos/colchoes-2.webp", "webp", 1200],
  ["https://pikaso.cdnpk.net/private/production/5657409960/render.png?token=exp=1791590400~hmac=cc027313e2573f1b74acdac1d1d35128681ad0dec6be4156dc6f54e12a69512f", "servicos/bancos-automotivos-2.webp", "webp", 1200],
  ["https://pikaso.cdnpk.net/private/production/5657411013/render.png?token=exp=1791590400~hmac=855b810a79700302f9b5c4978b57645092edea802b9e927b4a3d1b25f5eb853c", "servicos/tapetes-e-carpetes-2.webp", "webp", 1200],
  ["https://pikaso.cdnpk.net/private/production/5657410190/render.png?token=exp=1791590400~hmac=62a0fc46d66c84f9365a287d43672ec618bd0b454753c03cba9dcaec5f197677", "diferenciais/impermeabilizacao-2.webp", "webp", 1000],
  ["https://pikaso.cdnpk.net/private/production/5657412055/render.png?token=exp=1791590400~hmac=87f5499ebfbfd42781e092db5a2cdc121f5f2e4bf8e3ca8bf1a192bc736491d4", "hero-estofado-2.webp", "webp", 1600],
];

for (const [url, rel, format, width] of JOBS) {
  const dest = path.join(OUT, rel);
  await mkdir(path.dirname(dest), { recursive: true });
  const res = await fetch(url);
  if (!res.ok) {
    console.error(`FAIL ${rel} -> ${res.status}`);
    continue;
  }
  const buf = Buffer.from(await res.arrayBuffer());
  let pipeline = sharp(buf).resize({ width, withoutEnlargement: true });
  pipeline = format === "png" ? pipeline.png({ compressionLevel: 9 }) : pipeline.webp({ quality: 82 });
  const out = await pipeline.toBuffer();
  await writeFile(dest, out);
  const meta = await sharp(out).metadata();
  console.log(`OK ${rel} ${meta.width}x${meta.height} ${(out.length / 1024).toFixed(0)}KB`);
}
