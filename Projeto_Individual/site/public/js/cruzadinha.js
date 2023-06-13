var palavraHarryPotter = document.getElementsByClassName('harryPotter');
var palavraGrifinoria = document.getElementsByClassName('grifinoria');
var palavraCorvinal = document.getElementsByClassName('corvinal');
var palavraMapaMarotos = document.getElementsByClassName('mapaMarotos');
var palavraLufaLufa = document.getElementsByClassName('lufaLufa');
var palavraSonserina = document.getElementsByClassName('sonserina');
var palavraLupin = document.getElementsByClassName('lupin');
var palavraPedro = document.getElementsByClassName('pedro');
var palavraSirius = document.getElementsByClassName('sirius');
var palavraTiago = document.getElementsByClassName('tiago');


var listaRespostas = [
    {
        pergunta: 1,
        resposta: "harry potter"
    },
    {
        pergunta: 2,
        resposta: "grifinoria"
    },
    {
        pergunta: 3,
        resposta: "corvinal"
    },
    {
        pergunta: 4,
        resposta: "mapa dos marotos"
    },
    {
        pergunta: 5,
        resposta: "lufalufa"
    },
    {
        pergunta: 6,
        resposta: "sonserina"
    },
    {
        pergunta: 7,
        resposta: "lupin"
    },
    {
        pergunta: 8,
        resposta: "pedro"
    },
    {
        pergunta: 9,
        resposta: "sirius"
    },
    {
        pergunta: 10,
        resposta: "tiago"
    }
]

function validar(elemento, pergunta){
    var resposta = elemento.value;
    for(let i = 0; i < listaRespostas.length; i++){
        if(resposta.toLowerCase() == listaRespostas[i].resposta && pergunta == listaRespostas[i].pergunta){
            elemento.style.borderColor = "green";
            elemento.style.color = "green";
            elemento.disabled = true;
            window.location = "#cruzadinha";
            montarPalavra(pergunta);
            return;
        }
    }
    elemento.style.borderColor = "red";
    elemento.style.color = "red";
}


function montarPalavra(pergunta){
    if(pergunta == 1){
        mostrarPalavra(palavraHarryPotter);
    }else if (pergunta == 2) {
        mostrarPalavra(palavraGrifinoria);
    }else if(pergunta == 3){
        mostrarPalavra(palavraCorvinal);
    }else if(pergunta == 4){
        mostrarPalavra(palavraMapaMarotos);
    }else if(pergunta == 5){
        mostrarPalavra(palavraLufaLufa);
    }else if(pergunta == 6){
        mostrarPalavra(palavraSonserina);
    }else if(pergunta == 7){
        mostrarPalavra(palavraLupin);
    }else if(pergunta == 8){
        mostrarPalavra(palavraPedro);
    }else if(pergunta == 9){
        mostrarPalavra(palavraSirius);
    }else if(pergunta == 10){
        mostrarPalavra(palavraTiago);
    }
}

function mostrarPalavra(palavra){
    for(let i = 0; i < palavra.length; i++){
        palavra[i].style.opacity = '1';
    }
}