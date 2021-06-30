// Exemplo do que eu quero

// Valor binário: 10000011
// Valor decimal: 131

let valorBinario = document.getElementById('entradaInput');
var mensagemErro = 'Somente são permitidos valores numéricos 0 ou 1 \nValor digitado:';



function converteValorBinario() {
 let arrayValores = Array.from(valorBinario.value);
 arrayValores.reverse();
 let valorDecimal = 0;

 for(let x = 0; x < arrayValores.length; x++){
        if(arrayValores[x] == "0"|| arrayValores[x] == "1"){
            if( x == 0 && arrayValores[x] == "1"){
                valorDecimal = 1;
            }
            if(arrayValores[x] == "1" && x > 0){
                valorDecimal += 2 ** x;
            }
        }else{
            throw(`${mensagemErro} ${arrayValores[x]}`);
        }
     }
 document.getElementById('saidaDecimal').value = valorDecimal;
}


