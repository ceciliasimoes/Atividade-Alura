alert("Boas vindas ao jogo do número secreto!");
let numeroSecreto = 29;
console.log(numeroSecreto);
var numeroEscolhido = window.prompt("Escolha um número entre um e trinta:");

//se o user colocar o múmero certo, ele exibe
if(numeroSecreto == numeroEscolhido ){
    alert(`Você descobriu o Número Secreto ${numeroSecreto}`);
} else{
    alert("Infelizmente você errou.")
}