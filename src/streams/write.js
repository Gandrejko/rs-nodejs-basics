import { createWriteStream } from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const pathToFile = path.join(__dirname, 'files', 'fileToWrite.txt');

const writeStream = createWriteStream(pathToFile);

const write = async () => {
  process.stdin.pipe(writeStream)
};

await write();