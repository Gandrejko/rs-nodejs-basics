import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const sourceFile = path.join(__dirname, 'files', 'wrongFilename.txt');
const destinationFile = path.join(__dirname, 'files', 'properFilename.md');
const rename = async () => {
  try {
    await fs.rename(sourceFile, destinationFile);
  } catch {
    throw new Error('FS operation failed');
  }
};

await rename();