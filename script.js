// fazer o jogo ser uma melhor de 3 e retornar o vencedor no fim do round





playConfirm() //Usar o prompt para verificar se o usuario quer iniciar o jogo



function playConfirm(x = ""){

    let jogar = confirm(`Do you want to play${x}?`, "");
    if(jogar){
    startGame();
    }else{
        alert("Reload page if you want to play!")
    }
}


function startGame(){
    let playerResult;
    let playerScore = 0;
    let machineScore = 0;

    while(playerScore < 3 && machineScore < 3){
    playerResult = prompt("Rock, Paper or Scissors?", "") //Perguntar se ele escolhe pedra, papel ou tesoura
    
    playerResult = playerResult.replace(playerResult[0], playerResult[0].toUpperCase())
    
    if(playerResult != "Paper" && playerResult != "Rock" && playerResult != "Scissor"){
        playerResult = (prompt("Choose Between Rock, Paper or Scissors Only!", ""))
    }

        let machineResult = generateMachineResult();
        alert(`You: ${playerResult} vs Machine: ${machineResult}`)
        let lastResult = compareResult(playerResult, machineResult)
        if(lastResult){
            ++playerScore
            alert("You win!")
        }else if(lastResult === false){
            ++machineScore
            alert("You lose!")
        }
        alert(`
            Your Score: ${playerScore} 
            Machine Score: ${machineScore}`)
    }

    if(playerScore === 3){
        alert("Congratulations, you win the game!")
        playConfirm(" again")
    }else if(machineScore === 3){
        alert("Oh crap, you lose the game :(")
        playConfirm(" again")
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
        return null
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


// function rockPaperScissor(playerResult){
//     let userResult = playerResult.replace(playerResult[0], playerResult[0].toUpperCase())
//     if(userResult != "Paper" && userResult != "Rock" && userResult != "Scissor"){
//         return rockPaperScissor(prompt("Choose Between Rock, Paper or Scissors Only!", ""))
//     }else{
//         let machineResult = generateMachineResult();
//         alert(`You: ${userResult} vs Machine: ${machineResult}`)
//         let lastResult = compareResult(userResult, machineResult) //Caso usuario ganhe, retornar verdadeiro com uma mensagem de parabens e clicar para jogar novamente
//         //Caso o usuario perca, retornar falso, e com uma mensagem para jogar novamente
//         confirmVictory(lastResult)
//     }
// }


// function confirmVictory(value){ //value will be a boolean 
//     if(value === true){
//         alert("You Win The Game!!!")
//         playConfirm()
//     }else if(value === false){
//         alert("You Lost!");
//         playConfirm()
//     }
// }
