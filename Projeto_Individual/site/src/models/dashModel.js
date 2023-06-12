var database = require("../database/config");

function obterVotos() {

    var instrucaoSql = `select count(fkPersonagem) as qtdVotos, nome from votacao 
                            join personagem on fkPersonagem = idPersonagem group by nome;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}



module.exports = {
    obterVotos
}
