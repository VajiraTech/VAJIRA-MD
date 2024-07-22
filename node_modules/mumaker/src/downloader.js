const axios = require("axios")
const cheerio = require("cheerio")


async function tiktok(url) {
   try {
      let data = await axios.get("https://ssstik.io/en", {
         headers: {
            "Hx-Current-Url": "https://ssstik.io/en",
            "Hx-Request": true,
            "Hx-Target": "target",
            "Hx-Trigger": "_gcaptcha_pt",
            "Origin": "https://ssstik.io",
            "Referer": "https://ssstik.io/en",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36 Edg/115.0.1901.188"
         }
      })

      let tt = /tt:(["'])(.*?)\1/g.exec(data.data)[2]

      data = await axios.post("https://ssstik.io/abc?url=dl", {
         id: url,
         locale: "en",
         tt
      }, {
         headers: {
            "Accept": "*/*",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "id,en-US;q=0.9,en;q=0.8",
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
            "Hx-Current-Url": "https://ssstik.io/en",
            "Hx-Request": true,
            "Hx-Target": "target",
            "Hx-Trigger": "_gcaptcha_pt",
            "Origin": "https://ssstik.io",
            "Referer": "https://ssstik.io/en",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36 Edg/115.0.1901.188"
         }
      })

      let $ = cheerio.load(data.data)

      let slide = $("ul > li").map((a, b) => {
         return $(b).find("a").attr('href') || $(b).find("img").attr("src")
      }).get()

      let result = {
         thumbnail: $("img.result_author").attr("src"),
         author: $("div.pure-u-18-24.pd-lr > h2").text().trim() || $("div.pure-u-20-24.pd-lr > h2").text().trim(),
         description: $("div.pure-u-18-24.pd-lr > p").text().trim(),
         media: $("a.pure-button.pure-button-primary.is-center.u-bl.dl-button.download_link.without_watermark.vignette_active.notranslate").attr("href") || slide,
         music: $("a.pure-button.pure-button-primary.is-center.u-bl.dl-button.download_link.music.vignette_active.notranslate").attr("href") || $("a.pure-button.pure-button-primary.is-center.u-bl.dl-button.download_link.music.notranslate").attr("href"),
         like: $("div.d-flex.flex-1.align-items-center.justify-content-start").text().trim(),
         comment: $("div.d-flex.flex-1.align-items-center.justify-content-center").text().trim(),
         share: $("div.d-flex.flex-1.align-items-center.justify-content-end").text().trim()
      }

      return result
   } catch (e) {
      throw e
   }
}

async function instagram(url) {
   try {
      let { data } = await axios.post("https://saveinsta.io/core/ajax.php", {
         url,
         "host": "instagram"
      }, {
         headers: {
            "Accept": "*/*",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "id,en-US;q=0.9,en;q=0.8",
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
            "Origin": "https://saveinsta.io",
            "Referer": "https://saveinsta.io/",
            "Sec-Ch-Ua": '"Not/A)Brand";v="99", "Microsoft Edge";v="115", "Chromium";v="115"',
            "Sec-Ch-Mobile": "?0",
            "Sec-Ch-Ua-Platform": '"Windows"',
            "Sec-Fetch-Dest": "empty",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Site": "same-origin",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36 Edg/115.0.1901.188",
            "X-Requested-With": "XMLHttpRequest"
         }
      })

      let $ = cheerio.load(data)

      let urls = $("div.row > div.col-md-12 > div").map((a, b) => {
         return $(b).find("a").attr("href") || $(b).find("img").attr("src")
      }).get()

      return urls.filter(a => a).map(a => /dl\.php/i.test(a) && "https://saveinsta.io/" + a)
   } catch (e) {
      throw e
   }
}

async function facebook(url) {
   try {
      let { data } = await axios.post("https://getmyfb.com/process", {
         "id": url,
         locale: "en"
      }, {
         headers: {
            "Accept": "*/*",
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
            "Cookie": `PHPSESSID=k3eqo1f3rsq8fld57fgs9ck0q9; _token=1AHD0rRsiBSwwh7ypRad; __cflb=04dToeZfC9vebXjRcJCMjjSQh5PprejvCpooJf5xhb; _ga=GA1.2.193364307.1690654540; _gid=GA1.2.326360651.1690654544; _gat_UA-3524196-5=1; _ga_96G5RB4BBD=GS1.1.1690654539.1.0.1690654555.0.0.0`,
            "Origin": "https://getmyfb.com",
            "Referer": "https://getmyfb.com/",
            "Hx-Current-Url": "https://getmyfb.com",
            "Hx-Request": true,
            "Hx-Target": "target",
            "Hx-Trigger": "form",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36 Edg/115.0.1901.188"
         }
      })

      let $ = cheerio.load(data)
      let urls = []

      $("ul > li").map((a, b) => {
         urls.push({ quality: $(b).text().trim(), url: $(b).find("a").attr("href") })
      })

      let result = {
         description: $("div.results-item > div.results-item-text").text().trim(),
         urls
      }

      if (urls.length == 0) return $("h4").text()

      return result
   } catch (e) {
      throw e
   }
}

module.exports = { tiktok, instagram, facebook }