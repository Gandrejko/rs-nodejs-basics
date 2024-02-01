import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, 'files', 'fileToRead.txt');

const read = async () => {
  try {
    const text = await fs.readFile(filePath, {encoding: 'utf8'});
    console.log(text);
  } catch {
    throw new Error('FS operation failed');
  }
};

await read();