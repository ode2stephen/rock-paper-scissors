const roundWinner = document.querySelector(".game-winner");
const gameWinner = document.querySelector(".game-winner");
const compScore = document.querySelector(".comp-score span");
const playerScore = document.querySelector(".player-score span");
const playerOutput = document.querySelector(".player-output");
const compOutput = document.querySelector(".comp-output");
const options = document.querySelectorAll(".options div");
let playerChoice;

function getComputerChoice() {
    let computerChoices = ["rock", "paper", "scissors"];
    return computerChoices[Math.floor(Math.random() * 3)];
}

function checkWin(playerSelection, computerSelection) {
    if (computerSelection === playerSelection) return "draw";
    if (computerSelection === "rock" && playerSelection === "paper") return "win";
    if (computerSelection === "rock" && playerSelection === "scissors") return "lose";
    if (computerSelection === "paper" && playerSelection === "rock") return "lose";
    if (computerSelection === "paper" && playerSelection === "scissors") return "win";
    if (computerSelection === "scissors" && playerSelection === "paper") return "lose";
    if (computerSelection === "scissors" && playerSelection === "rock") return "win";
}

let compWinCount = 0;
let playerWinCount = 0;

const playerImg = document.createElement("img");
playerOutput.appendChild(playerImg);

const compImg = document.createElement("img");
compOutput.appendChild(compImg);

function playGame(event) {
    gameWinner.textContent = "";
    let compPlay = getComputerChoice();
    let playerPlay = event.target.className;
    let result = checkWin(playerPlay, compPlay);

    if (result === "win") {
        roundWinner.textContent = "You won this round!" ;
        playerWinCount++;
    } else if (result === "lose") {
        roundWinner.textContent = "You lost this round!";
        compWinCount++;
    } else if (result === "draw") {
        roundWinner.textContent = "You drew this round!";
    }

    playerImg.src = `./images/${playerPlay}.svg`;

    compImg.src = `./images/${compPlay}.svg`;
    
    if (playerWinCount === 5 || compWinCount === 5) {
        if (playerWinCount > compWinCount) {
            gameWinner.textContent = "You won the game!";
        }
        else if (compWinCount > playerWinCount) {
            gameWinner.textContent = "You lost the game!";
        }
        else {
            gameWinner.textContent = "You drew the game!";
        }
        playerWinCount = 0;
        compWinCount = 0;
    }

    playerScore.textContent = playerWinCount;
    compScore.textContent = compWinCount;
}

options.forEach(option => {
    option.addEventListener("click", playGame);
});