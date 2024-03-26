document.addEventListener("DOMContentLoaded", function() {
    let playerChoices = document.querySelectorAll(".btn");
    let playRock = playerChoices[0];
    let playPaper = playerChoices[1];

    playerChoices.forEach(playerChoice => {
        playerChoice.addEventListener("click", () => {
            let choice;
            if (playerChoice === playRock) {
                choice = "rock";
            } else if (playerChoice === playPaper) {
                choice = "paper";
            } else {
                choice = "scissors";
            }

            let cChoice = getComputerChoice();
            let result = playRound(choice, cChoice);
            displayResult(result);
        });
    });

    function getComputerChoice() {
        const choices = ["rock", "paper", "scissors"];
        return choices[Math.floor(Math.random() * choices.length)];
    }

    function playRound(choice, cChoice) {
        if (choice === cChoice) {
            return "It's a tie!";
        } else if (
            (choice === "rock" && cChoice === "scissors") ||
            (choice === "paper" && cChoice === "rock") ||
            (choice === "scissors" && cChoice === "paper")
        ) {
            return "You win! " + choice + " beats " + cChoice;
        } else {
            return "Computer wins! " + cChoice + " beats " + choice;
        }
    }

    function displayResult(result) {
        let resultDiv = document.getElementById("result");
        resultDiv.textContent = result;
    }
});
