import express from "express"; //podemos importar express puesto que pusiomo type: "module" en package.json
import cors from "cors";
import axios from "axios";
import * as cheerio from 'cheerio';
const app = express();


const PORT = process.env.PORT || 5000;

app.get('/', cors(), async (req,res)=>{

    try {
        const {data} = await axios.get('https://webferrol-app.web.app/about');
        const $ = cheerio.load(data);
        res.json(
            {
                "date": new Date().toLocaleDateString(),
                "titulo":$('title').text()})
    } catch (error) {
        res.json({error})
    }

})


app.listen(PORT,()=>console.log("Escuchando ❤"));