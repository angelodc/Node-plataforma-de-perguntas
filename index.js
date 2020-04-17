const express = require("express");
const app = express();
app.use(express.static('public'));

// estou dizendo para o Express usar EJS como View engine
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    //res.send("bem vindo!");
    var nome = "douglas";
    var comida = "pizza";
    var mensagen = true;
    var produtos = [
        { nome: "doritos", preco: 3.14 },
        { nome: "suco de laranja", preco: 4 },
        { nome: "batatas", preco: 2.25 }
    ]

    res.render("index", {
        comida: comida,
        nome: nome,
        msg: mensagen,
        produtos: produtos
    });

});

app.get("/perguntar",(req,res) =>{
    res.render("perguntar");
});


app.listen(8080, () => { console.log("app rodando"); });
