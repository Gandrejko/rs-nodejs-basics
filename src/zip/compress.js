import { createWriteStream, createReadStream } from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { createGzip } from 'zlib';
import { pipeline } from 'stream';

const __dirname = dirname(fileURLToPath(import.meta.url));

const sourceFileStream = createReadStream(path.join(__dirname, 'files', 'fileToCompress.txt'));
const zippedFileStream = createWriteStream(path.join(__dirname, 'files', 'archive.gz'));
const zipStream = createGzip();

const compress = async () => {
  pipeline(
    sourceFileStream,
    zipStream,
    zippedFileStream,
    (error) => console.error(error)
  )
};

await compress();