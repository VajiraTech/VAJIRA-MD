<p align="center">
<img src="https://avatars0.githubusercontent.com/u/4674786?s=400&u=2f77d382a4428c141558772a2b7ad3a36bebf5bc&v=4" width="128" height="128"/>
</p>
<p align="center">
<a href="#"><img title="FB-DOWNLOADER-SCRAPPER" src="https://img.shields.io/badge/-FB--DOWNLOADER--SCRAPPER-blue?style=for-the-badge"></a>
</p>
<p align="center">
<a href="https://github.com/victorsouzaleal"><img title="Autor" src="https://img.shields.io/badge/Author-victorsouzaleal-blue.svg?style=for-the-badge&logo=github"></a>
</p>
</p>
<p align="center">
<a href="https://hits.seeyoufarm.com"><img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fvictorsouzaleal%2Ffb-downloader-scrapper&count_bg=%23007EC6&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=true"/></a>
<a href="#"><img title="Version" src="https://img.shields.io/github/package-json/v/victorsouzaleal/fb-downloader-scrapper?color=blue&logo=github&style=flat-square"></a>
<a href="#"><img title="Size" src="https://img.shields.io/bundlephobia/min/fb-downloader-scrapper?color=blue&logo=npm&style=flat-square"></a>
<a href="https://github.com/victorsouzaleal/fb-downloader-scrapper/stargazers/"><img title="Stars" src="https://img.shields.io/github/stars/victorsouzaleal/fb-downloader-scrapper?color=blue&logo=github&style=flat-square"></a>
<a href="https://github.com/victorsouzaleal/fb-downloader-scrapper/watchers"><img title="Watching" src="https://img.shields.io/github/watchers/victorsouzaleal/fb-downloader-scrapper?color=blue&logo=github&style=flat-square"></a>
<a href="#"><img title="MAINTENED" src="https://img.shields.io/badge/MAINTENED-YES-blue?style=flat-square"/></a>
</p>

## Instalation :
```bash
> npm i --save fb-downloader-scrapper
```

## Example - No Cookies/User-Agent
```js
const getFbVideoInfo = require("fb-downloader-scrapper")

getFbVideoInfo("https://www.facebook.com/FoodMakersBr/videos/tire-o-feij%C3%A3o-do-pote-de-sorvete-e-fa%C3%A7a-essa-receita-ainda-hoje/454262112817834/")
.then((result)=>{
    console.log(result)
}).catch((err)=>{
    console.log(error)
})

```

## Example - With Cookies/User-Agent (Optional)
```js
const getFbVideoInfo = require("fb-downloader-scrapper")
const cookies = "your-fb-cookies"
const userAgent = "your-user-agent"

getFbVideoInfo("https://www.facebook.com/FoodMakersBr/videos/tire-o-feij%C3%A3o-do-pote-de-sorvete-e-fa%C3%A7a-essa-receita-ainda-hoje/454262112817834/", cookies, userAgent)
.then((result)=>{
    console.log(result)
}).catch((err)=>{
    console.log(error)
})

```

