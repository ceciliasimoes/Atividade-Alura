alert("Boas vindas ao jogo do número secreto!");
let numeroSecreto = 29;
console.log(numeroSecreto);
var numeroEscolhido; 
let contadorTentativas = 0;


while(numeroEscolhido != numeroSecreto){
    numeroEscolhido = window.prompt("Escolha um número entre um e trinta:");
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

if(contadorTentativas>1){
alert(`Você descobriu o Número Secreto ${numeroSecreto} em ${contadorTentativas} tentativas!`);
}else{
    alert(`Você descobriu o Número Secreto ${numeroSecreto} em ${contadorTentativas} tentativa!`);

}