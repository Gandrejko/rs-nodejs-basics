import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const sourceFolder = path.join(__dirname, 'files');
const destinationFolder = path.join(__dirname, 'files_copy');
const copy = async () => {
  try {
    await fs.cp(sourceFolder, destinationFolder, {recursive: true, force: false, errorOnExist: true});
  } catch {
    throw new Error('FS operation failed');
  }
};

await copy();
