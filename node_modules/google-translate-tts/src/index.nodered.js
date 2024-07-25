const synthesize = require("./synthesize");

module.exports = (RED) => {
  function TextToSpeechNode(config) {
    RED.nodes.createNode(this, config);

    const node = this;

    const voice = config.voice;

    node.on("input", async (msg) => {
      const buffer = await synthesize({ text: msg.payload, voice });
      node.send({ payload: buffer });
    });
  }

  RED.nodes.registerType("text-to-speech", TextToSpeechNode);
};
