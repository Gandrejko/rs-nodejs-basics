import { pipeline, Transform } from 'stream';

const reverse = new Transform({
  transform(chunk, encoding, callback) {
    const string = chunk.toString().trim();
    const reversedString = string.split('').reverse().join('');
    callback(null, reversedString + '\n');
  },
});

const transform = async () => {
  pipeline(
    process.stdin,
    reverse,
    process.stdout,
    (error) => console.error(error)
  )
};

await transform();