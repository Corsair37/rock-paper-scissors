let playerScore = 0;
let computerScore = 0;
const playerScoreDisplay = document.getElementById('player-score');
const computerScoreDisplay = document.getElementById('computer-score');
const resultDisplay = document.getElementById('result');

const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const playerSelection = button.dataset.selection;
        const computerSelection = computerPlay();
        const result = playRound(playerSelection, computerSelection);
        updateScore(result);
        displayResult(result);
        checkWinner();
    });
});

function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        playerScore++;
        return 'You win! ' + playerSelection + ' beats ' + computerSelection;
    } else if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else {
        computerScore++;
        return 'Computer wins! ' + computerSelection + ' beats ' + playerSelection;
    }
}

function updateScore(result) {
    playerScoreDisplay.textContent = 'Player: ' + playerScore;
    computerScoreDisplay.textContent = 'Computer: ' + computerScore;
}

function displayResult(result) {
    resultDisplay.textContent = result;
}

function checkWinner() {
    if (playerScore === 5) {
        resultDisplay.textContent = 'Congratulations! You win the game!';
        disableButtons();
    } else if (computerScore === 5) {
        resultDisplay.textContent = 'Computer wins the game!';
        disableButtons();
    }
}

function disableButtons() {
    buttons.forEach(button => {
        button.disabled = true;
    });
}
