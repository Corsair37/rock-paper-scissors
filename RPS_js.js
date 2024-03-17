let playerChoice = prompt("Rock, Paper, or Scissors?")
function getPlayerChoice (playerChoice) {
    let shortstack = playerChoice.toLowerCase();
    if (shortstack = "rock") {
        return "rock"
    } else if (shortstack = "paper") {
        return "paper"
    } else if (shortstack = "scissors"){
        return "scissors"
    }
}

function getComputerChoice () {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber === 1) {
        return "Rock"
    }else if (randomNumber === 2) {
        return "Paper"
    }else if (randomNumber === 3){
        return "Scissors"
    }
        
}

let getPlayerChoice = getPlayerChoice ();
let getComputerChoice = getComputerChoice ();

function playRound (getComputerChoice,getPlayerChoice) {
    if (getplayerChoice === "rock" && getComputerChoice === "Paper") {
        return "Nice try, goomba, but paper beats rock."
    } else if (getPlayerChoice === "rock" && getComputerChoice === "Scissors") {
        return "Good stuff, choom. Rock beats scissors."
    } else if (getPlayerChoice === "paper" && getComputerChoice === "Rock") {
        return "Preem, choom. Paper beats rock."
    } else if (getPlayerChoice === "paper" && getComputerChoice === "Scissors") {
        return "Damn. Nice try, but scissors beats paper."
    } else if (getPlayerChoice === "scissors" && getComputerChoice === "Rock") {
        return "Rest in pizza. Rock beats paper, choom."
    } else if (getPlayerChoice === "scissors" && getComputerChoice === "Paper") {
        return "Nice, choom. Scissors beat Paper"
    }
}
 console.log(playRound())