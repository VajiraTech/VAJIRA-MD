const axios = require("axios")
const cheerio = require("cheerio")
const util = require("./util")

module.exports = getFbVideoInfo = async (videoUrl, cookie, useragent)=>{
    return new Promise((resolve, reject)=>{
        const headers = {
            "sec-fetch-user": "?1",
            "sec-ch-ua-mobile": "?0",
            "sec-fetch-site": "none",
            "sec-fetch-dest": "document",
            "sec-fetch-mode": "navigate",
            "cache-control": "max-age=0",
            authority: "www.facebook.com",
            "upgrade-insecure-requests": "1",
            "accept-language": "en-GB,en;q=0.9,tr-TR;q=0.8,tr;q=0.7,en-US;q=0.6",
            "sec-ch-ua": '"Google Chrome";v="89", "Chromium";v="89", ";Not A Brand";v="99"',
            "user-agent": useragent || "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36",
            accept:
            "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            cookie: cookie || "sb=Rn8BYQvCEb2fpMQZjsd6L382; datr=Rn8BYbyhXgw9RlOvmsosmVNT; c_user=100003164630629; _fbp=fb.1.1629876126997.444699739; wd=1920x939; spin=r.1004812505_b.trunk_t.1638730393_s.1_v.2_; xs=28%3A8ROnP0aeVF8XcQ%3A2%3A1627488145%3A-1%3A4916%3A%3AAcWIuSjPy2mlTPuZAeA2wWzHzEDuumXI89jH8a_QIV8; fr=0jQw7hcrFdas2ZeyT.AWVpRNl_4noCEs_hb8kaZahs-jA.BhrQqa.3E.AAA.0.0.BhrQqa.AWUu879ZtCw",
        }

        const parseString = (string) => JSON.parse(`{"text": "${string}"}`).text;

        if (!videoUrl || !videoUrl.trim()) return reject("Please specify the Facebook URL");
        if (["facebook.com", "fb.watch"].every((domain) => !videoUrl.includes(domain))) return reject("Please enter the valid Facebook URL");

        axios.get(videoUrl, { headers }).then(({ data }) => {
            data = data.replace(/&quot;/g, '"').replace(/&amp;/g, "&")
            const sdMatch = data.match(/"browser_native_sd_url":"(.*?)"/) || data.match(/"playable_url":"(.*?)"/) || data.match(/sd_src\s*:\s*"([^"]*)"/) || data.match(/(?<="src":")[^"]*(https:\/\/[^"]*)/)
            const hdMatch = data.match(/"browser_native_hd_url":"(.*?)"/) || data.match(/"playable_url_quality_hd":"(.*?)"/) || data.match(/hd_src\s*:\s*"([^"]*)"/)
            const titleMatch = data.match(/<meta\sname="description"\scontent="(.*?)"/)
            const thumbMatch = data.match(/"preferred_thumbnail":{"image":{"uri":"(.*?)"/)
            var duration = data.match(/"playable_duration_in_ms":[0-9]+/gm)

            if (sdMatch && sdMatch[1]) {
                const result = {
                    url: videoUrl,
                    duration_ms: Number(duration[0].split(":")[1]),
                    sd: parseString(sdMatch[1]),
                    hd: hdMatch && hdMatch[1] ? parseString(hdMatch[1]) : "",
                    title: titleMatch && titleMatch[1] ? parseString(titleMatch[1]) : data.match(/<title>(.*?)<\/title>/)?.[1] ?? "",
                    thumbnail: thumbMatch && thumbMatch[1] ? parseString(thumbMatch[1]) : ""
                }
                resolve(result)
            } else {
                reject("Unable to fetch video information at this time. Please try again")
            }
        }).catch((err) => {
            console.log(err)
            reject("Unable to fetch video information at this time. Please try again")
        })
    })
    
}


