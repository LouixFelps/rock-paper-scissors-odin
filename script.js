












playConfirm() //Usar o prompt para verificar se o usuario quer iniciar o jogo

function initializeGame(){
    let playerResult = prompt("Rock, Paper or Scissors?", "") //Perguntar se ele escolhe pedra, papel ou tesoura
    rockPaperScissor(playerResult);

}

function rockPaperScissor(playerResult){
    let userResult = playerResult.replace(playerResult[0], playerResult[0].toUpperCase())
    if(userResult != "Paper" && userResult != "Rock" && userResult != "Scissor"){
        return rockPaperScissor(prompt("Choose Between Rock, Paper or Scissors Only!", ""))
    }else{
        let machineResult = generateMachineResult();
        let lastResult = compareResult(userResult, machineResult) //Caso usuario ganhe, retornar verdadeiro com uma mensagem de parabens e clicar para jogar novamente
        //Caso o usuario perca, retornar falso, e com uma mensagem para jogar novamente
        confirmVictory(lastResult)
    }
}


function generateMachineResult(){
    let result = Math.floor(Math.random() * 100) + 1 //Criar uma função onde pedra, papel e tesoura são geradas aleatoriamente e retornar uma dessas
    console.log(result)
    
    if(result < 33){
        return "Paper"
    }else if(result > 66){
        return "Rock"
    }else{
        return "Scissor"
    }
}

function compareResult(userResult, machineResult){ //Comparar resultado da função com o do usuário
    if(userResult == machineResult){
        alert("It's a draw!")
        return playConfirm()
    }else if(userResult === "Paper" && machineResult === "Rock"){
        return true
    }else if(userResult === "Paper" && machineResult === "Scissor"){
        return false
    }else if(userResult === "Rock" && machineResult === "Scissor"){
        return true
    }else if(userResult === "Rock" && machineResult === "Paper"){
        return false
    }else if(userResult === "Scissor" && machineResult == "Paper"){
        return true
    }else if(userResult === "Scissor" && machineResult === "Rock"){
        return false
    }
}

function playConfirm(){
    let jogar = confirm("Você quer jogar?", "");
    if(jogar){
    initializeGame(jogar);
    }else{
        alert("Reload page if you want to play!")
    }
}

function confirmVictory(value){ //value will be a boolean 
    if(value === true){
        alert("You Win The Game!!!")
        playConfirm()
    }else if(value === false){
        alert("You Lost!");
        playConfirm()
    }
}
