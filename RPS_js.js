let playerChoices = document.querySelectorAll(".btn");
let playRock = playerChoices[0];
let playPaper = playerChoices[1];
let playScissors = playerChoices[2];
let choice;

playerChoices.forEach(playerChoice => {
    playerChoice.addEventListener("click", () => {
        if (playerChoice === playRock) {
            choice = "rock";
        } else if (playerChoice === playPaper) {
            choice = "paper";
        } else {
            choice = "scissors";
        }
        console.log("Player choice:", choice);
        
    });
});


function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

let pScore = 0;
let cScore = 0;
let cChoice = getComputerChoice(); 

function playRound(choice, cChoice) {
    if (choice === cChoice) {
        return "Draw!";
    } else if (
        (choice === "rock" && cChoice === "scissors") ||
        (choice === "paper" && cChoice === "rock") ||
        (choice === "scissors" && cChoice === "paper")
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
    console.log("Player chose: " + choice);
    console.log("Computer chose: " + cChoice);
    console.log(playRound(choice, cChoice));
}


console.log("Final Score - Player: " + pScore + ", Computer: " + cScore);




