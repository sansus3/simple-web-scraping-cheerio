import express from "express"; //podemos importar express puesto que pusiomo type: "module" en package.json
const app = express();
const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>console.log("Escuchando ❤"));