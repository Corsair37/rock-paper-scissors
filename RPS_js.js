let playerChoice = prompt("Rock, Paper, or Scissors?")
function getPlayerChoice (playerChoice) {
    let shortstack = playerChoice.toLowerCase();
    if (shortstack === "rock") {
        return "rock"
    } else if (shortstack === "paper") {
        return "paper"
    } else if (shortstack === "scissors"){
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

let pChoice = getPlayerChoice (playerChoice);
let cChoice = getComputerChoice ();



function playRound (pChoice,cChoice) {
    if (pChoice === "rock" && cChoice === "Paper") {
        return "Nice try, goomba, but paper beats rock."
    } else if (pChoice === "rock" && cChoice === "Scissors") {
        return "Good stuff, choom. Rock beats scissors."
    } else if (pChoice === "paper" && cChoice === "Rock") {
        return "Preem, choom. Paper beats rock."
    } else if (pChoice === "paper" && cChoice === "Scissors") {
        return "Damn. Nice try, but scissors beats paper."
    } else if (pChoice === "scissors" && cChoice === "Rock") {
        return "Rest in pizza. Rock beats scissors, choom."
    } else if (pChoice === "scissors" && cChoice === "Paper") {
        return "Nice, choom. Scissors beat Paper"
    } else if (pChoice === "rock" && cChoice === "Rock") {
        return "Tie. Sudden death, maybe?"
    } else if (pChoice === "paper" && cChoice === "Paper") {
        return "Tie. Sudden duel, maybe?"
    } else if (pChoice === "scissors" && cChoice === "Scissors") {
        return "Tie. Sudden draw, maybe?"
    }
}

let result = playRound (pChoice,cChoice);

let counter = 0;
let pScore = 0;
let cScore = 0;
let scoreNow = "Player:" + " " + pScore + " " + "Bot:" + " "  + cScore;

function playGame (result) {
    do {
        result;
        if (result === "Good stuff, choom. Rock beats scissors." || "Preem, choom. Paper beats rock." || "Nice, choom. Scissors beat Paper"){
            pScore++;  return scoreNow
        } else if (result === "Nice try, goomba, but paper beats rock." || "Damn. Nice try, but scissors beats paper." || "Rest in pizza. Rock beats scissors, choom.") {
            cScore++; return scoreNow
        } if (pScore === 3) {
            return "You win!" 
        } else if (cScore === 3) {
            return "You lose!"
        }
    } while (counter < 5)
   
}

console.log(playGame(result))
