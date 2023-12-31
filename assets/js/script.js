
let playerScore = 0;
let computerScore = 0;

//Event listener for the view switches
document.addEventListener('DOMContentLoaded', function () {
    const startScreen = document.getElementById('start-screen');
    const gameContent = document.getElementById('game-content');
    const gameRules = document.getElementById('game-rules');

    // Start the game by hiding start screen and showing the game .
    const startGameBtn = document.querySelector('#start-screen button');
    startGameBtn.addEventListener('click', function () {
        startScreen.style.display = 'none';
        gameContent.style.display = 'block';
        gameRules.style.display = 'none';
    });

    // Toggle between game and rules.
    const toggleGameBtn = document.querySelector('#game-content button:last-child');
    toggleGameBtn.addEventListener('click', function () {
        gameRules.style.display = 'block';
        gameContent.style.display = 'none';
    });
    // Back to game from rules.
    const backToGameBtn = document.querySelector('#game-rules button');
    backToGameBtn.addEventListener('click', function () {
        gameRules.style.display = 'none';
        gameContent.style.display = 'block';
    });
});

// event listener for the game choices 
const choiceRock = document.getElementById('choiceRock');
const choicePaper = document.getElementById('choicePaper');
const choiceScissors = document.getElementById('choiceScissors');
const choiceLizard = document.getElementById('choiceLizard');
const choiceSpock = document.getElementById('choiceSpock');

choiceRock.addEventListener('click', function () {
    game('rock');
});
choicePaper.addEventListener('click', function () {
    game('paper');
});
choiceScissors.addEventListener('click', function () {
    game('scissors');
});
choiceLizard.addEventListener('click', function () {
    game('lizard');
});
choiceSpock.addEventListener('click', function () {
    game('spock');
});

// The different choices for the game
function game(playerChoice) {
    const choices = ["rock", "paper", "scissors", "lizard", "spock"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    const result = checkWinner(playerChoice, computerChoice);

    updateScores(result);
    displayScores();
    displayResult(playerChoice, computerChoice, result);
}
/* Displays the choice made by the user and computer and shows who won */
function displayResult(playerChoice, computerChoice, result) {
    const message = document.getElementById('message');
    message.textContent = `You chose ${playerChoice}. Computer chose ${computerChoice}. You ${result}!`;
}
/* Finds the score of wins for both the player and computer */
function displayScores() {
    const scoreMessage = document.getElementById('score');
    scoreMessage.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;
}
/* Checks the rules of the game to see if the player won or lost */
function checkWinner(player, computer) {
    if (player === computer) return "draw";

    if ((player === "rock" && (computer === "scissors" || computer === "lizard")) ||
        (player === "paper" && (computer === "rock" || computer === "spock")) ||
        (player === "scissors" && (computer === "paper" || computer === "lizard")) ||
        (player === "lizard" && (computer === "spock" || computer === "paper")) ||
        (player === "spock" && (computer === "scissors" || computer === "rock"))) {
        return "win";
    } else {
        return "lose";
    }
}
// Score keeper
function updateScores(result) {
    if (result === "win") {
        playerScore++;
    } else if (result === "lose") {
        computerScore++;
    }
}

// Darkmode
const darkModeBtn = document.getElementById('darkModeBtn');
darkModeBtn.addEventListener('click', darkmode);

function darkmode() {
    document.body.classList.toggle('dark-mode');
}

// Reset score
let resetScore = () => {
    playerScore = 0;
    computerScore = 0;
    displayScores();
}

document.getElementById('resetBtn').addEventListener('click', resetScore);
