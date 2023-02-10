let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");
let options = document.querySelectorAll(".options img");
let roundWinner = document.querySelector(".round-winner p");
let scoreBoard = document.querySelector(".scores p");
let gameWinner = document.querySelector(".game-winner p");

function getComputerChoice() {
    options.forEach(option => {
        option.style.backgroundColor = "rgb(62, 63, 71)";
    });
    let computerChoices = ["rock", "paper", "scissors"];
    let computerChoice = computerChoices[Math.floor(Math.random() * 3)];
    if (computerChoice === "rock") {
        rock.style.backgroundColor = "red";
    }
    else if (computerChoice === "paper") {
        paper.style.backgroundColor = "red";
    }
    else if (computerChoice === "scissors") {
        scissors.style.backgroundColor = "red";
    }
    return computerChoice;
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
scoreBoard.textContent = `COMPUTER: ${compWinCount} PLAYER: ${playerWinCount}`;

function playGame(event) {
    gameWinner.textContent = "";
    let result = checkWin(event.target.id, getComputerChoice());
    if (result === "win") {
        roundWinner.textContent = "You won this round!" ;
        playerWinCount++;
    }
    else if (result === "lose") {
        roundWinner.textContent = "You lost this round!";
        compWinCount++;
    }
    else if (result === "draw") {
        roundWinner.textContent = "You drew this round!";
    }
    scoreBoard.textContent = `COMPUTER: ${compWinCount} PLAYER: ${playerWinCount}`;
    
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
        roundWinner.textContent = "";
    }
}

options.forEach(option => {
    option.addEventListener("click", playGame);
});
