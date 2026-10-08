const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

function readPNG(filePath) {
  const buffer = fs.readFileSync(filePath);
  if (buffer.readUInt32BE(0) !== 0x89504e47 || buffer.readUInt32BE(4) !== 0x0d0a1a0a) {
    throw new Error('Not a PNG file: ' + filePath);
  }

  let offset = 8;
  let width, height, bitDepth, colorType, compressionMethod, filterMethod, interlaceMethod;
  const idatChunks = [];

  while (offset < buffer.length) {
    const length = buffer.readUInt32BE(offset);
    const type = buffer.toString('ascii', offset + 4, offset + 8);
    const data = buffer.slice(offset + 8, offset + 8 + length);

    if (type === 'IHDR') {
      width = data.readUInt32BE(0);
      height = data.readUInt32BE(4);
      bitDepth = data[8];
      colorType = data[9];
      compressionMethod = data[10];
      filterMethod = data[11];
      interlaceMethod = data[12];
    } else if (type === 'IDAT') {
      idatChunks.push(data);
    } else if (type === 'IEND') {
      break;
    }

    offset += 12 + length;
  }

  const compressedData = Buffer.concat(idatChunks);
  const decompressedData = zlib.inflateSync(compressedData);

  return {
    width,
    height,
    bitDepth,
    colorType,
    decompressedData,
  };
}

function unfilterPNG(png) {
  const { width, height, decompressedData, colorType } = png;
  let bytesPerPixel = 4; // RGBA
  if (colorType === 2) bytesPerPixel = 3; // RGB
  if (colorType === 6) bytesPerPixel = 4; // RGBA

  const stride = width * bytesPerPixel;
  const rawPixels = Buffer.alloc(width * height * bytesPerPixel);

  let srcOffset = 0;
  let dstOffset = 0;

  for (let y = 0; y < height; y++) {
    const filterType = decompressedData[srcOffset++];
    const prevRowOffset = y > 0 ? (y - 1) * stride : -1;
    const currRowOffset = y * stride;

    for (let x = 0; x < stride; x++) {
      const rawByte = decompressedData[srcOffset++];
      const a = x >= bytesPerPixel ? rawPixels[currRowOffset + x - bytesPerPixel] : 0;
      const b = prevRowOffset >= 0 ? rawPixels[prevRowOffset + x] : 0;
      const c = (x >= bytesPerPixel && prevRowOffset >= 0) ? rawPixels[prevRowOffset + x - bytesPerPixel] : 0;

      let val = 0;
      if (filterType === 0) { // None
        val = rawByte;
      } else if (filterType === 1) { // Sub
        val = (rawByte + a) & 0xff;
      } else if (filterType === 2) { // Up
        val = (rawByte + b) & 0xff;
      } else if (filterType === 3) { // Average
        val = (rawByte + Math.floor((a + b) / 2)) & 0xff;
      } else if (filterType === 4) { // Paeth
        const p = a + b - c;
        const pa = Math.abs(p - a);
        const pb = Math.abs(p - b);
        const pc = Math.abs(p - c);
        let pr;
        if (pa <= pb && pa <= pc) pr = a;
        else if (pb <= pc) pr = b;
        else pr = c;
        val = (rawByte + pr) & 0xff;
      }
      rawPixels[currRowOffset + x] = val;
    }
  }

  return { width, height, rawPixels, bytesPerPixel };
}

function crc32(buf) {
  let crc = 0xffffffff;
  for (let i = 0; i < buf.length; i++) {
    let byte = buf[i];
    for (let j = 0; j < 8; j++) {
      if ((crc ^ byte) & 1) {
        crc = (crc >>> 1) ^ 0xedb88320;
      } else {
        crc = crc >>> 1;
      }
      byte = byte >>> 1;
    }
  }
  return (crc ^ 0xffffffff) >>> 0;
}

function writeChunk(type, data) {
  const lengthBuf = Buffer.alloc(4);
  lengthBuf.writeUInt32BE(data.length, 0);
  const typeBuf = Buffer.from(type, 'ascii');
  const crcBuf = Buffer.alloc(4);
  const toCrc = Buffer.concat([typeBuf, data]);
  crcBuf.writeUInt32BE(crc32(toCrc), 0);
  return Buffer.concat([lengthBuf, typeBuf, data, crcBuf]);
}

function createPNG(width, height, rawRGBA) {
  const signature = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

  // IHDR
  const ihdrData = Buffer.alloc(13);
  ihdrData.writeUInt32BE(width, 0);
  ihdrData.writeUInt32BE(height, 4);
  ihdrData[8] = 8; // bit depth
  ihdrData[9] = 6; // color type RGBA
  ihdrData[10] = 0; // compression
  ihdrData[11] = 0; // filter
  ihdrData[12] = 0; // interlace
  const ihdrChunk = writeChunk('IHDR', ihdrData);

  // Scanlines with filter type 0 (None)
  const scanlines = Buffer.alloc(height * (1 + width * 4));
  let scanOffset = 0;
  let rawOffset = 0;
  const stride = width * 4;

  for (let y = 0; y < height; y++) {
    scanlines[scanOffset++] = 0; // Filter None
    rawRGBA.copy(scanlines, scanOffset, rawOffset, rawOffset + stride);
    scanOffset += stride;
    rawOffset += stride;
  }

  const idatCompressed = zlib.deflateSync(scanlines);
  const idatChunk = writeChunk('IDAT', idatCompressed);
  const iendChunk = writeChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([signature, ihdrChunk, idatChunk, iendChunk]);
}

function trimPNG(inputPath, outputPath) {
  const png = readPNG(inputPath);
  const { width, height, rawPixels } = unfilterPNG(png);

  let minX = width, minY = height, maxX = 0, maxY = 0;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * 4;
      const alpha = rawPixels[idx + 3];
      if (alpha > 10) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }

  if (minX > maxX || minY > maxY) {
    console.log(`Image ${inputPath} is completely transparent!`);
    return;
  }

  // Add 10px padding if possible
  const padding = 20;
  minX = Math.max(0, minX - padding);
  minY = Math.max(0, minY - padding);
  maxX = Math.min(width - 1, maxX + padding);
  maxY = Math.min(height - 1, maxY + padding);

  const croppedWidth = maxX - minX + 1;
  const croppedHeight = maxY - minY + 1;

  console.log(`${path.basename(inputPath)}: original ${width}x${height} -> cropped ${croppedWidth}x${croppedHeight}`);

  const croppedPixels = Buffer.alloc(croppedWidth * croppedHeight * 4);
  for (let y = 0; y < croppedHeight; y++) {
    const srcY = minY + y;
    const srcStart = (srcY * width + minX) * 4;
    const dstStart = y * croppedWidth * 4;
    rawPixels.copy(croppedPixels, dstStart, srcStart, srcStart + croppedWidth * 4);
  }

  const croppedPNG = createPNG(croppedWidth, croppedHeight, croppedPixels);
  fs.writeFileSync(outputPath, croppedPNG);
}

const photosDir = path.join(__dirname, '..', 'public', 'photos');
const files = ['bichitro.png', 'cat.png', 'abhisekh.png', 'mallika.png'];

files.forEach(f => {
  const src = path.join(photosDir, f);
  if (fs.existsSync(src)) {
    trimPNG(src, src);
  }
});
console.log('All character photos trimmed successfully!');
