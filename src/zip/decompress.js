import { createWriteStream, createReadStream } from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { createGunzip } from 'zlib';
import { pipeline } from 'stream';

const __dirname = dirname(fileURLToPath(import.meta.url));

const sourceFileStream = createReadStream(path.join(__dirname, 'files', 'archive.gz'));
const unzippedFileStream = createWriteStream(path.join(__dirname, 'files', 'fileToCompress.txt'));
const unzipStream = createGunzip();

const decompress = async () => {
  pipeline(
    sourceFileStream,
    unzipStream,
    unzippedFileStream,
    (error) => console.error(error)
  )
};

await decompress();