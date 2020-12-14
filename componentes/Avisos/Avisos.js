const db = require('../../knexfile.js')


/**
 * Inserir um aviso no banco de dados
 * @param {object} aviso O aviso deve ser no seguinte formato:
 * { titulo: <string>, data: <date>, mensagem: <string>}
 * @returns {object} Mensagem de sucesso ou de erro para o usuário 
 */




function salvar(aviso){
    
    return db.insert(aviso).into('avisos')
     .then( _ =>{
         return {tipo:"Sucesso!", corpo:"Aviso cadastrado com sucesso!"}
     })
     .catch(err =>{
         return {tipo:"erro", corpo:"Erro:" + erro}
     })
} //Fim da função salvar 




/**
 * Alterar um aviso no banco de dados
 * @param {object} aviso ID do aviso
 * @param {int} id Mensagem de sucesso ou de erro
 */
function editar(aviso, id){
    return db('avisos').where('ID_avisos', id).update(aviso)
    .then( _ => {
        return { tipo: "sucesso", corpo: "Aviso modificado com sucesso"}
    })
    .catch(erro => {
        return { tipo: "erro", corpo: "Erro: " +erro}
    })

} //Fim do editar




/**
 * Seleciona todos os avisos cadastrados
 * @returns {object} Objeto com todos os avisos cadrastados ou com uma mensagem de erro
 */
//Se tudo der certo
function selecionarTodos(aviso){
    return db.select('*').from('avisos').orderBy('data','asc')
    .then(avisos =>{ return avisos })

//Se der erro
    .catch(err =>{
        return {tipo: "erro", corpo:"Erro:" + erro}
    })

} //Fim do selecionarTodos




/**
 * Seleciona apenas UM aviso (botãozinho de mudar)
 * @param {*} id ID do aviso que será selecionado para mudança
 * @returns {Object} Objeto com o aviso selecionado
 */
function selecionarAviso(id){
    return db.select('*').from('avisos').where('ID_avisos', id).first()
        .then(aviso => { return aviso })
        .catch(erro => {
            return { tipo: "erro", corpo: "Erro:" + erro }
        })
}//Fim do selecionar apenas um aviso




/**
 * Função que exclui um aviso do banco de dados
 * @param {int} id id do aviso
 */
function excluir(id){
   return db.del().from('avisos').where('ID_avisos',id) 
}//Fim do excluir



//Exportar o salvar, o selecionar todos, o excluir, o selecionar aviso e o editar
module.exports = {
    salvar, 
    selecionarTodos, 
    selecionarAviso, 
    excluir,
    editar
}