## Output Example 
```
{
    url: 'https://www.facebook.com/FoodMakersBr/videos/tire-o-feij%C3%A3o-do-pote-de-sorvete-e-fa%C3%A7a-essa-receita-ainda-hoje/454262112817834/'
    duration_ms: 189632,
    sd: 'https://video.xx.fbcdn.net/v/t42.1790-2/291993469_1608973876186623_6166983060768213875_n.mp4?_nc_cat=109&ccb=1-7&_nc_sid=55d0d3&efg=eyJybHIiOjU0MCwicmxhIjoxMDY2LCJ2ZW5jb2RlX3RhZyI6InN2ZV9zZCIsInZpZGVvX2lkIjo0NTQyNjIxMTI4MTc4MzR9&_nc_ohc=N-comWpG9-sAb4PLB1W&rl=540&vabr=300&_nc_ht=video.fgig29-1.fna&oh=00_AfBGG3j3Z4kT9q-dSEUAA_vQ3M6swPYcyDr0KVBPitPxZg&oe=6625ABBF'
    hd:'https://scontent.xx.fbcdn.net/o1/v/t2/f1/m69/GENwABqLYfiCd64BAFrZyH6cg81EbmdjAAAF.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6Im9lcF9oZCJ9&_nc_ht=video.fgig29-1.fna.fbcdn.net&_nc_cat=111&strext=1&vs=1a025aaab4b2fe23&_nc_vs=HBksFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HRU53QUJxTFlmaUNkNjRCQUZyWnlINmNnODFFYm1kakFBQUYVAALIAQAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dLdy1jUkY5WURmc3ZvVUNBTm1OWG5rT3Y3cHVidjRHQUFBRhUCAsgBAEsHiBJwcm9ncmVzc2l2ZV9yZWNpcGUBMQ1zdWJzYW1wbGVfZnBzABB2bWFmX2VuYWJsZV9uc3ViACBtZWFzdXJlX29yaWdpbmFsX3Jlc29sdXRpb25fc3NpbQAoY29tcHV0ZV9zc2ltX29ubHlfYXRfb3JpZ2luYWxfcmVzb2x1dGlvbgAddXNlX2xhbmN6b3NfZm9yX3ZxbV91cHNjYWxpbmcAEWRpc2FibGVfcG9zdF9wdnFzABUAJQAcjBdAAAAAAAAAABERAAAAJui19PLaw4QCFQIoAkMzGAt2dHNfcHJldmlldxwXQGey2RaHKwIYIWRhc2hfZ2VuMmh3YmFzaWNfaHEyX2ZyYWdfMl92aWRlbxIAGBh2aWRlb3MudnRzLmNhbGxiYWNrLnByb2Q4ElZJREVPX1ZJRVdfUkVRVUVTVBsKiBVvZW1fdGFyZ2V0X2VuY29kZV90YWcGb2VwX2hkE29lbV9yZXF1ZXN0X3RpbWVfbXMBMAxvZW1fY2ZnX3J1bGUHdW5tdXRlZBNvZW1fcm9pX3JlYWNoX2NvdW50BzYxNzYxNDERb2VtX2lzX2V4cGVyaW1lbnQADG9lbV92aWRlb19pZA80NTQyNjIxMTI4MTc4MzQSb2VtX3ZpZGVvX2Fzc2V0X2lkEDExOTEyMDQ5MjE0NTM0ODIVb2VtX3ZpZGVvX3Jlc291cmNlX2lkDzU3MjkwOTI5Nzc2NTc0OBxvZW1fc291cmNlX3ZpZGVvX2VuY29kaW5nX2lkDzQ0MTM1NDQ5MTYwMDY5MA52dHNfcmVxdWVzdF9pZAAlAhwAJb4BGweIAXMENTE4NAJjZAoyMDIyLTA3LTExA3JjYgc2MTc2MTAwA2FwcAVWaWRlbwJjdBlDT05UQUlORURfUE9TVF9BVFRBQ0hNRU5UE29yaWdpbmFsX2R1cmF0aW9uX3MHMTg5LjYzMgJ0cxVwcm9ncmVzc2l2ZV9lbmNvZGluZ3MA&ccb=9-4&oh=00_AfAm3fYzsoEwGZ572nnYHpm7fqzk81TZg7SFlJ3Z7UIVGw&oe=6621B916&_nc_sid=1d576d&_nc_rid=652626539735996&_nc_store_type=1'
    title: 'Tire o Feij&#xe3;o do pote de sorvete e fa&#xe7;a essa receita ainda hoje! &#x1f600;'
    thumbnail: 'https://scontent.fgig29-1.fna.fbcdn.net/v/t15.5256-10/292550706_1191207104786597_3564334825307849740_n.jpg?stp=dst-jpg_s960x960&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=fLZQh_qFYBUAb7zL87i&_nc_ht=scontent.fgig29-1.fna&oh=00_AfCiM2A2dNpskVlOrYT4SfmKQjZGBsBFM0fV0ta-q81HFw&oe=66258602'
}
```

