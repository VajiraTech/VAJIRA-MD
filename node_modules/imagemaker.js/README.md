# imagemaker.js
A Beautifull Module for Download of Image Makers from Providers (textpro and Ephoto360)

Importing the Module (TS)
```ts
import { Maker } from 'imagemaker.js'
```
Importing the Module (JS)
```ts
const { Maker } = require('imagemaker.js')
```
Get Ephoto360 URL Maker
```ts
new Maker().Ephoto360('https://en.ephoto360.com/create-colorful-angel-wing-avatars-731.html', ["Bruno Mars"]).then(res => {
    console.log(res)
})
```
Get TextPro URL Maker
```ts
new Maker().TextPro('https://textpro.me/create-a-glitch-text-effect-online-free-1026.html', ["Bruno Mars", 'Cod3r']).then(res => {
    console.log(res)
})
```
Get PhotoOxy URL Maker
```ts
new Maker().PhotoOxy('https://photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.htmll', ["Bruno Mars"]).then(res => {
    console.log(res)
})
```
Response: 
```
{
  success: boolean;
  imageUrl: string;
  session_id: number
}
```
