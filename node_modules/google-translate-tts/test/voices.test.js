const https = require("https");
const tts = require("../src/index");

test("All voice codes are valid", async (done) => {
  const responses = tts.voices.map((voice) => {
    return tts.synthesize({ text: "test", voice: voice.code }).catch((err) => {
      console.log("voice code failed: " + voice.code);
      console.log(err);
      done.fail("voice code failed: " + voice.code);
    });
  });

  await Promise.all(responses);
  done();
}, 10000);
