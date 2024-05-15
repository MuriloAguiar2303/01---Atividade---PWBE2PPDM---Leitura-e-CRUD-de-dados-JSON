const Pessoa = require('../models/Pessoa');
const modelPessoa = require('../models/crud');

const criarPessoa = async (req, res) => {
    const { nome, cpf, dataNasc, email, estado_civ, sexo, telefone } = req.body;
    const pessoa = new Pessoa(nome, dataNasc, cpf, sexo, estado_civ, email, telefone);
    console.log(pessoa)
    try {
        const oi = await modelPessoa.insertPessoa(pessoa);
        console.log(oi)
        res.json({ message: 'Pessoa criada com sucesso', pessoa });
    } catch (error) {
        res.json({ err:error });
    }
};

module.exports = { criarPessoa };
