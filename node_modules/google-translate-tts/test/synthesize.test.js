const tts = require("../src/index.js");
const fs = require("fs");

describe("tts", () => {
  describe("synthesize", () => {
    let clip;

    beforeAll(async () => {
      clip = await tts.synthesize({ text: "hello", voice: "en-US" });
    });

    it("should return a Buffer", () => {
      expect(clip instanceof Buffer).toBeTruthy();
    });

    it("should return audio data", () => {
      // uncomment to update snapshot
      // fs.writeFileSync("test/snapshot.mp3", clip);

      const snapshot = fs.readFileSync("test/snapshot.mp3");

      expect(snapshot.equals(clip)).toBeTruthy();
    });
  });
});
