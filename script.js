let ROCK = document.querySelector(".rock");
let PAPER = document.querySelector(".paper");
let SCISSORS = document.querySelector("div.scissors");
let ROUND_RESULT = document.querySelector("section.round-result");
let USER_MOVE = document.querySelector(".move .user-move");
let COMP_MOVE = document.querySelector(".move .comp-move");
let WINS = document.querySelector(".scores .win span")
// let playState = 0;

// randomly choose between rock, paper, and scissors and return
function computerPlay() {
  let options = ["rock", "paper", "scissors"];
  let choice = Math.floor(Math.random() * 4);
  return options[choice];
}

// display the moves played based 
function displayResult(compChoice, userChoice, gameResult) {

  switch (userChoice) {
    case "rock":
      USER_MOVE.textContent = "✊";
      break;
    case "paper":
      USER_MOVE.textContent = "🤚";
      break;
    case "scissors":
      USER_MOVE.textContent = "✌️";
      break;
  }

  switch (compChoice) {
    case "rock":
      COMP_MOVE.textContent = "✊";
      break;
    case "paper":
      COMP_MOVE.textContent = "🤚";
      break;
    case "scissors":
      COMP_MOVE.textContent = "✌️";
      break;
  }

  switch (gameResult) {
    // execute this
  }
}

/* compare user and computer input and return a corresponding
value to show who won. this function will be used in each
event listener and make the comparison based on what was
clicked. */
function playGame(event) {
  const userChoice = event.target.classList[0];
  const compChoice = computerPlay();

  displayResult(userChoice, compChoice);

  let gameResult;
  if (userChoice === "rock" && compChoice === "rock") gameResult = 0;
  if (userChoice === "rock" && compChoice === "paper") gameResult = -1;
  if (userChoice === "rock" && compChoice === "scissors") gameResult = 1;
  if (userChoice === "paper" && compChoice === "rock") gameResult = 1;
  if (userChoice === "paper" && compChoice === "paper") gameResult = 0;
  if (userChoice === "paper" && compChoice === "scissors") gameResult = -1;
  if (userChoice === "scissors" && compChoice === "scissors") gameResult = -1;
}

ROCK.addEventListener("click", playGame);
PAPER.addEventListener("click", playGame);
SCISSORS.addEventListener("click", playGame);
