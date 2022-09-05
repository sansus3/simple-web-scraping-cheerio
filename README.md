# Web scratching
app para inicializarse en el _web scratching_ utilizando [cheerio](https://cheerio.js.org/) como base.
Seguimos el siguiente vídeo en [twitch](https://www.twitch.tv/videos/1579320719) realizado por _Ignacio Gutiérrez_

## Paquetes instalados
1. express
2. nodemon
3. axios
4. [cheerio](https://cheerio.js.org/)

## express
Para configurar de forma dinámica el puerto

```JavaScript
const PORT = process.env.PORT || 5000;
```