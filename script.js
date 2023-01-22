function getComputerChoice() {
    let computerChoice = ["rock", "paper", "scissors"];
    return computerChoice[Math.floor(Math.random() * 3)];
}

function getPlayerChoice() {
    let playerChoice = prompt("Enter a choice between rock, paper and scissors: ");
    return playerChoice;
}

function getRoundWinner(roundResult) {
    if (roundResult.includes("win")) {
        return "player";
    }
    else if (roundResult.includes("lose")) {
        return "computer";
    }
}

function playRound(playerSelection, computerSelection) {
    
}

function playGame() {
    
}

playGame();