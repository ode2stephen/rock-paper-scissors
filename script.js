let ROCK = document.querySelector("div.rock");
let PAPER = document.querySelector("div.paper");
let SCISSORS = document.querySelector("div.scissors");
let ROUND_RESULT = document.querySelector("section.round-result");
let USER_MOVE = document.querySelector("div.move > div.user-move");
let COMP_MOVE = document.querySelector("div.move > div.comp-move");
// let playState = 0;

// randomly choose between rock, paper, and scissors and return
function computerPlay() {
  let options = ["rock", "paper", "scissors"];
  let choice = Math.floor(Math.random() * 4);
  return options[choice];
}

function displayResult(compChoice, userChoice) {
  switch (compChoice) {
    case "rock":
    //
  }
}

/* compare user and computer input and return a corresponding
value to show who won. this function will be used in each
event listener and make the comparison based on what was
clicked. */
function playGame(event) {
  const userChoice = event.target.classList[0];
  const compChoice = computerPlay();

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
