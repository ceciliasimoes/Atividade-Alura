alert("Boas vindas ao jogo do número secreto!");
let numeroMaximo = 500;
let numeroSecreto = parseInt(Math.random()*numeroMaximo+1);
var numeroEscolhido; 
let contadorTentativas = 1;
console.log(numeroSecreto);


while(numeroEscolhido != numeroSecreto){
    numeroEscolhido = window.prompt(`Escolha um número entre um e ${numeroMaximo}:`);
    //se o user colocar o múmero certo, ele exibe
    if(numeroSecreto == numeroEscolhido ){
        break;//pare o loop aq caso ele acerte
    } else{
        
        if(numeroEscolhido > numeroSecreto){
            alert(`O número secreto é menor que ${numeroEscolhido}`);
        }else{
            alert(`O número secreto é maior que ${numeroEscolhido}`);
        }
        contadorTentativas++;
    }
}

//operador ternário

let palavraMensagem = contadorTentativas > 1 ? 'tentativas':'tentativa'; //cria a variavel da palavra e pergunta se maior que um, se sim faz no plural e senão (:) no singular
    alert(`Você descobriu o Número Secreto ${numeroSecreto} em ${contadorTentativas} ${palavraMensagem}!`);



/*
if(contadorTentativas>1){
alert(`Você descobriu o Número Secreto ${numeroSecreto} em ${contadorTentativas} tentativas!`);
}else{
    alert(`Você descobriu o Número Secreto ${numeroSecreto} em ${contadorTentativas} tentativa!`);

}*/