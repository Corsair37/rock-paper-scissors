function getPlayerChoice() {
    let playerChoice = prompt("Rock, Paper, or Scissors?");
    return playerChoice.toLowerCase();
}

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

let pScore = 0;
let cScore = 0;
let pChoice = getPlayerChoice();
let cChoice = getComputerChoice(); 

function playRound(pChoice, cChoice) {
    if (pChoice === cChoice) {
        return "Draw!";
    } else if (
        (pChoice === "rock" && cChoice === "scissors") ||
        (pChoice === "paper" && cChoice === "rock") ||
        (pChoice === "scissors" && cChoice === "paper")
    ) {
        pScore++;
        return "Player wins!";
    } else {
        cScore++;
        return "Computer wins!";
    }
}

for (let i = 0; i < 5; i++) { 
    let cChoice = getComputerChoice();
    console.log("Player chose: " + pChoice);
    console.log("Computer chose: " + cChoice);
    console.log(playRound(pChoice, cChoice));
}


console.log("Final Score - Player: " + pScore + ", Computer: " + cScore);




