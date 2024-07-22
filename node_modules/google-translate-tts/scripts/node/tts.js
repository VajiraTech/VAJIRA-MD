const fs = require("fs");
const tts = require("../../src/index");

const [_, __, text, voice] = process.argv;
const slow = process.argv[4] === "y";

tts.synthesize({ text, voice, slow }).then((buffer) => {
  fs.writeFileSync("sample.mp3", buffer);
});
