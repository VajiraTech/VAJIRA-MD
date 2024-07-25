const ig = require("instatouch");
const axios = require("axios");
const cheerio = require("cheerio");
const cfg = require("./config");

let options = {
  count: 0,
  mediaType: "all",
  timeout: 0,
};

const IGS = (users) =>
  new Promise(async (resolve, reject) => {
    user = users.replace(/@/gi, "");
    if (user === undefined || !user) {
      reject("No Name Included.");
    }
    try {
      conf = await cfg();
      options.session = conf.authig;
      ig.getUserMeta(user, options)
        .then(async (data) => {
          resolve({
            status: 200,
            creator: "Caliph",
            profile: {
              low: data.graphql.user.profile_pic_url,
              high: data.graphql.user.profile_pic_url_hd,
            },
            data: {
              url: data.graphql.user.external_url,
              fullname: data.graphql.user.full_name,
              private: data.graphql.user.is_private,
              verified: data.graphql.user.is_verified,
              bio: data.graphql.user.biography,
              follower: data.graphql.user.edge_followed_by.count,
              following: data.graphql.user.edge_follow.count,
              conneted_fb: data.graphql.user.connected_fb_page,
              videotimeline: data.graphql.user.edge_felix_video_timeline.count,
              timeline: data.graphql.user.edge_owner_to_timeline_media.count,
              savedmedia: data.graphql.user.edge_saved_media.count,
              collections: data.graphql.user.edge_media_collections.count,
            },
          });
        })
        .catch((err) => {
          console.error(err);
          resolve({ status: 404, message: "Username Not Found!" });
        });
    } catch (err) {
      console.error(err);
      reject(err);
    }
  });

module.exports = IGS.bind();
