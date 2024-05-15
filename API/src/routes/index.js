const express = require("express");
const router = express.Router();
const PessoaController  = require("../controlers/PessoaControler");

router.post('/pessoa', PessoaController.criarPessoa); 

module.exports = router;
