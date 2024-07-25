const ytdl = require("ytdl-core");
const yts = require("yt-search");
const axios = require("axios");
const link = require("./tools/shortlink");

function bytesToSize(bytes) {
  return new Promise((resolve, reject) => {
    const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
    if (bytes === 0) return "n/a";
    const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
    if (i === 0) resolve(`${bytes} ${sizes[i]}`);
    resolve(`${(bytes / 1024 ** i).toFixed(1)} ${sizes[i]}`);
  });
}

function ytMp4(url) {
  return new Promise(async (resolve, reject) => {
    ytdl
      .getInfo(url)
      .then(async (getUrl) => {
        let result = [];
        for (let i = 0; i < getUrl.formats.length; i++) {
          let item = getUrl.formats[i];
          if (
            item.container == "mp4" &&
            item.hasVideo == true &&
            item.hasAudio == true
          ) {
            let { qualityLabel, contentLength, approxDurationMs } = item;
            let bytes = await bytesToSize(contentLength);
            result[i] = {
              video: item.url,
              quality: qualityLabel,
              size: bytes,
              duration: formated(parseInt(approxDurationMs)),
            };
          }
        }
        let resultFix = result.filter(
          (x) =>
            x.video != undefined &&
            x.size != undefined &&
            x.quality != undefined
        );
        let tinyUrl = (await link(resultFix[0].video)).result.short;
        let title = getUrl.videoDetails.title;
        let desc = getUrl.videoDetails.description;
        let views = parseInt(getUrl.videoDetails.viewCount || 0);
        let likes = getUrl.videoDetails.likes;
        let dislike = getUrl.videoDetails.dislikes;
        let channel = getUrl.videoDetails.ownerChannelName;
        let uploadDate = getUrl.videoDetails.uploadDate;
        let thumb =
          getUrl.player_response.microformat.playerMicroformatRenderer.thumbnail
            .thumbnails[0].url;
        resolve({
          creator: "Caliph",
          result: {
            title,
            result: tinyUrl,
            quality: resultFix[0].quality,
            size: resultFix[0].size,
            duration: resultFix[0].duration,
            thumb,
            views,
            likes,
            dislike,
            channel: channel ? channel.replace(/\s(\-\sTopic)/, "") : "Unknown",
            uploadDate,
            desc,
          },
        });
      })
      .catch(reject);
  });
}

function ytMp3(url) {
  return new Promise((resolve, reject) => {
    ytdl
      .getInfo(url)
      .then(async (getUrl) => {
        let result = [];
        for (let i = 0; i < getUrl.formats.length; i++) {
          let item = getUrl.formats[i];
          if (item.mimeType == 'audio/webm; codecs="opus"') {
            let { contentLength, approxDurationMs } = item;
            let bytes = await bytesToSize(contentLength);
            result[i] = {
              audio: item.url,
              size: bytes,
              duration: formated(parseInt(approxDurationMs)),
            };
          }
        }
        let resultFix = result.filter(
          (x) => x.audio != undefined && x.size != undefined
        );
        let tinyUrl = (await link(resultFix[0].audio)).result.short;
        let title = getUrl.videoDetails.title;
        let desc = getUrl.videoDetails.description;
        let views = parseInt(getUrl.videoDetails.viewCount || 0);
        let likes = getUrl.videoDetails.likes;
        let dislike = getUrl.videoDetails.dislikes;
        let channel = getUrl.videoDetails.ownerChannelName;
        let uploadDate = getUrl.videoDetails.uploadDate;
        let thumb =
          getUrl.player_response.microformat.playerMicroformatRenderer.thumbnail
            .thumbnails[0].url;
        resolve({
          creator: "Caliph",
          result: {
            title,
            result: tinyUrl,
            size: resultFix[0].size,
            duration: resultFix[0].duration,
            thumb,
            views,
            likes,
            dislike,
            channel: channel ? channel.replace(/\s(\-\sTopic)/, "") : "Unknown",
            uploadDate,
            desc,
          },
        });
      })
      .catch(reject);
  });
}

function ytPlay(query) {
  return new Promise((resolve, reject) => {
    yts(query)
      .then(async (getData) => {
        let result = getData.videos.slice(0, 5);
        let url = [];
        for (let i = 0; i < result.length; i++) {
          url.push(result[i].url);
        }
        let random = url[0];
        let getAudio = await ytMp3(random);
        resolve(getAudio);
      })
      .catch(reject);
  });
}

function ytPlayVid(query) {
  return new Promise((resolve, reject) => {
    yts(query)
      .then(async (getData) => {
        let result = getData.videos.slice(0, 5);
        let url = [];
        for (let i = 0; i < result.length; i++) {
          url.push(result[i].url);
        }
        let random = url[0];
        let getVideo = await ytMp4(random);
        resolve(getVideo);
      })
      .catch(reject);
  });
}

function formated(ms) {
  let h = isNaN(ms) ? "--" : Math.floor(ms / 3600000);
  let m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60;
  let s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
}

module.exports = {
  mp4: ytMp4.bind(),
  mp3: ytMp3.bind(),
  play: ytPlay.bind(),
  playvid: ytPlayVid.bind(),
};
