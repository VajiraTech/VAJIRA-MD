const fetch = require("node-fetch");
const translator = require("@vitalets/google-translate-api");

/**
 * Summarize text according to target number of lines and translate to any language
 * @param {string} text Text to summarize
 * @param {object} param  options
 * @param {string} param.sentences The number of line that needs to return after summarize. Default is 10
 * @param {string} param.translate Language to translated. Default is English
 * @return {Promise<string>} Summarized text
 */
async function summarize(text, { sentences, translate } = { sentences: 10 }) {
  if (!text) return "";
  const body = {
    url: "http://jcb.rupress.org/content/197/7/857.full",
    sentences,
    text,
  };
  // this fetch request is copied from https://open.blockspring.com/jjangsangy/summarize-text
  const response = await fetch(
    "https://run.blockspring.com/api_v2/blocks/summarize-text?&flatten=true",
    {
      body: JSON.stringify(body),
      method: "POST",
    }
  );
  const { summary } = await response.json();
  if (translate) {
    const translated = await translator(summary, { to: translate });
    return translated.text;
  }
  return summary;
}
module.exports = summarize.bind();
