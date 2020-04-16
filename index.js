const express = require("express");
const app = express();

// estou dizendo para o Express usar EJS como View engine
app.set('view engine','ejs'); 

app.get("/",(req,res)=>{
    //res.send("bem vindo!");
    var nome = "douglas";
    var comida = "pizza";
    res.render("index",{
        comida: comida,
        nome: nome,

    });

});

app.listen(8080,()=>{console.log("app rodando");});
