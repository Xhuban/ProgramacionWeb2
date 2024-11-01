const express = require("express");
const path = require("path");
const pagesRutes = require("./routes/rutas");

const app = express();
const port = 3040;

app.use(express.static('public'));

app.use('/', pagesRutes);

app.get('/',(req,res)=>{
    res.redirect('/indice');
});

app.listen(port,()=>{
    console.log(`Escuchando desde http://127.0.0.1:${port}`);
});