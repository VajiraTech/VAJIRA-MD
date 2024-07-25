const getFbVideoInfo = require("./index")

const test = async url =>{
    return await getFbVideoInfo(url)
}

// TEST
test("https://www.facebook.com/FoodMakersBr/videos/tire-o-feij%C3%A3o-do-pote-de-sorvete-e-fa%C3%A7a-essa-receita-ainda-hoje/454262112817834/").then(result=>{
    console.dir(result)
}).catch(error=>{
    console.dir(error)
})