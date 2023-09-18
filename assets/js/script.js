
let playerScore = 0;
let computerScore = 0;

/**
 * The different choices for the game 
 */
function game(playerChoice) {
    const choices = ["rock", "paper", "scissors", "lizard", "spock"];
    const computerChoice = choices[Math.floor(Math.random() * 5)];
    const result = checkWinner(playerChoice, computerChoice);

    updateScores(result);
    displayScores();
    displayResult(playerChoice, computerChoice, result);
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
 * Checks the rules of the game to see if the player won or lost 
 */
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

/**
 * Start screen
 */
function startGame() {
    const startScreen = document.getElementById('start-screen');
    startScreen.style.display = 'none';
}

/**
 *  Darkmode
 */
function darkmode() { //from W3School for darkmode
    var element = document.body;
    element.classList.toggle("dark-mode");
}



/**
 * Toogles between the game rules and the game content
 * 
 */
function toggleGame() {
    const gameRules = document.getElementById('game-rules');
    const gameContent = document.getElementById('game-content');
    
    if (gameRules.style.display === 'none' || !gameRules.style.display) {
        // if game rules are not displayed, show them and hide the game content
        gameRules.style.display = 'block';
        gameContent.style.display = 'none';
    } else {
        // if game rules are displayed, hide them and show the game content
        gameRules.style.display = 'none';
        gameContent.style.display = 'block';
    }
}

function toggleGame() {
    const gameRules = document.getElementById('game-rules');
    const gameContent = document.getElementById('game-content');
    
    if (gameRules.style.display === 'none' || !gameRules.style.display) {
        // if game rules are not displayed, show them and hide the game content
        gameRules.style.display = 'block';
        gameContent.style.display = 'none';
    } else {
        // if game rules are displayed, hide them and show the game content
        gameRules.style.display = 'none';
        gameContent.style.display = 'block';
    }
    
    // Display or hide the header and footer based on the game content
    document.querySelector('header').style.display = gameContent.style.display;
    document.querySelector('footer').style.display = gameContent.style.display;
}