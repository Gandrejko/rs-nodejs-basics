import { createReadStream } from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, 'files', 'fileToRead.txt');

const readStream = createReadStream(filePath);

const read = async () => {
  readStream.pipe(process.stdout);
};

await read();