const entradaEsquerdaAcima = document.getElementById("primeira");
const entradaDireitaAcima = document.getElementById("segunda");
const entradaEsquerdaAbaixo = document.getElementById("terceira");
const entradaDireitaAbaixo = document.getElementById("quarta");
const todasEntradas = document.getElementsByClassName("entrada");
const caixa = document.getElementById("caixa");
const botao = document.getElementById("copiar");
// caixa.style.borderTopRightRadius = "100px";

entradaEsquerdaAcima.addEventListener("keyup", function(){
    let value = entradaEsquerdaAcima.value;
    caixa.style.borderTopLeftRadius = value + "px";
})

entradaDireitaAcima.addEventListener("keyup", function(){
    let value = entradaDireitaAcima.value;
    caixa.style.borderTopRightRadius = value + "px";
})

entradaEsquerdaAbaixo.addEventListener("keyup", function(){
    let value = entradaEsquerdaAbaixo.value;
    caixa.style.borderBottomLeftRadius = value + "px";
})

entradaDireitaAbaixo.addEventListener("keyup", function(){
    let value = entradaDireitaAbaixo.value;
    caixa.style.borderBottomRightRadius = value + "px";
})

function copiarTexto(){
    let msg = document.getElementById("caixa");
    msg.select();
    document.execCommand("copy");
}

botao.addEventListener("click", copiarTexto);


