import fs from "fs/promises";
import path from 'path';
import { fileURLToPath } from "url";
import { createHash } from "crypto";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, "files", "fileToCalculateHashFor.txt");

const calculateHash = async () => {
  const content = await fs.readFile(filePath);
  const hash = createHash('sha256').update(content).digest('hex');
  console.log(hash);
};

await calculateHash();