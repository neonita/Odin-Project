// Randomly returns either 'rock', 'paper', or 'scissor'.
function getComputerChoice() {
  let computerOptions = ["rock", "paper", "scissor"];
  let computerChoice = Math.floor(Math.random() * computerOptions.length);
  return computerOptions[computerChoice];
}

// Plays a single round of Rock Paper Scissor.
function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "rock") {
    console.log("It's a tie! 🗿🗿");
  } else if (playerSelection === "rock" && computerSelection === "scissor") {
    console.log("You Win! Rock beats scissor.");
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    console.log("You Lose! Scissor beats rock.");
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    console.log("You Win! Paper beats rock.");
  } else if (playerSelection === "paper" && computerSelection === "paper") {
    console.log("It's a tie! 📃📃");
  } else if (playerSelection === "paper" && computerSelection === "scissor") {
    console.log("You Lose! Paper beats rock.");
  } else if (playerSelection === "scissor" && computerSelection === "rock") {
    console.log("You Lose! Rock beats scissor.");
  } else if (playerSelection === "scissor" && computerSelection === "paper") {
    console.log("You Win! Scissor beats paper.");
  } else if (playerSelection === "scissor" && computerSelection === "scissor") {
    console.log("It's a tie! ✂️✂️");
  }
}

function game() {
  playRound(playerSelection, computerSelection);
}

// Player's selection
const playerSelection = String(
  prompt("Rock, Paper, or Scissors?")
).toLowerCase();
// Computer's selection
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));
