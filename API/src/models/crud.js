const { connection } = require('../config/index');

const modelPessoa = {
    insertPessoa: async (pessoa) => {
        try {
            const conn = await connection();
            const sql = 'INSERT INTO Pessoa(nome,cpf, data_nasc, genero, estado_civil, email, telefone) VALUES (?,?, ?, ?, ?, ?, ?);';
            const values = [pessoa.nome,pessoa.cpf, pessoa.dataNasc, pessoa.sexo, pessoa.estado_civ, pessoa.email, pessoa.telefone];
            return await conn.query(sql, values);
        } catch (error) {
            throw error;
        }
    }
};

module.exports = modelPessoa;
