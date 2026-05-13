


//Usar o prompt para verificar se o usuario quer iniciar o jogo
let jogar = confirm("Você quer jogar?", "");
iniciarJogo(jogar);



//Criar uma função onde pedra, papel e tesoura são geradas aleatoriamente e retornar uma dessas
//Comparar resultado da função com o do usuário
//Caso usuario ganhe, retornar verdadeiro com uma mensagem de parabens e clicar para jogar novamente
//Caso o usuario perca, retornar falso, e com uma mensagem para jogar novamente



function iniciarJogo(jogar){
    if(jogar){
        let escolha = prompt("Pedra, Papel ou Tesoura?", "") //Perguntar se ele escolhe pedra, papel ou tesoura
        pedraPapelTesoura(escolha);
    }else{
        console.log("não");
    }
}

function pedraPapelTesoura(escolha){
    let resultadoMaquina = gerarResultado();
}