var votarModel = require("../models/votarModel");

function votar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var idUsuario = req.params.idUsuario;
    var idPersonagem = req.params.idPersonagem;

    // Faça as validações dos valores
    console.log(idUsuario)
    console.log(idPersonagem)
    if (idUsuario == undefined) {
        res.status(400).send("Seu usuario está undefined!");
    } else if(idPersonagem == undefined){
        res.status(400).send("Seu personagem está undefined!")
    } else {

        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        votarModel.votar(idUsuario, idPersonagem)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao votar! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    votar
}