let playerScore = 0;
let computerScore = 0;

/**
 * The different choices for the game 
 */
function game(playerChoice) {
    const choices = ["rock", "paper", "scissors", "lizard", "spock"];
    const computerChoice = choices[Math.floor(Math.random() * 5)];
    const result = checkWinner(playerChoice, computerChoice);

}

/**
 * Displays the choice made by the user and computer and shows who won 
 */
function displayResult(playerChoice, computerChoice, result) {
    const message = document.getElementById('message');
    message.textContent = `You chose ${playerChoice}. Computer chose ${computerChoice}. You ${result}!`;
}

/**
 * Displays the choice made by the user and computer and shows who won 
 */
function displayResult(playerChoice, computerChoice, result) {
    const message = document.getElementById('message');
    message.textContent = `You chose ${playerChoice}. Computer chose ${computerChoice}. You ${result}!`;
}

/**
 * Finds the score of wins for both the player and computer 
 */
function displayScores() {
    const scoreMessage = document.getElementById('score');
    scoreMessage.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;
}

/**
 * Start screen
 */
function startGame() {
    const startScreen = document.getElementById('start-screen');
    startScreen.style.display = 'none';
}