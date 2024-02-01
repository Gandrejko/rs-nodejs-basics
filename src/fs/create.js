import fs from "fs/promises";
import path from 'path';
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, "files", "fresh.txt");

const create = async () => {
  try{
    await fs.writeFile(filePath, "I am fresh and young", {flag: "wx"});
  } catch{
    throw new Error ("FS operation failed");
  }
};

await create();