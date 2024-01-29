import path, { dirname } from 'path';
import { fork } from "child_process";
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const childModule = path.join(__dirname, "files", "script.js");

const spawnChildProcess = async (args) => {
  fork(childModule, args);
};

spawnChildProcess( [1, "a"]);