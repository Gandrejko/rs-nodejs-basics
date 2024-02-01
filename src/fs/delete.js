import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const remove = async () => {
  try {
    await fs.rm(path.join(__dirname, 'files', 'fileToRemove.txt'));
  } catch {
    throw new Error('FS operation failed');
  }
};

await remove();