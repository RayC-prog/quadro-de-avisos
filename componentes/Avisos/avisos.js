//conexão com o banco de dados
const db = require('../../knexfile.js')

/**
 * Inserir um aviso no banco de dados
 * @param {object} aviso 
 * @returns {object} Mensagem de sucesso ou de erro
 */
function salvar(aviso){
  //insert
  return db.insert(aviso).into('avisos')
    .then(id =>{
      return { tipo: "sucesso", corpo: "Dados inseridos com sucesso!"}
    })
    .catch(erro =>{
      return { tipo: "erro", corpo: "Erro ao inserir os dados! " + erro}
    })
} //fim do salvar

module.exports = {salvar}
