import sharp from "sharp";
import { writeFileSync } from "fs";
import { join } from "path";

const pub = join(process.cwd(), "public");
const svg = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180">
  <rect width="180" height="180" rx="36" fill="#0A0A0B"/>
  <text x="90" y="118" text-anchor="middle" font-family="Georgia,serif" font-size="110" font-weight="600" fill="#F4B048">S</text>
</svg>`);

await sharp(svg).png().toFile(join(pub, "apple-touch-icon.png"));

function pngToIco(pngBuffers, dims) {
  const count = pngBuffers.length;
  const headerSize = 6 + count * 16;
  let dataOffset = headerSize;
  const out = Buffer.alloc(headerSize + pngBuffers.reduce((a, b) => a + b.length, 0));
  out.writeUInt16LE(0, 0);
  out.writeUInt16LE(1, 2);
  out.writeUInt16LE(count, 4);
  let entryOffset = 6;
  for (let i = 0; i < count; i++) {
    const d = dims[i];
    out.writeUInt8(d >= 256 ? 0 : d, entryOffset);
    out.writeUInt8(d >= 256 ? 0 : d, entryOffset + 1);
    out.writeUInt8(0, entryOffset + 2);
    out.writeUInt8(0, entryOffset + 3);
    out.writeUInt16LE(1, entryOffset + 4);
    out.writeUInt16LE(32, entryOffset + 6);
    out.writeUInt32LE(pngBuffers[i].length, entryOffset + 8);
    out.writeUInt32LE(dataOffset, entryOffset + 12);
    pngBuffers[i].copy(out, dataOffset);
    dataOffset += pngBuffers[i].length;
    entryOffset += 16;
  }
  return out;
}

const p16 = await sharp(svg).resize(16, 16).png().toBuffer();
const p32 = await sharp(svg).resize(32, 32).png().toBuffer();
writeFileSync(join(pub, "favicon.ico"), pngToIco([p16, p32], [16, 32]));
console.log("Wrote apple-touch-icon.png and favicon.ico");
