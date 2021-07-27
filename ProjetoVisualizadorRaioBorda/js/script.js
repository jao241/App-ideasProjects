const entradaEsquerdaAcima = document.getElementById("primeira");
const entradaDireitaAcima = document.getElementById("segunda");
const entradaEsquerdaAbaixo = document.getElementById("terceira");
const entradaDireitaAbaixo = document.getElementById("quarta");
const todasEntradas = document.getElementsByClassName("entrada");
const caixa = document.getElementById("caixa");
const botao = document.getElementById("copiar");
let valorEsquerdaTopo, valorEsquerdaBaixo, valorDireitaTopo, valorDireitaBaixo;
// caixa.style.borderTopRightRadius = "100px";

entradaEsquerdaAcima.addEventListener("keyup", function(){
    let value = entradaEsquerdaAcima.value;
    caixa.style.borderTopLeftRadius = value + "px";
    valorEsquerdaTopo = value;     

})

entradaDireitaAcima.addEventListener("keyup", function(){
    let value = entradaDireitaAcima.value;
    caixa.style.borderTopRightRadius = value + "px";
    valorDireitaTopo = value;
})

entradaEsquerdaAbaixo.addEventListener("keyup", function(){
    let value = entradaEsquerdaAbaixo.value;
    caixa.style.borderBottomLeftRadius = value + "px";
    valorEsquerdaBaixo = value;
})

entradaDireitaAbaixo.addEventListener("keyup", function(){
    let value = entradaDireitaAbaixo.value;
    caixa.style.borderBottomRightRadius = value + "px";
    valorDireitaBaixo = value;
})

botao.addEventListener("click", function(){
    let totalValue = document.createTextNode(`Valor: ${valorDireitaBaixo}`);
    totalValue.select();
    document.execCommand("copy");
})

