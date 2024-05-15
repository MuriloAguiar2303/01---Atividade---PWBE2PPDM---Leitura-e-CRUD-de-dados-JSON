const express = require("express");
const pessoaRoute = require('./src/routes/index')
const app = express();
app.use(express.json());
app.use("/",pessoaRoute)

// INICIA O SERVIDOR NA PORTA INFORMADA
app.listen(3000, () => {
    console.log("Servidor respondendo na porta 3000");
});